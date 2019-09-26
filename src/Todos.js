import React  from 'react';

const Todos = ({deletetodo,projects})=>{
   console.log(projects.project)
   const todolist=projects.length ? (
       projects.map(item=>{
      return(
          
          <div className='collection-item container' key={item.id} >
              <span class="center-align">{item.content}  </span>
              <button onClick={()=>{deletetodo(item.id)}}>delete</button>

          </div>
         
      )

       })
   ) : (
       <p className="center">you have no todos left</p>
   )

    return(
     <div className="todos collections"> 
      {todolist}

        </div>
    )


}

export default Todos;