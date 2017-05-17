import React from 'react'
import TxtFieldResponsive from '../../Forms/TxtFieldResponsive'
import GenericSubmit from '../../Forms/GenericSubmit'

const ModuleForm = ({ handleErrorText, onChangeInput, submit, onSaved }) => (
  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    <TxtFieldResponsive
      floatingLabelText={'Número'}
      name={'number'}
      width={'15%'}
      errorText={handleErrorText('module', 'number', 'txtZero')}
      onChange={(e, section, type) => onChangeInput(e, 'module', 'setModuleFields')}
    />
    <TxtFieldResponsive
      floatingLabelText={'Orden'}
      name={'order'}
      width={'15%'}
      errorText={handleErrorText('module', 'order', 'number')}
      onChange={(e, section, type) => onChangeInput(e, 'module', 'setModuleFields')}
    />
    <TxtFieldResponsive
      floatingLabelText={'Nombre'}
      name={'name'}
      width={'60%'}
      errorText={handleErrorText('module', 'name', 'txt')}
      onChange={(e, section, type) => onChangeInput(e, 'module', 'setModuleFields')}
    />
    <GenericSubmit
      disabled={submit}
      label={'Guardar'}
      onClick={onSaved}
    />
  </div>
)

// TODO: Proptypes

export default ModuleForm
