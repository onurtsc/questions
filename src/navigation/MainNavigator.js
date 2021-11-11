import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import colors from '../constants/colors';

import QuantitySelectionScreen from '../screens/QuantitySelectionScreen'
import StartQuizScreen from '../screens/StartQuizScreen'
import AnswerScreen from '../screens/AnswerScreen'
import ResultScreen from '../screens/ResultScreen'
import QuizOverviewScreen from '../screens/QuizOverviewScreen'
import DetailsScreen from '../screens/DetailsScreen'

const defaultNavOptions = {
    headerTitle: '',
    headerStyle: {
        backgroundColor: 'transparent',
        elevation: 0,
        shadowRadius: 0,
        shadowOffset: {
            height: 0,
        },
    },
    headerBackTitleVisible: false,
    headerTintColor: colors.tertiary
}

const BandsStack = createStackNavigator()

const BandsNavigator = () => {

    return (
        <BandsStack.Navigator screenOptions={defaultNavOptions} >
            <BandsStack.Screen
                name="QuizOverview"
                component={QuizOverviewScreen}
            />
            <BandsStack.Screen
                name="QuantitySelection"
                component={QuantitySelectionScreen}
            />
            <BandsStack.Screen
                name="StartQuiz"
                component={StartQuizScreen}
            />
            <BandsStack.Screen
                name="Answer"
                component={AnswerScreen}
            />
            <BandsStack.Screen
                name="Result"
                component={ResultScreen}
            />
            <BandsStack.Screen
                name="Details"
                component={DetailsScreen}
            />
        </BandsStack.Navigator>
    )
}

export default BandsNavigator