import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsComponent } from './us.component';

describe('UsComponent', () => {
  let component: UsComponent;
  let fixture: ComponentFixture<UsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsComponent]
    });
    fixture = TestBed.createComponent(UsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
