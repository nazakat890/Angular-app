import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('myModal') myModal!: ElementRef;
  selectedTagList:any = [];
  selectedTagCount:any;
  productList: any = [
    {value:"00971",name:"Product A"},
    {value:"00971",name:"Product B"},
    {value:"00971",name:"Product C"}, 
  ];
  tagsList :any = [
    {id:"1",name:"lorem ipsum dolor aa"},
    {id:"2",name:"borpiac"},
    {id:"3",name:"lorem ipsum"},
    {id:"4",name:"per inceptos himenaeos"},
    {id:"5",name:"imperdiet"},
    {id:"7",name:"malesuada"}, 
    {id:"6",name:"finibus molestie justo"},
    {id:"8",name:"ornare vestibulum ipsum"}, 
    ];
  constructor() { }

  ngOnInit(): void {
  }
  openModal() {
    this.myModal.nativeElement.style.display = 'block';
  }

  closeModal() {
    this.myModal.nativeElement.style.display = 'none';
  }

  removeFilter() {
   this.tagsList  = [...this.tagsList,...this.selectedTagList];
    this.selectedTagList = [];
    this.selectedTagCount = '';
    
  }

  selectedTag(tag:any){
    const index = this.tagsList.findIndex((ele:any) => ele.name === tag.name);
    this.tagsList.splice(index,1)
    this.selectedTagList.push(tag)
    this.selectedTagCount = this.selectedTagList.length;
  }

  removeTag(removeItem:any){
    const index = this.selectedTagList.findIndex((ele:any) => ele.name === removeItem.name);
    this.selectedTagList.splice(index,1)
    this.tagsList.push(removeItem)
    this.selectedTagCount = this.selectedTagList.length === 0 ? '' :this.selectedTagList.length;
  }

}
