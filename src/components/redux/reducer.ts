import { combineReducers } from 'redux'
import todosReducer from "./add-stack";
import updateModule from "./update-stack";

const rootReducer = combineReducers({
    // Define a top-level state field named `todos`, handled by `todosReducer`
    stacks: todosReducer,
    filters: updateModule
})

export default rootReducer
