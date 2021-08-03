import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewnewsComponent } from './newnews.component';

describe('NewnewsComponent', () => {
  let component: NewnewsComponent;
  let fixture: ComponentFixture<NewnewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewnewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
