export class Experiencia {

   id? : number;
   nombreE : string;
   cargoE:string;
   descripcionE : string;
   startE:string;
   endE:string;
   cityE:string;
   usuarioId:number;

   constructor(nombreE: string, cargoE:string, descripcionE: string, startE: string, endE:string, cityE:string,usuarioId:number){

       this.nombreE = nombreE;
       this.cargoE=cargoE;
       this.descripcionE = descripcionE;
       this.startE=startE;
       this.endE=endE;
       this.cityE=cityE;
       this.usuarioId=usuarioId
   }
}
