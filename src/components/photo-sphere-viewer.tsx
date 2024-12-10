"use client";

import * as React from "react";
import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";
import { MarkersPlugin } from "@photo-sphere-viewer/markers-plugin";
import { CompassPlugin } from "@photo-sphere-viewer/compass-plugin";
import { VirtualTourPlugin } from "@photo-sphere-viewer/virtual-tour-plugin";

import "@photo-sphere-viewer/markers-plugin/index.css";
import "@photo-sphere-viewer/compass-plugin/index.css";
import CustomTooltip from "./custom-tooltip";

const markerSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-circle-percent"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="M9 9h.01"/><path d="M15 15h.01"/></svg>`;
const markerImage = `data:image/svg+xml;base64,${btoa(markerSvg)}`;

export default function PhotoSphereViewer() {
  const plugins = [
    [
      MarkersPlugin,
      {
        markers: [
          {
            id: 1,
            position: { yaw: "55deg", pitch: "-25deg" },
            image: "vercel.svg",
            size: { width: 128, height: 128 },
            anchor: "bottom center",
            tooltip: "Marker Tooltip Test",
          },
          {
            id: 2,
            position: { yaw: "20deg", pitch: "0.9deg" },
            image: markerImage,
            size: { width: 128, height: 128 },
            anchor: "bottom center",
            tooltip: {
              // Use a string or HTML to set the content for the tooltip
              content: (
                `<div>
                   <img src='/image.jpg' alt="marker image" style="width: 100px; height: 100px;" />
                   <p>Marker info</p>
                </div>`
              ),
              position: "top",
              trigger: "click",
            },
          },
        ],
      },
    ],
  ];

  return (
    <div className="App">
      <ReactPhotoSphereViewer
        src="image.jpg"
        height={"100vh"}
        width={"100%"}
        plugins={plugins as [typeof MarkersPlugin, any] | [typeof CompassPlugin, any][]}
      ></ReactPhotoSphereViewer>
    </div>
  );
}
