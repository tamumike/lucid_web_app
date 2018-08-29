import * as widgetView from "../views/widgetView";

export default class Widget {
    
    label: string;
    ID: string;
    inPanel: boolean;
    
    constructor(label: string, ID: string, inPanel: boolean) {
    
        this.label = label;
        this.ID = ID;
        this.inPanel = inPanel;

        (inPanel) ? widgetView.renderNode(this.label, this.ID) : widgetView.renderOutOfPanelNode();
        

    }
}