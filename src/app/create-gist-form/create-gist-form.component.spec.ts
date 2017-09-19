import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGistFormComponent } from './create-gist-form.component';

describe('CreateGistFormComponent', () => {
  let component: CreateGistFormComponent;
  let fixture: ComponentFixture<CreateGistFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateGistFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGistFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
