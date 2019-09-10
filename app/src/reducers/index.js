const generateId = () => {
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
    ],
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'add_todo':
            let { task, dueDate } = action.payload;

            let newTodo = {
                task,
                dueDate,
                id: generateId(),
                complete: false,
            };

            state.todos.push(newTodo);

            return {
                ...state,
            };
        default:
            return state;
    }
};
