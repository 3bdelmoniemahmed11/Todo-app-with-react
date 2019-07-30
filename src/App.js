import React ,{Component}  from 'react';
import Todos from './Todos';
import AddTodo from'./AddTodo';

class App extends Component {
  state={
    todos:[
      {id:1,content:"buy some milk"},
      {id:2,content:"play mario kart"}
    ]
  }
    deletetodo=(id)=>
    {
          const Ntodos=this.state.todos.filter(todo=>
            {
              return todo.id !==id;
            })
            this.setState({
              todos:Ntodos
            })
    }
    addtodo=(todo)=>
    {
      todo.id=Math.random+1;
      let Ntodos=[...this.state.todos,todo];
      this.setState({
        todos:Ntodos
      })

    }
  
  render(){
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deletetodo}/>
        <AddTodo addtodo={this.addtodo}/> 
      </div>
    );
    }
}

export default App;
