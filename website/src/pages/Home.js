import {useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';
import ListHomes from "./ListHomes"

export default function Home() {
    
    return (
        
    <div className="App">
        <header className="App-header">
            <h1>
                Vacant Homes
            </h1>
            <p>
                Find your next investment. Send an offer. All in one platform.
            </p>
            <input></input>
            <button>Search</button>
            
           
        </header>
    </div>
    );
}