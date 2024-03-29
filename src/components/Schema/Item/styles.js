import styled from 'styled-components'

export const Container = styled.div`
  padding-left: 2em;
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Title = styled.h2`
  color: gray;
  text-align: center;
  flex-grow: 1;
`
export const Table = styled.div`
  box-shadow: 0px 0px 5px gray;
`
export const TableHeader = styled.div`
  display: flex;
  text-align: center;
  color: gray;
  padding: 0;
`
export const RowHeaderStyled = styled.p`
  width: ${props => props.width};
  margin: 0;
  padding: .5em;
  text-align: ${props => props.center ? 'center' : 'left'};
`
export const TableBodyStyled = styled.div`
  display: flex;
  font-size: 12px;
  padding: 0;
  transition: .3s;
  &:hover {
    background: #F5F5F5;
  }
`
export const RowBodyStyled = styled.p`
  width: ${props => props.width};
  margin: 0;
  padding: .5em;
  text-align: ${props => props.center ? 'center' : 'left'};
`

export const NotItemsMsg = styled.p`
  padding: 1em;
  color: gray;
  text-align: center;
`

export const IconStyl = {
  color: '#757575',
  cursor: 'pointer'
}
