import React from "react";
import ReactDOM from "react-dom";
// props  allow you to pass data from a parent (wrapping) component to a child (embedded) component.
function Card(props) {
// The Card  component receives the props  argument. 
// React will pass one argument to your component function => An object, which contains all properties you set up on <Card ... /> .
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.image} alt="" />
      <p>{props.tel}</p>
      <p>{props.mail}</p>
    </div>
  );
}
ReactDOM.render(
  <div>
    <h1> My Contacts: </h1>
    <Card
      // It takes only properties, styling isn't working
      // Here, name  is the custom property (prop ) set up on the custom Card  component and so on.
      name="Beyonce"
      image="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 456 789"
      mail="b@beyonce.com"
    />
  </div>,
  document.getElementById("root")
);
