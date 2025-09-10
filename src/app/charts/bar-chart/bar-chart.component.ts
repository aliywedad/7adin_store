import { Component, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { MatCard, MatCardTitle } from '@angular/material/card';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [MatCard,MatCardTitle],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss'
})
export class BarChartComponent implements AfterViewInit {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;

  @Input() data!: number[];
  @Input() labels!: string[];
  @Input() titel!: string;

  public chart!: Chart;

  createChart() {
    if (!this.chartCanvas) return;

    this.chart = new Chart(this.chartCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: this.labels,
        datasets: [
          {
            label: "Sales",
            data: this.data,
            backgroundColor: '#97CADB'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }

  ngAfterViewInit(): void {
    this.createChart();
  }
}
