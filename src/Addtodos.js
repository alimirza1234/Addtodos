import React, {Component}  from 'react';
// import todos from './Todos'
import {connect} from 'react-redux'




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
        
        this.props.Addtodos(this.state);
        this.setState({
           content:''
        })

      } 
render(){
   const { projects }=this.props
    return(
       <div className="app container">
       <form onSubmit={this.handleSubmit} project={projects}>
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


export default connect (mapStateToProps)(Addtodos);