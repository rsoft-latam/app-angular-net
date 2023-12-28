import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {

  public countries:any[] = []

  constructor() {

  }

  ngOnInit() {
    const countriesSaved:any = window.localStorage.getItem('countries');
    this.countries = JSON.parse(countriesSaved)
  }


}
