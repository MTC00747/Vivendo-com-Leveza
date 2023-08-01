import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerDoisComponent } from './banner-dois.component';

describe('BannerDoisComponent', () => {
  let component: BannerDoisComponent;
  let fixture: ComponentFixture<BannerDoisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerDoisComponent]
    });
    fixture = TestBed.createComponent(BannerDoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
