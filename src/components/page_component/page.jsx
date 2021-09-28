import React from 'react';
import PreloadImage from 'react-preload-image';
import { animated } from 'react-spring';
import CallToAction from './call_to_action';

//animating the CallToAction Component using react-spring
const AnimatedCallToAction = animated(CallToAction);

const Page = ({ pageData, style, callToActionStyle }) => {

  return(
    <section className="page-section">
      <div className="heads" style={style}>
        <h1 className="headline">{pageData.headline}</h1>
        <h3 className="subhead">{pageData.subhead}</h3>
      </div>
      {/* passing down the callToActionStyle from useSpring to AnimatedCallToAction because the styling is unique */}
      <AnimatedCallToAction cta={pageData.cta} style={callToActionStyle} />
      {/* lazy loading the background  */}
      <PreloadImage className="page-background-img" src={`background_pics/${pageData.background}`} lazy />
    </section>
  )

}



export default Page;