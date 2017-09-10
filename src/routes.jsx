//import * as React from "react";
import {DropDownContainer} from "./components/Proposal/DropDownComp";
import {kaseyaContainer as KaseyaContainer} from "./components/integrations/kaseya/kaseyaContainer";
import {Route,BrowserRouter as Router} from "react-router-dom";
// import {domainTracker as DomainTracker} from "./components/company/domainTracker/domainTrackerContainer";

import {showErrors as ShowErrors} from "./components/UtilComp/wiseMessageContainer";

export const routes = () => (

  <Router>
    <div>
      <ShowErrors />
      {/*<Switch>*/}
      {/*<Route path="/" component={Root} />*/}
      <Route path="/integration/kaseya/view" component={KaseyaContainer}  />
      <Route path="/Proposal" component={DropDownContainer}  />
      {/*<Route path="/company/domainTracker/:domain/view" component={DomainTracker}  />*/}
      {/*</Switch>*/}
    </div>
  </Router>
);
