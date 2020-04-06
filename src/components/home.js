import React from 'react';
import video from "../img/Factory2.mp4";
import border from "../img/border.png";
const home = (props) => {
console.log(props, "props")
  return (
   
    <div className="content">
    <div className="video">
      <div className="video__background">
        <video className="video__content" autoPlay muted loop>
          <source src={video} type="video/mp4"></source>
          no video
        </video>
        <div className="primary-header__box">
          <h1 className="primary-header">
            mental health & eating disorder
            <br></br>
            <span className="primary-header--sub">
              treatment for adults
            </span>
          </h1>
          <div className="btn-container">
            <a className="btn btn-transparent">call now</a>
            <a onClick={()=>props.setboxModalState(true)} className="btn btn-transparent">Insurance</a>
          </div>
        </div>
      </div>
    </div>
    <main className="main">
      <div className="u-margin-medium">
        <section className="meadow">
          <div className="text-background">
            <div className="u-margin-small">
              <h1 className="text-background__fade-h1">
                Welcome
                <h1 className="secondary-header">
                  THE MEADOWGLADE
                  <br></br>
                  <span className="secondary-header--sub">
                    MENTAL HEALTH & EATING DISORDER TREATMENT
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
        </section>{" "}
        <section className="meadow__container">
          <div className="meadow__content">
            <div className="meadow__content--left">
              <video  className="meadow__content--left__video" controls>
                <source src="mov_bbb.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
            <div className="meadow__content--right">
              <div className="meadow__content--right__text">
                <div className="u-margin-small">
                  <p className="meadow__paragraph">
                    The Meadowglade is an Outpatient Rehabilitation Center
                    specializing in Mental Health and Eating Disorders.
                    Located in Moorpark, California, The Meadowglade fosters
                    an environment of wholesome healing, supporting the
                    transition back to a self-sufficient harmonious
                    lifestyle.
                  </p>
                  <br></br>
                  <div className="u-margin-medium ">
                    <p className="meadow__paragraph">
                      The Meadowglade also offers nearby optional housing on
                      a private 24-acre estate of rolling hills, secret
                      gardens, avocado groves, fruit orchards, and sprawling
                      pastures..
                    </p>
                  </div>
                  <div className="u-margin-small">
                    <div className="meadow__paragraph--sub">
                      <p>
                        Call now to learn more about The Meadowglade: (888)
                        272-2062
                      </p>{" "}
                    </div>{" "}
                  </div>
                  <div className="u-text-center">
                    <h1 className="secondary-header--sub">
                      <a href="#"  onClick={()=>{props.setboxModalState(true) ;props.useLockBodyScroll()}} className="secondary-header__link">
                        {" "} 
                        Verify Insurance
                      </a>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="text-background__img-parent">
        <img src={border} className="text-background__img-parent__item" />
      </div>

      <section className="three-Cards">
        <div className="cards__container">
          <div className="cards__item cards__item--1">
            <h1 className="cards__text ">
              Mental <br></br>Health
              <p className="cards__more-info ">hover for more information</p>
              <p className="cards__info">
              Mental health affects the way we view ourselves and those around us. Our mental health helps us to understand our wellbeing in the environments in which we dwell, and helps us to decode the way we behave, think and feel. Mental health issues can affect any person at any age and at any time. A heavy workload, the death of a loved one, or even having a baby can cause an individual to experience mental distress.
              </p>
            </h1>
          </div>
          <div className="cards__item cards__item--2">
            <h1 className="cards__text">
             EATING  <br></br> DISORDER
              <p className="cards__more-info ">hover for more information</p>
              <p className="cards__info">
              The Meadowglade specializes in the treatment of eating disorders. Our professional team uses a variety of treatment modalities including acceptance and commitment therapy, medical nutrition therapy, meal support therapy, exposure and response prevention therapy, nutrition counseling. All of our eating disorder-specific therapies are used concurrently with all of our other mental health modalities.
              </p>
            </h1>
          </div>
          <div className="cards__item cards__item--3">
            <h1 className="cards__text">
              OUR  <br></br> TREATMENT
              <p className="cards__more-info ">hover for more information</p>
              <p className="cards__info">
              At The Meadowglade our adult treatment programs are designed to facilitate and encourage clients to reach a point of sustainable wellness, personal responsibility, and overall success. Practitioners assist and guide clients to re-discover healthy activities, career goals and life interests to re-channel energies in a positive and nurturing direction.
              </p>
            </h1>
          </div>
        </div>
      </section>
      <div className="text-background__img-parent">
        <img src={border} className="text-background__img-parent__item" />
      </div>

      <section className="form">
<form action="" className="form__container">

<div className="u-margin-small">
              
                <h1 className="form__header">
                  Contact Form
                
                  <div className="form__img-container">
                    <img
                      src={border}
                      className="form__img"
                    />
                  </div>
                </h1>
            
            </div>

<div className="form__content">
<div className="form__left">
<p 
className="form__paragraph u-text-left">At The Meadowglade, we help you navigate through mental health challenges so that you are able to live a healthy, happy life.</p>


<p 
className="form__paragraph u-text-center">Click our phone number to call us, or simply request a callback.</p>

<h1 className="form__num u-text-center">(888) 272-2062</h1>
</div>
<div className="form__right">
<input type="text" placeholder="name" className="form__input"/>
<input type="text" placeholder="phone" className="form__input"/>
<input type="text" placeholder="email" className="form__input"/>
<textarea  cols="30" className="form__input" rows="10" placeholder="email" ></textarea>


</div>



</div>

</form>


      </section>
    </main>
  </div>
  );
};

export default home;