import NavItem from './NavItem'
import './nav.css'

function Nav() {
  return (
    <>
      <nav>
        <NavItem to="/" icon="home" />
        <NavItem to="/about" icon="account_circle" />
        <NavItem to="/projects" icon="tips_and_updates" />
        <NavItem to="/blog" icon="article" />
      </nav>
    </>
  )
}

export default Nav
