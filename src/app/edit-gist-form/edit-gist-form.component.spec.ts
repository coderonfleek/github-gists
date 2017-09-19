import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGistFormComponent } from './edit-gist-form.component';

describe('EditGistFormComponent', () => {
  let component: EditGistFormComponent;
  let fixture: ComponentFixture<EditGistFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditGistFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGistFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
