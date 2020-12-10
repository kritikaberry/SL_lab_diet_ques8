import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerManagerComponent } from './exer-manager.component';

describe('ExerManagerComponent', () => {
  let component: ExerManagerComponent;
  let fixture: ComponentFixture<ExerManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
