const set_user= (data) =>{
    return(dispatch)=>{
    console.log("data From MAIN FILE IN ACTION ===>",data)
    dispatch({
        type:'SETUSER',
        user_data:data
    })
    


    }
}

export default set_user