import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { porscheContentAreaCommunicator } from '@myporsche/content-area-communicator';

const onMessage = (event) => {
    console.log('msg received');
    if(!event || !event.data) {
        return;
    }
    const data = event && event.data;
    console.log(data);
}

// listen for post message of parent window
// eslint-disable-next-line no-undef
// sent post message to parent window that the iframe application can handle and wants post message by parent window
porscheContentAreaCommunicator.contentAreaInitialized();

// sent post message to parent window that the iframe is fully loaded and ready to show its content
porscheContentAreaCommunicator.contentAreaReady();

window.addEventListener("message", onMessage);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


