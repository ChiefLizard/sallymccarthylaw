import type { Metadata } from 'next'

const siteName = process.env.NEXT_PUBLIC_SITE_NAME;

export const metadata: Metadata = {
  title: `Copyright Law Expertise - ${siteName}`,
  description: 'McCarthy Godlewski LLC can assist with all aspects of Copyright law including copyright application, registration, copyright infringement, and enforcement.',
}

export default function Copyrights() {
  return (
    <main className="flex min-h-[calc(100vh-69px)] flex-col">
      <div 
        className="bg-[url('/images/Copyrights_RGB.jpg')] bg-center bg-no-repeat bg-cover"
      >
        <p className="py-64">&nbsp;</p>
      </div>
      <div className="p-4 container container-sm">
        <h1 className="text-primary">Copyrights</h1>
        <p>
        McCarthy Godlewski LLC’s Copyright practice is experienced at every level of Copyright Law, including all aspects from the basics of Copyright application and registration, to Copyright infringement, Copyright defense and Copyright enforcement.
        </p>
        <p>
        Copyright protects the tangible expression of an original work of authorship. Copyrightable works include creative works such as books, manuals, photographs, motion pictures, computer software, artistic designs, etc. Businesses are discovering that copyright may protect company brochures, websites, company product instruction manuals as well as business proposals and strategic plans. Authors seek to protect their works as they enter into Publishing Agreements.
        </p>
        <p>
        Intellectual Property rights are of growing importance to corporations and individuals. As such, it has become increasingly important for clients to seek advice as to how to avoid infringement of the rights of others. This is particularly true in the area of architectural rights. Home designers increasingly to turn to Copyright law to protect their work.
        </p>
        <p>
        As clients seek to benefit from their Copyrights, McCarthy Godlewski LLC negotiates many agreements such as Copyright Assignments, Copyright Licenses and Publishing Agreements.
        </p>

        <p className="mb-8">
        If you have questions about copyright, <a href="/contact">contact </a>McCarthy Godlewski LLC.
        </p>
        <a className="btn" href="/contact">Contact</a>
      </div>
    </main>
  )
}
