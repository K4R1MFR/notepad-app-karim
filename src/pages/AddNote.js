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
export default function AddNote(){

    const [ title, setTitle ] = useState("");
    const [ content, setContent ] = useState("");
    const [ notes, setNotes ] = useState([]);

    const history = useHistory();

    // useEffect on load, []
    // setTitle(getSessionItem('title', ''));
    
    const onBackClick = () => {
        history.push('/');
    }

    useEffect(() => {
        setNotes(getItem("notes", []));
        let savedTitle = getSessionItem("title", '');
        let savedContent = getSessionItem("content", content);
        setTitle(savedTitle);
        setContent(savedContent);
        //clean up
        return () => {
                removeSessionItem('title');
                removeSessionItem('content');
        }
    }, [content]);

    function AddNote(titre, contenu) {
        let value = [...notes, {id: notes.length, title: titre, content: contenu}];
        setNotes(value);
        setItem('notes', value);
        }

        function AddAndBack(titre, contenu) {
            AddNote(title, content);
            setTitle("");
            onBackClick();
            

        }


    

    return(
        <div className="AddNote">
            <h1>Add Note Page</h1>
            <form 
                onSubmit={() => AddAndBack(title, content)} 
            >
                <label>Title: 
                    <input 
                        type="text" 
                        value={title} 
                        onChange={(event) => {
                            setTitle(event.target.value);
                            setSessionItem('title', event.target.value);
                        }} 
                    />
                </label>
                <hr/>
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
                    onPress={() => ("submit")}
                
                >Add Note</AwesomeButton>
            </form>
        </div>
    )
}