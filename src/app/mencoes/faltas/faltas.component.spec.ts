import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaltasComponent } from './faltas.component';

describe('FaltasComponent', () => {
  let component: FaltasComponent;
  let fixture: ComponentFixture<FaltasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaltasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaltasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
