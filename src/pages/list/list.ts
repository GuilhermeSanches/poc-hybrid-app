import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ListService } from './list.service';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'  
})
export class ListPage implements OnInit {

    private movies: any[];

    constructor(public navCtrl: NavController, public listService: ListService) {

    }

    ngOnInit() {
        this.listService.listMovies().subscribe((data: any)=>{
            this.movies = data.json().results;
    })
  }

  formatData(releaseDate: string) {
    return "Lançado em: "+ [
        releaseDate.split("-")[2],
        releaseDate.split("-")[1],
        releaseDate.split("-")[0]]
    .join("/")
  }

  formatImage(titleFilm: string) {
    return titleFilm.charAt(0);
  }

}
