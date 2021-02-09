import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageSystemComponent } from './message-system.component';

describe('MessageSystemComponent', () => {
  let component: MessageSystemComponent;
  let fixture: ComponentFixture<MessageSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageSystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
