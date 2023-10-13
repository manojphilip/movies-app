import { Component, OnInit, OnChanges, AfterContentInit, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-details-movies',
  templateUrl: './details-movies.component.html',
  styleUrls: ['./details-movies.component.css']
})

export class DetailsMoviesComponent implements OnInit, OnChanges, AfterContentInit, AfterViewInit {
  
  ngOnInit(): void {
    console.log('ngOnInit called');
  }

  ngOnChanges(){
    console.log('ngOnChanges called');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');    
  }
}
