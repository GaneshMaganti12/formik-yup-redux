import { Fetch_Post } from "./ActionType";


export const fetchPost = (values) =>{
    return async(dispatch) =>{
      let res = await fetch(' http://localhost:4001/Login', {method: 'POST', headers: { 'Content-Type': 'application/json'}, body: JSON.stringify({...values, jwtToken : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.cThIIoDvwdueQB468K5xDc5633seEFoqwxjF_xSJyQQ"})})
      let data = await res.json()
      dispatch({type: Fetch_Post, payload: data})
    }
}