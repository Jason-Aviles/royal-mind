import React from 'react';
import border from "../img/border.png";
import firstImg from "../img/axnsiaty.jpg"
const About = () => {
  return (
    <div>
          <section id="meadow" className="meadow meadow--background">
          <div className="text-background">
            <div className="u-margin-small">
              <h1 className="text-background__fade-h1">
              ABOUT
                <h1 className="secondary-header">
                ABOUT-US&dArr;
                  <br></br>
                  <span className="secondary-header--sub">
                  PROFESSIONAL TEAM & REPUTABLE TRACK RECORD


                  </span>
                  <div className="text-background__img-parent">
                    <img
                      src={border}
                      className="text-background__img-parent__item"
                    />
                  </div>
                </h1>
              </h1>
            </div>
          </div>
          <div className="anxiety">
          <div className="anxiety__contents">
         <div className="anxiety__first-content">

           <div className="anxiety__left">

           <img src={firstImg} alt="" className="anxiety__img"/>

           </div>
           <div className="anxiety__right anxiety__right--big-padding">
           <div className="anxiety__right--header">
<h4 className="anxiety__sub-text">DEFINING</h4>
<h2 className="anxiety__primary-text">STRESS DISORDER</h2>
</div>
<p className="anxiety__right--paragraph">

Royal Minds is an outpatient rehabilitation center specializing in mental health and eating disorders.
</p>

<p className="anxiety__right--paragraph">

Located in 3719 E Baltimore St, Baltimore, MD 21224, Royal Minds fosters an environment of wholesome healing, supporting the transition back to a self-sufficient harmonious lifestyle
</p>
<p className="anxiety__right--paragraph">

Royal Minds also offers nearby optional housing on a private 24-acre estate of rolling hills, secret gardens, avocado groves, fruit orchards, and sprawling pastures.
</p>



           </div>
         </div>






         <div className="anxiety__first-content">

<div className="anxiety__left anxiety__right--big-padding">
<div className="anxiety__right--header">
<h4 className="anxiety__sub-text">Royal Minds</h4>
<h2 className="anxiety__primary-text">OUR MISSION</h2>
</div>
<p className="anxiety__right--paragraph">
Royal Minds’s mission is to help our clients achieve an independent work-life balance by following the therapeutic principles of benefitting mind, body and spirit, to maximize the quality of life in every way.  </p>

<p className="anxiety__right--paragraph">
During the 30-90 days of  treatment we aim to ensure that all states of being are nurtured in a healing environment that is both multi-layered and multi-faceted to enable recovery that is deep-rooted, wholesome and long-lasting.  </p>



 
</div>
<div className="anxiety__right ">

<img src={firstImg} alt="" className="anxiety__img"/>

</div>
</div>









<div className="anxiety__first-content anxiety__first-content--reversed">

<div className="anxiety__left">

<img src={firstImg} alt="" className="anxiety__img"/>

</div>
<div className="anxiety__right anxiety__right--big-padding">
<div className="anxiety__right--header">
<h4 className="anxiety__sub-text">DEDICATED TO YOUR SUCCESS</h4>
<h2 className="anxiety__primary-text">AFTERCARE</h2>
</div>
<p className="anxiety__right--paragraph">
At Royal Minds we are dedicated to the aftercare of our clients. Upon discharge, we ensure that all clients are organized with appropriate outpatient facilities to continue ongoing support and clinical assistance with respect to all mental health issues and all types of eating disorders.
</p>




</div>
</div>



          </div>

          </div>


        </section>
    </div>
  );
};

export default About;