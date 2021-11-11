import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import colors from '../../constants/colors'
import modifyText from '../../utils/modifyText'

const QuestionCard = props => {
    const [selectedOption, setSelectedOption] = useState(null)

    const item = props.item

    const selectionHandler = (opt) => {
        setSelectedOption(opt)
        props.onSelectOption(opt)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title} >{modifyText(item?.question)}</Text>

            <View>
                {item?.options.map((opt, index) => (
                    <TouchableOpacity
                        key={index.toString()}
                        style={selectedOption === opt ? styles.optionItemSelected : styles.optionItem}
                        onPress={selectionHandler.bind(this, opt)}
                    >
                        <Text style={selectedOption === opt ? styles.optionTextSelected : styles.optionText}> {modifyText(opt)}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '70%',
        paddingVertical: 32,
        paddingHorizontal: 16,
        marginVertical: 10,
        borderRadius: 5,
        alignSelf: 'center',
        justifyContent: 'space-around',

        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5
    },
    title: {
        width: '100%',
        marginBottom: 32,
        textAlign: 'center',
        fontSize: 16
    },
    optionItem: {
        width: '100%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 16,
        marginBottom: 16,
        alignSelf: 'center',
        borderColor: colors.primary,
        backgroundColor: 'white',
    },
    optionItemSelected: {
        width: '100%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 16,
        marginBottom: 16,
        alignSelf: 'center',
        borderColor: colors.tertiary,
        backgroundColor: colors.tertiary,
    },
    optionText: {
        fontSize: 13,
        textAlign: 'center',
        color: colors.primary,
    },
    optionTextSelected: {
        fontSize: 13,
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    optionContainer: {
        width: '100%',
        flexDirection: 'row',
        marginBottom: 24
    },
    circleOutside: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 1.5,
        borderColor: colors.tertiary,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    circleInside: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: colors.tertiary,
        alignSelf: 'center'
    },
})

export default QuestionCard