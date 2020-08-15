import { Component, OnInit, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-habits-modal',
  templateUrl: './habits-modal.component.html',
  styleUrls: ['./habits-modal.component.scss']
})
export class HabitsModalComponent implements OnInit {
  @Input() modalOpen = false;
  @Output('close') shouldModalClose = new EventEmitter();

  habitInput = new FormControl('');
  constructor(public elementRef: ElementRef) { }

  ngOnInit(): void {

  }

  saveHabit() {
    console.log(this.habitInput.value);
  }

  closeModal() {
    this.modalOpen = false;
    this.shouldModalClose.emit(this.modalOpen);
  }
}
