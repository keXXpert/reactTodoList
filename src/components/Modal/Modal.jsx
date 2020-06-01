import React from "react";
import myCSS from "./Modal.module.css";

//Class component jus for demo purposes
export default class Modal extends React.Component {
  state = {
      isOpen: false
  }
  
    render() {
    return (
      <>
        <button className={myCSS.btn}onClick={()=>{this.setState({isOpen:true})}}>Open modal</button>
        {this.state.isOpen && <div className={myCSS.modal}>
          <div className={myCSS.modalBody}>
              <h2>Modal Title</h2>
              <p>I am jus a demo modal!</p>
              <button onClick={()=>{this.setState({isOpen:false})}}>Close modal</button>
          </div>
        </div>}
      </>
    );
  }
}
