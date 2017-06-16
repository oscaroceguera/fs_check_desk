import React from 'react'
import { array, bool, func, number } from 'prop-types'
import { CircularLoading, Modal } from '../../index'
import { Divider, FloatingActionButton } from 'material-ui'
import ItemFormContainer from '../../../containers/Schemas/Items/ItemFormContainer'
import ContentAdd from 'material-ui/svg-icons/content/add'
import CreateIcon from 'material-ui/svg-icons/content/create'
import DeleteIcon from 'material-ui/svg-icons/action/delete'
import {
  Container, Title, Table,
  TableHeader, RowHeaderStyled,
  TableBodyStyled, RowBodyStyled,
  NotItemsMsg, TitleContainer, IconStyl
} from './styles'

const NotItems = () => <NotItemsMsg>{'¡No hay reactivos registrados!'}</NotItemsMsg>

const TableBody = ({item, onOpenFormUpdate, onDeleteItem, position}) => (
  <div>
    <TableBodyStyled>
      <RowBodyStyled width={'100px'}>{item.moduleId.name}</RowBodyStyled>
      <RowBodyStyled width={'200px'}>{item.answer}</RowBodyStyled>
      <RowBodyStyled width={'200px'}>{item.recommend}</RowBodyStyled>
      <RowBodyStyled width={'100px'} center>{item.value}</RowBodyStyled>
      <RowBodyStyled width={'100px'} center>
        <CreateIcon style={IconStyl} onClick={() => onOpenFormUpdate(position, item)} />
        <DeleteIcon style={IconStyl} onClick={() => onDeleteItem(item._id, position)} />
      </RowBodyStyled>
    </TableBodyStyled>
    <Divider />
  </div>
)

TableBody.propTypes = {
  Items: array,
  onOpenFormUpdate: func.isRequired,
  onDeleteItem: func.isRequired,
  position: number.isRequired
}

const TopTitle = ({onOpenForm}) => (
  <TitleContainer>
    <Title>{'Reactivos'}</Title>
    <FloatingActionButton onClick={onOpenForm} secondary mini >
      <ContentAdd />
    </FloatingActionButton>
  </TitleContainer>
)

TopTitle.propTypes = { onOpenForm: func.isRequired }

const TitleHeaderContainer = () => (
  <TableHeader>
    <RowHeaderStyled width={'100px'}>{'Módulo'}</RowHeaderStyled>
    <RowHeaderStyled width={'200px'}>{'Pregunta'}</RowHeaderStyled>
    <RowHeaderStyled width={'200px'}>{'Métrica'}</RowHeaderStyled>
    <RowHeaderStyled width={'100px'} center>{'Valor'}</RowHeaderStyled>
    <RowHeaderStyled width={'100px'} center>{'Opción'}</RowHeaderStyled>
  </TableHeader>
)

const ModalContainer = (props) => <Modal {...props}><ItemFormContainer /></Modal>

const ItemList = ({items, loading, onOpenForm, onCloseForm, modalStatus, onOpenFormUpdate, onDeleteItem}) => (
  <Container>
    <TopTitle onOpenForm={onOpenForm} />
    <Table>
      <TitleHeaderContainer />
      <Divider />
      {
        loading
          ? <CircularLoading />
          : items.length > 0
            ? items.map((item, index) => <TableBody key={index} position={index} item={item} onOpenFormUpdate={onOpenFormUpdate} onDeleteItem={onDeleteItem} />)
            : <NotItems />
      }
    </Table>
    <ModalContainer
      handleModalOpen={onOpenForm}
      handleModalClose={onCloseForm}
      modalStatus={modalStatus}
      title={'Agregar reactivo'}
    />
  </Container>
)

ItemList.propTypes = {
  Items: array,
  loading: bool.isRequired,
  onOpenForm: func.isRequired,
  onCloseForm: func.isRequired,
  modalStatus: bool.isRequired,
  onOpenFormUpdate: func.isRequired,
  onDeleteItem: func.isRequired
}

export default ItemList
