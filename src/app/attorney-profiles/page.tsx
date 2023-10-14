import Image from 'next/image'
import type { Metadata } from 'next'

const siteName = process.env.NEXT_PUBLIC_SITE_NAME;

export const metadata: Metadata = {
  title: `Attorney Profile - ${siteName}`,
  description: 'Sally McCarthy Godlewski specializes in Intellectual Property Law. Her expertise includes Trademarks, Copyrights, Trade Secrets, and more.',
}

const Profile = () => {
  return (
    <main className="flex min-h-[calc(100vh-69)] flex-col">
      <div className="container p-4 lg: py-8">
        <div className="flex flex-col-reverse items-center lg:grid lg:grid-cols-[3fr_1fr] lg:content-start">
          <div>
            <h1 className="text-primary">Sally McCarthy Godlewski</h1>
            <p>
              Sally McCarthy Godlewski specializes in Intellectual Property Law. Her expertise includes Trademarks, Copyrights, Trade Secrets, Licensing, Nondisclosure Agreements, Confidentiality Agreements, Publishing Agreements, Consulting Agreements, Assignments for all forms of Intellectual Property, and Employer/Employee Agreements. She is able to implement a Trade Secret Protection Program to protect your valuable intellectual property.
            </p>
            <p>
              Sally McCarthy Godlewski has negotiated License Agreements with corporations such as Disney, Sesame Street and Viacom. She serves clients who are individual authors and inventors as well as small businesses and large corporations.
            </p>
            <p>
              Ms. McCarthy Godlewski is licensed to practice law in Wisconsin, Illinois, New York, Connecticut and Missouri. She is admitted to the U.S. District Court, Eastern and Western Districts of Wisconsin. Ms. McCarthy Godlewski was formerly employed as an Intellectual Property attorney at Kohl’s Department Stores, Inc. in Menomonee Falls, WI, and as an attorney at Western Publishing Company Inc., a game and book publisher, in Racine, WI. She was also previously an attorney at an Intellectual Property Law Firm in Appleton, Wisconsin. In addition, she served as a Family Court Commissioner in Lincoln County, Wisconsin for over eight years. She is a trained mediator and has fostered the development of Collaborative Law, an alternative form of dispute resolution, in the Fox Valley.
            </p>
            <p>
              Ms. McCarthy Godlewski is a member of the Wisconsin Bar Association, the Outagamie County Bar Association, the Winnebago County Bar Association and the Wisconsin Family Court Commissioner Association.
            </p>
  
          </div>
          <div className="pb-12 flex lg:pl-24 lg:pb-0">
            <Image 
              src="/images/Sally-McCarthy-Godlewski.jpg"
              width={240}
              height={300}
              alt="Sally McCarthy Godlewski"
            />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Profile