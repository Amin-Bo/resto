import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurentLoginComponent } from './restaurent-login.component';

describe('RestaurentLoginComponent', () => {
  let component: RestaurentLoginComponent;
  let fixture: ComponentFixture<RestaurentLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurentLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurentLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
