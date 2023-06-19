import React from 'react';
import './index.css';

const Tooltip = (props) => {

    var position = props.position;
  
    return (
    <div className='visible-component'>
            Hover over me!
      <div className={`tool-tip tooltip-${position}`} >
            Thanks for hovering! I'm a tooltip
      </div>
    </div>

    
  );
};

export default Tooltip;