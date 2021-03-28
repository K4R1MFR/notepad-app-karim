import React, { useState, useEffect } from "react";
import "./styles/page.css";
import {
    getItem,
    setItem
} from '../services/storage';
import { useParams, useHistory } from 'react-router-dom';
import { AwesomeButton } from 'react-awesome-button';




export default function EditNote(){
    const { index } = useParams();
    const [ notes, setNotes ] = useState([]);
    const [ title, setTitle ] = useState('');
    const [ content, setContent ] = useState('');

    const history = useHistory();

    

    useEffect(() => {
        let storedNotes = getItem("notes", []);
        setNotes(storedNotes);
        setTitle(storedNotes[index].title);
        setContent(storedNotes[index].content);
    }, []);
    

    function save() {
        let newNotes = Array.from(notes);
        newNotes[index] = {id: index, title: title, content: content };
        setNotes(newNotes);
        setItem('notes', newNotes);
        history.push('/');
    }


    return(
        <div className="EditNote">

            <h1>Edit Note Page</h1>

            <form 
                onSubmit={save} 
            >
                <label>Title: 
                    <input 
                        type="text"
                        value={title}
                        onChange={(event => setTitle(event.target.value))}
                    />
                </label>
                <hr/>
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
                    onPress={() => save}
                
                >Save Note</AwesomeButton>

            </form>

        </div>
    )
}