import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native'
import colors from '../constants/colors';
import AsyncStorage from '@react-native-async-storage/async-storage'
import CustomIcon from '../components/UI/CustomIcon';
import ButtonBox from '../components/UI/ButtonBox';
import ButtonIcon from '../components/UI/ButtonIcon';

const ResultScreen = props => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)

    const test = props.route.params?.test

    useEffect(() => {
        props.navigation.setOptions({
            headerLeft: () => !test ? null : <ButtonIcon style={{ paddingLeft: 16 }} name='back' size={20} onPress={() => props.navigation.goBack()} />,
            headerTitle: 'Your Result',
            headerBackTitleVisible: false
        })
    }, [test])

    useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', fetchList)
        return () => {
            unsubscribe()
        };
    }, [fetchList])

    const fetchList = async () => {
        if (test) {
            setData(test)
            return
        }
        setLoading(true)
        try {
            const resData = await AsyncStorage.getItem("QuizList");
            if (resData) {
                let transformedData = JSON.parse(resData);
                setData(transformedData[transformedData.length - 1])
            }
            setLoading(false);
        } catch (err) {
            console.log("Error with getting data: ", err);
            setLoading(false);
        }
    }

    if (loading || !data) {
        return (
            <View style={styles.screen}>
                <ActivityIndicator color={colors.tertiary} size='large' />
            </View>
        )
    }

    return (
        <View style={styles.screen} >
            <CustomIcon name={data.score > 50 ? 'success' : 'fail'} size={128} />
            <View style={styles.card} >
                <View style={styles.row} >
                    <Text style={styles.label} >Total Number of Questions:</Text>
                    <Text style={styles.value} >{data.totalNumber}</Text>
                </View>
                <View style={styles.row} >
                    <Text style={styles.label} >Correct Answers:</Text>
                    <Text style={{ ...styles.value, color: colors.success }} >{data.correctNumbers}</Text>
                </View>
                <View style={styles.row} >
                    <Text style={styles.label} >Incorrect Answers:</Text>
                    <Text style={{ ...styles.value, color: colors.danger }} >{data.incorrectNumbers}</Text>
                </View>
                <View style={styles.row} >
                    <Text style={styles.label} >Your score:</Text>
                    <Text style={{ ...styles.value, color: data.score > 50 ? colors.success : colors.danger }} >{Math.floor(data.score)}</Text>
                </View>
            </View>
            <ButtonBox style={{marginTop: 16}} title='See Questions' color={colors.tertiary} onPress={() => props.navigation.navigate('Details', { data })} />
            {!test &&
                <View style={styles.buttons}>
                    <ButtonBox style={styles.button} title='Main Screen' onPress={() => props.navigation.navigate('QuizOverview')} />
                    <ButtonBox style={styles.button} title='New Quiz' onPress={() => props.navigation.navigate('QuantitySelection')} />
                </View>
            }

        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingHorizontal: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        width: '100%',
        paddingTop: 64,
        paddingBottom: 48,
        paddingHorizontal: 16,
        borderRadius: 5,
        alignSelf: 'center',
        justifyContent: 'space-around',
        marginTop: 32,
        backgroundColor: 'rgba(255,255,255,0.7)',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        justifyContent: 'space-between'
    },
    label: {
        fontSize: 14
    },
    value: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    buttons: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 16
    },
    button: {
        width: '40%',
    },
})

export default ResultScreen

