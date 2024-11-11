"use client";
import React from 'react';
import {MyGoogleMap} from "./googlemap";
import { MapProvider } from '../../../../providers/map-providers';

const RightSide = () => {
    return (
      <div className="h-full">
        <MapProvider>
          < MyGoogleMap/>
        </MapProvider>
      </div>
    );
  }
export default RightSide;