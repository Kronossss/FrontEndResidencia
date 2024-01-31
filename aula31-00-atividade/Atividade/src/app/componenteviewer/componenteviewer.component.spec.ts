import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteviewerComponent } from './componenteviewer.component';

describe('ComponenteviewerComponent', () => {
  let component: ComponenteviewerComponent;
  let fixture: ComponentFixture<ComponenteviewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponenteviewerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponenteviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
