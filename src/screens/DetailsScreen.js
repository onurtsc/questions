import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native'
import SafeScrollView from '../components/UI/SafeScrollView';
import colors from '../constants/colors';
import QuestionItem from '../components/items/QuestionItem';

const DetailsScreen = props => {

    const data = props.route?.params?.data

    useEffect(() => {
        props.navigation.setOptions({
            headerTitle: 'Questions'
        })
    }, [])

    return (
        <SafeScrollView
            style={styles.scrollStyle}
            contentContainerStyle={styles.contentContainerStyle}
        >
            {data.quiz.map((item, index) => (
                <QuestionItem key={index.toString()} item={item} />
            ))}
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

export default DetailsScreen