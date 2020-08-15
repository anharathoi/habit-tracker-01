import { Component, OnInit, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-habits-modal',
  templateUrl: './habits-modal.component.html',
  styleUrls: ['./habits-modal.component.scss']
})
export class HabitsModalComponent implements OnInit {
  @Input() modalOpen = false;
  @Output('close') shouldModalClose = new EventEmitter();

  userId = 1;
  habitForm = this.fb.group({
    habit: ''
  });
  habitUrl = `http://localhost:3000/users/${this.userId}/habits`

  constructor(
    public elementRef: ElementRef,
    private fb: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit(): void {

  }

  saveHabit() {
    this.http.post(this.habitUrl, this.habitForm.value)
    .subscribe(data => {
      console.log(JSON.stringify(data) + "has been saved")
      this.modalOpen = false;
      this.shouldModalClose.emit(this.modalOpen);
    });
  }

  closeModal() {
    this.modalOpen = false;
    this.shouldModalClose.emit(this.modalOpen);
  }
}
