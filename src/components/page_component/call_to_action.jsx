import React from 'react';

const CallToAction = ({ cta, party, style} ) => {

  return(
        <div className="call-to-action" style={style}>
          <h2>{cta}</h2>
          <button>LET'S TALK.</button>
        </div>
  );
};

export default CallToAction;