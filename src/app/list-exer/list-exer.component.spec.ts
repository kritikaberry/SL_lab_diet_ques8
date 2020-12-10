import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExerComponent } from './list-exer.component';

describe('ListExerComponent', () => {
  let component: ListExerComponent;
  let fixture: ComponentFixture<ListExerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListExerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListExerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
