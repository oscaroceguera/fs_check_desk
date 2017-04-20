import React, { Component } from 'react'
import Logo from '../../components/Logo/Logo'
import LinkTitle from '../../components/Links/LinkTitle'

// TODO: UI => Signup form
// TODO: UI => Login form
// TODO: Mostar Signup form
// TODO: Mostar Login form
// TODO: validacion de campos Signup form
// TODO: validacion de campos Login form
// TODO: show submit Signup form
// TODO: show submit Login form
// TODO: Guardar datos con redux Signup form
// TODO: Guardar datos con redux Login form
// TODO: COnectar con api Signup form
// TODO: COnectar con api Login form

class HomeContainer extends Component {
  static propTypes = {
    location: React.PropTypes.object
  }
  render () {
    const {location} = this.props
    return (
      <div>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
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

// TODO: propstypes pra location

export default HomeContainer
