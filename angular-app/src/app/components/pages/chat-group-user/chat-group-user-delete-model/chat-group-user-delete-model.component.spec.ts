import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatGroupUserDeleteModelComponent } from './chat-group-user-delete-model.component';

describe('ChatGroupUserDeleteModelComponent', () => {
  let component: ChatGroupUserDeleteModelComponent;
  let fixture: ComponentFixture<ChatGroupUserDeleteModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatGroupUserDeleteModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatGroupUserDeleteModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
