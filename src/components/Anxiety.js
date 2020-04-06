import React from 'react';
import border from "../img/border.png";
import firstImg from "../img/axnsiaty.jpg"
import {Link} from "react-router-dom"
const Anxiety = (props) => {
  return (
    <div>
          <section id="meadow" className="meadow meadow--background">
          <div className="text-background">
            <div className="u-margin-small">
              <h1 className="text-background__fade-h1">
              Anxiety
                <h1 className="secondary-header">
                Anxiety&dArr;
                  <br></br>
                  <span className="secondary-header--sub">
                  TREATMENT CAN HELP ANXIETY DISORDERS

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
<h2 className="anxiety__primary-text">ANXIETY</h2>
</div>
<p className="anxiety__right--paragraph">
Most people have experienced anxiety at one time or another. Anxiety is normal and can be caused by any stressful life event. If you’ve ever had a big presentation at work, had a major expense due, gone through a divorce, or received bad news about a friend or family, you’ve probably experienced anxiety.
</p>

<p className="anxiety__right--paragraph">
Sometimes, anxiety can get in the way of your everyday routine. When anxiety gets in the way, you may feel your heart rate increase and you may feel a sudden, intense sense of fear. Everyone experiences anxiety, but when it happens frequently and disproportionately you may have an anxiety disorder.
</p>

<p className="anxiety__right--paragraph">
Anxiety disorders can impact your relationship with your colleagues, spouse, friends and family, and can interfere with your ability to function in your everyday life. Anxiety disorders can cause panic attacks, which are unpleasant episodes of sudden intense fear that comes to a head within minutes.
</p>

           </div>
         </div>






         <div className="anxiety__first-content  anxiety__first-content--reversed  ">

<div className="anxiety__left anxiety__right--big-padding">
<div className="anxiety__right--header">
<h4 className="anxiety__sub-text">ANXIETY'S</h4>
<h2 className="anxiety__primary-text">EFFECTS IN EVERY DAY LIFE</h2>
</div>
<p className="anxiety__right--paragraph">
At The Meadowglade, we treat anxiety disorders with a variety of therapeutic treatments that help you manage your anxiety, as well as work through the root cause of your anxiety and identify any triggers.
</p>

<p className="anxiety__right--paragraph">
Common anxiety symptoms include:
</p>

<ul className="anxiety__lists">
<div className="u-margin-small">
<li className="anxiety__lists--list">Feeling nervous, restless or tense</li>
<li className="anxiety__lists--list">Having a sense of impending danger, panic or doom</li>
<li className="anxiety__lists--list">Having an increased heart rate</li>
<li className="anxiety__lists--list">Breathing rapidly (hyperventilation)</li>
<li className="anxiety__lists--list">Sweating</li>
<li className="anxiety__lists--list">Trembling</li>
<li className="anxiety__lists--list">Feeling weak or tired</li>
<li className="anxiety__lists--list">Trouble concentrating or thinking about anything other than the present worry</li>
<li className="anxiety__lists--list">Having trouble sleeping</li>
<li className="anxiety__lists--list">Experiencing gastrointestinal (GI) problems</li>
<li className="anxiety__lists--list">Having difficulty controlling worry</li></div>
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
<h4 className="anxiety__sub-text">ANXIETY DISORDERS</h4>
<h2 className="anxiety__primary-text">HELP & HEALING</h2>
</div>
<p className="anxiety__right--paragraph">
At The Meadowglade, our caring staff of mental health professionals is passionate about your mental health journey and wellbeing.
</p>

<p className="anxiety__right--paragraph">
Our treatment is personalized and unique to you so that you are empowered with the emotional strength and the confidence to manage your anxiety in the long term.
</p>

<p className="anxiety__right--paragraph">
Anxiety disorders can impact your relationship with your colleagues, spouse, friends and family, and can interfere with your ability to function in your everyday life. Anxiety disorders can cause panic attacks, which are unpleasant episodes of sudden intense fear that comes to a head within minutes.
</p>
<Link to="/contact/#top" className="secondary-header__link">
                        {" "}
                      Contact
                      </Link>
</div>
</div>



          </div>

          </div>


        </section>
    </div>
  );
};

export default Anxiety;