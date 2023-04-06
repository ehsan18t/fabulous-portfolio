import { NavLink } from 'react-router-dom'

function NavItem(props) {
  return (
    <>
      <NavLink
        to={props.to}
        className={({ isActive }) =>
          isActive ? 'nav-item  active' : 'nav-item'
        }
      >
        <span className="material-icons item-icon">{props.icon}</span>
      </NavLink>
    </>
  )
}

export default NavItem
