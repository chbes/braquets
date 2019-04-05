import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  @Input() data: Array<any>;

  public labels: Array<string> = ['#1', '#2', '#3', '#4', '#5', '#6', '#7', '#8', '#9', '#10', '#11', '#12'];
  public legend: boolean = false;
  public type: string = 'line';
  public options: any = {
    responsive: true,
    scales: {
      xAxes: [{
        gridLines: {
          display: true,
          color: "#424242",
          lineWidth: 2,
          zeroLineWidth: 2,
          zeroLineColor: "#424242",
          drawTicks: false
        },
        ticks: {
          fontFamily: 'Roboto, sans-serif',
          fontSize: 18,
          fontStyle: "bold",
          fontColor: "#424242",
          padding: 12
        }
      }],
      yAxes: [{
        gridLines: {
          display: true,
          color: "#424242",
          lineWidth: 2,
          zeroLineWidth: 2,
          zeroLineColor: "#424242",
          drawTicks: false
        },
        ticks: {
          beginAtZero: true,
          fontFamily: 'Roboto, sans-serif',
          fontSize: 18,
          fontStyle: "bold",
          fontColor: "#424242",
          padding: 12
        }
      }]
    },
    tooltips: {
      backgroundColor: '#424242',
      titleFontFamily: 'Roboto, sans-serif',
      titleFontSize: 23,
      titleFontColor: '#FAFAFA',
      bodyFontFamily: 'Roboto, sans-serif',
      bodyFontSize: 25,
      bodyFontColor: '#FAFAFA',
      displayColors: false

    }
  };

  public lineStyles: Array<any> = [
    {
      // Line
      borderWidth: 3,
      borderDash: [5, 7],
      borderColor: '#fca2ff',

      // Points
      pointBorderWidth: 10,
      pointBackgroundColor: '#fca2ff',
      pointBorderColor: '#fca2ff',
      pointStyle: 'rectRot',

      // Points Hover
      pointHoverBackgroundColor: '#fca2ff',
      pointHoverBorderColor: '#fca2ff',
      pointHoverBorderWidth: 11,

      // Background
      backgroundColor: 'rgba(0,0,0,0)'
    },
    {
      // Line
      borderWidth: 3,
      borderDash: [5, 7],
      borderColor: '#ffdd00',

      // Points
      pointBorderWidth: 10,
      pointBackgroundColor: '#ffdd00',
      pointBorderColor: '#ffdd00',
      pointStyle: 'rectRot',

      // Points Hover
      pointHoverBackgroundColor: '#ffdd00',
      pointHoverBorderColor: '#ffdd00',
      pointHoverBorderWidth: 11,

      // Background
      backgroundColor: 'rgba(0,0,0,0)'
    },
    {
      // Line
      borderWidth: 3,
      borderDash: [5, 7],
      borderColor: '#ff0000',

      // Points
      pointBorderWidth: 11,
      pointBackgroundColor: '#ff0000',
      pointBorderColor: '#ff0000',
      pointStyle: 'rectRot',

      // Points Hover
      pointHoverBackgroundColor: '#ff0000',
      pointHoverBorderColor: '#ff0000',
      pointHoverBorderWidth: 11,

      // Background
      backgroundColor: 'rgba(0,0,0,0)'
    }
  ];

  constructor() { }

  ngOnInit() { }

}
