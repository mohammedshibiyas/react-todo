import React, { Component,PureComponent } from 'react'
import './Todo.css'
import axios from 'axios';

export default class Tudo extends PureComponent {
  state={
    task:"",
    getTask:[]
  }
  handlekey=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

    submit=(e)=>{
      e.preventDefault()
      const {task}=this.state;
      console.log({task});

    
const data=axios.post("http://localhost:3008/api/addtask",{task})
      data.then(()=>{
        alert("task added")
      })
      .catch(()=>{
        console.log(error);
      })

      e.target[0].value=""
    }

    display=async()=>{
      const res=await axios.get('http://localhost:3008/api/gettask')
      this.setState({
        getTask:res.data
      })
    }
    componentDidMount(){
      this.display();
    }

    delete=(a)=>{
       let id=a
       const data=axios.delete(`http://localhost:3008/api/deltask/${id}`) 
       data.then(()=>{
        alert("deleted")
       }).catch((error)=>{
        console.log(error);
       })
       this.display()
    }

  render() {
    return (
      <div>
        <div className="textfield">
                   <form action="" onSubmit={this.submit}>
                   <input type="text" name="task" onChange ={this.handlekey} id="inp"  value={this.state.task} placeholder='enter anything'/>
                    <div className="btn">
                    {/* <button onClick={this.handlekey}>Add</button> */}
                </div>
                   </form>

                </div>

                <div className="lists">
                <ul type="none">
            {this.state.getTask.map((dt) => (
              <li key={dt._id}>
                <div className="list">
                  {dt.task}
                  <button onClick={() => this.delete(dt._id)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
                </div>
               
      </div>
    )
  }
}

