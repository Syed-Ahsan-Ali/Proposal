
export const integrationInfoComp =(prop) => {
  let popUp =() => {
    parent.postMessage({
      name:"hide",
    },"*");
  };
  let closePopup = () => {
    parent.postMessage({name: "hidepopup"},"*");
  };

  return(
    <div>
      <div className="col-lg-6 col-xs-12 img-display">
        <div className="widget-item f-w col-lg-4 hidden-xs">
          <img src={prop.object.sm_img} />
          <div
            className="overlayer widget-detail hover_img  bottom-left full-width">
            <img src={prop.object.sm_hover_img} className="search-icon-hover"
              onClick={popUp} data-toggle="modal" data-target="#myModal" />
          </div>
        </div>

        <div className="col-lg-6 col-xs-12">
          <div>&nbsp;</div>
          <ul>
            {prop.object.props.map((obj, index) => <div key={index}>
              <li className="list-style" ><span
                className="badge bg-complete text-white" >{obj.key}</span>&nbsp;
              {typeof obj.value === "string"
                ?
                <span dangerouslySetInnerHTML={{__html:obj.value}}></span>
                :
                (<span>{obj.value.head}<ul className="subList">
                  {obj.value.detail_List.map((subValue,i) => <li key={i}>{subValue}</li>)}
                </ul></span>)
              }
              </li>
              <div className="line-height">&nbsp;</div>
            </div>)}
          </ul>
        </div>
      </div>
      <div>
        <div className="modal fade" id="myModal" role="dialog">
          <div className="modal-dialog modal-md">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close"
                  onClick={closePopup} data-dismiss="modal">&times;</button>
              </div>
              <div className="modal-body">
                <img className="img-responsive" src={prop.object.lg_img} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// var modifyString = (stringValue) => {
//     var bolded = [ "ConnectWise Client" , "System" , "Setup Tables" , '/"Integrator"/' , "Integrator Login" ,
//         '/"+"/' ,"Admin rights" ,"Access Level" , "All Records" , "Save" , "Close" ]
//     for(var b in bolded){
//         if(stringValue.indexOf(bolded[b]) > 0){
//         }
//     }
//     // var re = new RegExp(find, 'g');
//     // return str.replace(re, '<b>'+find+'</b>');
// }
