import { useContext } from "react";
import { osm } from "../Resources";

export default function MapContex(source, zIndex) {   
    const context = useContext({
        source: osm,
        zIndex: 0,
    });
    return context();
}
