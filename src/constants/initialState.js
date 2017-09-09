//import {DomainTrackerBaseModel} from "../components/company/domainTracker/Models/DomainTrackerBaseModel";
import {Kaseya} from "../components/integrations/kaseya/kaseyaContainer";
//import {WiseMessage} from "../components/UtilComp/wiseMessageContainer";

export const state = {
  Kaseya : new Kaseya(),
  wiseMessages:[] // new Array<WiseMessage>()
  //,
  //companyDomainTracker: new DomainTrackerBaseModel()
};
