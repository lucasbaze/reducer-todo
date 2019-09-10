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
        case 'toggle_todo':
            let id = action.payload;

            let todo =
                state.todos[state.todos.findIndex(item => item.id == id)];

            todo.complete = !todo.complete;

            return {
                ...state,
            };

        case 'toggle_filter':
            let newState =
                state.todos &&
                state.todos.filter(item => {
                    return item.complete !== true;
                });

            return {
                ...state,
                todos: newState,
            };

        default:
            return state;
    }
};
