import { Component, OnInit, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-habits-modal',
  templateUrl: './habits-modal.component.html',
  styleUrls: ['./habits-modal.component.scss']
})
export class HabitsModalComponent implements OnInit {
  @Input() modalOpen = false;
  @Output() shouldModalClose = new EventEmitter();
  @Output() dataHasUpdated = new EventEmitter();

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

  ngOnInit(): void {}

  saveHabit() {
    this.http.post(this.habitUrl, this.habitForm.value)
    .subscribe(data => {
      this.modalOpen = false;
      this.shouldModalClose.emit(this.modalOpen);
      this.dataHasUpdated.emit(data);
    });
  }

  closeModal() {
    this.modalOpen = false;
    this.shouldModalClose.emit(this.modalOpen);
  }
}
