import {Component} from "react";
export const DropDownComp extends Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div id="colvisbtn">
        <div data-toggle="tooltip" data-placement="top" title="Select Skill">
          <button></button>
          <div></div>
        </div>
      </div>
    );
  }
}