import Link from 'next/link';
import Switch from './Switch';

export const Header: React.FC = () => (
  <div className="w-full my-4 dark:text-white">
    <nav className="flex w-full  justify-center">
      <Link href="/">
        <a className="hidden md:block">
          <img alt="rk" src="images/rk.png" className="w-12 h-12 ml-8" />
        </a>
      </Link>
      <ul className="flex items-center ml-auto pl-8 mr-8 space-x-6 text-lg">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Contact</a>
          </Link>
        </li>
        <li className="flex">
          <Switch />
        </li>
      </ul>
    </nav>
  </div>
);

export default Header;
