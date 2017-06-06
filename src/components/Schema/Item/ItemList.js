import React from 'react'
import Divider from 'material-ui/Divider'
import CircularLoading from '../../Progress/CircularLoading'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import Modal from '../../Modal/Modal'
import ItemFormContainer from '../../../containers/Schemas/Items/ItemFormContainer'
import {
  Container, Title, Table,
  TableHeader, RowHeaderStyled,
  TableBodyStyled, RowBodyStyled,
  NotItemsMsg, TitleContainer
} from './styles'


const NotItems = () => <NotItemsMsg>{'¡No hay reactivos registrados!'}</NotItemsMsg>

const TableBody = ({item}) => (
  <div>
    <TableBodyStyled>
      <RowBodyStyled width={'20%'}>{item.moduleId.name}</RowBodyStyled>
      <RowBodyStyled width={'35%'}>{item.answer}</RowBodyStyled>
      <RowBodyStyled width={'35%'}>{item.recommend}</RowBodyStyled>
      <RowBodyStyled width={'10%'} align='center'>{item.value}</RowBodyStyled>
    </TableBodyStyled>
    <Divider />
  </div>
)

TableBody.propTypes = { Items: React.PropTypes.array }

const TopTitle = ({onOpenForm}) => (
  <TitleContainer>
    <Title>{'Reactivos'}</Title>
    <FloatingActionButton
      onClick={onOpenForm}
      secondary={true}
      mini
    >
      <ContentAdd />
    </FloatingActionButton>
  </TitleContainer>
)

TopTitle.propTypes = { onOpenForm: React.PropTypes.func.isRequired }

const TitleHeaderContainer = () => (
  <TableHeader>
    <RowHeaderStyled width={'20%'}>{'Módulo'}</RowHeaderStyled>
    <RowHeaderStyled width={'35%'}>{'Pregunta'}</RowHeaderStyled>
    <RowHeaderStyled width={'35%'}>{'Métrica'}</RowHeaderStyled>
    <RowHeaderStyled width={'10%'}>{'Valor'}</RowHeaderStyled>
  </TableHeader>
)

const ModalContainer = (props) => <Modal {...props}><ItemFormContainer /></Modal>

const ItemList = ({items, loading, onOpenForm, onCloseForm, modalStatus}) => (
  <Container>
    <TopTitle onOpenForm={onOpenForm}/>
    <Table>
      <TitleHeaderContainer />
      <Divider />
      {
        loading
          ? <CircularLoading />
          : items.length > 0
            ? items.map((item, index) => <TableBody key={index} item={item}/>)
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
  Items: React.PropTypes.array,
  loading: React.PropTypes.bool.isRequired,
  onOpenForm: React.PropTypes.func.isRequired,
  onCloseForm: React.PropTypes.func.isRequired,
  modalStatus: React.PropTypes.bool.isRequired
}

export default ItemList
