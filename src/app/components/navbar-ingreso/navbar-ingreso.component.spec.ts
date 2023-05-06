import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarIngresoComponent } from './navbar-ingreso.component';

describe('NavbarIngresoComponent', () => {
  let component: NavbarIngresoComponent;
  let fixture: ComponentFixture<NavbarIngresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarIngresoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarIngresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
