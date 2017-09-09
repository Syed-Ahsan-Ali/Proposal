import {Component} from "react";
import {system as S} from "../../constants/system";
export class LoaderCog extends Component {

  render() {
    return (<div className="text-center"><img src={S.LOADERCOG.LOADER} className="imgLoader"/></div>);
  }


}