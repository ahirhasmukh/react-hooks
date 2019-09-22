import React from "react";

function nameTag(props) {
  if (!props.firstName && !props.firstName) {
    return <h3 className="name">Invalid </h3>;
  }
  return (
    <div className="name">
      <h3 style={props.style}>First Name: {props.firstName}</h3>
      <h3 style={props.style}>Last Name: {props.lastName}</h3>
      {props.firstName === 'Hasmukh' && <div style={{color:"green"}}>VIP</div>}
    </div>
  );
}

export default nameTag;
