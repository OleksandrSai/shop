import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {CategoriesService} from "../index"

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.css']
})
export class AllCategoriesComponent {

  constructor(private categoriesService:CategoriesService,
    private router:Router){}

  categories:any;

  ngOnInit(){
    this.categoriesService.getCategories().subscribe((res:any)=> this.categories = res)
  }

  goToCategory(category:string){
    this.router.navigate(["categories", category])
  }

}
