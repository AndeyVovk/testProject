import {Stack} from "../Interface/interface";

export enum General {
    module = 'module'
}

// @ts-ignore
const stack = JSON.parse(localStorage.getItem('stacks'))
const initialState: any[] = [
    {
        id: '0',
        data:
            {
                text: 'js Software Engineering',
                module: [
                    {
                        text: 'react',
                        module: [{
                            text: 'tests'
                        }]
                    },
                    {
                        text: 'vue',
                        module: [{
                            text: 'tests'
                        }]
                    },
                    {
                        text: 'angular',
                        module: [{
                            text: 'tests'
                        }]
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
                        text: 'react',
                        module: [{
                            text: 'tests'
                        }]
                    },
                    {
                        text: 'vue',
                        module: [{
                            text: 'tests'
                        }]
                    },
                    {
                        text: 'angular',
                        module: [{
                            text: 'tests'
                        }]
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
                        text: 'react',
                        module: [{
                            text: 'tests'
                        }]
                    },
                    {
                        text: 'vue',
                        module: [{
                            text: 'tests'
                        }]
                    },
                    {
                        text: 'angular',
                        module: [{
                            text: 'tests'
                        }]
                    }]
            }
    }
]

function nextTodoId(todos: any) {
    const maxId = todos.reduce((maxId: any, todo: any) => Math.max(todo.id, maxId), -1)
    return maxId + 1
}


export default function todosReducer(state: Stack[] = stack ? stack : initialState, action: any) {
    console.log(state)
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
            localStorage.setItem('stacks', JSON.stringify(state))
            return state
    }
}
