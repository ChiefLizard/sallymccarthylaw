import Image from 'next/image'
import type { Metadata } from 'next'

const siteName = process.env.NEXT_PUBLIC_SITE_NAME;

export const metadata: Metadata = {
  title: `Intellectual Proprty Law Firm - ${siteName}`,
  description: 'McCarthy Godlewski LLC is an Intellectual Property Law Firm located in Wisconsin committed to protect your ideas, creative and inventions.',
}

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-202px)] flex-col">
      <div 
        className="bg-[url('/images/Gavel_Horizontal_iPad_RGB_D.jpg')] bg-center bg-no-repeat bg-cover min-h-688"
      >
        <div className="container p-8 lg:py-48">
          <h1 className="flex flex-col max-w-max">
            <span className="text-white font-medium text-xl pb-4 lg:tracking-wide lg:text-3xl"
            >
              Intellectual Property
            </span>
            <span className="text-secondary text-6xl py-4 uppercase font-medium border-t border-b border-secondary m-0 lg:text-8xl">Law Firm</span>
            <span className="text-white text-xl font-medium leading-tight lg: tracking-wide lg:text-3xl pt-4 ">Protect Your Ideas &amp; Inventions</span>
          </h1>
        </div>
      </div>
      <div className="w-full bg-secondary px-4 py-8">
        <h2 className="text-primary text-center m-0 leading-tight text-xl lg:text-2xl">McCarthy Godlewski LLC is an Intellectual Property Law Firm located in Wisconsin</h2>
      </div>
      <div className="w-full flex justify-center">
        <Image
          src="/images/Tractor_Mobile.png"
          width={1200}
          height={350}
          alt=""
        />
      </div>
      <div className="p-4 container container-sm pb-16">
        <p>
          The importance of Intellectual Property is increasing. McCarthy Godlewski LLC is an Intellectual Property Law Firm located in the Fox Valley and serves clients throughout the State of Wisconsin and the United States.
        </p>
        <p>
          McCarthy Godlewski LLC is committed to protect your ideas, creative and inventions. The Firm is experienced in advising and counseling clients as to what your rights are and how to protect them. McCarthy Godlewski LLC is dedicated to the needs of its clients, from individuals and start-ups to large corporations.
        </p>
        <p>
          The Firm seeks to understand each client’s needs and objectives and counsel each client as to how to obtain the best Intellectual Property Protection for that client. McCarthy Godlewski LLC provides personal service not found in larger firms and seeks to deliver quality work tailored to each client’s needs. The firm provides personal attention and competitive rates only a small firm can offer.
        </p>
        <p>
          Protect the value of your ideas. Protect your Intellectual Property assets. McCarthy Godlewski LLC provides services in the areas of Trademark, Copyright, Trade Secrets, License Agreements, Non-Disclosure Agreements, Assignments, and Inventory of Intellectual Property assets.
        </p>
        <p>
          In addition, the firm has established formal associations with law firms in many of the world’s primary commercial centers to better serve the international needs of clients.
        </p>
        <p>
          The firm is committed to providing the highest level of client service. From its inception, an emphasis has been placed on providing legal services that make sense from the client’s perspective.
        </p>
      </div>
    </main>
  )
}
