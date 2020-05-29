import { ADD_TO_TEXT, ADD_TO_LIST, REFRESH_LIST } from './constents';

export const textFieldChange = (text) => ({
    type: ADD_TO_TEXT,
    payload: text
})

export const addTodoList = () => ({
    type: ADD_TO_LIST
});

export const refreshList = () => ({
    type: REFRESH_LIST
});
