import React from 'react';
import border from "../img/border.png";
import firstImg from "../img/axnsiaty.jpg"
const Faqs = (props) => {
  return (
    <div>
          <section id="meadow" className="meadow meadow--background">
          <div className="text-background">
            <div className="u-margin-small">
              <h1 className="text-background__fade-h1">
              FAQS
                <h1 className="secondary-header">
                FAQS&dArr;
                  <br></br>
                  <span className="secondary-header--sub">
                  ALL OF YOUR QUESTIONS ANSWERED

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
<h4 className="anxiety__sub-text">BALANCE YOUR EVERYDAY</h4>
<h2 className="anxiety__primary-text">HEALING & GROWTH</h2>
</div>
<p className="anxiety__right--paragraph">
Q. Will insurance cover my treatment?
</p>

<p className="anxiety__right--paragraph">
A. Insurance will cover all clinical treatment and clinical programming at Royal Minds. For more specific information, please contact Royal Minds staff.


</p>

<p className="anxiety__right--paragraph">
Q. How can I visit, tour or travel to Royal Minds?
</p>

<p className="anxiety__right--paragraph">
A. Royal Minds is located in Moorpark, California. Our dedicated team will be happy to organize a tour of our facility housing and clinical programming, as well as speak to you about convenient travel options and pick up services for clients driving to our facility, and/or flying in from other States.
</p>

<a href="#" className="secondary-header__link" onClick={()=>props.setboxModalState(true)} >
                        {" "}
                      Verify
                      </a>

           </div>
         </div>






         <div className="anxiety__first-content anxiety__first-content--reversed">

<div className="anxiety__left anxiety__right--big-padding">
<div className="anxiety__right--header">
<h4 className="anxiety__sub-text">INDEPENDENT & PRIVATE</h4>
<h2 className="anxiety__primary-text">CUSTOMIZED TREATMENT</h2>
</div>
<p className="anxiety__right--paragraph">
Q. Will Royal Minds facilitate and support my ability to continue working/studying?
</p>

<p className="anxiety__right--paragraph">
A. Yes, our programming at Royal Minds is structured to balance ongoing work/study schedules, and/or the ability to apply for career/study options.
</p>

<p className="anxiety__right--paragraph">
Q. As an adult struggling with mental health or eating disorders, will I have independent and private space/time at Royal Minds?
</p>

<p className="anxiety__right--paragraph">
A. Yes, our daily clinical programming is therapeutically customized to suit your individual needs and uniquely cater to your specific challenges. Additionally, our housing provides grand indoor and outdoor spaces for independent living and dining, as well as beautiful private areas for meditation, nature walks, reading/music/art, animal bonding, fruit picking, sports, and leisure.
</p>




<a href="#" className="secondary-header__link">
                        {" "}
                      Verify
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
<h4 className="anxiety__sub-text">ANXIETY DISORDERS</h4>
<h2 className="anxiety__primary-text">HELP & HEALING</h2>
</div>
<p className="anxiety__right--paragraph">
At Royal Minds, our caring staff of mental health professionals is passionate about your mental health journey and wellbeing.
</p>

<p className="anxiety__right--paragraph">
Our treatment is personalized and unique to you so that you are empowered with the emotional strength and the confidence to manage your anxiety in the long term.
</p>

<p className="anxiety__right--paragraph">
Anxiety disorders can impact your relationship with your colleagues, spouse, friends and family, and can interfere with your ability to function in your everyday life. Anxiety disorders can cause panic attacks, which are unpleasant episodes of sudden intense fear that comes to a head within minutes.
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

export default Faqs;