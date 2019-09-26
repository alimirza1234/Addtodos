import React, {Component} from  'react';
import Todos from './Todos'
import Addtodos from './Addtodos'

class App extends Component {
  state={
    items:[
      {id:1, content: "this is first todo" },
      {id:2, content: "this is second todo" }
    ]
  }
    
    
  deletetodo = (id) =>{
   let deleteitem= this.state.items.filter(item =>{
  return item.id !== id

   })
   this.setState({
    items : deleteitem 
    })
  }
  addtodo = (addtodo) =>{
      // console.log(additem)
      addtodo.id = Math.random();
      let copy = [...this.state.items,addtodo];
      // copy.push(additem)
      this.setState({
        items: copy
      }) 
      console.log(copy)
  }


  render(){
    return(
      <div className="app container">

        <h1 className="center blue-text">TODO'S</h1>
        
         <Todos todos={this.state.items} deletetodo={this.deletetodo}/>
        <Addtodos Addtodos={this.addtodo}/>
        </div>

      


    );
  }
}

export default App;