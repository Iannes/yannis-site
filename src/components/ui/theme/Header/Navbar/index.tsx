import Link from 'next/link';
import NavbarLinks from 'components/ui/theme/Header/NavbarLinks';

export type NavbarProps = {
  page?: string;
};

const Navbar: React.FC<NavbarProps> = ({ page = 'home' }) => {
  return (
    <div className="container flex items-center justify-between p-6">
      <Link href="/" passHref>
        <a className="typography text-black dark:text-white">Yannis Spyrou</a>
      </Link>
      <NavbarLinks desktop page={page} />
    </div>
  );
};

export default Navbar;
