export const BookReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_BOOK':
            return [...state, {
                title: action.book.title,
                author: action.book.author,
                id: (state.length) ? state[state.length - 1].id +1 : 1 
            }]
        case 'REMOVE_BOOK':
            return state.filter( book => book.id !== action.id )   
        default:
            return state;     
    }
}