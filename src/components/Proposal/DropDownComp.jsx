import {Component} from "react";
export class DropDownComp extends Component{
  constructor(props){
    super(props);
  }
  render(){
    let props=this.props;
    debugger;
    return(
      <div id="colvisbtn">
        <div data-toggle="tooltip" data-placement="top" title="Select Skill" className="dropdown pull-right">
          <button className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown">
            <a href="#">
              <img src="./../../../img/icon_listdd.png"/>
            </a>
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {this.props.data.map((obj,i)=>
              <div key={i}>
                <label>{obj.screenName}
                <input type="checkbox"/>
                </label>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
