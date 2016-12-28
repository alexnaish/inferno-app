import Inferno from 'inferno';
import { Link } from 'inferno-router';

export default function NavigationLink ({icon, text, linkTo}) {
  const iconClass = `fa ${icon}`;
  return (
    <li>
      <Link activeClassName="active" to={linkTo}>
        <i className={iconClass}></i>
        <span className="text">{text}</span>
      </Link>
    </li>
  );
}
