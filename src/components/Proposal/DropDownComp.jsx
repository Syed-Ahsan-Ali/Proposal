import {Component} from "react";
import {connect} from "react-redux";
export class DropDownComp extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div id="colvisbtn">
        <div data-toggle="tooltip" data-placement="top" title="Select Skill" className="dropdown pull-right">
          <button className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown">
            <a href="#">
              <img src="./../../../img/icon_listdd.png"/>
            </a>
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <div>
              <label>Test
              <input type="checkbox"/>
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps=(state)=>({

});
const mapDispatchToProps=(dispatch)=>({

});
export const DropDownContainer=
  connect(mapStateToProps,mapDispatchToProps)(DropDownComp)