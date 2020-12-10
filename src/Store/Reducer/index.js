const Inital_Data = {
    name:'olx_app',
    user:[],
    current_user:[],
    card_data:[]
    
}

export default (state=Inital_Data,action)=>{
    console.log("DATA GET FROM REDUCER=>",action)
    
    switch(action.type){
        case "SETUSER":
           
            const USER={
                User_Id:action.user_data.uid,
                User_Name:action.user_data.displayName,
                User_Email:action.user_data.email,
                User_PhotoURL:action.user_data.photoURL
            }
            console.log(USER)
            return({
                 
        ...state,
        current_user:USER

            })

        case 'GetData':
            return({
                ...state,
                card_data:action.Card_data
            })
}
        



        

    return state
    }
  

