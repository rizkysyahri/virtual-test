"use client";

import * as React from "react";
import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";
import { VirtualTourPlugin } from "@photo-sphere-viewer/virtual-tour-plugin";
import { GalleryPlugin } from "@photo-sphere-viewer/gallery-plugin";
import "@photo-sphere-viewer/virtual-tour-plugin/index.css";
import "@photo-sphere-viewer/gallery-plugin/index.css";
import { MarkersPlugin } from "@photo-sphere-viewer/markers-plugin";

export default function PhotoVirtualTour() {
  const virtuaRef = React.useRef<any>(null);
  const caption = "Yow ser";

  const plugins = [
    [MarkersPlugin, []],
    [
      VirtualTourPlugin,
      { renderMode: "3d", position: "gps", startNodeId: "1" },
    ],
    [
      GalleryPlugin,
      {
        visibleOnLoad: true, // pastikan ini diaktifkan
        thumbnailSize: { width: 150, height: 150 },
      },
    ],
  ];

  const handleReady = (instance: any) => {
    virtuaRef.current = instance;
    const virtualTour = virtuaRef.current!.getPlugin(VirtualTourPlugin);
    const galleryVirtualTour = virtuaRef.current?.getPlugin(GalleryPlugin);

    virtualTour.setNodes([
      {
        id: "1",
        panorama: "/scenes/livingroom.jpeg",
        thumbnail: "/scenes/livingroom.jpeg",
        name: "One",
        caption: `[1] ${caption}`,
        links: [{ nodeId: "2", position: { textureX: 2300, textureY: 1800 } }],
        gps: [-80.156479, 25.666725, 3],
        sphereCorrection: { pan: "33deg" },
      },
      {
        id: "2",
        panorama: "/scenes/bathroom.jpeg",
        thumbnail: "/scenes/bathroom.jpeg",
        name: "Two",
        caption: `[2] ${caption}`,
        links: [{ nodeId: "1", position: { textureX: 3500, textureY: 1800 } }],
        gps: [-80.156168, 25.666623, 3],
        sphereCorrection: { pan: "42deg" },
      },
    ]);

    galleryVirtualTour.setItems([
      {
        id: "1",
        name: "One",
        panorama: "/scenes/livingroom.jpeg",
        thumbnail: "/scenes/livingroom.jpeg",
        option: {
          caption: `[1] ${caption}`,
        },
      },
      {
        id: "2",
        name: "Two",
        panorama: "/scenes/bathroom.jpeg",
        thumbnail: "/scenes/bathroom.jpeg",
        option: {
          caption: `[2] ${caption}`,
        },
      },
    ]);
  };

  return (
    <ReactPhotoSphereViewer
      src={"/scenes/livingroom.jpeg"}
      ref={virtuaRef}
      plugins={
        plugins as [typeof VirtualTourPlugin, any] | [typeof GalleryPlugin, any]
      }
      height={"100vh"}
      width={"100vw"}
      onReady={handleReady}
      caption="Hello There!"
    ></ReactPhotoSphereViewer>
  );
}
