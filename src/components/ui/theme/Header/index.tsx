import { useState } from 'react';
import cx from 'classnames';
import Navbar, { NavbarProps } from './Navbar';
import Hamburger from './Hamburger';
import Sidebar from './Sidebar';

const Header: React.FC<NavbarProps> = ({ page = 'home' }) => {
  const [sidebar, toggle] = useState(false);

  return (
    <div className="w-full bg-transparent">
      <div
        className={cx('bg-black/70 w-full h-full transition-all duration-300 ease-in-out', {
          'block z-10': sidebar,
          hidden: !sidebar,
        })}
        onClick={() => toggle(!sidebar)}
      />
      <Navbar page={page} />
      <Hamburger sidebar={sidebar} toggle={toggle} />
      <Sidebar sidebar={sidebar} toggle={() => toggle(!sidebar)} />
    </div>
  );
};

export default Header;
