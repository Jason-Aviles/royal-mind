import React from 'react';
import border from "../img/border.png";
import firstImg from "../img/axnsiaty.jpg"
const Insurance = (props) => {
  return (
    <div>
          <section id="meadow" className="meadow meadow--background">
          <div className="text-background">
            <div className="u-margin-small">
              <h1 className="text-background__fade-h1">
               ELIGIBILITY
                <h1 className="secondary-header">
                INSURANCE &dArr;
                  <br></br>
                  <span className="secondary-header--sub">
                  THE MEADOWGLADE ACCEPTS INSURANCE FOR ALL CLINICAL TREATMENTS

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
<h4 className="anxiety__sub-text">INSURANCE VERIFICATION PROCESS</h4>
<h2 className="anxiety__primary-text">INSURANCE ELIGIBILITY</h2>
</div>
<p className="anxiety__right--paragraph">
The Meadowglade accepts insurance for all clinical treatment.  Once we obtain your policy information, we will contact your provider to determine your benefits. Upon confirmation, a member of our Admissions Team will contact you to discuss and review your coverage for all of The Meadowglade’s clinical treatment.
</p>

<p className="anxiety__right--paragraph">
The Meadowglade aims to make the insurance verification process as straightforward and transparent as possible. We work with a wide range of insurance providers, accepting nearly all PPO insurance, and we can enter into a single case agreement in the case of HMO insurance. To ensure that our clients’ health and care are not compromised, if there is a shortfall in covered benefits from your insurance carrier for clinical treatment, The Meadowglade has a team of financial experts to assist you and also offers financing options for those with limited or no insurance available for clinical treatment.


</p>

<p className="anxiety__right--paragraph">
Our professional team is here to assist you with any insurance related matters and to facilitate this process in any way possible. To find out if we accept your insurance, please contact us to submit your policy information.
</p>

           </div>
         </div>






         <div className="anxiety__first-content">

<div className="anxiety__left anxiety__right--big-padding">
<div className="anxiety__right--header">
<h4 className="anxiety__sub-text">ASSISTANCE EVERY STEP OF THE WAY</h4>
<h2 className="anxiety__primary-text">ABOUT US</h2>
</div>
<p className="anxiety__right--paragraph">
The Meadowglade is an Outpatient Rehabilitation Center specializing in Mental Health and Eating Disorders. Located in Moorpark, California, The Meadowglade fosters an environment of wholesome healing, supporting the transition back to a self-sufficient harmonious lifestyle.
</p>

<p className="anxiety__right--paragraph">
The Meadowglade also offers nearby optional housing on a private 24-acre estate of rolling hills, secret gardens, avocado groves, fruit orchards, and sprawling pastures.
</p>

<a href="#" className="secondary-header__link" onClick={()=>props.setboxModalState(true)} >
                        {" "}
                      Verify
                      </a>
</div>
<div className="anxiety__right ">

<img src={firstImg} alt="" className="anxiety__img"/>

</div>
</div>











          </div>

          </div>


        </section>
    </div>
  );
};

export default Insurance;