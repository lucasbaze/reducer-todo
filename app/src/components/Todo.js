import React from 'react';

import styled from 'styled-components';
import posed from 'react-pose';

import { Button } from 'semantic-ui-react';

const TodoContainer = styled.div`
    min-height: 40px;
    border-radius: 40px;
    box-shadow: ${props =>
        props.complete
            ? '1px 1px 10px 3px rgba(204, 227, 205, 1)'
            : '1px 1px 10px 3px rgba(224, 224, 224, 1)'};
    padding: 10px 10px;
    margin: 15px 0 0 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

    p, h4{
        margin: 0
        padding: 0
    }
`;

const CompleteButton = styled(Button)`
    border: green;
`;

const Actions = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const Todo = ({ todo, dispatch }) => {
    return (
        <TodoContainer complete={todo.complete}>
            <h4 style={{ marginLeft: 10 }}>{todo.task}</h4>
            <Actions>
                <p style={{ marginRight: 7 }}>{todo.dueDate}</p>
                <CompleteButton
                    circular
                    color={todo.complete ? 'green' : 'grey'}
                    icon={todo.complete ? 'smile' : 'check'}
                    complete={todo.complete}
                    onClick={() =>
                        dispatch({
                            type: 'toggle_todo',
                            payload: todo.id,
                        })
                    }
                />
            </Actions>
        </TodoContainer>
    );
};

export default Todo;
