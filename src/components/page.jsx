import React from 'react';
import PreloadImage from 'react-preload-image';

const Page = ({ pageData }) => {

    return(
      <section className="page-section">
        <div className="heads">
          <h1 className="headline">{pageData.headline}</h1>
          <h3 className="subhead">{pageData.subhead}</h3>
        </div>
        <div className="call-to-action">
          <h2>{pageData.cta}</h2>
          <button>LET'S TALK.</button>
        </div>
        <PreloadImage className="page-background-img" src={`/${pageData.background}`} lazy />
      </section>
    )

}



export default Page;