import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurentProfilComponent } from './restaurent-profil.component';

describe('RestaurentProfilComponent', () => {
  let component: RestaurentProfilComponent;
  let fixture: ComponentFixture<RestaurentProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurentProfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurentProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
