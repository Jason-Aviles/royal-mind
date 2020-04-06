import React from 'react';

const BoxModal = (props) => {
  

  return (
    <div className={` box-modal__container ${!props.boxModalState ? "u-display-none" : ""}  `}>
              
    <div className="box-modal__content">
<h1 className="box-modal__primary">
Insurance Verification
<div onClick={()=>props.setboxModalState(false)} className="box-modal__closed">+</div> 
</h1>

<form action="" className="box-modal__form">

<h3 className="box-modal__third">Patient Information</h3> 
   
<h2 className="box-modal__secondary">PATIENT FULL NAME*</h2> 

<div className="box-modal__inputs">
<label  className="box-modal__label" for="first_name">First Name</label>
<input type="text" id="first_name" className="box-modal__input"/>
<label className="box-modal__label" for="last_name">Last Name</label>
<input type="text" id="last_name" className="box-modal__input"/>

</div>









<div className="box-modal__inputs">
<h2 className="box-modal__secondary">D.O.B*</h2>
<input type="date"  className="box-modal__input"/>

<h2 className="box-modal__secondary">SYMPTOMS*</h2>
<label  className="box-modal__label" for="Bipolar">Bipolar</label>
<input value="Bipolar" type="checkbox" id="Bipolar" className="box-modal__checkbox"/>
<label  className="box-modal__label" for="Anxiety">Anxiety</label>
<input value="Anxiety" type="checkbox" id="Anxiety" className="box-modal__checkbox"/>
<label  className="box-modal__label" for="Depression">Depression</label>
<input value="Depression" type="checkbox" id="Depression" className="box-modal__checkbox"/>
<label className="box-modal__label" for="PTSD">PTSD</label>
<input value="PTSD"type="checkbox" id="PTSD" className="box-modal__checkbox"/>
<label className="box-modal__label" for="Schizophrenia">Schizophrenia</label>
<input value="Schizophrenia" type="checkbox" id="Schizophrenia" className="box-modal__checkbox"/>
</div>


<h2 className="box-modal__secondary">ADDRESS*</h2>
<div className="box-modal__inputs">
<label className="box-modal__label" for="street_address">STREET ADDRESS</label>
<input type="text" id="street_address" className="box-modal__input"/>
<label className="box-modal__label" for="address-line-2">ADDRESS LINE 2</label>
<input type="text" id="address-line-2" className="box-modal__input"/>

<label className="box-modal__label" for="city">CITY</label>
<input type="text" id="city" className="box-modal__input"/>

<label className="box-modal__label" for="state">STATE</label>
<input type="text" id="state" className="box-modal__input"/>
<label className="box-modal__label" for="zip-code">ZIP CODE</label>
<input type="text" id="zip-code" className="box-modal__input"/>
</div>
   
   <h2 className="box-modal__secondary">Insurance Information</h2>
<div className="box-modal__inputs">  


<label className="box-modal__label" for="insurance-plan">INSURANCE PLAN</label>
<input type="text" id="insurance-plan" className="box-modal__input" placeholder="INSURANCE PLAN"/>

<label className="box-modal__label" for="id-number">ID NUMBER</label>

   <input  id="id-number" placeholder="INSURANCE ID NUMBER" type="text" className="box-modal__input"/>

   <label className="box-modal__label"  for="id-phone-number">INSURANCE PHONE NUMBER</label>

  
   <input type="text" id="id-phone-number" placeholder=" (USUALLY ON BACK OF CARD)"  className="box-modal__input"/></div> 

   <h3 className="box-modal__third">Contact Information</h3> 
   <div className="box-modal__inputs">
   <h2 className="box-modal__secondary">CONTACT NAME*</h2> 
   <input type="text" className="box-modal__input" placeholder="contact Name" />
   <h2 className="box-modal__secondary">Email*</h2>
   <input type="text" className="box-modal__input" placeholder="email" />

   <h2 className="box-modal__secondary">Phone*</h2>
   <input type="text" className="box-modal__input" placeholder="phone" /></div>



</form>

    </div> 


    </div>
 
  );
};

export default BoxModal;