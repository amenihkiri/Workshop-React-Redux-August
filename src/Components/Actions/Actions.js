import {INCREMENT,DECREMENT} from"./ActionsTypes"

export function increment(){
    return{type:INCREMENT}
}
export const decrement=()=>{
   return {type:DECREMENT}
}

