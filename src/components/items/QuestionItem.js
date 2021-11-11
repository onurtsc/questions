import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import colors from '../../constants/colors'
import modifyText from '../../utils/modifyText'

const QuestionItem = props => {

    const item = props.item

    return (
        <View style={{ ...styles.container }} onPress={props.onPress}>
            <Text style={styles.questionText} >{modifyText(item.question)}</Text>
            <View style={styles.answerContainer} >
                <View style={styles.answerRow} >
                    <Text style={styles.label} >Correct Answer</Text>
                    <Text style={{...styles.correctValue, color: colors.primary}} >{modifyText(item.correct_answer)}</Text>
                </View>
                <View style={styles.answerRow} >
                    <Text style={styles.label} >Your Answer</Text>
                    <Text style={item.isCorrect ? styles.correctValue : styles.wrongValue} >{modifyText(item.selectedAnswer)}</Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 200,
        paddingVertical: 16,
        paddingHorizontal: 8,
        marginBottom: 10,
        borderRadius: 5,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(255,255,255,0.5)',
    },
    questionText: {
        color: colors.primary,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    answerContainer: {
        alignItems: 'center',
        width: '100%',
    },
    answerRow: {
        alignItems: 'center',
        width: '100%',
        marginTop: 16
    },
    label: {
        color: colors.primary,
    },
    correctValue: {
        color: colors.primary,
        fontWeight: 'bold',
        color: colors.success,
    },
    wrongValue: {
        color: colors.primary,
        fontWeight: 'bold',
        color: colors.danger,
    },
})

export default QuestionItem