import NavItem from './NavItem'
import './nav.css'

function Nav() {
  return (
    <>
      <nav>
        <NavItem to="/" icon="home" />
        <NavItem to="/about" icon="account_circle" />
        <NavItem to="/" icon="tips_and_updates" />
        <NavItem to="/" icon="article" />
      </nav>
    </>
  )
}

export default Nav
