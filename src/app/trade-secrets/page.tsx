import type { Metadata } from 'next'

const siteName = process.env.NEXT_PUBLIC_SITE_NAME;

export const metadata: Metadata = {
  title: `Trade Secret Law Expertise - ${siteName}`,
  description: 'McCarthy Godlewski LLC provides a Trade Secret Protection Program to assist clients in protecting their Intellectual Property and educating employees.',
}

export default function TradeSecrets() {
  return (
    <main className="flex min-h-[calc(100vh-202px)] flex-col">
      <div 
        className="bg-[url('/images/Trade-Secrets_RGB.jpg')] bg-center bg-no-repeat bg-cover"
      >
        <p className="py-64">&nbsp;</p>
      </div>
      <div className="p-4 container container-sm">
        <h1 className="text-primary">Trade Secrets</h1>
        <p>
        Many companies hold valuable assets that are not protected by patents, trademarks or copyrights. For example, every patent begins as a trade secret. Some companies hold formulas for their products as trade secrets.
        </p>
        <p>
        McCarthy Godlewski LLC provides a Trade Secret Protection Program to assist clients in protecting their Intellectual Property. The Program includes employee education, confidentiality agreements and many other aspects.
        </p>
        <p>
        The firm also advises employees as to their rights concerning employee confidentiality agreements they may have signed. There is often much confusion regarding what an employee can and cannot do upon departure from the company. And many companies are also uncertain regarding the protection of trade secret assets. McCarthy Godlewski LLC assists corporations who seek to protect their trade secrets and defends those accused of misappropriation of trade secrets.
        </p>

        <p className="mb-8">
        If you have questions about trade secrets, <a href="/contact">contact </a>McCarthy Godlewski LLC.
        </p>
        <a className="btn" href="/contact">Contact</a>
      </div>
    </main>
  )
}
