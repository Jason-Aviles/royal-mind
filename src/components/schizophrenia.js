import React from 'react';
import border from "../img/border.png";
import firstImg from "../img/axnsiaty.jpg"
const Bipolar = (props) => {
  return (
    <div>
          <section id="meadow" className="meadow meadow--background">
          <div className="text-background">
            <div className="u-margin-small">
              <h1 className="text-background__fade-h1">
              schizophrenia
                <h1 className="secondary-header">
                schizophrenia&dArr;
                  <br></br>
                  <span className="secondary-header--sub">
                  TREATMENT CAN HELP SCHIZOPHRENIA


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
<h2 className="anxiety__primary-text">SCHIZOPHRENIA</h2>
</div>
<p className="anxiety__right--paragraph">
Schizophrenia is a serious mental health disorder that is characterized by its severe symptoms that affect an individual’s emotions, behavior and thinking.  Symptoms can include delusions, disorganized speech, and disorganized behavior. 
</p>

<p className="anxiety__right--paragraph">
Delusions are beliefs that a person may feel very strongly about, so much so that they won’t change their mind, even if you give them evidence against it. There are many different examples of this, one being that someone or something is controlling your actions such as a newscaster or celebrity is speaking to them through the TV.
</p>



           </div>
         </div>






         <div className="anxiety__first-content anxiety__first-content--reversed">

<div className="anxiety__left anxiety__right--big-padding">
<div className="anxiety__right--header">
<h4 className="anxiety__sub-text">SCHIZOPHRENIA</h4>
<h2 className="anxiety__primary-text">EFFECTS IN EVERY DAY LIFE</h2>
</div>
<p className="anxiety__right--paragraph">
Disorganized speech can be jumbling words together that don’t have a clear context or meaning. Disorganized behavior, on the other hand, is when a person’s actions don’t fit the situation, like if a person were to wear multiple jackets or sweaters during the summertime.</p>

<p className="anxiety__right--paragraph">
Schizophrenia signs and symptoms include:
</p>

<ul className="anxiety__lists">
<div className="u-margin-small">
<li className="anxiety__lists--list">Avolition. Lack of motivation, inability to follow goal-oriented action.</li>
<li className="anxiety__lists--list">Anhedonia. Inability to experience pleasure.</li>
<li className="anxiety__lists--list">Social withdrawal. No interest in being with other people.</li>
<li className="anxiety__lists--list">Difficulty paying attention</li>
<li className="anxiety__lists--list">Delusions</li>
<li className="anxiety__lists--list">Hallucinations</li>
<li className="anxiety__lists--list">Disorganized Speech</li>
<li className="anxiety__lists--list">Disorganized behavior</li>
<li className="anxiety__lists--list">Disordered Thinking</li>
<li className="anxiety__lists--list">Apathy</li>
<li className="anxiety__lists--list">Affective flattening</li>
<li className="anxiety__lists--list">Alogia</li>
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
<h4 className="anxiety__sub-text">SCHIZOPHRENIA TREATMENT</h4>
<h2 className="anxiety__primary-text">HELP & HEALING</h2>
</div>
<p className="anxiety__right--paragraph">
The Meadowglade offers a variety of therapeutic treatments to make you feel supported and encouraged on your journey towards mental health. Our individualized treatment plans focus on long term health and relapse prevention so that you can recover in a way that is deep-rooted and long-lasting. 
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

export default Bipolar;