import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss']
})
export class TrackerComponent implements OnInit {
  shouldModalOpen = false;
  habits = [];
  userId = 1;
  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  constructor(private http: HttpClient) {}

  openModal() {
    this.shouldModalOpen = true;
  }

  closeModal() {
    this.shouldModalOpen = false;
  }

  onDataUpdate(data) {
    this.habits.push(data);
  }

  updateTaskStatus(e, habit, day) {
    console.log(habit, day)
    console.log(e.target.checked)
  }

  ngOnInit(): void {
    this.http.get(`http://localhost:3000/users/${this.userId}/habits`)
    .subscribe((habits: []) => {
      this.habits = habits;
    });
  }

}
