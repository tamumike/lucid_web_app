import esri = __esri;

import {
  aliasOf,
  declared,
  property,
  subclass
} from "esri/core/accessorSupport/decorators";
import { tsx } from "esri/widgets/support/widget";

import EsriMap from "esri/Map";
import MapView from "esri/views/MapView";
import Widget from "esri/widgets/Widget";

import AppViewModel, { AppParams } from "./AppViewModel";

// import { Header } from "./Header";

interface AppViewParams extends AppParams, esri.WidgetProperties {}

const CSS = {
  base: "main",
  webmap: "webmap"
};

@subclass("app.widgets.webmapview")
export default class App extends declared(Widget) {
  @property() 
  viewModel = new AppViewModel();

  @aliasOf("viewModel.appName") 
  appName: string;

  @aliasOf("viewModel.map") 
  map: EsriMap;

  @aliasOf("viewModel.view") 
  view: __esri.MapView;

  constructor(params: Partial<AppViewParams>) {
    super(params);
  }

  render() {
    return (
      <div class={CSS.base}>
        {/* {Header({ appName: this.appName })} */}
        <div class={CSS.webmap} bind={this} afterCreate={this.onAfterCreate} />
      </div>
    );
  }

  private onAfterCreate(element: HTMLDivElement) {
    import("../../data/app").then(({ systemLayer, map }) => {
      this.map = map;
      this.view = new MapView({
        map: this.map,
        container: element,
        center: [-104.071, 32.568],
        zoom: 10,
        ui: {
            components: []
        }
    });
    });
  }
}

// import ApplicationMap from "./Map";
// import "@dojo/shim/Promise";

// export default class App {
//     // Initialize map
//     applicationMap = new ApplicationMap();    
// };