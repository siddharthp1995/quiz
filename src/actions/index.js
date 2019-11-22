// action for adding raw
export const addRawAction = (rawData) => {
    return {
        type: 'ADD_RAW',
        payload: rawData
    };
};

// action for deleting raw
export const deleteRawAction = (rawData, index) => {
    return {
        type: 'DELETE_RAW',
        payload: [rawData, index]
    };
};

// action for option data change
export const onOptionDataChangeAction = (events, keyValue) => {
    return {
        type: 'OPTION_DATA',
        payload: [events, keyValue]
    };
};

// action for question data change
export const onQuestionDataChangeAction = (events) => {
    return {
        type: 'QUESTION_DATA',
        payload: events
    };
};