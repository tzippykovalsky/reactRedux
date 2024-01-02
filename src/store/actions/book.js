export const salectBook=(book)=>{
    return{
        type:"SELECT_BOOK",
        payload:book
    }
}
export const addBook=(book)=>{
    return{
        type:"ADD_BOOK",
        payload:book
    }
}
export const selectBookForEdit=(book)=>{
    return{
        type:"SELECT_BOOK_FOR_EDIT",
        payload:book
    }
}
export const deleteBook=(bookId)=>{
    return{
        type:"DELETE_BOOK",
        payload:bookId
    }
}


export const saveBookAfterEdit=(book)=>{
    return{
        type:"SAVE_BOOK",
        payload:book
    }
}