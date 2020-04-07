// tslint:disable: indent

import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Observable } from 'rxjs';
import {Reporte} from '../../model/Reporte';
import { FirebaseService } from '../../servicios/firebase.service';
import { Chart } from 'chart.js';
@Component({
	selector: 'app-reporte',
	templateUrl: './reporte.page.html',
	styleUrls: [ './reporte.page.scss' ]
})
export class ReportePage implements OnInit {
  @ViewChild('barCanvas', { static: true }) barCanvas: ElementRef;
  @ViewChild('doughnutCanvas', { static: true }) doughnutCanvas: ElementRef;
  @ViewChild('lineCanvas', { static: true }) lineCanvas: ElementRef;
  barChart: any;
  doughnutChart: any;
  lineChart: any;
  someValue: number;
  totalReportes: number;
  totalReportesDia: number;
  totalReportesNoche: number;
  horaPromedio: number;
  horaPromedioDia: number;
  horaPromedioNoche: number;
  moda: number;
  numModa: number;
  /*
  hora1: number;
  hora2: number;
  hora3: number;
  hora4: number;
  hora5: number;
  hora6: number;
  hora7: number;
  hora8: number;
  hora9: number;
  hora10: number;
  hora11: number;
  hora12: number;
  hora13: number;
  hora14: number;
  hora15: number;
  hora16: number;
  hora17: number;
  hora18: number;
  hora19: number;
  hora20: number;
  hora21: number;
  hora22: number;
  hora23: number;
  hora24: number;
  */
  hora = 0;
  horaDia = 0;
  horaNoche = 0;
  hora1 = 0;
  hora2 = 0;
  hora3 = 0;
  hora4 = 0;
  hora5 = 0;
  hora6 = 0;
  hora7 = 0;
  hora8 = 0;
  hora9 = 0;
  hora10 = 0;
  hora11 = 0;
  hora12 = 0;
  hora13 = 0;
  hora14 = 0;
  hora15 = 0;
  hora16 = 0;
  hora17 = 0;
  hora18 = 0;
  hora19 = 0;
  hora20 = 0;
  hora21 = 0;
  hora22 = 0;
  hora23 = 0;
  hora24 = 0;

ubicacion = null;

private reportes: Observable<Reporte[]>;
constructor(private geolocation: Geolocation, private fbService: FirebaseService) {}

