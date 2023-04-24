import { CREATE_BILL, REMOVE_BILL } from '../actions/budget.action'

import { BILLS } from '../../data/bills'

const initialState = {
  bills: BILLS,
  sum: 800000,
}

const BillReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BILL:
      return {
        ...state,
        bills: [...state.bills, action.bill],
        sum: Number(state.sum) + Number(action.bill.expense),
      }
    case REMOVE_BILL:
      return {
        bills: state.bills.filter(bill => bill.id !== action.bill.id),
        sum: Number(state.sum) - Number(action.bill.expense),
      }
    default:
      return state
  }
}

export default BillReducer