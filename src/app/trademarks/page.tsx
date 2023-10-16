import type { Metadata } from 'next'

const siteName = process.env.NEXT_PUBLIC_SITE_NAME;

export const metadata: Metadata = {
  title: `Trademark Law Expertise - ${siteName}`,
  description: 'McCarthy Godlewski LLC’s Trademark practice is experienced in Trademark Law, including the basics of Trademark application, registration, and infringement.',
}

export default function Trademarks() {
  return (
    <main className="flex min-h-[calc(100vh-202px)] flex-col">
      <div 
        className="bg-[url('/images/Trademarks_RGB.jpg')] bg-center bg-no-repeat bg-cover"
      >
        <p className="py-64">&nbsp;</p>
      </div>
      <div className="p-4 container container-sm">
        <h1 className="text-primary">Trademarks</h1>
        <p>
        A Trademark may be a name, a design, or a logo which is associated with your particular product or service. Business owners often own valuable Trademarks and have invested time, effort and money to create a ‘brand’ or identity for their goods or services. McCarthy Godlewski LLC’s Trademark practice is experienced in Trademark Law, including all aspects from the basics of Trademark selection, application, prosecution, registration, and renewal as well as Trademark infringement and Trademark enforcement, domestically and internationally.
        </p>
        <p>
        A Trademark identifies the origin or source of goods or services. Trademarks are used in commerce in connection with the sale of goods or services. Trademarks represent the reputation and good will of a business and may be one of your most valuable assets.
        </p>
        <p>
        McCarthy Godlewski LLC represents clients as they assert or defend against trademark infringement.
        </p>
        <p>
        As clients seek to benefit from their Trademarks, McCarthy Godlewski LLC negotiates many agreements such as Trademark Assignments, Licenses, and Confidentiality Agreements. Trademarks play a crucial role in business, domestically and internationally. The firm also helps clients to protect themselves against counterfeit goods and marks.
        </p>
        <p>
        Clients look to the firm to maintain their Trademarks once they are obtained. Many businesses are unaware of the specifics of their Trademark portfolio. McCarthy Godlewski LLC provides an audit to confirm that Trademarks are being properly used and maintained, thereby keeping and protecting their value for the client.
        </p>
        <p className="mb-8">
        If you have questions about a Trademark, <a href="/contact">contact </a>McCarthy Godlewski LLC for sound legal advice.
        </p>
        <a className="btn" href="/contact">Contact</a>
      </div>
    </main>
  )
}
