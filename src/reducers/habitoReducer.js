export const habitoReducer = (state = [], action) => {

    switch (action.type) {
        case "add":
            return [...state, action.payload]
        case "update":
            break;

        case "delete":
            return state.filter((habito) => (habito._id !== action.payload) );
        default:
            return action.payload;
    }
}
