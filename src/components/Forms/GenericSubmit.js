import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';

const GenericSubmit = ({disabled, label}) => (
  <div style={{ textAlign: 'center' }}>
    <RaisedButton disabled={disabled} label={label}  primary/>
  </div>
)

const {bool, string} = React.PropTypes

GenericSubmit.propTypes = {
  disabled: bool.isRequired,
  label: string.isRequired
}

export default GenericSubmit
