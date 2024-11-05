import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GesturTeksComponent } from './gestur-teks.component';

describe('GesturTeksComponent', () => {
  let component: GesturTeksComponent;
  let fixture: ComponentFixture<GesturTeksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GesturTeksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GesturTeksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
