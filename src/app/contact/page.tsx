"use client"

import { useState } from 'react'
import type { Metadata } from 'next'
import { ChangeEvent } from 'react';

// const siteName = process.env.NEXT_PUBLIC_SITE_NAME;

// export const metadata: Metadata = {
//   title: `Contact Us - ${siteName}`,
//   description: 'Contact McCarthy Godlewski LLC Intellectual Property Law Firm in Wisconsin to protect your ideas, creative and inventions.',
// }

const defaultFormState = {
  name: "",
  email: "",
  phone: "",
  contactMethod:  '',
  message: "",
};

export default function TradeSecrets() {
  const [formState, setFormState] = useState(defaultFormState)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <main className="flex min-h-[calc(100vh-69px)] flex-col">
      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2860.5175419423144!2d-88.45102938700842!3d44.19640617096091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8803b8f9ba417bfd%3A0x5659e7b158d7c58d!2s430%20Ahnaip%20St%2C%20Menasha%2C%20WI%2054952!5e0!3m2!1sen!2sus!4v1697317393341!5m2!1sen!2sus" width="100%" height="600" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="w-full bg-secondary px-4 py-8">
        <h2 className="text-primary text-center m-0 text-xl leading-tight">430 Ahnaip Street, Menasha, WI 54952</h2>
      </div>
      <div className="p-4 container container-sm">
        <h1 className="text-secondary text-2xl text-center">Phone: <a href="tel:+19204287505" className="hover:text-primary">920-428-7505</a>  |  Fax: 920-720-2170</h1>
        <form
          id="formspree-contact-form"
          action=""
          method="POST"
          className="flex flex-col w-full"
        >
          <input 
            type="text" 
            name="name" 
            value={formState.name} 
            onChange={handleInputChange} 
            required
          />
          <input 
            type="email" 
            name="email" 
            value={formState.email} 
            onChange={handleInputChange} 
            required
          />
          <input 
            type="tel" 
            name="phone" 
            value={formState.phone} 
            onChange={handleInputChange} 
            required
          />
          <select
            name="contactMethod"
            value={formState.contactMethod}
            onChange={handleInputChange}
          >
            <option value="">Choose one</option>
            <option value="phone">Phone</option>
            <option value="email">Email</option>
          </select>
          <input type="text" name="_gotcha" style={{display: "none"}} />
          <textarea 
            name="message"
            rows={3}
            value={formState.message}
            onChange={handleInputChange}
          />

          <button className="btn" type="submit">Send</button>
        </form>

      </div>
    </main>
  )
}
