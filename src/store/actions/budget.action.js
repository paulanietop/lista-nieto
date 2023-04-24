export const CREATE_BILL = 'CREATE_BILL'
export const REMOVE_BILL = 'REMOVE_BILL'

export const createBill = (bill) => ({
  type: CREATE_BILL,
  bill
})

export const removeBill = (bill) => ({
   type: REMOVE_BILL,
   bill
 })