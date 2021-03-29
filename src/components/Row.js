import React from "react";
import "./styles/Row.css";
import { useHistory } from 'react-router-dom';



export default function Row(props) {


    const history = useHistory();



    function EditThisNote(){
        history.push('/pages/EditNote/' + props.index);
    }

    return(
        <div className="Row">

            {/* div to click to edit note */}
            <div onClick={() => EditThisNote()}>

                <h3>{/*{props.note.id} - */}# {props.note.title}</h3>
            </div>

        {/* button to delete note */}
        <button
            onClick={props.onDelete}
        >Delete</button>
        </div>
    )
}