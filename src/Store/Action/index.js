const set_data = (data)=>{
    return(dispatch)=>{
        dispatch({
            type:'SETDATA',
            data:data
        })
    }
}


export default set_data