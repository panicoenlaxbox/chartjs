import { Component, ElementRef, ViewChild, OnInit, ɵConsole } from '@angular/core';
import * as Chart from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app1';

  @ViewChild('myChart')
  myChart: ElementRef;

  ngOnInit(): void {
    console.log(this.myChart);
    console.log(this.myChart.nativeElement);
  }

  createChart() {
    // https://blog.vanila.io/chart-js-tutorial-how-to-make-gradient-line-chart-af145e5c92f9
    // http://victorblog.com/html5-canvas-gradient-creator/

    const canvas: HTMLCanvasElement = this.myChart.nativeElement;
    const context: CanvasRenderingContext2D = canvas.getContext('2d');

    const gradient: CanvasGradient = context.createLinearGradient(0.000, 150.000, 300.000, 150.000);
    gradient.addColorStop(0.000, 'rgba(127, 0, 63, 1.000)');
    gradient.addColorStop(1.000, 'rgba(255, 255, 255, 1.000)');

    // https://chartjs-plugin-datalabels.netlify.com/guide/getting-started.html#registration
    // https://chartjs-plugin-datalabels.netlify.com/guide/getting-started.html#configuration
    const options: Chart.ChartConfiguration = {
      plugins: [
        ChartDataLabels
      ],

      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: true,
            borderColor: 'rgb(75, 192, 192)',
            lineTension: 0.1,
            backgroundColor: gradient
          }
        ],
      },
      options: {
        plugins: {
          datalabels: {
            color: '#36A2EB',
            padding: 5,
            backgroundColor: '#000'
          }
        }
      }
    };
    const myChart = new Chart(context, options);
    console.log(myChart);
  }
}
