import CustomCompassPlugin from "@/components/custom-compass-plugin";
import MarzipanoVirtual from "@/components/marzipano/marzipano-virtual";
import PhotoSphereViewer from "@/components/photo-sphere-viewer";
import PhotoVirtualTour from "@/components/virtual-tour/photo-virtual-tour";
import React from "react";

export default function Home() {
  return (
    <div>
      {/* <PhotoSphereViewer /> */}
      <PhotoVirtualTour />
      {/* <CustomCompassPlugin /> */}
      {/* <MarzipanoVirtual /> */}
    </div>
  );
}
