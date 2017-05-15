import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import AddIcon from 'material-ui/svg-icons/content/add';

import Modal from '../Modal/Modal'
import ModuleForm from './ModuleForm'

// TODO: UI form MODAL
// TODO: LSITAR MODULOS AGREGADOS
// TODO: ELIMIANR MODULO
// TODO: ACTUALIZAR MODULO
// TODO: LSITADO DE MODULOS NO HAY
// TODO: LISTADO DE MODULOS FAIL


const Modules = (props) => (
  <div style={{ margin: '2em 0' }}>
    <RaisedButton
      icon={<AddIcon />}
      label="Agregar módulo"
      primary
      fullWidth={true}
      onClick={props.handleModalOpen}
    />
    <div style={{boxShadow: '0px 0px 5px gray', fontSize: '12px', margin: '.5em 0', borderRadius: '2px', padding: '0 1em'}}>
      <div style={{ display: 'flex'}}>
        <p>1 -</p>
        <p>Sitema algo de no se de la gerencia</p>
      </div>
      <div style={{ display: 'flex'}}>
        <p>1 -</p>
        <p>Sitema algo de no se de la gerencia</p>
      </div>
      <div style={{ display: 'flex'}}>
        <p>1 -</p>
        <p>Sitema algo de no se de la gerencia</p>
      </div>
      <div style={{ display: 'flex'}}>
        <p>1 -</p>
        <p>Sitema algo de no se de la gerencia</p>
      </div>
      <div style={{ display: 'flex'}}>
        <p>1 -</p>
        <p>Sitema algo de no se de la gerencia</p>
      </div>
    </div>
    <Modal {...props} title={'Agregar módulo'} >
      <ModuleForm {...props} />
    </Modal>
  </div>
)

// TODO: PROPTYPES

export default Modules
