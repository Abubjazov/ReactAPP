const redux = require('redux')
const initialState = {
    counter: 0
}


//Reduser
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            state.counter ++
            break;

        case 'SUB':
            state.counter --
            break;
        
        case 'ADD_NUMBER':
            state.counter += action.val
            break;
    
        default:
            break;
    }

    return state
}

//Store
const store = redux.createStore(reducer)

store.subscribe(() => {
    console.log('Subscribe', store.getState())
})

//Actions
const addCounter = {
    type: 'ADD',
}

store.dispatch(addCounter)
store.dispatch({type: 'SUB'})
store.dispatch({type: 'ADD_NUMBER', val: 13})
