import type { Metadata } from 'next'
import ContactForm from '@/components/contact-form';

const siteName = process.env.NEXT_PUBLIC_SITE_NAME;

export const metadata: Metadata = {
  title: `Contact Us - ${siteName}`,
  description: 'Contact McCarthy Godlewski LLC Intellectual Property Law Firm in Wisconsin to protect your ideas, creative and inventions.',
}

export default function Contact() {
  return (
    <main className="flex min-h-[calc(100vh-202px)] flex-col">
      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2860.5175419423144!2d-88.45102938700842!3d44.19640617096091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8803b8f9ba417bfd%3A0x5659e7b158d7c58d!2s430%20Ahnaip%20St%2C%20Menasha%2C%20WI%2054952!5e0!3m2!1sen!2sus!4v1697317393341!5m2!1sen!2sus" width="100%" height="600" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="border-4 border-white"></iframe>
      </div>
      <div className="w-full bg-secondary px-4 py-8">
        <h2 className="text-primary text-center m-0 text-xl leading-tight lg:text-2xl">430 Ahnaip Street, Menasha, WI 54952</h2>
      </div>
      <div className="p-4 container container-sm pb-16">
        <h1 className="text-secondary text-2xl text-center tracking-wide my-8">Phone: <a href="tel:+19204287505" className="hover:text-primary">920-428-7505</a>  &nbsp;|  &nbsp;Fax: 920-720-2170</h1>

      </div>
      <ContactForm />
    </main>
  )
}
