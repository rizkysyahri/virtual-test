declare module 'marzipano' {
    export class Viewer {
      constructor(element: HTMLElement, options?: any);
      createScene(params: any): Scene;
    }
  
    export class ImageUrlSource {
      static fromString(url: string): any;
    }
  
    export class EquirectGeometry {
      constructor(levels: Array<{ width: number }>);
    }
  
    export class RectilinearView {
      static limit: {
        traditional: (maxResolution: number, fov: number) => any;
      };
  
      constructor(params: any, limiter: any);
    }
  
    export class Scene {
      switchTo(): void;
    }
  }
  