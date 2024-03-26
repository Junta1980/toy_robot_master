import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommadComponent } from './command.component';

describe('CommadComponent', () => {
  let component: CommadComponent;
  let fixture: ComponentFixture<CommadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
