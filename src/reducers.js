import { ADD_TO_TEXT, ADD_TO_LIST, REFRESH_LIST } from "./constents";

const initialState = {
    text: '',
    todos: []
};

export const todoApp = (state = initialState, action = {}) => {
    switch (action.type) {
        case ADD_TO_TEXT:
            return Object.assign({}, state, { text: action.payload });

        case ADD_TO_LIST:
            if (state.text) {
                state.todos.push(state.text);
                return Object.assign({}, state, { text: '' });
            } else {
                return state;
            }

        case REFRESH_LIST:
            console.log('refresh');
            return state;

        default:
            return state;
    }
}
