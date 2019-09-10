import React, { useReducer } from 'react';
import styled from 'styled-components';

//reducers
import { initialState, reducer } from './reducers';

//components
import { TodoList, AddButton } from './components';

const Body = styled.div`
    padding: 40px;
`;

const Container = styled.div`
    max-width: 400px;
    margin: auto auto;
    border-radius: 15px;
    box-shadow: 2px 2px 10px 2px rgba(32, 32, 32, 0.25);
    background-color: white;
    padding: 0px 10px;
    height: 85vh;
    overflow: scroll;
    position: relative;

    ::-webkit-scrollbar {
        width: 0px; /* Remove scrollbar space */
        background: transparent; /* Optional: just make scrollbar invisible */
    }
`;

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    console.log(state);

    return (
        <Body>
            <Container>
                <h2>All Tasks</h2>
                <TodoList todos={state.todos} dispatch={dispatch} />
                <AddButton />
            </Container>
        </Body>
    );
}

export default App;
