import $ = require("jquery");

import * as widgetView from "../views/widgetView";
import * as panelView from "../views/panelView";
import Panel from "../models/Panel";

export default class Widget {
    
    label: string;
    ID: string;
    
    constructor(label: string, ID: string) {
    
        this.label = label;
        this.ID = ID;
        widgetView.renderNode(this.label, this.ID);

    }
}