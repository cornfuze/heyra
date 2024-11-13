import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivegesturComponent } from './livegestur.component';

describe('LivegesturComponent', () => {
  let component: LivegesturComponent;
  let fixture: ComponentFixture<LivegesturComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LivegesturComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivegesturComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
