const initialState = {
    arr: [{ id: 1, name: "היום האחרון", sofer: "יונה ספיר", numPages: 460 },
    { id: 2, name: "איסטרק", sofer: "א קווין", numPages: 700 },
    { id: 3, name: "21 בבית 1", sofer: "רפפורט", numPages: 150 },
    { id: 4, name: "חובת הלבבות", sofer: "רבינו בחיי", numPages: 400 }
    ],
    selectedBook: null,
    selectedBookForEdit: null
}
//מה שכל פונקציה כאן תחזיר יהיה הסטייט החדש
//כאן ניגשים לפונקציות שהגדרנו ב actions
//actions שנקבל כאן בפונקציה מגיעים מהעמוד book שב actions
export const bookReduser = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_BOOK":
            return {
                ...state,
                arr: [...state.arr, action.payload]
            }
        case "SELECT_BOOK":
            return {
                ...state,
                selectedBook: action.payload
            }
            
        case "SELECT_BOOK_FOR_EDIT":
            return {
                ...state,
                selectedBookForEdit: action.payload
            }
        case "DELETE_BOOK":
            return {
                ...state,
                arr: state.arr.filter(item => item.id != action.payload)
            }
        case "SAVE_BOOK":
            return {
                ...state,
                selectedBookForEdit: null,
                arr: state.arr.map(item => {
                    if (item.id !== action.payload.id)
                        return item;
                    return action.payload;
                })
            }

        default:
            return state;
    }
}

