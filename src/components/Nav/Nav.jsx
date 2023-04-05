import NavItem from './NavItem'

function Nav() {
  return (
    <>
      <div class="nav">
        <nav>
          <NavItem to="/" icon="home" />
          <NavItem to="/about" icon="account_circle" />
          <NavItem to="/" icon="tips_and_updates" />
          <NavItem to="/" icon="article" />
        </nav>
      </div>
    </>
  )
}

export default Nav
