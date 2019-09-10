import React from 'react';
import styled from 'styled-components';

import Todo from './Todo';

const TodoListContainer = styled.div`
    padding: 0px 15px;
`;

const TodoList = ({ todos, dispatch }) => {
    return (
        <TodoListContainer>
            {todos &&
                todos.map(todo => {
                    return <Todo todo={todo} dispatch={dispatch} />;
                })}
        </TodoListContainer>
    );
};

export default TodoList;
