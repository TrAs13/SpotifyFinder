import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTracksComponent } from './search-result-list.component';

describe('AppTracksComponent', () => {
  let component: AppTracksComponent;
  let fixture: ComponentFixture<AppTracksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppTracksComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
