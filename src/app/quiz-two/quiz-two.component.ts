import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-two',
  templateUrl: './quiz-two.component.html',
  styleUrls: ['./quiz-two.component.css']
})
export class QuizTwoComponent implements OnInit {
  categorieslist: string[] = [];
  filterList: string[] = [];
  keyword: string = "";
  isLoading:boolean = true;
  constructor() { }

  ngOnInit(): void {

    this.loadCategories().then(response => {
      this.categorieslist = response;
      this.filterList = this.categorieslist;
      this.isLoading = false;
    });
  }

  onSearchChange(e: any) {
    let keyword = e.target.value;
    let categoriesCopy = [...this.categorieslist];
    if (keyword) {
      let r = categoriesCopy.filter((val)=> {
        val = val.toLowerCase();
        keyword = keyword.toLowerCase();
        return val.includes(keyword);
      });
      this.filterList = r;
    } else {
      this.filterList = this.categorieslist;
    }
  }

  loadCategories() {
    return fetch('https://api.publicapis.org/categories').then(res => res.json());
  }
}
