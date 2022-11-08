import {Stack} from "../Interface/interface";

export enum General {
    module = 'module'
}

// @ts-ignore
const stack = JSON.parse(localStorage.getItem('stacks'))
const initialState: Stack[] = [
    {
        id: '0',
        data:
            {
                text: 'js Software Engineering',
                module: [
                    {
                        text: 'react'
                    },
                    {
                        text: 'vue'
                    },
                    {
                        text: 'angular'
                    }]
            }
    },

    {
        id: '1',
        data:
            {
                text: 'Front End Learn',
                module: [
                    {
                        text: 'react'
                    },
                    {
                        text: 'vue'
                    },
                    {
                        text: 'angular'
                    }]
            }
    },
    {
        id: '2',
        data:
            {
                text: 'FrontEndSoft',
                module: [
                    {
                        text: 'react'
                    },
                    {
                        text: 'vue'
                    },
                    {
                        text: 'angular'
                    }]
            }
    }
]

function nextTodoId(todos: any) {
    const maxId = todos.reduce((maxId: any, todo: any) => Math.max(todo.id, maxId), -1)
    return maxId + 1
}


export default function todosReducer(state: Stack[] = stack ? stack : initialState, action: any) {
    switch (action.type) {
        case General.module: {

            const result = [
                ...state,
                {
                    id: nextTodoId(state),
                    data: {
                        ...action.payload[0],
                        id: nextTodoId(state)
                    },
                }
            ]
            localStorage.setItem('stacks', JSON.stringify(result))
            return result
        }
        default:
            return state
    }
}
