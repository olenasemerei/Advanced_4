import { Component, OnInit, ViewChild } from '@angular/core';
import { TabletaskComponent } from './tabletask/tabletask.component';

@Component({
  selector: 'app-lesson03',
  templateUrl: './lesson03.component.html',
  styleUrls: ['./lesson03.component.scss'],
})
export class Lesson03Component implements OnInit {
  @ViewChild(TabletaskComponent) childTabletask!: TabletaskComponent;
  public userName = 'Ivan Ivanov';
  public taskName = '';
  public newTaskName = '';
  public taskCount = 0;
  public newTask!: string;
  public indexEdit!: number;
  public isEdit = false;

  constructor() {}

  ngOnInit(): void {}

  getCount(count: number): void {
    this.taskCount = count;
  }

  addTask(): void {
    this.newTask = this.taskName;
    this.taskName = '';
  }

  getIndex(index: number): void {
    this.isEdit = true;
    this.newTaskName = this.childTabletask.taskArray[index].name;
    this.indexEdit = index;
  }
  updateTask(): void {
    this.childTabletask.taskArray[this.indexEdit].name = this.newTaskName;
    this.isEdit = false;
  }
}
