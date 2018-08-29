import Widget from "./Widget";

import * as thirdPartyView from "../views/thirdPartyView";
import {elements} from "../views/base";

export default class ThirdParty extends Widget {

     constructor() {
        super("3rd_Party", "thirdParty", true);
    }

    render() {
        
        thirdPartyView.renderWidget();
        
    }

}