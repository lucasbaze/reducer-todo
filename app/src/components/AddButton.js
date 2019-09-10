import React, { useState } from 'react';

import styled from 'styled-components';
import posed from 'react-pose';
import { Modal, Form } from 'semantic-ui-react';

//hooks
import { useForm } from '../hooks';

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

const FormAnimation = posed.div({
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
});

const FormContainer = styled(FormAnimation)`
    width: 300px;
    position: fixed;
    left: calc(50vw - 150px);
    bottom: calc(30vh);
    background-color: white;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 1px 1px 10px 3px rgba(0, 0, 0, 0.3);
`;

const NewTodoForm = ({ open, dispatch, setOpen }) => {
    const [formValue, handleChange, submitHandler] = useForm(
        { task: '', dueDate: '' },
        formValues =>
            dispatch({
                type: 'add_todo',
                payload: {
                    task: formValues.task,
                    dueDate: formValues.dueDate,
                },
            })
    );

    return (
        <FormContainer pose={open ? 'visible' : 'hidden'}>
            <Form
                onSubmit={() => {
                    submitHandler();
                    setOpen(false);
                }}
            >
                <Form.Input
                    name="task"
                    label="Task Name"
                    type="text"
                    value={formValue.task}
                    onChange={handleChange}
                />
                <Form.Input
                    name="dueDate"
                    label="Due Date"
                    type="date"
                    value={formValue.dueDate}
                    onChange={handleChange}
                />
                <Form.Button fluid type="submit" content="Add Task" />
            </Form>
        </FormContainer>
    );
};

const AddButton = ({ dispatch }) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <AddButtonContainer onClick={() => setOpen(!open)}>
                +
            </AddButtonContainer>
            <NewTodoForm open={open} dispatch={dispatch} setOpen={setOpen} />
        </>
    );
};

export default AddButton;
