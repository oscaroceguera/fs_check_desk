import React from 'react'
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
  path: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  location: React.PropTypes.string.isRequired
}

export default LinkTitle
