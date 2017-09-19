import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGistsComponent } from './my-gists.component';

describe('MyGistsComponent', () => {
  let component: MyGistsComponent;
  let fixture: ComponentFixture<MyGistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyGistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyGistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
