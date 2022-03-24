import React, { useState, useEffect } from "react";
import "./styles/page.css";
import {
    getItem,
    setItem
} from '../services/storage';
import { useParams, useHistory } from 'react-router-dom';
import { AwesomeButton } from 'react-awesome-button';




export default function EditNote() {
    const { index } = useParams();
    const [notes, setNotes] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [errorMessage, setErrorMessage] = useState("");


    const history = useHistory();



    useEffect(() => {
        let storedNotes = getItem("notes", []);
        setNotes(storedNotes);
        setTitle(storedNotes[index].title);
        setContent(storedNotes[index].content);
    }, [index]);


    function save() {
        if (title === "") {
            setErrorMessage('Please enter a title here first.')
        } else {
            let newNotes = Array.from(notes);
            newNotes[index] = { id: index, title: title, content: content };
            setNotes(newNotes);
            setItem('notes', newNotes);
            history.push('/');
        }
    }


    return (
        <div className="EditNote">

            <h1>Edit Note Page</h1>

            <label>Title:
                <input
                    type="text"
                    placeholder={errorMessage}
                    value={title}
                    onChange={(event => setTitle(event.target.value))}
                />
            </label>
            <label>Content:
                <textarea
                    type="text"
                    value={content}
                    onChange={(event => setContent(event.target.value))}

                />
            </label>

            {/* <input type="button" value="Edit Note" onClick={save}/> */}
            <AwesomeButton
                type="primary"
                onPress={save}

            >Save Note</AwesomeButton>


        </div>
    )
}