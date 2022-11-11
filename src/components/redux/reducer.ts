import { combineReducers } from 'redux'
import filtersReducer from "./filtersSlice";
import todosReducer from "./add-stack";

const rootReducer = combineReducers({
    // Define a top-level state field named `todos`, handled by `todosReducer`
    stacks: todosReducer,
    filters: filtersReducer
})

export default rootReducer
