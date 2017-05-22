import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as itemsActions from '../../../reducers/getItemsReducer'
import Divider from 'material-ui/Divider'

class ItemListContainer extends React.Component {
  componentWillMount () {
    this.props.fetchItems()
  }

  render () {
    console.log('items', this.props.items);
    return (
      <div style={{paddingLeft: '2em'}}>
        <h3 style={{color: 'gray', textAlign: 'center'}}>{'Reactivos'}</h3>
        <div style={{boxShadow: '0px 0px 5px gray'}}>
          <div style={{display: 'flex', textAlign: 'center', color: 'gray', padding: '0 .5em'}}>
            <p style={{width: '20%'}}>{'Módulo'}</p>
            <p style={{width: '35%'}}>{'Pregunta'}</p>
            <p style={{width: '35%'}}>{'Métrica'}</p>
            <p style={{width: '10%'}}>{'Valor'}</p>
          </div>
          <Divider />
          {
            this.props.items.map((item, index) => {
              return (
                <div key={index}>
                  <div style={{display: 'flex', fontSize: '12px', padding: '0.5em'}}>
                    <p style={{width: '20%', margin: 0, padding: '.5em'}}>{item.moduleId.name}</p>
                    <p style={{width: '35%', margin: 0, padding: '.5em'}}>{item.answer}</p>
                    <p style={{width: '35%', margin: 0, padding: '.5em'}}>{item.recommend}</p>
                    <p style={{width: '10%', margin: 0, padding: '.5em', textAlign: 'center'}}>{item.value}</p>
                  </div>
                  <Divider />
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const itemsJS = state.getItemsReducer.toJS()
  return {
    items: itemsJS.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...itemsActions
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemListContainer)
