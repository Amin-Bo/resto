import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProductesComponent } from './all-productes.component';

describe('AllProductesComponent', () => {
  let component: AllProductesComponent;
  let fixture: ComponentFixture<AllProductesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllProductesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllProductesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
