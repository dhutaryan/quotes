import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterShareButtonComponent } from './twitter-share-button.component';

describe('TwitterShareButtonComponent', () => {
  let component: TwitterShareButtonComponent;
  let fixture: ComponentFixture<TwitterShareButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TwitterShareButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TwitterShareButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
