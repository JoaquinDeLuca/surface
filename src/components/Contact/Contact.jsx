import  { useRef } from "react";
import emailjs from '@emailjs/browser';
import MapView from "./Map/MapView";
import './contact.css'

const Contact = () => {
  
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_37ueoit', 'template_yx035tk', form.current, 'F5_8rjBDwNGJd00MU')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };
  
  
    return (
        <div  className="containerContact">
        <div>
          <h2>Nuestra sucursal</h2>
          <MapView />
        </div>
  
        <div>
          <h2> Contactanos!</h2>
          <form ref={form} onSubmit={sendEmail}>
            <label className="label" >Nombre</label>
            <input className="input" type="text" name="user_name" />
            <label className="label" >Email</label>
            <input className="input" type="email" name="user_email" />
            <label className="label" >Mensaje</label>
            <textarea className="input" name="message" />
            <input className="btnSend" type="submit" value="Enviar" />
          </form>
        </div>
   </div>
  );
};

export default Contact;
