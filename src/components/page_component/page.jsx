import React from 'react';
import PreloadImage from 'react-preload-image';
import { animated } from 'react-spring';
import CallToAction from './call_to_action';

const AnimatedCallToAction = animated(CallToAction);

const Page = ({ pageData, style, callToActionStyle }) => {

  return(
    <section className="page-section">
      <div className="heads" style={style}>
        <h1 className="headline">{pageData.headline}</h1>
        <h3 className="subhead">{pageData.subhead}</h3>
      </div>
      <AnimatedCallToAction cta={pageData.cta} style={callToActionStyle} />
      <PreloadImage className="page-background-img" src={`background_pics/${pageData.background}`} lazy />
    </section>
  )

}



export default Page;