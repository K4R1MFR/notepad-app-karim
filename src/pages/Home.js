import React, { useState, useEffect } from "react";
import "./styles/page.css";
import Row from "../components/Row";
import {
    getItem,
    setItem
} from '../services/storage';
import { useHistory } from 'react-router-dom';
import { AwesomeButton } from 'react-awesome-button';


export default function Home() {

    const history = useHistory();

    const [notes, setNotes] = useState([]);
    useEffect(() => {
        setNotes(getItem("notes", []))
    }, []);

    return (
        <div className="Home">

            {notes.map((note, index) => {
                function deleteNote() {
                    // copy the list
                    let newNotes = Array.from(notes);
                    // splice or remove the current index
                    newNotes.splice(index, 1);
                    // save to local state (notes)
                    setNotes(newNotes);
                    // save to local storage
                    setItem('notes', newNotes);
                }
                //using index for prop key
                return <Row key={index} note={note} index={index} onDelete={deleteNote} />
            })}
            <AwesomeButton
                type="primary"
                onPress={() => (history.push('/pages/AddNote'))}
            >Add Note</AwesomeButton>
        </div>
    )
}