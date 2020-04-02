import { Component, OnInit } from '@angular/core';
import {Reporte} from '../../model/Reporte';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from 'src/app/servicios/firebase.service';
import { ToastController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-agregar-reporte',
  templateUrl: './agregar-reporte.page.html',
  styleUrls: ['./agregar-reporte.page.scss'],
})
export class AgregarReportePage implements OnInit {
  reporte: Reporte = {
    title: '',
    content: '',
    locationlat: '',
    locationlong: '',
    createdAt: new Date().getTime()
  };
  constructor(
    private geolocation: Geolocation,
    private activatedRoute: ActivatedRoute,
    private fbService: FirebaseService,
    private toastCtrl: ToastController,
    private router: Router
  ) { }

  async ngOnInit() {
    const rta = await this.geolocation.getCurrentPosition();
    // tslint:disable-next-line: no-unused-expression
    this.reporte.locationlat = rta.coords.latitude;
    this.reporte.locationlong = rta.coords.longitude;
  }
  agregarReporte(){
    this.fbService.addReporte(this.reporte).then(() => {
      this.router.navigateByUrl('/');
    }, err => {
    });
  }
}
