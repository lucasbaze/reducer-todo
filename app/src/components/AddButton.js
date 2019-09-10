import React from 'react';

import styled from 'styled-components';

const AddButtonContainer = styled.div`
    position: fixed;
    left: calc(50vw - 35px);
    bottom: 25px;
    height: 70px;
    width: 70px;
    background-color: white;
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 1px 1px 10px 3px rgba(0, 0, 0, 0.3);

    :hover {
        cursor: pointer;
    }
`;

const AddButton = () => {
    return (
        <AddButtonContainer onClick={() => alert('clicked')}>
            +
        </AddButtonContainer>
    );
};

export default AddButton;
