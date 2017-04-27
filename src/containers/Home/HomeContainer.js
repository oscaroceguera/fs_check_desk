import React, { Component } from 'react'
import { connect } from 'react-redux'
import Logo from '../../components/Logo/Logo'
import LinkTitle from '../../components/Links/LinkTitle'
import './styles.css'

// TODO: Cuando este en el home y si ya esta logueado mandar a dasboard

class HomeContainer extends Component {
  static contextTypes = {
    router: React.PropTypes.object
  }

  static propTypes = {
    location: React.PropTypes.object
  }

  componentWillMount () {
    if (this.props.authenticated) {
      this.context.router.push('/dashboard')
    }
  }

  componentWillUpdate (nextProps) {
    if (nextProps.authenticated) {
      this.context.router.push('/dashboard')
    }
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

const mapStateToProps = (state) => {
  const stateJS = state.authReducer.toJS()
  return {
    authenticated: stateJS.authenticated
  }
}

export default connect(mapStateToProps)(HomeContainer)
