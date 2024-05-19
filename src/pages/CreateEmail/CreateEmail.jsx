import React, { useState } from 'react';
import { EditorState } from 'draft-js';
import { Container } from 'react-bootstrap';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumbs';
import { createNewEmail } from '../../axios/axiosEmail';
import { stateToHTML } from 'draft-js-export-html';
import { useNavigate } from 'react-router-dom';
import FormCreateEmail from '../../components/forms/FormCreateEmail/FormCreateEmail';

const CreateEmail = ({dataAuth}) => {
    const navigate = useNavigate();
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
    const contentState = editorState.getCurrentContent();
    const [formValues, setFormValues] = useState({
        recipient: "",
        subject: "",
        email: dataAuth.email,
        username: dataAuth.username, 
        password: dataAuth.password, 
        sender: dataAuth.id,
        message: stateToHTML(contentState)
    });

    const createEmail = async() => {
        try{
            await createNewEmail(formValues)
            navigate('/email/current');
            }catch(e){ }
    }

    return (
        <Container>
            <Breadcrumb arrLink={[
                { name: "Головна", link: "/email/current" },
                { name: "Надіслати лист", link: "/email/current/create" },
            ]} />
            <FormCreateEmail
                formValues={formValues} 
                setFormValues={setFormValues}
                dataAuth={dataAuth}
                editorState={editorState}
                setEditorState={setEditorState}
                funcClick={createEmail}/>
        </Container>
    );
}

export default CreateEmail;
