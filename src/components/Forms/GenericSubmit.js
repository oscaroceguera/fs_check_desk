import React from 'react'
import PropTypes from 'prop-types'
import { RaisedButton } from 'material-ui'

const GenericSubmit = ({disabled, label, onClick}) => (
  <div style={{ textAlign: 'center' }}>
    <RaisedButton
      disabled={disabled}
      label={label}
      onClick={onClick}
      primary />
  </div>
)

const { bool, string, func } = PropTypes

GenericSubmit.propTypes = {
  disabled: bool.isRequired,
  label: string.isRequired,
  onClick: func.isRequired
}

export default GenericSubmit
