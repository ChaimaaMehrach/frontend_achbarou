import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Terrain2Component } from './terrain2.component';

describe('Terrain2Component', () => {
  let component: Terrain2Component;
  let fixture: ComponentFixture<Terrain2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Terrain2Component]
    });
    fixture = TestBed.createComponent(Terrain2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
