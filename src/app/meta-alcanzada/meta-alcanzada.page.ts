import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Camera, CameraResultType } from '@capacitor/camera';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-meta-alcanzada',
  templateUrl: './meta-alcanzada.page.html',
  styleUrls: ['./meta-alcanzada.page.scss'],
})
export class MetaAlcanzadaPage implements OnInit {

  public photo: SafeResourceUrl | undefined;
  totalAgua: any=''; 

  constructor(private router: Router, private sanitizer: DomSanitizer) {}

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.totalAgua = localStorage.getItem('totalAgua');
  }

  async tomarFoto(){
    try {
      const capturedPhoto = await Camera.getPhoto({
        quality: 100,
        allowEditing: true,
        resultType: CameraResultType.Uri
      });
      this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(capturedPhoto.webPath!);
    } catch (error) {
      console.error('error al tomar la foto', error);
    }
  }
  
}
