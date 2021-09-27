import React from 'react';

const Page = ({ pageData }) => {

    return(
      <section className="page-section">
        <div>
          <h1 className="headline">{pageData.headline}</h1>
          <h3 className="subhead">{pageData.subhead}</h3>
        </div>
        <div className="call-to-action">
          <h2>{pageData.cta}</h2>
          <button>LET'S TALK.</button>
        <img className="page-background-img" src={`/${pageData.background}`} />
        </div>
      </section>
    )

}



export default Page;