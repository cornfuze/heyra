import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KamusComponent } from './kamus.component';

describe('KamusComponent', () => {
  let component: KamusComponent;
  let fixture: ComponentFixture<KamusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KamusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KamusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
