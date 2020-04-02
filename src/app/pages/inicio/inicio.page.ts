// tslint:disable: indent

import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {AuthService} from '../../servicios/auth.service';
import { Observable } from 'rxjs';
import {Reporte} from '../../model/Reporte';
import { FirebaseService } from '../../servicios/firebase.service';
declare var google;
interface Marker {
	position: {
		lat: number;
		lng: number;
	};
	title: string;
}

interface Components {
	icon: string;
	name: string;
	redirectTo: string;
}

@Component({
	selector: 'app-inicio',
	templateUrl: './inicio.page.html',
	styleUrls: [ './inicio.page.scss' ]
})
export class InicioPage implements OnInit {
	ubicacion = null;
private reportes: Observable<Reporte[]>;
	map = null;
	markers: Marker[] = [
		{
			position: {
				lat: 21.1433426,
				lng: -86.8405372
			},
			title: 'Parque Urbano Kabah'
		}
	];

	components: Components[] = [
		{
			icon: 'map',
			name: 'Mapa',
			redirectTo: '/inicio'
		},
		{
			icon: 'clipboard',
			name: 'Reporte',
			redirectTo: '/reporte'
		},
		{
			icon: 'clipboard',
			name: 'Reportar',
			redirectTo: '/agregar-reporte'
		}
	];

	constructor(private geolocation: Geolocation,public authservice: AuthService, private fbService: FirebaseService) {}

	ngOnInit() {
		this.loadMap();
	}
	async loadMap() {
		const myLatLng = { lat: 21.1433426, lng: -86.851417 };

		// create a new map by passing HTMLElement
		const mapEle: HTMLElement = document.getElementById('map');
		// create LatLng object
		// create map
		this.map = new google.maps.Map(mapEle, {
			center: myLatLng,
			zoom: 15
		});
		google.maps.event.addListenerOnce(this.map, 'idle', async () => {
			mapEle.classList.add('show-map');
			const marker = {
				position: {
					lat: 21.1433426,
					lng: -86.851417
				},
				title: 'Cancún'
			};
			this.addMarker(marker);
			this.renderMarkers();
		});
		this.reportes = this.fbService.getReportes();
		let contador = 0;
		this.fbService.getReportes().subscribe((res) => {
			if (res[contador]){

				const marker = {
					position: {
						lat: res[contador]['locationlat'],
						lng: res[contador]['locationlong']
					},
					title: 'Cancún'
				};
				this.addMarker(marker);
				console.log('Reporte', res);
				console.log(res[contador]['locationlat']);
				console.log(res[contador]['locationlong']);
				contador = contador + 1;
			}
		});
	}
	Onlogout(){

this.authservice.logout();
	}

	renderMarkers() {
		this.markers.forEach((marker) => {
			this.addMarker(marker);
		});
	}
	addMarker(marker: Marker) {
		return new google.maps.Marker({
			position: marker.position,
			map: this.map,
			title: marker.title
		});
	}

	async geoloc() {
		const rta = await this.geolocation.getCurrentPosition();
		const myLatLng = { lat: rta.coords.latitude, lng: rta.coords.longitude };
		const ubic = {
			position: {
				lat: rta.coords.latitude,
				lng: rta.coords.longitude
			},
			title: 'Tu ubicación'
		};
		this.map.setCenter({ lat: rta.coords.latitude, lng: rta.coords.longitude });
		this.addMarker(ubic);
	}
}