  async ngOnInit() {
    const ubicacionInp: HTMLElement = document.getElementById('ubicacion');
    // obteniendo todos los reportes
    this.reportes = this.fbService.getReportes();
    let contador = 0;
    let contadorDia = 0;
    let contadorNoche = 0;
    let contadorUno = 0;
    let contadorDos = 0;
    let contadorTres = 0;
    let contadorCuatro = 0;
    let contadorCinco = 0;
    let contadorSeis = 0;
    let contadorSiete = 0;
    let contadorOcho = 0;
    let contadorNueve = 0;
    let contadorDiez = 0;
    let contadorOnce = 0;
    let contadorDoce = 0;
    let contadorTrece = 0;
    let contadorCatorce = 0;
    let contadorQuince = 0;
    let contador16 = 0;
    let contador17 = 0;
    let contador18 = 0;
    let contador19 = 0;
    let contador20 = 0;
    let contador21 = 0;
    let contador22 = 0;
    let contador23 = 0;
    let contador24 = 0;
    let contadorAnio2020 = 0;
    let contadorAnio2019 = 0;
    let contadorAnio2018 = 0;
    let contadorEnero = 0;
    let contadorFeb = 0;
    let contadorMar = 0;
    let contadorAbril = 0;
    let contadorMayo = 0;
    let contadorJunio = 0;
    let contadorJulio = 0;
    let contadorAgosto = 0;
    let contadorSept = 0;
    let contadorOct = 0;
    let contadorNov = 0;
    let contadorDic = 0;

    this.fbService.getReportes().subscribe((res) => {
      res.forEach(item => {
        // tslint:disable-next-line: no-construct
        let arreglo = new String(item.fecha);
        console.log(arreglo);
        if ((arreglo).includes('2020')) {
          contadorAnio2020 = contadorAnio2020 + 1;
        }
        if ((arreglo).includes('2019')) {
          contadorAnio2019 = contadorAnio2019 + 1;
        }
        if ((arreglo).includes('2018')) {
          contadorAnio2018 = contadorAnio2018 + 1;
        }
        if ((arreglo).includes('-01-')) {
          contadorEnero = contadorEnero + 1;
        }
        if ((arreglo).includes('-02-')) {
          contadorFeb = contadorFeb + 1;
        }
        if ((arreglo).includes('-03-')) {
          contadorMar = contadorMar + 1;
        }
        if ((arreglo).includes('-04-')) {
          contadorAbril = contadorAbril + 1;
        }
        if ((arreglo).includes('-05-')) {
          contadorMayo = contadorMayo + 1;
        }
        if ((arreglo).includes('-06-')) {
          contadorJunio = contadorJunio + 1;
        }
        if ((arreglo).includes('-07-')) {
          contadorJulio = contadorJulio + 1;
        }
        if ((arreglo).includes('-08-')) {
          contadorAgosto = contadorAgosto + 1;
        }
        if ((arreglo).includes('-09-')) {
          contadorSept = contadorSept + 1;
        }
        if ((arreglo).includes('-10-')) {
          contadorOct = contadorOct + 1;
        }
        if ((arreglo).includes('-11-')) {
          contadorNov = contadorNov + 1;
        }
        if ((arreglo).includes('-12-')) {
          contadorDic = contadorDic + 1;
        }

        /*
        var separar = arreglo.split('-');
        console.log(separar);
        */
        if (item.hora <= 12) {
          if (item.hora === 1) {
            contadorUno = contadorUno + 1;
            this.hora1 = contadorUno;
          } else if (item.hora == 2) {
            contadorDos = contadorDos + 1;
            this.hora2 = contadorDos;
          } else if (item.hora == 3) {
            contadorTres = contadorTres + 1;
            this.hora3 = contadorTres;

          } else if (item.hora == 4) {
            contadorCuatro = contadorCuatro + 1;
            this.hora4 = contadorCuatro;

          } else if (item.hora == 5) {
            contadorCinco = contadorCinco + 1;
            this.hora5 = contadorCinco;

          } else if (item.hora == 6) {
            contadorSeis = contadorSeis + 1;
            this.hora6 = contadorSeis;

          } else if (item.hora == 7) {

            contadorSiete = contadorSiete + 1;
            this.hora7 = contadorSiete;

            console.log(contadorSiete);
          } else if (item.hora == 8) {
            contadorOcho = contadorOcho + 1;
            this.hora8 = contadorOcho;

          } else if (item.hora == 9) {
            contadorNueve = contadorNueve + 1;
            this.hora9 = contadorNueve;

          } else if (item.hora == 10) {
            contadorDiez = contadorDiez + 1;
            this.hora10 = contadorDiez;

          } else if (item.hora == 11) {
            contadorOnce = contadorOnce + 1;
            this.hora11 = contadorOnce;

          } else if (item.hora == 12) {
            contadorDoce = contadorDoce + 1;
            this.hora12 = contadorDoce;

          }
          this.calculateSumDia(item.hora);
          contadorDia = contadorDia + 1;

        } else {
          if (item.hora == 13) {
           contadorTrece = contadorTrece + 1;
           this.hora13 = contadorTrece;

          } else if (item.hora == 14) {
            contadorCatorce = contadorCatorce + 1;
            this.hora14 = contadorCatorce;

          } else if (item.hora == 15) {
            contadorQuince = contadorQuince + 1;
            this.hora15 = contadorQuince;

          } else if (item.hora == 16) {
            contador16 = contador16 + 1;
            this.hora16 = contador16;

          } else if (item.hora == 17) {
            contador17 = contador17 + 1;
            this.hora17 = contador17;

          } else if (item.hora == 18) {
            contador18 = contador18 + 1;
            this.hora18 = contador18;

          } else if (item.hora == 19) {
            contador19 = contador19 + 1;
            this.hora19 = contador19;

          } else if (item.hora == 20) {
            contador20 = contador20 + 1;
            this.hora20 = contador20;

          } else if (item.hora == 21) {
            contador21 = contador21 + 1;
            this.hora21 = contador21;

          } else if (item.hora == 22) {
            contador22 = contador22 + 1;
            this.hora22 = contador22;

          } else if (item.hora == 23) {
            contador23 = contador23 + 1;
            this.hora23 = contador23;

          } else if (item.hora == 24) {
            contador24 = contador24 + 1;
            this.hora24 = contador24;

          }
          this.calculateSumNoche(item.hora);
          contadorNoche = contadorNoche + 1;
        }
        this.calculateSum(item.hora);
        contador = contador + 1;

      });
      console.log(contadorSiete);
      this.totalReportes = contador;
      this.totalReportesDia = contadorDia;
      this.totalReportesNoche = contadorNoche;
      this.calculateAverage(contador);
      this.calculateAverageDia(contadorDia);
      this.calculateAverageNoche(contadorNoche);
      this.calcularModa(
        contadorUno,
    contadorDos,
    contadorTres,
    contadorCuatro,
    contadorCinco,
    contadorSeis,
    contadorSiete,
    contadorOcho,
    contadorNueve,
    contadorDiez,
    contadorOnce,
    contadorDoce,
    contadorTrece,
    contadorCatorce,
    contadorQuince,
    contador16,
    contador17,
    contador18,
    contador19,
    contador20,
    contador21,
    contador22,
    contador23,
    contador24,
      );
      this.barChartMethod(contadorUno,
        contadorDos,
        contadorTres,
        contadorCuatro,
        contadorCinco,
        contadorSeis,
        contadorSiete,
        contadorOcho,
        contadorNueve,
        contadorDiez,
        contadorOnce,
        contadorDoce,
        contadorTrece,
        contadorCatorce,
        contadorQuince,
        contador16,
        contador17,
        contador18,
        contador19,
        contador20,
        contador21,
        contador22,
        contador23,
        contador24);
      this.doughnutChartMethod(contadorAnio2018, contadorAnio2019, contadorAnio2020);
      // tslint:disable-next-line: max-line-length
      this.lineChartMethod(contadorEnero, contadorFeb, contadorMar, contadorAbril, contadorMayo, contadorJunio, contadorJulio, contadorAgosto, contadorSept, contadorOct, contadorNov, contadorDic);
    });

  }
  calculateSum(value) {
    this.hora = (Number(value) + Number(this.hora));
    // console.log(this.hora);
  }

