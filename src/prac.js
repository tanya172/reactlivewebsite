// var React = require('react');
import React from 'react'; //modern JS code for bable &&&****react should be there on the scope then only we can use jsx
// var ReactDOM = require('react-dom');
import ReactDOM from 'react-dom';

// ReactDOM.render('what to show','where to show','callback func');
ReactDOM.render( <h1>Heylo </h1>, document.getElementById('root') ); //the code wriiten here is in jsx format
 
// ******writing the above code in pure JS ****

var h1 = document.createElement('h1');
h1.innerHTML = "Hey";
document.getElementById('root').appendChild(h1);

// *******USing multiple elements inside render******

ReactDOM.render(
  <div>
    <h1>Hey</h1>
    <p>where have you been?</p>
    <h2>you were missed</h2>
  </div>,
  document.getElementById("root")
);


// *****foollloeing code shows that element can be printed ny using array format
ReactDOM.render(
  [
    <h1>Hey</h1>,
    <p>where have you been?</p>,
    <h2>you were missed</h2>,
  ],
  document.getElementById("root")
);

// *****React fragment***

ReactDOM.render(
  <React.Fragment>
    <h1>Hi</h1>
    <p>where have you been?</p>
    <h2>we called you</h2>
  </React.Fragment>,
  document.getElementById("root")
);

// ***2nd tut to learn to make a list************

ReactDOM.render(
  <React.Fragment>
      <h1>Tanya's Netflix Pick</h1>
      <p>The list of shows I love to watch</p>
      <ol>
        <li>Friends</li>
        <li>Vampire Diaries</li>
        <li>Big Bang Theory</li>
      </ol>
  </React.Fragment>,
  document.getElementById("root")
);

//******3rs tut to use JS elemnet in html this can be done using "{}N" only expression can be used as elements statements 
//********such as if,else cant be used ******* */

import React from "react";
import ReactDOM  from "react-dom";

const fname= "Tanya";
const lname= "Verma";
const x = "react";
const y = ".js";

ReactDOM.render(
  <React.Fragment>
    
   <h1> Hello my name is {fname} {lname}</h1>
   <h2>I am learning {x + " " + y}</h2>
   <p>my lucky number is {2+3}</p>
   <p>here is a random number {Math.random()}</p>
  </React.Fragment>,document.getElementById('root')

);

// ******using template literals****

import React from "react";
import ReactDOM  from "react-dom";

const fname= "Tanya";
const lname= "Verma";
const x = "react";
const y = ".js";

ReactDOM.render(
  <React.Fragment>
    
   <h1> {`Hello my first name is ${fname}
    and my last name is ${lname}`}</h1>
   <h2>I am learning {x + " " + y}</h2>
   <p>my lucky number is {2+3}</p>
   <p>here is a random number {Math.random()}</p>
  </React.Fragment>,document.getElementById('root')

);

// ****Project to show date and time***

import React from "react";
import ReactDOM  from "react-dom";

const fname= "Tanya";
const lname= "Verma";
const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();


ReactDOM.render(
  <React.Fragment>
    
   <h1 className="heading"> Hello, my name is ${fname} </h1>
  <p> Current Date is = {currDate} </p>
   <p> Current Time is = {currTime} </p>
   
   
  </React.Fragment>,document.getElementById('root')

);
// ****JSX attributes*****

const img3="https://picsum.photos/200/250";
const link='https://pixabay.com/images/search/flowers/';
const img4="https://picsum.photos/300/300";

ReactDOM.render(
  <React.Fragment>
 <h1 contentEditable="true"> hello {user}</h1>  {/* for editing the text in html tag */}
    <h1> {` my name is ${fname} ${lname}`}</h1>
  <img src={img3}alt="randomImage"/>
   <a href={link} target="_blank"> {/*****the anchor tag can be used for this purpose to link for moving on to next page by clicking on the image*/ }
   <img src={img4}alt="randomImage"/></a>
  <p> Current Date is = {currDate} </p>
   <p> Current Time is = {currTime} </p>
   </React.Fragment>,document.getElementById('root')
);

// **********inline css*******

const heading = {
  color : 'rgba(83, 137, 50, 0.762)',
  textTransform : 'capitalize',
  textAlign : 'center',
};

ReactDOM.render(
  <React.Fragment>
 
    <h1 className="heading" style={heading}>
 {` my name is ${fname} ${lname}`}</h1>