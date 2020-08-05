import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss']
})
export class TrackerComponent implements OnInit {
  shouldModalOpen = false;
  habits = ['Piano', 'AWS', 'Exercise', 'Book'];
  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  constructor() { }

  openModal() {
    console.log(this.shouldModalOpen)
    this.shouldModalOpen = true;
  }

  closeModal() {
    console.log(this.shouldModalOpen)
    this.shouldModalOpen = false;
  }

  ngOnInit(): void {
  }

}
