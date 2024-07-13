import React from 'react';
import './Contact.css';
const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "15ca7aaf-74a5-4b96-8553-735396da5e33");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact' id='contact'>
      <div className="contact-col">
        <h3>Send Us a Message<i class="ri-message-2-fill"></i></h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta cumque aut autem alias maiores quam doloremque. Praesentium ratione quaerat esse. Sit, maiores optio.</p>
        <ul>
            <li>edusity12@gmail.com</li>
            <li>+1 234 323 3445</li>
            <li>777, Ashoka Gardan Bhopal <br/> pincode: 470004 (MP)</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label id="name">Your Name</label>
            <input type="text" name= "name" id="name" placeholder='Enter your name' required/>
            <label>Phone Number</label>
            <input type="tel" name="phone" placeholder='Enter your mobile number' required/>
            <label>Write your message here</label>
            <textarea name="message" row="6" placeholder='Enter your message' required></textarea>
            <button className='btn dark-btn'>submit now</button>
        </form>
        <span>{result}</span>
      </div>

    </div>
  )
}

export default Contact
