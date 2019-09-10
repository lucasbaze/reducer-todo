const generateID = () => {
    return Math.random()
        .toString(24)
        .slice(2, 15);
};

export const initialState = {
    todos: [
        {
            id: 'SDvi4tmd230djkls',
            task: 'Eat Sandwhich',
            dueDate: '9/10/2019',
            complete: false,
        },
        {
            id: 'asdflkj242490Eidc',
            task: 'Eat Cake',
            dueDate: '9/11/2019',
            complete: true,
        },
    ],
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'add_todo':
            return {
                ...state,
                todos: action.payload || null,
            };
        default:
            return state;
    }
};
