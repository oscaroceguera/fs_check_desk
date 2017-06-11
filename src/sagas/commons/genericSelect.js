import { select } from 'redux-saga/effects'

export const getSimpleState = (reducer, item) =>
  select(state => state[reducer].toJS()[item])

export const getStateWithSecondItem = (reducer, firstItem, secondItem) =>
  select(state => state[reducer].toJS()[firstItem][secondItem])
