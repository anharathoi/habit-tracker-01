import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss']
})
export class TrackerComponent implements OnInit {
  shouldModalOpen = false;
  habits: any; // should change as any is not good
  userId: number;
  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  constructor(private http: HttpClient) { }

  openModal() {
    this.shouldModalOpen = true;
  }

  closeModal() {
    console.log(this.shouldModalOpen)
    this.shouldModalOpen = false;
  }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/habits')
    .subscribe(habits => {
      console.log(habits);
      this.habits = habits;
    });
  }

}
