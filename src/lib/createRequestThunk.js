import { startLoading, finishLoading } from "../modules/loading"

// type: 'sample/GET_POST'
// SUCCESS: 'sample/GET_POST_SUCCESS'
export default function createRequestThunk(type, request){
  const SUCCESS = `${type}_SUCCESS`
  return params => async dispatch => {
    dispatch(startLoading(type))
    try{
      const response = await request(params)
      dispatch({
        type: SUCCESS,
        payload: response.data 
      })
      dispatch(finishLoading(type))
    }catch(e){
      dispatch(finishLoading(type))
      throw e 
    }
  }
}