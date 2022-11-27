import {Stack} from "../Interface/interface";

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
// @ts-ignore
const stack = JSON.parse(localStorage.getItem('stacks'))

export default function updateModule(state: Stack[] = stack ? stack : initialState, action: any) {

    switch (action.type) {
        case 'updateModule': {
            const updateState = stack.map((value: Stack) => {
                if (value.data.text === action.payload[0].text) {
                    value.data.module.push(...action.payload[0].module)
                }
                return value
            })
            localStorage.setItem('stacks', JSON.stringify(updateState))

            return {
                ...updateState,
                status: action.payload
            }
        }
        default:
            return state
    }
}
