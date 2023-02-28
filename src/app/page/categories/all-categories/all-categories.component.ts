import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {CategoriesService, Categories} from "../index"

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.css']
})
export class AllCategoriesComponent implements OnInit, OnDestroy {

  constructor(private categoriesService:CategoriesService,
    private router:Router){}

  categories:Categories[] | undefined;

  subscription:Subscription | undefined;

  ngOnInit(){
   this.subscription = this.categoriesService.getCategories().subscribe((res:any)=>this.categories = res)
  }

  goToCategory(category:string){
    this.router.navigate(["categories", category])
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }

}
