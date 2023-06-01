const defaultState = {
    title: 'Gains',
    amount: '12',
    categories: [
        {
            id: 1,
            title: 'test',
            amount: '123',
            color: '#e50012'
        }
    ]
}

export const gainsReducer = (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state
    }
}