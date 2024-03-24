import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDailyTasksComponent } from './home-daily-tasks.component';

describe('HomeDailyTasksComponent', () => {
  let component: HomeDailyTasksComponent;
  let fixture: ComponentFixture<HomeDailyTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeDailyTasksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeDailyTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
