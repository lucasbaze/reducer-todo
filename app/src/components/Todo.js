import React from 'react';

import styled from 'styled-components';

const TodoContainer = styled.div`
    min-height: 40px;
    border-radius: 40px;
    box-shadow: 1px 1px 10px 3px rgba(224, 224, 224, 1);
    padding: 0px 15px;
    margin: 15px 0 0 0;

    display: flex;
    justify-content: space-between;
`;

const Circle = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 20px;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    :hover {
        cursor: pointer;
    }
`;

const Actions = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const Todo = ({ todo, dispatch }) => {
    return (
        <TodoContainer complete={todo.complete}>
            <p>{todo.task}</p>
            <Actions>
                <p>{todo.dueDate}</p>
                <Circle onClick={() => alert('clicked')}>
                    <span style={{ color: 'white', fontWeight: 'bold' }}>
                        Y
                    </span>
                </Circle>
                <Circle onClick={() => alert('clicked')}>
                    <span style={{ color: 'white', fontWeight: 'bold' }}>
                        X
                    </span>
                </Circle>
            </Actions>
        </TodoContainer>
    );
};

export default Todo;
