import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavRestComponent } from './nav-rest.component';

describe('NavRestComponent', () => {
  let component: NavRestComponent;
  let fixture: ComponentFixture<NavRestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavRestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
