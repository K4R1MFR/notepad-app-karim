import React from "react";
import logo from "../logoNotepad.PNG";
import "./styles/Header.css";
import {
    removeItem
} from '../services/storage';
import { useHistory } from 'react-router-dom';
import { AwesomeButton, AwesomeButtonProgress } from 'react-awesome-button';
import AwesomeButtonCssModule from 'react-awesome-button/dist/styles.css';



export default function Header(){

    const history = useHistory();

    function ClearAll(){
        removeItem('notes');
        history.push('/');
        window.location.reload();
    }

    return(
        <header className="Header">
            {/* <h1>NotePad App</h1> */}
            <img src={logo} />
            <AwesomeButtonProgress 
                loadingLabel='Clearing...'
                resultLabel='All Cleared!'
                size='medium'
                type='secondary'
                disabled={false}
                fakePress={false}
                cssModule={AwesomeButtonCssModule}
                onPress={(element, next) => {
            
                    setTimeout(() => {
                    ClearAll();
                    next();
                    }, 1000);
                }}
                >
                Clear All
           </AwesomeButtonProgress>
        </header>
    )
}