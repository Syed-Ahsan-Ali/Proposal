import {Component} from "react";
import {connect} from "react-redux";
import {DropDownComp} from "./DropDownComp";
import {getTags} from "./../../actions/actions"
import {Tags} from "./Models/Tags";
export class MainComp extends Component{
  constructor(){
    super();
    this.state={
      tags:[new Tags()],
    };
  }
  componentWillReceiveProps(nextProps){
    debugger;
    this.setState({tags:nextProps.tags});
  }
  componentDidMount(){
    this.props.getTags();
  }
  render(){
    return(
      <div>
        <DropDownComp data={this.state.tags}/>
        <div>
          <h1>Intro</h1>
          <p></p>
        </div>
        <div>
          <h1>Experience</h1>
          <p></p>
        </div>
        <div>
          <h1>Execution Plan</h1>
          <p></p>
        </div>
        <div>
          <h1>Questions</h1>
          <p></p>
        </div>
      </div>
    );
  }
}
const mapStateToProps=(state)=>({
  tags:state.Proposal
});
const mapDispatchToProps=(dispatch)=>({
  getTags(){
  dispatch(getTags());
}
});
export const MainCompContainer=
  connect(mapStateToProps,mapDispatchToProps)(MainComp);