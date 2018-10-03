import Accessor from "esri/core/Accessor";
import { whenOnce } from "esri/core/watchUtils";
import EsriMap from "esri/Map";
import MapView from "esri/views/MapView";
import Expand from "esri/widgets/Expand";
import Search from "esri/widgets/Search";
import ScaleBar from "esri/widgets/ScaleBar";

import {
  declared,
  property,
  subclass
} from "esri/core/accessorSupport/decorators";

export interface AppParams {
  appName: string;
  map: EsriMap;
  view: MapView;
}

@subclass("widgets.App.AppViewModel")
class AppViewModel extends declared(Accessor) {
  @property() 
  appName: string;

  @property() 
  map: EsriMap;

  @property() 
  view: MapView;

  constructor(params?: Partial<AppParams>) {
    super(params);
    whenOnce(this, "view").then(this.onload.bind(this));
    console.log('app view model constructor');
    
  }

  onload() {

    console.log('app view model onload');
    
    
    const search = new Search({ view: this.view });
    const expand = new Expand({
      content: search
    });
    const scalebar = new ScaleBar({ view: this.view });
    this.view.ui.add(expand, "top-right");
    this.view.ui.add(scalebar, "bottom-left");

  }
}

export default AppViewModel;


// import EsriMap from "esri/Map";
// import MapView from "esri/views/MapView";
// import "@dojo/shim/Promise";

// import * as data from "../../data/app";

// export default class ApplicationMap {

//     map: EsriMap;
//     view: MapView;
//     center: number[];
//     basemap: string;

//     constructor() {

//         this.map = new EsriMap({
//             basemap: "streets",
//             layers: [data.systemLayer, data.STR]
//         });

//         this.map.reorder(data.STR, 0);

        // this.view = new MapView({
        //     map: this.map,
        //     container: "app",
        //     center: [-104.071, 32.568],
        //     zoom: 10,
        //     ui: {
        //         components: []
        //     }
        // });

//         data.search.view = this.view;
//         data.scalebar.view = this.view;

//         this.view.ui.add(data.search, 'top-right');
//         this.view.ui.add(data.scalebar, 'bottom-right');
        
//     }
// }

