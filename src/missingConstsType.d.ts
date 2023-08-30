// because creator of @itseasy21/react-elastic-carousel not provided the type of the consts variable I repair this:
import "@itseasy21/react-elastic-carousel";
declare module "@itseasy21/react-elastic-carousel" {
  export interface Consts {
    PREV: string;
    NEXT: string;
    START: string;
    CENTER: string;
    END: string;
  }
  export const consts: Consts;
}
