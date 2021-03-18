import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VidScreenComponent } from './vid-screen.component';

describe('VidScreenComponent', () => {
  let component: VidScreenComponent;
  let fixture: ComponentFixture<VidScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VidScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VidScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
