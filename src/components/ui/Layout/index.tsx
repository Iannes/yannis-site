import { ReactFCC } from '../../../../types';
import Footer from 'components/ui/theme/Footer';

const Layout: ReactFCC = ({ children }) => (
  <>
    {children}
    <Footer />
  </>
);

export default Layout;
