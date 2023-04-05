import { Link } from 'react-router-dom'

function NavItem(props) {
  return (
    <>
      <Link to={props.to} className="nav-item">
        <span class="material-icons item-icon">{props.icon}</span>
      </Link>
    </>
  )
}

export default NavItem
