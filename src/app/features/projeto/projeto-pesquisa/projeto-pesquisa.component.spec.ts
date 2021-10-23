import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoPesquisaComponent } from './projeto-pesquisa.component';

describe('ProjetoPesquisaComponent', () => {
  let component: ProjetoPesquisaComponent;
  let fixture: ComponentFixture<ProjetoPesquisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetoPesquisaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetoPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
