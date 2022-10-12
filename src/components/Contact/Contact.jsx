import  { useRef } from "react";
import emailjs from '@emailjs/browser';

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
    };
  
  
    return (
    <div>
      <div>
        <h2>Nuestra sucursal</h2>
        <div>mapa</div>
      </div>

      <div>
        <h2> Contactanos!</h2>
        <form ref={form} onSubmit={sendEmail}>
          <label>Nombre</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Mensaje</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
