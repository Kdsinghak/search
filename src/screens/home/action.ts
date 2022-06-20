import { useReducer, useCallback } from "react";
import { reducer, initialState } from "./reducer";
import callingAPI from '../../action/callingAPI';

function Action(){

    const [state, dispatch] = useReducer(reducer, initialState);
    
    function debounce(fun:Function, timeout:number) {
        
        let timer: string | number | NodeJS.Timeout | undefined;
        return (args:string) => {
          clearTimeout(timer);
    
          timer = setTimeout(() => {
            dispatch({type: 'data', payload: {data: []}});
            fun(args);
    
          }, timeout);
        };
      }
    
   const processChange = useCallback(
       
        debounce((search:string) =>{
          callingAPI.getApi(
            search,
            state.offset,
    
            (Details: string | []) => {
              if (Details.length === 0) {
                dispatch({type: 'loding', payload: {loding: false}});
              } else {
                console.log(state.data);
                dispatch({type: 'data', payload: {data: [...Details]}});
              }
            },
            (error:string) => {
              console.log(error);
            },
          )
    } , 500
        ),
        [],
      );   
  }

