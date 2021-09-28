import React from 'react';

const CallToAction = ({ cta, style} ) => {

  return(
        <div className="call-to-action" style={style}>
          <h2>{cta}</h2>
          <button>LET'S TALK. <span>&#187;</span></button>
        </div>
  );
};

export default CallToAction;