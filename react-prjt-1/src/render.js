import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from './redux/state';
import {addPost} from './redux/state';
import { BrowserRouter } from 'react-router-dom';



export let rerenderEntireTree = () => {

    ReactDOM.render(

        <BrowserRouter>
            <App state={state} addPost={addPost} />
        </BrowserRouter>, document.getElementById('root'));

};

