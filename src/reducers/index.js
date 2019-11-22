import { combineReducers } from 'redux';

const storeData = {
    questionData: '',
    rawData: [
        { optionValue: '', isCorrect: false },
    ],
}

const dataReducer = (quizData = storeData, action) => {
    
    if (action.type === 'ADD_RAW') {
        let newData = {optionValue: '', isCorrect: false};
        return {
            ...quizData,
            rawData: [...quizData.rawData, newData]
        }
    }

    if (action.type === 'DELETE_RAW') {
        console.log('In Delete raw', quizData);
        return {
            ...quizData,
            rawData: [
                ...quizData.rawData.slice(0, action.payload[1]),
                ...quizData.rawData.slice(action.payload[1] + 1)
            ]
        }
    }

    if (action.type === 'OPTION_DATA') {
        let newOptionArray = quizData.rawData;
        newOptionArray[action.payload[1]].optionValue = action.payload[0].target.value;
        return {
            ...quizData,
            rawData: newOptionArray
        }
    }

    if (action.type === 'QUESTION_DATA') {
        console.log('------____------', action.payload.target.value);
        return {
            ...quizData,
            questionData: action.payload.target.value
        };
    }

    return quizData;
}

export default combineReducers({
    data: dataReducer
});



