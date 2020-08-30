import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IHabit, ITracker } from '../interfaces/interfaces';

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

  /*  Need to study rxjs and piping and then will come back to this
      For now finding happens inside of update
  */
  // async findHabitTracker(habitId: number, date: string) {
  //   let habitTracker;
  //   await this.http.get(`http://localhost:3000/habits/${habitId}/trackers`)
  //   .subscribe(async(trackers: ITracker[])  => {
  //     habitTracker = await trackers.find( (tracker: ITracker) => {
  //       return tracker.date === date && tracker.habitId === habitId;
  //     });

  //     console.log('inside', habitTracker);
  //     // return habitTracker;
  //   });
  //   await console.log('outside', habitTracker);
  //   // return habitTracker;
  // }

  createHabitTracker(taskStatus: boolean, habit: IHabit,  date) {
    this.http.post(`http://localhost:3000/trackers/`, {
      habitId: habit.id,
      date: date,
      completionStatus: taskStatus
    })
    .subscribe( newHabitTracker  => {
      console.log("New tracker created: ", newHabitTracker );
    });
  }

  updateTaskStatus(taskStatus: boolean, habit: IHabit, date) {
    let habitTracker;
    this.http.get(`http://localhost:3000/habits/${habit.id}/trackers`)
    .subscribe((trackers: ITracker[])  => {
      habitTracker = trackers.find( (tracker: ITracker) => {
        return tracker.date === date && tracker.habitId === habit.id;
      });
      if (habitTracker) {
        this.http.patch(`http://localhost:3000/trackers/${habitTracker.id}`, {
          completionStatus: taskStatus
        })
        .subscribe((updatedHabitTracker: ITracker) => {
          console.log('habit status updated to:', updatedHabitTracker.completionStatus);
        });
      } else {
        this.createHabitTracker(taskStatus, habit, date);
      }
    });
  }

  ngOnInit(): void {
    this.http.get(`http://localhost:3000/users/${this.userId}/habits`)
    .subscribe((habits: []) => {
      this.habits = habits;
    });
  }

}
