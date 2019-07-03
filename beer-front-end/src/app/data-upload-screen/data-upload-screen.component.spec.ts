import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataUploadScreenComponent } from './data-upload-screen.component';

describe('DataUploadScreenComponent', () => {
  let component: DataUploadScreenComponent;
  let fixture: ComponentFixture<DataUploadScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataUploadScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataUploadScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
