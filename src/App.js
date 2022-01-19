import Leftbar from "./components/leftbar/Leftbar";
import Navbar from "./components/navbar/Navbar";
import Map from "./components/Maps";
import "./App.css";
import { useState } from "react";
import { Layers, TileLayer} from "./components/Layers";
import { osm } from "./components/Resources";

import config from "./mapConfig.json"



const App = ({source, zIndex, childern}) => {
  const [center, setCenter] = useState(config.center);
  const [zoom, setZoom] = useState(config.zoom);

  return (
    <>
      <Navbar />
      <div className="container">
        <Leftbar />
        <Map center={center} zoom={zoom} onChange={() => setCenter(setZoom)}/>
        <Layers>
          <TileLayer source={osm()} zIndex={0} />
          </Layers>
      </div>
    </>
  );
};

export default App;
