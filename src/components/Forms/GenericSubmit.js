import React from 'react'
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

const { bool, string, func } = React.PropTypes

GenericSubmit.propTypes = {
  disabled: bool.isRequired,
  label: string.isRequired,
  onClick: func.isRequired
}

export default GenericSubmit
