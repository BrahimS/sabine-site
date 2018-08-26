import Link from 'next/link';
import Menu from './Menu';


const Footer = props => (
  <footer>
    <p>
        <span>© Tous droits résérvés - Yogis  | réalisation </span>
        <Link href="https://brahimsourny.pro">
            <a> BS</a>
        </Link>
    </p>
  </footer>
);

export default Footer;
