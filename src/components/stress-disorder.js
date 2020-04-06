import React from 'react';
import border from "../img/border.png";
import firstImg from "../img/axnsiaty.jpg"
const Stress = (props) => {
  return (
    <div>
          <section id="meadow" className="meadow meadow--background">
          <div className="text-background">
            <div className="u-margin-small">
              <h1 className="text-background__fade-h1">
              STRESS
                <h1 className="secondary-header">
                ACUTE STRESS&dArr;
                  <br></br>
                  <span className="secondary-header--sub">
                  TREATMENT CAN HELP ACUTE STRESS DISORDER


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
Acute stress disorder or ASD is when a person experiences mental health distress immediately after a traumatic event.   ASD shares similar causes and symptoms with PTSD but differentiates from PTSD in that it is temporary and typically only lasts 3 to 30 days
</p>




           </div>
         </div>






         <div className="anxiety__first-content anxiety__first-content--reversed">

<div className="anxiety__left anxiety__right--big-padding">
<div className="anxiety__right--header">
<h4 className="anxiety__sub-text">STRESS DISORDER</h4>
<h2 className="anxiety__primary-text">EFFECTS IN EVERY DAY LIFE</h2>
</div>
<p className="anxiety__right--paragraph">
ASD occurs after an individual experience’s traumatic events such as such as a car accident, a mugging, sexual assault, domestic abuse, war, and natural disasters.  A person with ASD  experiences similar symptoms as other stress disorders like recurring thoughts of traumatic events, negative thinking, an altered sense of reality, avoidance stress triggers, difficulty sleeping and irritability and aggression.</p>



 <a href="#" className="secondary-header__link" onClick={()=>props.setboxModalState(true)} >
                        {" "}
                        Verify Insurance
                      </a>

 
</div>
<div className="anxiety__right ">

<img src={firstImg} alt="" className="anxiety__img"/>

</div>
</div>









<div className="anxiety__first-content">

<div className="anxiety__left">

<img src={firstImg} alt="" className="anxiety__img"/>

</div>
<div className="anxiety__right anxiety__right--big-padding">
<div className="anxiety__right--header">
<h4 className="anxiety__sub-text">STRESS DISORDER</h4>
<h2 className="anxiety__primary-text">HELP & HEALING</h2>
</div>
<p className="anxiety__right--paragraph">
The Meadowglade offers individualized treatment for ASD.  Our treatment program is focused on managing the effects of your trauma in you and your family’s lives so that you can recover and prevent your acute symptoms from developing into a long-term condition like PTSD.
</p>



<a href="#" className="secondary-header__link">
                        {" "}
                      Contact
                      </a>
</div>
</div>



          </div>

          </div>


        </section>
    </div>
  );
};

export default Stress;