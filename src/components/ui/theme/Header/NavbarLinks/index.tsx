import { useEffect, useState } from 'react';
import Link from 'next/link';
import cx from 'classnames';
import ToggleTheme from 'components/ui/theme/Header/ToggleTheme';

type NavbarLinksProps = {
  desktop?: boolean;
  page?: string;
};

const darkThemeStyles = {
  home: 'text-black mb-4 lg:mb-0 mr-0 lg:mr-4 dark:text-white lg:dark:text-black',
  blog: 'text-black mb-4 lg:mb-0 mr-0 lg:mr-4 dark:text-white',
};

const NavbarLinks = ({ desktop, page = 'home' }: NavbarLinksProps) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <div
      className={cx({
        'items-center hidden lg:flex': desktop,
        'p-12 flex flex-col': !desktop,
      })}
    >
      <Link href="/#about" scroll={false}>
        <a className={darkThemeStyles[page as keyof typeof darkThemeStyles]}>About</a>
      </Link>
      <Link href="/blog" scroll={false}>
        <a className={darkThemeStyles[page as keyof typeof darkThemeStyles]}>Blog</a>
      </Link>
      <Link href="/#contact" scroll={false}>
        <a className={darkThemeStyles[page as keyof typeof darkThemeStyles]}>Contact</a>
      </Link>
      {hasMounted && <ToggleTheme page={page} />}
    </div>
  );
};

export default NavbarLinks;
