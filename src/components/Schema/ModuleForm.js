import React from 'react'
import TxtFieldResponsive from '../Forms/TxtFieldResponsive'

const ModuleForm = ({ handleErrorText, onChangeInput }) => (
  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    <TxtFieldResponsive
      floatingLabelText={'Número'}
      name={'number'}
      width={'15%'}
      errorText={handleErrorText('module', 'number', 'txt')}
      onChange={(e, section, type) => onChangeInput(e, 'module', 'setModuleFields')}
    />
    <TxtFieldResponsive
      floatingLabelText={'Orden'}
      name={'order'}
      width={'15%'}
      errorText={handleErrorText('module', 'order', 'txt')}
      onChange={(e, section, type) => onChangeInput(e, 'module', 'setModuleFields')}
    />
    <TxtFieldResponsive
      floatingLabelText={'Nombre'}
      name={'name'}
      width={'60%'}
      errorText={handleErrorText('module', 'name', 'txt')}
      onChange={(e, section, type) => onChangeInput(e, 'module', 'setModuleFields')}
    />
  </div>
)

// TODO: Proptypes

export default ModuleForm
