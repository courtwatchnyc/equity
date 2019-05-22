import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import {logout} from '../store'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const Navbar = ({handleClick, isLoggedIn}) => (
  <AppBar color="default" position="absolute" className="navvy">
  <Toolbar>
    <Typography variant="h4" color="inherit" className="header" noWrap>
      CourtWatch NYC
    </Typography>
  <nav className="nav-buttons">
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          <Link to="/home">Home</Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          <Button className="navLoginButton" variant="contained" color="primary"><Link className="link-text" to="/login">Login</Link></Button>
          <Button className="navLoginButton" variant="contained" color="secondary"><Link className="link-text" to="/signup">Sign Up</Link></Button>
        </div>
      )}
    </nav>
    <hr />
  </Toolbar>
</AppBar>

    
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
