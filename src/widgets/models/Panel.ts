import * as panelView from "../views/panelView";

export default class Panel {

    public static instance: Panel;

    private constructor() {
        panelView.renderPanel();
    }

    static getInstance() {
        if (!Panel.instance) {
            Panel.instance = new Panel();
        }
        return Panel.instance;
    }
}