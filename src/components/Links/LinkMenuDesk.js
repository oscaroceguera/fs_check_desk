import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import './LinkMenuDesk.css'

const LinkMenuDesk = ({ location, path, label }) => (
  <Link
    className={location === path
      ? 'linkTitleDesk__link activeDesk'
      : 'linkTitleDesk__link inActiveDesk'}
    to={path}
  >
    {label}
  </Link>
)

LinkMenuDesk.propTypes = {
  location: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}

export default LinkMenuDesk
