
const initialstate = {data : [],filters:{}, selectedColor:{}}

function productlistreducer(state = initialstate,action)
 {
     
     switch (action.type) {
         case 'Abc':
            return {
                ...state,
                data : action.payload.data,
                filters : action.payload.filters
            } 

             case 'colorupdate':
                return {
                    ...state,
                    selectedColor: action.payload
                } 
                 case 'monthupdate':
                return {
                    ...state,
                    selectedMonth: action.payload
                } 
     
         default:
             return {
                 ...state
             }
     }
     
 }

 export default productlistreducer