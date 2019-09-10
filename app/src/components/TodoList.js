import React from 'react';
import styled from 'styled-components';
import posed, { PoseGroup } from 'react-pose';

import Todo from './Todo';

const TodoListContainer = styled.ul`
    padding: 0px 15px;
`;

const TodoList = ({ todos, dispatch }) => {
    return (
        <TodoListContainer>
            {todos &&
                todos.map(todo => {
                    return (
                        <Todo key={todo.id} todo={todo} dispatch={dispatch} />
                    );
                })}
        </TodoListContainer>
    );
};

export default TodoList;
