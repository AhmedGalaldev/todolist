import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

const TodoItems = ({ entries }) => (
  <div className="container">
    <ul className="list-group ">
    {entries.map(({ heading, key }) => (
      <li className="list-group-item" key={key}>{heading}</li>
    ))}
   </ul>
  </div>
  
);


class App extends React.Component{
  state = {
    items : []
  }
  addTodo = (heading) => heading !== '' && this.setState(({ items }) => ({
    items: items.concat({ 
      heading,
      key: Date.now()
    })
  }));
   
  render(){

    return (
      <div className="container-fluid bg-light">
        <TodoItems entries={this.state.items} />
       <InputForm onSubmit={this.addTodo}></InputForm>
     </div>
        ) 
  }
}



class InputForm extends React.Component{
  state = {
    input: ''
  };

  onInput = (e) => this.setState({
    input: e.target.value
  });
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.input);
  }
  render(){
    

    return (
        <div className="container">
           <hr/>
          <form className="form-inline" onSubmit={this.onSubmit}>
          <label>Task</label>
           <div className="form-group mx-sm-2">
            <input type="text" className="form-control"  placeholder="Task name" 

              value={ this.state.value }
              onChange={ this.onInput } />
            </div>
            <button  type="submit" className="btn btn-primary "
            >Add To List</button>
            
          </form>
        </div>
        
      
      
    )
  }
}

export default App;
