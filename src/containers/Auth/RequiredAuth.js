import React, { Component } from 'react'
import { connect } from 'react-redux'

export default (ComposedComponent) => {
  class Authentication extends Component {
    static contextTypes = {
      router: React.PropTypes.object
    }

    componentWillMount () {
      if (!this.props.authenticated) {
        this.context.router.push('/home/login')
      }
    }

    componentWillUpdate (nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.push('/home/login')
      }
    }

    render () {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps (state) {
    const stateJS = state.authReducer.toJS()
    return {
      authenticated: stateJS.authenticated
    }
  }

  return connect(mapStateToProps)(Authentication)
}
