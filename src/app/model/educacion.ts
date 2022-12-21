export class Educacion {
   id? : number;
   titleE : string;
   timeE:string;
   startE : string;
   endE:string;
   estadoE:string;
   cityE:string;
   imgE:string;

   constructor(titleE: string, timeE: string, startE: string, endE:string,estadoE:string, cityE:string,imgE:string){

       this.titleE = titleE;
       this.timeE=timeE;
       this.startE=startE;
       this.endE=endE;
       this.estadoE = estadoE;
       this.cityE=cityE;
       this.imgE=imgE;
   }
}