  calculateAverage(count) {
    this.horaPromedio = (Number(this.hora) / Number(count));
    // console.log(this.horaPromedioDia);
  }
  calculateSumDia(value2) {
    this.horaDia = (Number(value2) + Number(this.horaDia));
    // console.log(this.horaDia);
  }

  calculateAverageDia(count2) {
    // console.log(count2);
    // console.log(this.horaDia);
    this.horaPromedioDia = (Number(this.horaDia) / Number(count2));
    // console.log(this.horaPromedioDia);
  }
  calculateSumNoche(value3) {

    this.horaNoche = (Number(value3) + Number(this.horaNoche));
    // console.log(this.horaNoche);
  }

  calculateAverageNoche(count3) {
    this.horaPromedioNoche = (Number(this.horaNoche) / Number(count3));
    // console.log(this.horaPromedioNoche);
  }

  calcularModa(
    contadorUno,
    contadorDos,
    contadorTres,
    contadorCuatro,
    contadorCinco,
    contadorSeis,
    contadorSiete,
    contadorOcho,
    contadorNueve,
    contadorDiez,
    contadorOnce,
    contadorDoce,
    contadorTrece,
    contadorCatorce,
    contadorQuince,
    contador16,
    contador17,
    contador18,
    contador19,
    contador20,
    contador21,
    contador22,
    contador23,
    contador24,
  ) {
    this.moda = contadorUno;
    this.numModa = 1;
    if (this.moda < contadorDos) {
      this.numModa = 2;
      this.moda = contadorDos;
    }
    if (this.moda < contadorTres) {
      this.moda = contadorTres;
      this.numModa = 3;

    }
    if (this.moda < contadorCuatro) {
      this.moda = contadorCuatro;
      this.numModa = 4;
    }
    if (this.moda < contadorCinco) {
      this.moda = contadorCinco;
      this.numModa = 5;

    }
    if (this.moda < contadorSeis) {
      this.moda = contadorSeis;
      this.numModa = 6;

    }
    if (this.moda < contadorSiete) {
      this.moda = contadorSiete;
      this.numModa = 7;

    }
    if (this.moda < contadorOcho) {
      this.moda = contadorOcho;
      this.numModa = 8;

    }
    if (this.moda < contadorNueve) {
      this.moda = contadorNueve;
      this.numModa = 9;

    }
    if (this.moda < contadorDiez) {
      this.moda = contadorDiez;
      this.numModa = 10;

    }
    if (this.moda < contadorOnce) {
      this.moda = contadorOnce;
      this.numModa = 11;

    }
    if (this.moda < contadorDoce) {
      this.moda = contadorDoce;
      this.numModa = 12;

    }
    if (this.moda < contadorTrece) {
      this.moda = contadorTrece;
      this.numModa = 13;

    }
    if (this.moda < contadorCatorce) {
      this.moda = contadorCatorce;
      this.numModa = 14;

    }
    if (this.moda < contadorQuince) {
      this.moda = contadorQuince;
      this.numModa = 15;

    }
    if (this.moda < contador16) {
      this.moda = contador16;
      this.numModa = 16;

    }
    if (this.moda < contador17) {
      this.moda = contador17;
      this.numModa = 17;

    }
    if (this.moda < contador18) {
      this.moda = contador18;
      this.numModa = 18;

    }
    if (this.moda < contador19) {
      this.moda = contador19;
      this.numModa = 19;

    }
    if (this.moda < contador20) {
      this.moda = contador20;
      this.numModa = 20;

    }
    if (this.moda < contador21) {
      this.moda = contador21;
      this.numModa = 21;

    }
    if (this.moda < contador22) {
      this.moda = contador22;
      this.numModa = 22;

    }
    if (this.moda < contador23) {
      this.moda = contador23;
      this.numModa = 23;

    }
    if (this.moda < contador24) {
      this.moda = contador24;
      this.numModa = 24;

    }
    // console.log(this.moda);
    // console.log(this.numModa);
  }
  barChartMethod(
    contadorUno,
    contadorDos,
    contadorTres,
    contadorCuatro,
    contadorCinco,
    contadorSeis,
    contadorSiete,
    contadorOcho,
    contadorNueve,
    contadorDiez,
    contadorOnce,
    contadorDoce,
    contadorTrece,
    contadorCatorce,
    contadorQuince,
    contador16,
    contador17,
    contador18,
    contador19,
    contador20,
    contador21,
    contador22,
    contador23,
    contador24) {
    // console.log(contadorTres);
    // tslint:disable-next-line: align
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        // tslint:disable-next-line: max-line-length
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'],
        datasets: [{
          label: 'Reportes',
          data: [
            contadorUno,
    contadorDos,
    contadorTres,
    contadorCuatro,
    contadorCinco,
    contadorSeis,
    contadorSiete,
    contadorOcho,
    contadorNueve,
    contadorDiez,
    contadorOnce,
    contadorDoce,
    contadorTrece,
    contadorCatorce,
    contadorQuince,
    contador16,
    contador17,
    contador18,
    contador19,
    contador20,
    contador21,
    contador22,
    contador23,
    contador24
          ],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  doughnutChartMethod(contador2018, contador2019, contador2020) {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['2018', '2019', '2020'],
        datasets: [{
          label: 'Número de reportes',
          data: [contador2018, contador2019, contador2020],
          backgroundColor: [
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
          ],
          hoverBackgroundColor: [
            '#FFCE56',
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#FF6384'
          ]
        }]
      }
    });
  }
// tslint:disable-next-line: max-line-length
  lineChartMethod(contadorEnero, contadorFeb, contadorMar, contadorAbril, contadorMayo, contadorJunio, contadorJulio, contadorAgosto, contadorSept, contadorOct, contadorNov, contadorDic) {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Noviembre', 'Diciembre'],
        datasets: [
          {
            label: 'Reportes por mes',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            // tslint:disable-next-line: max-line-length
            data: [contadorEnero, contadorFeb, contadorMar, contadorAbril, contadorMayo, contadorJunio, contadorJulio, contadorAgosto, contadorSept, contadorOct, contadorNov, contadorDic],
            spanGaps: false,
          }
        ]
      }
    });
  }
}
