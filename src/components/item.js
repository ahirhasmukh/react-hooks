import React from "react";
import "./item.scss";

function item(props) {
  return (
    <div>
      <div className="calery-list">
        {props.editable ? <input defaultValue={props.name} onKeyPress={(e) => props.onUpdateValue(e, props.index)} /> : <h3 onDoubleClick={props.onEditEvent}>{props.name}</h3>}
        <h3>{props.calorie}</h3>
        <button
          type="button"
          name={props.name}
          className="remove-button"
          onClick={props.onRemoveEvent}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default item;
