import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Navbar} from './Navbar';
import './style.css';

export class NewsletterPage extends Component {

    render() {
        return (
        	<div id="">
                <div className="jsx-2056276702 jsx-1911633988 jsx-69185930 app">
		            <div className="jsx-2273447538 navbar">
	                    <Navbar/>
	                </div>
	                <div className="stump">
	                    <h1 className="stump__heading">To begin, please enter your email address.</h1>
	                    <div className="stump__action-container">
		                    <p className="stump__dek"> <strong>If you have an account, we'll get you signed in. If not, we'll help you set one up.</strong></p>
		                    <div className="stump__form">
			                    <form>
			                    	<input className="stump__subscribe-input" name="email" placeholder="Enter your email"/>
			                    	<input className="stump__subscribe-btn stump__subscribe-btn--text" type="submit" value="Continue"/>
			                    </form>
		                    </div>
	                    </div>
	                </div>
	            </div>
	        </div>
        );
    }
}
