"use client"

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useState, useEffect } from "react";
import { io } from 'socket.io-client';

const socket = io('http://localhost:4000'); 

// Fix marker icon issue in Leaflet
//delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/743/743920.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
});

const CommunityMap = () => {

  return (
    <div className="h-screen w-full">
        <div className="w-5/6 h-24 border shadow m-auto ">

        </div>

        <div className="w-5/6 h-100 border shadow m-auto ">
            <MapContainer center={[14.2982879, 120.8761101]} zoom={13} scrollWheelZoom={true} className="h-full w-full">
                <TileLayer
                    attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[14.2982879, 120.8761101]}>
                    <Popup>home</Popup>
                </Marker>
            </MapContainer>
        </div>
     
    </div>
  );
};

export default CommunityMap;