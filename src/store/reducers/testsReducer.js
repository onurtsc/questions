import { SET_TESTS, SET_QUESTIONS, SAVE_QUIZ } from '../actions/testActions';

const initialState = {
    availableTests: [],
    currentQuiz: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_TESTS:
            return {
                ...state,
                availableTests: action.tests.reverse(),
            }
        case SET_QUESTIONS:
            return {
                ...state,
                currentQuiz: action.quiz,
            }
        case SAVE_QUIZ:
            return {
                ...state,
                availableTests: action.tests,
            }
    }
    return state;
}