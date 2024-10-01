import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  data: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.apiService.getData().subscribe(
      (response) => {
        this.data = response;
        console.log('Data fetched successfully:', this.data);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}


