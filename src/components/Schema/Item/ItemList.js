import React from 'react'
import Divider from 'material-ui/Divider'
import CircularLoading from '../../Progress/CircularLoading'
import {
  Container, Title, Table,
  TableHeader, RowHeaderStyled,
  TableBodyStyled, RowBodyStyled
} from './styles'

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

const ItemList = ({items, loading}) => (
  <Container>
    <Title>{'Reactivos'}</Title>
    <Table>
      <TableHeader>
        <RowHeaderStyled width={'20%'}>{'Módulo'}</RowHeaderStyled>
        <RowHeaderStyled width={'35%'}>{'Pregunta'}</RowHeaderStyled>
        <RowHeaderStyled width={'35%'}>{'Métrica'}</RowHeaderStyled>
        <RowHeaderStyled width={'10%'}>{'Valor'}</RowHeaderStyled>
      </TableHeader>
      <Divider />
      {
        loading
          ? <CircularLoading />
          : items.map((item, index) => {
            return (
              <TableBody key={index} item={item}/>
            )
          })
      }
    </Table>
  </Container>
)

ItemList.propTypes = {
  Items: React.PropTypes.array,
  loading: React.PropTypes.bool.isRequired
}

export default ItemList
