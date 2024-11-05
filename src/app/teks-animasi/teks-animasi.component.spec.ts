import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeksAnimasiComponent } from './teks-animasi.component';

describe('TeksAnimasiComponent', () => {
  let component: TeksAnimasiComponent;
  let fixture: ComponentFixture<TeksAnimasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeksAnimasiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeksAnimasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
