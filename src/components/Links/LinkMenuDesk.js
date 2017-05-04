import React from 'react'
import { Link } from 'react-router'
import './LinkMenuDesk.css'

const LinkMenuDesk = ({ location, path, label }) => (
  <Link
    className={location === path
      ? 'linkTitle__link active'
      : 'linkTitle__link inActive'}
    to={path}
  >
    {label}
  </Link>
)

LinkMenuDesk.propTypes = {
  location: React.PropTypes.string.isRequired,
  path: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired
}

export default LinkMenuDesk
