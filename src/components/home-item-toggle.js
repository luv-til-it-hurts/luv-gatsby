import React, { useState } from 'react';

function HomeItemToggle({image, text}) {

  const [isShown, setIsShown] = useState(false);

  return (
    <div style={isShown ? {border:'13x green'}: null}
    onMouseEnter={() => setIsShown(true)}
    onMouseLeave={() => setIsShown(false)} >
    <img
    className="homegrid-icon"
    style={isShown ? {display:'none'}: null}
     src={image}
     alt={text}
    />
    <span className="homegrid-icon text" style={isShown ? {display:'block'}: {display:'none'}}>{text}</span>
    </div>

  );
}

export default HomeItemToggle;
