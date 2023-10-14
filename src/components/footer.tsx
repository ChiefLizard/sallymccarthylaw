const d = new Date();
const year = d.getFullYear();
const siteName = process.env.NEXT_PUBLIC_SITE_NAME;

const Footer = () => {
  return (
    <footer className="w-full bg-neutral p-6">
      <p className="text-center m-0 text-white opacity-25">&copy; {year} {siteName}</p>
    </footer>
  )
}

export default Footer;