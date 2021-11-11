import React, { useEffect } from 'react';
import { Text, StyleSheet } from 'react-native'
import SafeScrollView from '../components/UI/SafeScrollView';
import ButtonBox from '../components/UI/ButtonBox';
import CustomIcon from '../components/UI/CustomIcon';
import colors from '../constants/colors';

const StartQuizScreen = props => {

    const { quantity } = props.route.params

    useEffect(() => {
        props.navigation.setOptions({
            headerLeft: null
        })
    }, [])

    const onPressStart = async () => {
        props.navigation.navigate('Answer', { quantity })
    };

    return (
        <SafeScrollView
            style={styles.scrollStyle}
            contentContainerStyle={styles.contentContainerStyle}
        >
            <Text style={styles.title} >{quantity} questions will be ready!</Text>
            <Text style={styles.title} >Are you ready to run for the test?</Text>
            <CustomIcon style={styles.icon} name='running' size={128} />

            <ButtonBox
                style={styles.button}
                title='Start'
                color={colors.tertiary}
                onPress={onPressStart}
            />
            <ButtonBox
                style={styles.button}
                title='Cancel'
                onPress={() => props.navigation.goBack()}
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
    button: {
        marginBottom: 16
    }
})

export default StartQuizScreen