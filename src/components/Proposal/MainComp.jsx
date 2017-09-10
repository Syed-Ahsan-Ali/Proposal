import {Component} from "react";
import {connect} from "react-redux";
export class MainComp extends Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div>Main</div>
    );
  }
}
const mapStateToProps=(state)=>({

});
const mapDispatchToProps=(dispatch)=>({

});
export const MainCompContainer=
  connect(mapStateToProps,mapDispatchToProps)(MainComp)