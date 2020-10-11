import React, { Component } from "react";
class List extends Component {
  state={
    show: false
  };
  render() {
    let {data} = this.props;
    let {name,children} = data;
    let {show} = this.state;
    return <dl className={`friend-group ${show?" expanded":""}`} onClick={()=>{
      this.setState({
        show:!show
      })
    }}>
      <dt>{name}</dt>
        {children.map((item,index)=>{
          return <dd key={index}>{item}</dd>
        })}
    </dl>
  }
}

export default List;