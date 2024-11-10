import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurentRegisterComponent } from './restaurent-register.component';

describe('RestaurentRegisterComponent', () => {
  let component: RestaurentRegisterComponent;
  let fixture: ComponentFixture<RestaurentRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurentRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurentRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
