import React, { useState, useEffect } from 'react';
import { Text, StyleSheet } from 'react-native'
import SafeScrollView from '../components/UI/SafeScrollView';
import InputBox from '../components/UI/InputBox';
import ButtonBox from '../components/UI/ButtonBox';
import CustomIcon from '../components/UI/CustomIcon';
import colors from '../constants/colors';
import ButtonIcon from '../components/UI/ButtonIcon';

const QuantitySelectionScreen = props => {
    const [quantity, setQuantity] = useState(null)

    const firstLaunch = props.route?.params?.firstLaunch

    useEffect(() => {
        props.navigation.setOptions({
            headerLeft: firstLaunch ? null : () => <ButtonIcon style={{paddingLeft: 16}} name='back' size={20} onPress={() => props.navigation.goBack()} />
        })
    }, [firstLaunch])

    const onQuantityChange = (val) => {
        let value = val?.replace(/\D/g, "")
        if (value.length > 2) {
            value = value.substring(0, value.length - 1)
        }
        setQuantity(value)
    }

    const onPressButton = () => {
        if (!quantity) {
            return
        }
        props.navigation.navigate('StartQuiz', { quantity })
    }

    return (
        <SafeScrollView
            style={styles.scrollStyle}
            contentContainerStyle={styles.contentContainerStyle}
        >
            <Text style={styles.title} >How many questions do you think you can answer at the moemnt?</Text>
            <CustomIcon style={styles.icon} name='thinking' size={128} />
            <InputBox
                style={styles.input}
                hide={false}
                value={quantity}
                onChangeText={onQuantityChange}
                color={colors.primary}
                labelColor={colors.tertiary}
                placeholder='Please insert a number'
                secureTextEntry={false}
                keyboardType='decimal-pad'
                maxLength={14}
                error={!quantity}
            />
            <ButtonBox
                title='Next'
                onPress={onPressButton}
            />
        </SafeScrollView>
    )
}

const styles = StyleSheet.create({
    scrollStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.backgroundColor,
        marginVertical: 20
    },
    title: {
        color: colors.primary,
        textAlign: 'center',
        fontSize: 20,
    },
    icon: {
        marginTop: 32,
        marginBottom: 64,
    },
    input: {
        marginBottom: 32
    }
})

export default QuantitySelectionScreen