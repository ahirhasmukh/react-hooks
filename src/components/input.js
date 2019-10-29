import React from 'react';

function Input({placeholder, type, inlineStyle, onKeyDown, id}, ref) {
    return <input ref={ref} id={id} placeholder={placeholder} type={type} onKeyDown={onKeyDown} style={inlineStyle} />
}

const ref = React.forwardRef(Input);

export default ref;