import React from 'react'
import { Loader } from '@googlemaps/js-api-loader';
import { useEffect } from 'react';

const loader = new Loader({
  apiKey: "",
  version: "weekly",
  libraries: ["places"]
});

const mapOptions = {
  center: {
    lat: 0,
    lng: 0
  },
  zoom: 4
};
const Maps = () => {
    useEffect(() => {
    loader.load().then(({Map}) => {
            new Map(document.getElementById("map"), mapOptions);
        })
        .catch((e) => {
            console.error("Error loading Google Maps library", e);
        });
    }, []);
    
  return (
    <div id= "map">Maps</div>
  )
}

export default Maps