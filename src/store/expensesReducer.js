import { useState } from "react";

const [defaultState, setDefaultState] = useState({
    title: 'Expenses',
    amount: 0,
    categories: [
        {
            id: 1,
            title: 'test',
            amount: 123,
            color: '#e50012'
        },
        {
            id: 3,
            title: 'car12',
            amount: 5550,
            color: '#06f'
        },
        {
            id: 4,
            title: 'test1231231',
            amount: 120,
            color: '#06f'
        },
        {
            id: 5,
            title: 'qwerty',
            amount: 10020,
            color: '#06f'
        },
        {
            id: 6,
            title: 'house',
            amount: 100,
            color: '#06f'
        },
        {
            id: 7,
            title: 'family',
            amount: 100202,
            color: '#06f'
        }
    ]
})

function getSum() {
    let sum = 0;
    defaultState.categories.map(item => {
        sum = sum + item.amount;
    })

    return sum
}   
console.log(getSum())

export const expensesReducer = (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state
    }
}