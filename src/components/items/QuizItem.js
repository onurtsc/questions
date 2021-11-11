import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import colors from '../../constants/colors'
import ButtonIcon from '../UI/ButtonIcon'
import CustomIcon from '../UI/CustomIcon'

const QuizItem = props => {

    const item = props.item

    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <View style={styles.row}>
                <CustomIcon size={20} name={item.score > 50 ? 'success' : 'fail'} />
                <Text style={styles.label} >Score: </Text>
                <Text style={styles.value} >{Math.floor(item.score)}</Text>
            </View>
            <ButtonIcon name='next' size={15} />
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingVertical: 16,
        paddingHorizontal: 8,
        marginBottom: 10,
        borderRadius: 5,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: 'rgba(255,255,255,0.5)',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    label: {
        color: colors.primary,
        paddingLeft: 8
    },
    value: {
        color: colors.primary,
        fontWeight: 'bold',
    },
})

export default QuizItem