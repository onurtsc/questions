import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios';

export const SET_TESTS = 'SET_TESTS';
export const SET_QUESTIONS = 'SET_QUESTIONS';
export const SAVE_QUIZ = 'SAVE_QUIZ';

export const fetchTestsFromStorage = () => {
    return async (dispatch) => {
        try {
            let transformedData = []
            const resData = await AsyncStorage.getItem("QuizList"); 
            if (resData) {
                transformedData = JSON.parse(resData);
            } 
            dispatch({
                type: SET_TESTS,
                tests: transformedData,
            })
        } catch (err) {
            throw (err);
        }
    }
}

export const fetchQuestions = (quantity) => {
    return async (dispatch) => {
        try {
            const result = await axios.get(`https://opentdb.com/api.php?amount=${quantity}`)
            const response = result.data.results

            let modifiedData = []
            for (const key in response) {
                let options = response[key].incorrect_answers
                options.push(response[key].correct_answer)
                options = options.sort(() => Math.random() - 0.5)
                options = [...new Set(options)]

                modifiedData.push({
                    category: response[key].category,
                    type: response[key].type,
                    question: response[key].question,
                    correct_answer: response[key].correct_answer,
                    incorrect_answers: response[key].incorrect_answers,
                    options
                })
            }
            dispatch({
                type: SET_QUESTIONS,
                quiz: modifiedData,
            })

        } catch (err) {
            throw (err)
        }
    }
}

export const saveQuiz = (data) => {
    return async (dispatch) => {
        try {
            let lodadedList = []
            const resData = await AsyncStorage.getItem("QuizList");
            if (resData) {
                let transformedData = JSON.parse(resData);
                lodadedList = transformedData
            }
            
            lodadedList.push(data)
            await AsyncStorage.setItem('QuizList', JSON.stringify(lodadedList));
            dispatch({
                type: SAVE_QUIZ,
                tests: lodadedList,
            })
        } catch (err) {
            throw (err)
        }
    }
}