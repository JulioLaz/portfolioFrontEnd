export class Educacion {
   id? : number;
   schoolE : string;
   titleE : string;
   timeE:string;
   startE : string;
   endE:string;
   estadoE:string;
   cityE:string;
   imgE:string;

   constructor(schoolE: string,titleE: string, timeE: string, startE: string, endE:string,estadoE:string, cityE:string,imgE:string){
      this.schoolE=schoolE;
       this.titleE = titleE;
       this.timeE=timeE;
       this.startE=startE;
       this.endE=endE;
       this.estadoE = estadoE;
       this.cityE=cityE;
       this.imgE=imgE;
   }
}
