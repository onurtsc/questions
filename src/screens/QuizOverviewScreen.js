import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import SafeScrollView from '../components/UI/SafeScrollView';
import colors from '../constants/colors';
import QuizItem from '../components/items/QuizItem';
import ButtonIcon from '../components/UI/ButtonIcon';
import * as testActions from '../store/actions/testActions'

const QuizOverviewScreen = props => {
    const [loading, setLoading] = useState(true)

    const dispatch = useDispatch()

    const list = useSelector(state => state.tests.availableTests)

    useEffect(() => {
        props.navigation.setOptions({
            headerTitle: list.length === 0 ? '' : 'Your Previous Results',
            headerRight: list.length === 0 ? null : () => <ButtonIcon style={{ paddingRight: 16 }} name='add' size={20} onPress={() => props.navigation.navigate('QuantitySelection')} />
        })
    }, [list])

    useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', fetchList)
        return () => {
            unsubscribe()
        };
    }, [fetchList])

    const fetchList = async () => {
        try {
            await dispatch(testActions.fetchTestsFromStorage())
            setLoading(false);
        } catch (err) {
            console.log("Error with getting data: ", err);
            setLoading(false);
        }
    }

    useEffect(() => {
        if (!loading && list.length === 0) {
            props.navigation.navigate('QuantitySelection', { firstLaunch: true })
        }
    }, [loading])

    if (loading) {
        return (
            <View style={styles.indicatorCOntainer}>
                <ActivityIndicator color={colors.tertiary} size='large' />
            </View>
        )
    }

    return (
        <SafeScrollView
            style={styles.scrollStyle}
            contentContainerStyle={styles.contentContainerStyle}
        >
            {list.map((item, index) => (
                <QuizItem key={index.toString()} item={item} onPress={() => props.navigation.navigate('Result', { test: item })} />
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
    indicatorCOntainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})

export default QuizOverviewScreen