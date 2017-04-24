import React, { Component } from 'react'
import Logo from '../../components/Logo/Logo'
import LinkTitle from '../../components/Links/LinkTitle'
import './styles.css'

class HomeContainer extends Component {
  static propTypes = {
    location: React.PropTypes.object
  }
  render () {
    const {location} = this.props
    return (
      <div>
        <div className='links'>
          <LinkTitle
            path={'/home/signup'}
            title={'Signup'}
            location={location.pathname}
          />
          <Logo />
          <LinkTitle
            path={'/home/login'}
            title={'Login'}
            location={location.pathname}
          />
        </div>
        <div>{this.props.children}</div>
      </div>
    )
  }
}


export default HomeContainer
