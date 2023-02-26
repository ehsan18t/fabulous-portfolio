import { Link } from 'react-router-dom'

function NavLink(props) {
  return (
    <>
      <li data-te-nav-item-ref>
        <Link
          to={props.to}
          className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
        >
          {props.text}
        </Link>
      </li>
    </>
  )
}

export default NavLink
