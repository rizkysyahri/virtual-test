"use client";

import Script from "next/script";
import React, { useEffect } from "react";

export default function MarzipanoVirtual() {
    useEffect(() => {
        const initializePanorama = async () => {
          const Marzipano = (await import("marzipano")) as any;
    
          const viewerElement = document.getElementById("pano") as HTMLElement;
          const viewer = new Marzipano.Viewer(viewerElement);
    
          const limiter = Marzipano.RectilinearView.limit.traditional(
            5000,
            100 * Math.PI / 180
          );
    
          // Buat View
          const view = new Marzipano.RectilinearView(null, limiter);
    
          // Definisikan scene pertama
          const scene1Source = Marzipano.ImageUrlSource.fromString(
            "/scenes/livingroom.jpeg"
          );
          const scene1Geometry = new Marzipano.EquirectGeometry([{ width: 4000 }]);
          const scene1 = viewer.createScene({
            source: scene1Source,
            geometry: scene1Geometry,
            view,
          });
    
          // Definisikan scene kedua
          const scene2Source = Marzipano.ImageUrlSource.fromString(
            "/scenes/bathroom.jpeg"
          );
          const scene2Geometry = new Marzipano.EquirectGeometry([{ width: 4000 }]);
          const scene2 = viewer.createScene({
            source: scene2Source,
            geometry: scene2Geometry,
            view,
          });
    
          // Tambahkan hotspot pada scene pertama
          const hotspotContainer1 = scene1.hotspotContainer();
          const hotspotElement1 = document.createElement("div");
          hotspotElement1.innerText = "Pindah ke Panorama 2";
          hotspotElement1.style.cssText = `
            background: rgba(0, 0, 0, 0.7);
            color: white;
            padding: 5px 10px;
            border-radius: 5px;
            cursor: pointer;
          `;
          hotspotElement1.onclick = () => scene2.switchTo();
          hotspotContainer1.createHotspot(hotspotElement1, { yaw: Math.PI / 4, pitch: 0 });
    
          // Tambahkan hotspot pada scene kedua
          const hotspotContainer2 = scene2.hotspotContainer();
          const hotspotElement2 = document.createElement("div");
          hotspotElement2.innerText = "Kembali ke Panorama 1";
          hotspotElement2.style.cssText = `
            background: rgba(0, 0, 0, 0.7);
            color: white;
            padding: 5px 10px;
            border-radius: 5px;
            cursor: pointer;
          `;
          hotspotElement2.onclick = () => scene1.switchTo();
          hotspotContainer2.createHotspot(hotspotElement2, { yaw: -Math.PI / 4, pitch: 0 });
    
          // Tampilkan scene pertama sebagai default
          scene1.switchTo();
        };
    
        initializePanorama();
      }, []);

  return (
    <>
      <Script src="/js/marzipano.js" strategy="beforeInteractive" />
      <div id="pano" style={{ width: "100%", height: "100vh" }}></div>
    </>
  );
}
