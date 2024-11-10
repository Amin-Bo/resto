import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietFoodsComponent } from './diet-foods.component';

describe('DietFoodsComponent', () => {
  let component: DietFoodsComponent;
  let fixture: ComponentFixture<DietFoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DietFoodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DietFoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
