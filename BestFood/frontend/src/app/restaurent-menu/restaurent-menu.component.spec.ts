import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurentMenuComponent } from './restaurent-menu.component';

describe('RestaurentMenuComponent', () => {
  let component: RestaurentMenuComponent;
  let fixture: ComponentFixture<RestaurentMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurentMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurentMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
