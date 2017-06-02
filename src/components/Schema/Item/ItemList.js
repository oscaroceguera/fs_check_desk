import React from 'react'
import Divider from 'material-ui/Divider'
import styled from 'styled-components'

const Container = styled.div`
  padding-left: 2em;
`
const Title = styled.h3`
  color: gray;
  text-align: center;
`
const Table = styled.div`
  box-shadow: 0px 0px 5px gray;
`
const TableHeader = styled.div`
  display: flex;
  text-align: center;
  color: gray;
  padding: 0 0.5em;
`
const RowHeaderStyled = styled.p`
  width: ${props => props.width};
`
const TableBodyStyled = styled.div`
  display: flex;
  font-size: 12px;
  padding: .5em;
`
const RowBodyStyled = styled.p`
  width: ${props => props.width};
  margin: 0;
  padding: .5em;
  text-align: {props => props.align};
`

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

TableBody.propTypes = {
  Items: React.PropTypes.array
}

const ItemList = ({items}) => (
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
        items.map((item, index) => {
          return (
            <TableBody key={index} item={item}/>
          )
        })
      }
    </Table>
  </Container>
)

ItemList.propTypes = {
  Items: React.PropTypes.array
}

export default ItemList
