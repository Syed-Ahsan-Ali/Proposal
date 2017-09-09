import {Component} from "react";
import {error as Error} from "./formFieldErrorBaseComp.jsx";
// import {FormFieldBaseModel} from "../formModel/FormFieldBaseModel";
import {validateField} from "../validations/validateFormFields";

export class FormFieldBaseComp extends Component{

  constructor(props){
    super(props);
    this.state = {
      classNames: "col-lg-4 col-md-4 col-sm-12 col-xs-12 sm-p-l-0 tab-p-l-0"
    };
  }

  render(){
    let props = this.props;
    let state = this.state;
    return(
      <div className={(props.classNames) ? props.classNames : state.classNames}>
        <div className="form-group form-group-default pg-form-group">
          <label className="label-style">{props.model.label}</label>
          <input
            ref={props.model.name}
            type={props.model.type}
            required={props.model.isRequired}
            name={props.model.name}
            onChange={props.onChange}
            value={props.model.value}
            className="form-control"
            placeholder={props.model.placeHolder} />
          <Error value={validateField(props.model).message} />
        </div>
      </div>
    );
  }
}

