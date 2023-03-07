import { Component, ViewChild } from '@angular/core';
import { STColumn, STComponent, STPage } from '@delon/abc/st';

@Component({
  selector: 'components-st-virtual',
  template: `
    
    <st #st [data]="data" [columns]="columns" [page]="page" virtualScroll [scroll]="{ x: '1300px', y: '240px' }"></st>
  `,
})
export class ComponentsStVirtualComponent {
  @ViewChild('st', { static: false }) st!: STComponent;

  page: STPage = {
    front: false,
    show: false,
  };
  data: Array<{ id: number; price: number }> = Array(2000)
    .fill({})
    .map((_, idx) => ({
      id: idx + 1,
      price: ~~(Math.random() * 100),
    }));
  columns: STColumn[] = [
    { title: '编号', index: 'id', width: 100, fixed: 'left' },
    { title: '价格1', index: 'price', width: 100, fixed: 'left' },
    { title: '价格2', index: 'price', width: 100 },
    { title: '价格3', index: 'price', width: 100 },
    { title: '价格4', index: 'price', width: 100 },
    { title: '价格5', index: 'price', width: 100 },
    { title: '价格6', index: 'price', width: 100 },
    { title: '价格7', index: 'price', width: 100 },
    { title: '价格8', index: 'price', width: 100 },
    { title: '价格9', index: 'price', width: 100, fixed: 'right' },
    { title: '价格10', index: 'price', width: 100, fixed: 'right' },
  ];
}
