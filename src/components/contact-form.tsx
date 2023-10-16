"use client";
import { useState } from 'react'
import { ChangeEvent } from 'react';

const defaultFormState = {
  name: "",
  email: "",
  phone: "",
  contactMethod:  '',
  message: "",
};

const ContactForm = () => {
  const [formState, setFormState] = useState(defaultFormState)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <form
      id="formspree-contact-form"
      action=""
      method="POST"
      className="container container-sm"
    >
      <div className="flex flex-col w-full">
        <input 
          type="text" 
          name="name" 
          value={formState.name} 
          onChange={handleInputChange} 
          placeholder="Name"
          className="p-4 my-2 rounded font-sans"
          required
        />
        <input 
          type="email" 
          name="email" 
          value={formState.email} 
          onChange={handleInputChange}
          placeholder="Email" 
          className="p-4 my-2 rounded font-sans"
          required
        />
        <input 
          type="tel" 
          name="phone" 
          value={formState.phone} 
          onChange={handleInputChange}
          placeholder="Phone"
          className="p-4 my-2 rounded font-sans" 
          required
        />
        <select
          name="contactMethod"
          value={formState.contactMethod}
          onChange={handleInputChange}
          className="p-4 my-2 rounded font-sans"
        >
          <option value="">How would you like to be contacted? (Choose one)</option>
          <option value="phone">Phone</option>
          <option value="email">Email</option>
        </select>
        <input type="text" name="_gotcha" style={{display: "none"}} />
        <textarea 
          name="message"
          rows={3}
          value={formState.message}
          onChange={handleInputChange}
          placeholder="Message"
          className="p-4 my-2 rounded font-sans"
          required
        />
      </div>

      <button className="btn" type="submit">Send</button>
    </form>
  )
}

export default ContactForm
