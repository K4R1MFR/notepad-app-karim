import React, { useState, useEffect } from "react";
import "./styles/page.css";
import Row from "../components/Row";
import {
    getItem,
    setItem
} from '../services/storage';
import { useHistory } from 'react-router-dom';
import { AwesomeButton } from 'react-awesome-button';
import AwesomeButtonCssModule from 'react-awesome-button/dist/styles.css';


export default function Home(){

    const history = useHistory();

    const [ notes, setNotes ] = useState([]);
    useEffect(() => {
        setNotes(getItem("notes", []))
    }, []);

    return(
        <div className="Home">

            {notes.map((note, index) => {
                function deleteNote() {
                    // copy the list
                    let newNotes = Array.from(notes);
                    // splice or remove the current index
                    newNotes.splice(index,1);
                    // save to local state (notes)
                    setNotes(newNotes);
                    // save to local storage
                    setItem('notes', newNotes);
                }
                return <Row key={note.id} note={note} index={index} onDelete={deleteNote}/>
            })}
                <AwesomeButton 
                    type="primary" 
                    // onPress={() => (history.push('/pages/AddNote'))}
                    onPress={() => alert("test GitHub")}

                
                >Add Note</AwesomeButton>
        </div>
    )
}