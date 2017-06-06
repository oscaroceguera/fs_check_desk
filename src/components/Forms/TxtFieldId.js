import React from 'react'
import {TextField} from 'material-ui'

const TxtFieldId = ({ item }) => (
  <TextField
    style={{ display: item.id ? 'block' : 'none ', width: '310px' }}
    floatingLabelText={'ID'}
    value={item.id ? item.id : ''}
    disabled
  />
)

TxtFieldId.propTypes = {
  item: React.PropTypes.object.isRequired
}

export default TxtFieldId
