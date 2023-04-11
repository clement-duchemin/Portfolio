import React from 'react'




function Contact() {
  return (
    <div className='contact-container'>
      <div className='contact'>
        <form name="contact" 
            method="post" 
            className='contact__form' 
            data-netlify="true" 
            >

            <input type="hidden" name="form-name" value="contact" />
            <label htmlFor="name">Nom: </label>
            <input type="text" name="name"/>

            <label htmlFor="email"> <span>E</span>mail: </label>
            <input type="email" name="email"/>
         
            <label htmlFor="message">Message: </label>
            <textarea name="message"></textarea>
         
            <button type="submit">Envoyer</button>
        </form>
      </div>
      <div className='map-container'>
      
     
      </div>
    </div>
  )
}

export default Contact



//  <iframe 
//       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d180901.91023395467!2d-0.66954715!3d44.8909443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd54d6d0cfe11887%3A0x5245963fdad72174!2sBordeaux%20M%C3%A9tropole!5e0!3m2!1sen!2sfr!4v1680786806744!5m2!1sen!2sfr" 
//       className='map'>
//       </iframe> 