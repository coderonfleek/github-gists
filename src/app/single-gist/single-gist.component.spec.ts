import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleGistComponent } from './single-gist.component';

describe('SingleGistComponent', () => {
  let component: SingleGistComponent;
  let fixture: ComponentFixture<SingleGistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleGistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleGistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
