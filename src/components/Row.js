import React from "react";
import "./styles/Row.css";
import { useHistory } from 'react-router-dom';



export default function Row(props) {


    const history = useHistory();



    function EditThisNote() {
        history.push('/pages/EditNote/' + props.index);
    }

    return (
        <div className="Row">

            {/* div to click to edit note */}
            <div onClick={() => EditThisNote()}>

                <div>{props.index + 1} - {props.note.title}</div>
            </div>

            {/* button to delete note */}
            <button
                className="delete-button"
                onClick={props.onDelete}
            >Delete</button>
        </div>
    )
}