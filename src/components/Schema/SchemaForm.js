import React from 'react'
import TxtFieldId from '../Forms/TxtFieldId'
import TxtFieldResponsive from '../Forms/TxtFieldResponsive'
import GenericSubmit from '../Forms/GenericSubmit'

const SchemaForm = ({ item, handleErrorText, onChangeInput, submitSchema, updateSchema, saveSchema }) => (
  <div>
    <TxtFieldId item={item} />
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <TxtFieldResponsive
        floatingLabelText={'Nombre'}
        name={'name'}
        value={item.name}
        errorText={handleErrorText('schema', 'name', 'txt')}
        onChange={(e, section) => onChangeInput(e, 'schema')}
      />
      <TxtFieldResponsive
        floatingLabelText={'Versión'}
        name={'version'}
        width={'15%'}
        value={item.version}
        errorText={handleErrorText('schema', 'version', 'txt')}
        onChange={(e, section) => onChangeInput(e, 'schema')}
      />
      <TxtFieldResponsive
        floatingLabelText={'Descripción'}
        name={'description'}
        width={'100%'}
        value={item.description}
        errorText={handleErrorText('schema', 'description', 'max140')}
        onChange={(e, section) => onChangeInput(e, 'schema')}
      />
      <GenericSubmit
        disabled={submitSchema}
        label={item.id ? 'Actualizar' : 'Guardar' }
        onClick={item.id ? updateSchema : saveSchema}
      />
    </div>
  </div>
)

const { object, func, bool } = React.PropTypes

SchemaForm.propTypes = {
  item: object.isRequired,
  handleErrorText: func.isRequired,
  onChangeInput: func.isRequired,
  submitSchema: bool.isRequired,
  updateSchema: func.isRequired,
  saveSchema: func.isRequired
}

export default SchemaForm
