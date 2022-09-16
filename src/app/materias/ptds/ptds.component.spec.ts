import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtdsComponent } from './ptds.component';

describe('PtdsComponent', () => {
  let component: PtdsComponent;
  let fixture: ComponentFixture<PtdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PtdsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PtdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
