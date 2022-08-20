import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAppDetailsComponent } from './view-app-details.component';

describe('ViewAppDetailsComponent', () => {
  let component: ViewAppDetailsComponent;
  let fixture: ComponentFixture<ViewAppDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAppDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAppDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
