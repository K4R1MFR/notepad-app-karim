import React, { useState, useEffect } from "react";
import {
    getItem,
    removeSessionItem,
    getSessionItem,
    setItem,
    setSessionItem
} from '../services/storage';
import { useHistory } from 'react-router-dom';
import { AwesomeButton } from 'react-awesome-button';

export default function AddNote() {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [notes, setNotes] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const history = useHistory();


    const onBackClick = () => {
        history.push('/');
    }
    useEffect(() => {
        //on start
        setNotes(getItem("notes", []));
        let savedTitle = getSessionItem("title", '');
        let savedContent = getSessionItem("content", "");
        setTitle(savedTitle);
        setContent(savedContent);
        //clean up
        return () => {
            removeSessionItem('content');
            removeSessionItem('title');
        }
    }, []);

    function AddNote(titre, contenu) {
        let value = [...notes, { title: titre, content: contenu }];
        setNotes(value);
        setItem('notes', value);
    }

    function AddAndBack() {
        if (title === "") {
            setErrorMessage('Please enter a title here first.')
        } else {
            AddNote(title, content);
            setTitle("");
            onBackClick();
        }
    }

    return (
        <div className="AddNote">
            <h1>Add Note Page</h1>
            <label>Title:
                <input
                    type="text"
                    value={title}
                    placeholder={errorMessage}
                    onChange={(event) => {
                        setTitle(event.target.value);
                        setSessionItem('title', event.target.value);
                    }}
                />
            </label>
            <label>Content:
                <textarea
                    type="text"
                    value={content}
                    onChange={(event) => {
                        setContent(event.target.value);
                        setSessionItem('content', event.target.value);
                    }}
                />
            </label>
            <AwesomeButton
                type="primary"
                onPress={AddAndBack}
            >Add Note</AwesomeButton>
        </div>
    )
}