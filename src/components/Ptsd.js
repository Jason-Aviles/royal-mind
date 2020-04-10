import React from 'react';
import border from "../img/border.png";
import firstImg from "../img/axnsiaty.jpg"
const Ptsd = (props) => {
  return (
    <div>
          <section id="meadow" className="meadow meadow--background">
          <div className="text-background">
            <div className="u-margin-small">
              <h1 className="text-background__fade-h1">
              PTSD
                <h1 className="secondary-header">
                PTSD&dArr;
                  <br></br>
                  <span className="secondary-header--sub">
                  TREATMENT CAN HELP PTSD

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
<h2 className="anxiety__primary-text">PTSD</h2>
</div>
<p className="anxiety__right--paragraph">
Post-traumatic stress disorder, also called PTSD, is a stress-driven disorder that happens when a memory of a past traumatic event like a sexual assault or war, causes recurring mental and physical distress. The main symptoms of PTSD are psychological and can occur concurrently with depression, substance abuse, and anxiety disorders.
</p>

<p className="anxiety__right--paragraph">
A person suffering from PTSD re-experience their trauma through flashbacks, nightmares and intrusive thoughts that can lead to behavioral changes, such as avoiding a place or situation that reminds them of their trauma.
</p>



           </div>
         </div>






         <div className="anxiety__first-content anxiety__first-content--reversed">

<div className="anxiety__left anxiety__right--big-padding">
<div className="anxiety__right--header">
<h4 className="anxiety__sub-text">PTSD</h4>
<h2 className="anxiety__primary-text">EFFECTS IN EVERY DAY LIFE</h2>
</div>
<p className="anxiety__right--paragraph">
These intrusive thoughts cause a person suffering from PTSD to feel intense anxiety, or hyper-arousal, where they have a heightened response which can happen with what are seemingly minor triggers to someone who does not have PTSD.  PTSD can lead to trouble sleeping, irritability and angry outbursts.</p>

<p className="anxiety__right--paragraph">
PTSD signs and symptoms include:


</p>

<ul className="anxiety__lists">
<div className="u-margin-small">
<li className="anxiety__lists--list">Agitation, irritability, and hostile outbursts</li>
<li className="anxiety__lists--list">Hypervigilance</li>
<li className="anxiety__lists--list">Self-destructive behavior</li>
<li className="anxiety__lists--list">Flashbacks of traumatic events</li>
<li className="anxiety__lists--list">Fear or feeling easily startled</li>
<li className="anxiety__lists--list">Unable to experience joy and pessimistic view of the future</li>
<li className="anxiety__lists--list">Difficulty falling or staying asleep</li>
<li className="anxiety__lists--list">Inability to be happy</li>
<li className="anxiety__lists--list">Detachment and lack of emotions or feelings</li>
<li className="anxiety__lists--list">Lack of Interest in activities once enjoyed</li>
<li className="anxiety__lists--list">Avoidance of people, places and events that are triggers</li>
</div>
 <a href="#" className="secondary-header__link" onClick={()=>props.setboxModalState(true)} >
                        {" "}
                        Verify Insurance
                      </a>
</ul>
 
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
<h4 className="anxiety__sub-text">PTSD</h4>
<h2 className="anxiety__primary-text">HELP & HEALING</h2>
</div>
<p className="anxiety__right--paragraph">
Royal Minds offers personalized treatment and support for individuals suffering with PTSD.  Our treatment program helps a person with PTSD understand their trauma in a supportive and safe environment to reduce flashbacks and nightmares.  In treatment individuals are taught coping strategies to deal with their PTSD, giving them the tools to deal with any future trauma to ensure long term recovery
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

export default Ptsd;