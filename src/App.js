import React,{Component} from "react";
import "./index.css";
import data from "./data";
import List from "./list";
class App extends Component {
  render(){
    return <div className="friend-list">
    {data.map((item,index)=>{
        return <List 
          key={index}
          data={item}
          index={index}
        />
    })}
</div>
  }
}

export default App;