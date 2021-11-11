import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import ButtonBox from '../components/UI/ButtonBox';
import CustomIcon from '../components/UI/CustomIcon';
import colors from '../constants/colors';
import QuestionCard from '../components/items/QuestionCard';
import findIcon from '../utils/findIcon';
import moment from 'moment'
import * as testActions from '../store/actions/testActions'

const AnswerScreen = props => {
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)
    const [number, setNumber] = useState(1)
    const [finishedQuiz, setFinishedQuiz] = useState([])
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)
    const [isDone, setIsDone] = useState(false)

    const { quantity } = props.route.params

    const dispatch = useDispatch()

    const quiz = useSelector(state => state.tests.currentQuiz)

    useEffect(() => {
        props.navigation.setOptions({
            headerLeft: null,
            headerTitle: loading ? '' : () => <Text style={styles.numberText} >{number + '/' + quiz.length}</Text>
        })
    }, [number, quiz, loading])

    useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', fetchQuestions)
        return () => {
            unsubscribe()
        };
    }, [fetchQuestions])

    const fetchQuestions = async () => {
        setErrorMessage(null)
        setLoading(true)
        try {
            await dispatch(testActions.fetchQuestions(quantity))
            setLoading(false)
        } catch (err) {
            console.log(err)
            setErrorMessage('An error occured. Please check your internet connection and try again')
            setLoading(false)
        }
    }

    const nextButtonHandler = () => {
        let answeredObject = {
            ...quiz[number - 1],
            selectedAnswer,
            isCorrect: selectedAnswer === quiz[number - 1].correct_answer ? true : false,
        }
        setFinishedQuiz([...finishedQuiz, answeredObject])
        if (number < quiz.length) {
            setNumber(number + 1)
        } else {
            setIsDone(true)
        }
        setSelectedAnswer(null)
    }

    const saveHandler = async () => {
        setSaving(true)
        const correctAnswersNumber = finishedQuiz.filter(item => item.isCorrect).length
        const incorrectAnswersNumber = finishedQuiz.filter(item => !item.isCorrect).length
        const totalNumber = correctAnswersNumber + incorrectAnswersNumber
        const score = (correctAnswersNumber / totalNumber) * 100
        let date = moment().format('DD.MM.YYYY hh:mm')

        const data = {
            date: date,
            quiz: finishedQuiz,
            totalNumber,
            correctNumbers: correctAnswersNumber,
            incorrectNumbers: incorrectAnswersNumber,
            score
        }
        try {
            await dispatch(testActions.saveQuiz(data))
            setSaving(false);
            props.navigation.navigate('Result')
        } catch (err) {
            console.log("Error with getting or setting data: ", err);
            setSaving(false);
        }
    }

    if (loading) {
        return (
            <View style={styles.screen}>
                <ActivityIndicator color={colors.tertiary} size='large' />
            </View>
        )
    }

    return (
        <View style={styles.screen} >
            {!isDone > 0 &&
                <View style={styles.tagContainer} >
                    <CustomIcon name={findIcon(quiz[number - 1]?.category)} size={64} />
                    <Text style={styles.tag} >{quiz[number - 1]?.category}</Text>
                </View>
            }
            {!isDone &&
                <QuestionCard
                    item={quiz[number - 1]}
                    onSelectOption={(opt) => setSelectedAnswer(opt)}
                />
            }
            {number <= quiz.length &&
                <ButtonBox
                    style={styles.next}
                    hide={!selectedAnswer}
                    title={number === quiz.length ? 'Finish' : 'Next'}
                    onPress={nextButtonHandler}
                />
            }
            {isDone && <CustomIcon style={styles.done} name='done' size={128} />}
            {isDone &&
                <ButtonBox
                    style={styles.next}
                    loading={saving}
                    title='See the Result'
                    onPress={saveHandler}
                />
            }

            {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
            {errorMessage && <ButtonBox style={styles.next} title='Try again' onPress={fetchQuestions} />}
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'center',

    },
    numberText: {
        color: colors.primary,
        fontSize: 16,
        marginRight: 16,
    },
    tagContainer: {
        alignItems: 'center',
        paddingRight: 8
    },
    tag: {
        color: colors.tertiary,
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 16,
    },
    next: {
        width: '40%',
    },
    errorText: {
        color: colors.primary,
        fontSize: 16,
        marginRight: 16,
        textAlign: 'center',
        marginBottom: 16
    },
    done: {
        position: 'absolute',
        top: 32,
    }
})

export default AnswerScreen

