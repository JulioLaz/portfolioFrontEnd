import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL, deleteObject, getStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImgService {
  url: string = "";
  // isSpiner:boolean;
  constructor(
    private storage: Storage
  ) { }

  public uploadImg($event: any, name: string) {

    const file: File = $event.target.files[0];
    console.log("desde img.service: " + file);
    const imgRef = ref(this.storage, `imagen/` + name);
    console.log("desde img.service: " + name);
    console.log("desde img.service: " + imgRef);
    uploadBytes(imgRef, file)
    .then(_response => { this.getImagen(name) })
    .catch(error => console.log("ERROR DESDE IMG.SERVICE: " + error))
  }

  async getImagen(name: string) {
    const imagenesRef = ref(this.storage, `imagen/` + name)
    console.log("desde img.service: " + imagenesRef);
    // const imagenesRef = ref(this.storage, 'imagen')
    // const imagenesRef = ref(this.storage, 'imagen')

    ref(imagenesRef)
    // list(imagenesRef)
      // .then(async response => {
        // for (let item of response.items) {
          this.url = await getDownloadURL(imagenesRef);
          // this.url = await getDownloadURL(item);
          console.log("LA url es: " + this.url)
        // }
  //     })
  //     .catch(error => console.log(error))
  }
}
