import React, {Component}  from 'react';
// import todos from './Todos'
import {connect} from 'react-redux'
import { createproject }from './actions/projectAction'

import Todos from './Todos'




class Addtodos extends Component{

  
    state={
        
        
            content:null,
            
        
    }

    handleChange =(e)=>{
        this.setState({
            
            [e.target.id] : e.target.value
        })
      }
      handleSubmit = (e) =>{
        e.preventDefault();
        
        this.props.createproject(this.state);
        // this.setState({
        //    content:''
        // })

      } 
render(){
   const { projects }=this.props
    return(
       <div className="app container">
       <Todos projects={projects}/>
       
       <form onSubmit={this.handleSubmit}>
               <input type="text" id="content" onChange={this.handleChange} />
               <button>Submit</button>
           </form>
           
       </div>
       
    )
    }
    

}


const mapStateToProps =(state)=>{
    console.log(state)
    return {
        projects : state.project.projects
    }

}

const mapDispatchToProps = (dispatch) =>{
return{
    createproject: (project) => dispatch(createproject(project))
}
}


export default connect (mapStateToProps,mapDispatchToProps)(Addtodos);