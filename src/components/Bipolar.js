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
              Bipolar
                <h1 className="secondary-header">
                Bipolar&dArr;
                  <br></br>
                  <span className="secondary-header--sub">
                  TREATMENT CAN HELP BIPOLAR DISORDER

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
<h2 className="anxiety__primary-text">BIPOLAR DISORDER</h2>
</div>
<p className="anxiety__right--paragraph">
Maybe you’ve heard the term bipolar used to describe someone who has mood swings or often gets moody. This use of the term is an impropriate simplification of symptoms and misunderstanding of a serious medical illness.  Bipolar disorder, which used to be categorized as manic depression, is a chronic mental health condition that can cause a person to have dramatic shifts in their energy levels, moods and emotions for prolonged periods of times.
</p>

<p className="anxiety__right--paragraph">
These shifts happen from extreme lows of depression to extreme highs referred to as mania and can last several days or weeks. In a low state, a person can feel hopeless, empty, and sad.  Bipolar disorder is different from depression in that a person experiencing a high or manic state can feel overly excited, optimistic, and euphoric.
</p>



           </div>
         </div>






         <div className="anxiety__first-content anxiety__first-content--reversed">

<div className="anxiety__left anxiety__right--big-padding">
<div className="anxiety__right--header">
<h4 className="anxiety__sub-text">BIPOLAR DISORDER</h4>
<h2 className="anxiety__primary-text">EFFECTS IN EVERY DAY LIFE</h2>
</div>
<p className="anxiety__right--paragraph">
This imbalance and inability to control ones shift in their mental state is often disabling to the individual, and can lead to medical emergencies, so it is important to identify the symptoms and seek professional treatment.</p>

<p className="anxiety__right--paragraph">
Common signs and symptoms of Bipolar disorder include:
</p>

<ul className="anxiety__lists">
<div className="u-margin-small">
<li className="anxiety__lists--list">Feeling unusually “high” and optimistic OR extremely irritable</li>
<li className="anxiety__lists--list">Unrealistic, grandiose beliefs about one’s abilities or powers</li>
<li className="anxiety__lists--list">Insomnia</li>
<li className="anxiety__lists--list">Talking so rapidly that others can’t keep up</li>
<li className="anxiety__lists--list">Racing thoughts</li>
<li className="anxiety__lists--list">Highly distractible, unable to concentrate</li>
<li className="anxiety__lists--list">Impaired judgment and impulsiveness</li>
<li className="anxiety__lists--list">Acting recklessly without thinking about the consequences</li>
<li className="anxiety__lists--list">Delusions and hallucinations (in severe cases)</li>
</div>
 <a onClick={()=>props.setboxModalState(true)}  href="#" className="secondary-header__link">
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
<h4 className="anxiety__sub-text">BIPOLAR DISORDERS</h4>
<h2 className="anxiety__primary-text">HELP & HEALING</h2>
</div>
<p className="anxiety__right--paragraph">
Royal Minds has a team of highly trained medical professionals that specialize in treating bipolar disorder. 
</p>

<p className="anxiety__right--paragraph">
Our treatment programs are designed to address each individual’s needs to manage their bipolar disorder, enabling them to recover in a way that is deep-rooted and long-lasting.
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