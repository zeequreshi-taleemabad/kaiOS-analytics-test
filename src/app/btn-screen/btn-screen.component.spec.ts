import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnScreenComponent } from './btn-screen.component';

describe('BtnScreenComponent', () => {
  let component: BtnScreenComponent;
  let fixture: ComponentFixture<BtnScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
