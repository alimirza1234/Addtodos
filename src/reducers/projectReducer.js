const initstate ={ 
    projects:[
      {id:1, content: "this is first todo" },
      {id:2, content: "this is second todo" }
    ]
  }

const projectReducer = (state=initstate, action)=>{
 switch (action.type){
 case 'CREATE_PROJECT':
   console.log('created_project', action.project)
   return state;
   default:
     return state;
}
}
export default projectReducer ;