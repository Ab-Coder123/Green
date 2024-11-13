'use client'
import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapComponent = () => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (map) {
      // قم بإضافة أي خصائص أو إعدادات إضافية بعد تحميل الخريطة
    }
  }, [map]);

  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap
        mapContainerStyle={{ height: "400px", width: "100%" }}
        center={{ lat: -34.397, lng: 150.644 }}
        zoom={8}
        onLoad={map => setMap(map)} // ستخزن الخريطة هنا
      >
        <Marker position={{ lat: -34.397, lng: 150.644 }} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
