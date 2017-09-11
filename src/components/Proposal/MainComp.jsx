import {Component} from "react";
import {connect} from "react-redux";
import {DropDownComp} from "./DropDownComp";
import {getDescById} from "../../actions/actions";
import {getTags} from "./../../actions/actions"
import {Tags} from "./Models/Tags";
export class MainComp extends Component{
  constructor(){
    super();
    this.state={
      tags:[new Tags()],
      description:[],
    };
    this.getDescriptionByTag=this.getDescriptionByTag.bind(this);
  }
  componentWillReceiveProps(nextProps){
    debugger;
    if(nextProps.tags.data!==undefined && nextProps.tags.data.length>0)
    this.setState({tags:nextProps.tags.data});
    if(nextProps.tags.description!==undefined && nextProps.tags.description.length>0)
    {
      this.setState({description:nextProps.tags.description});
    }
  }
  componentDidMount(){
    this.props.getTags();
  }
  getDescriptionByTag(Id){
    this.props.getDescById(Id);
  }
  render(){
    return(
      <div>
        <DropDownComp data={this.state.tags} onChange={this.getDescriptionByTag}/>
        <div>
          <h1>Intro</h1>
          {this.state.description.map((obj,i)=>
          <p key={i}>{obj.screenText} </p>)}
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
},
  getDescById(Id){
    dispatch(getDescById(Id))
  }
});
export const MainCompContainer=
  connect(mapStateToProps,mapDispatchToProps)(MainComp);