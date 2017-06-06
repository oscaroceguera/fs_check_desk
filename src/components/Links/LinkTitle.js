import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router'
import './LinkTitle.css'

const LinkTitle = ({path, title, location}) => (
  <h1 className='linkTitle'>
    <Link
      className={location === path
        ? 'linkTitle__link active'
        : 'linkTitle__link inActive'}
      to={path}
    >
      {title}
    </Link>
  </h1>
)

LinkTitle.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
}

export default LinkTitle
