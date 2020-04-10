import React from 'react';
import border from "../img/border.png"
const Form = () => {
  return (
    <section id="form" className="form">
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
    className="form__paragraph u-text-left">At Royal Minds, we help you navigate through mental health challenges so that you are able to live a healthy, happy life.</p>
    
    
    <p 
    className="form__paragraph u-text-center">Click our phone number to call us, or simply request a callback.</p>
    <a href="tel:4109201011" className="form__num u-text-center">(410)-920-1011</a>

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
  );
};

export default Form;