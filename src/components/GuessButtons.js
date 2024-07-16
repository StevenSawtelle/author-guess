import React from 'react';
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'


const GuessButtons = ({ onGuess }) => (
    <div className={'guess-buttons'}>
        <button className={'male'} onClick={() => onGuess('male')}>Male</button>
        <button className={'female'} onClick={() => onGuess('female')}>Female</button>
        <a data-tooltip-id="my-tooltip" data-tooltip-content="All authors currently available are strictly Male/Female!">
            <button className={'neither'} disabled title="Not available yet">Neither</button>
        </a>
        <Tooltip id="my-tooltip"/>
    </div>
);

export default GuessButtons;
