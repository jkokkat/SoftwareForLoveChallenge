import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h3 style={{ margin: 0 }}>
      <nav className="navbar">
      <div className="links">
       
       <Link to="/" style={{textDecoration: `none`,color:'white'}}>Home &nbsp;&nbsp;&nbsp;&nbsp;</Link>
       <Link to="/page-2/"style={{textDecoration: `none`,color:'white'}}>Page 2 &nbsp;&nbsp;&nbsp;&nbsp;</Link> 
       <Link to="/using-typescript/"style={{textDecoration: `none`,color:'white'}}>Using TypeScript</Link> 
     
        </div>
      </nav>  
      </h3>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
