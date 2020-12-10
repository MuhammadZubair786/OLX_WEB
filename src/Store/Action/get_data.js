const get_data= (data)=>{
return(dispatch=>{
    console.log("Get Data =>",data)
    dispatch({
        type:'GetData',
        Card_data:data
    })
})
}

export default get_data