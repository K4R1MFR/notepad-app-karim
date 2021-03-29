import React from "react";
import logo from "../logoNotepad.PNG";
import "./styles/Header.css";
import {
    removeItem
} from '../services/storage';
import { useHistory } from 'react-router-dom';
import { AwesomeButtonProgress } from 'react-awesome-button';
import { AwesomeButtonCssModule } from 'react-awesome-button/dist/themes/theme-rickiest.css';





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
            <img src={logo} alt="karim notepad app logo" />
            <AwesomeButtonProgress 
                loadingLabel='Clearing...'
                resultLabel='All Cleared!'
                size='medium'
                type='secondary'
                cssModule={AwesomeButtonCssModule}
                disabled={false}
                fakePress={false}
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