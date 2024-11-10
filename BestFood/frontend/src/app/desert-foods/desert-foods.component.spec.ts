import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesertFoodsComponent } from './desert-foods.component';

describe('DesertFoodsComponent', () => {
  let component: DesertFoodsComponent;
  let fixture: ComponentFixture<DesertFoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesertFoodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesertFoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
