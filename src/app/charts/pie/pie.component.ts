import { Component, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { MatCard, MatCardTitle } from '@angular/material/card';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-pie',
  standalone: true,
  imports: [MatCard,MatCardTitle],
  templateUrl: './pie.component.html',
  styleUrl: './pie.component.scss'
})
export class PieComponent implements AfterViewInit {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;

  public chart!: Chart;
  @Input() data!: number[];
  @Input() labels!: string[];
  @Input() titel!: string;

  createChart() {
    if (!this.chartCanvas) return; // Ensure canvas exists

    this.chart = new Chart(this.chartCanvas.nativeElement, {
      type: 'doughnut',
//       Pie Chart	Classic circular chart
// Doughnut Chart	Pie chart with a hole in the center
// Polar Area Chart	Segments grow based on value
// Custom Styling	Border, transparency, hover effects

      data: {
        labels: this.labels,
        datasets: [{
          label: 'My First Dataset',
          data: this.data,
          backgroundColor: [
             'lightskyblue', 'powderblue', 'cyan', 'teal', 'turquoise', 'cadetblue',
            'aqua', 'deepskyblue', 'skyblue', 'mediumturquoise', 'lightblue', 'aliceblue',
            'blue', 'deepskyblue', 'dodgerblue', 'royalblue', 'mediumblue', 'darkblue',
            'navy', 'midnightblue', 'slateblue', 'steelblue', 'cornflowerblue',
            'lightskyblue', 'powderblue', 'cyan', 'teal', 'turquoise', 'cadetblue',
            'aqua', 'deepskyblue', 'skyblue', 'mediumturquoise', 'lightblue', 'aliceblue'
          ]
          ,
          hoverOffset: 4
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false // Allow dynamic resizing
      }
    });
  }

  ngAfterViewInit(): void {
    this.createChart();
  }
}
