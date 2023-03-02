import { data_phone } from "../../data_phone";
import { ADD_TO_CART, CHANGE_ITEM_PHONE, CHANGE_QUANTITY, DELETE } from "../constant/phoneConstant";

let initialValue = {
    listPhone: data_phone,
    detail: data_phone[0],
    cart: [],
}
export const phoneReducer = (state = initialValue, action) => {
    switch(action.type) {
        case CHANGE_ITEM_PHONE: {
            let index = data_phone.findIndex((item) => {
                return item.maSP == action.payload;
            })
            return {...state, detail: data_phone[index]}
            
        }
        case ADD_TO_CART: {
            let cloneCart = [...state.cart];
            let index = cloneCart.findIndex((item) => {
                return item.maSP == action.payload.maSP;
            })
            if(index == -1) {
                let newPhone = {...action.payload, quantity: 1};
                cloneCart.push(newPhone);
            }
            else {
                cloneCart[index].quantity++;
            }
            return {...state, cart: cloneCart}
        }
        case CHANGE_QUANTITY: {
            let cloneCart = [...state.cart];
            let index = cloneCart.findIndex((item) => {
                return item.maSP == action.payload.id
            })
            cloneCart[index].quantity += action.payload.luaChon;
            if(cloneCart[index].quantity == 0) {
                cloneCart.splice(index,1)
            }
            return {...state, cart: cloneCart}
        }
        case DELETE: {
            let cloneCart = [...state.cart];
            let index = cloneCart.findIndex((item) => {
                return item.maSP == action.payload
            })
            cloneCart.splice(index, 1)
            return {...state, cart: cloneCart}
        }
        default: 
            return state;
    }
}