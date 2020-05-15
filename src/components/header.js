import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import Navigation from './modules/navigation/navigation'

const Header = ({ siteTitle }) => <header />

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
