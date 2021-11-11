import React from 'react'
import { TouchableOpacity, Text, StyleSheet, Dimensions, View, ActivityIndicator } from 'react-native'
import Colors from '../../constants/colors'

const deviceWidth = Dimensions.get('window').width

const ButtonBox = props => {

    const largeCustomFontSize = deviceWidth < 400 ? 14 : 16

    if (props.loading) {
        return (
            <View style={{ ...styles.container, ...props.style }} >
                <ActivityIndicator color={props.color ? props.color : Colors.secondary} size='small' />
            </View>
        )
    }

    if (props.hide) {
        return <View style={styles.hide} />
    }

    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={{ ...styles.container, ...props.style, backgroundColor: props.color ? props.color : Colors.primary, }}
            testID={props.testID}
        >
            <Text
                style={{
                    ...styles.title,
                    fontSize: largeCustomFontSize,
                }} >
                {props.title ? props.title : 'Button'}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 35,
        paddingVertical: 8,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    title: {
        color: 'white',
        fontSize: deviceWidth < 500 ? 14 : 16,
        fontWeight: 'bold'
    },
    hide: {
        width: '100%',
        height: 35,
    }
})

export default ButtonBox