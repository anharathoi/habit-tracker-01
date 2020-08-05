import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitsModalComponent } from './habits-modal.component';

describe('HabitsModalComponent', () => {
  let component: HabitsModalComponent;
  let fixture: ComponentFixture<HabitsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabitsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
