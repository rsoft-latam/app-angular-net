import {Component, OnInit} from '@angular/core';
import {TestService} from "../../test.service";
import {countriesList} from "../../countries-list";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private countriesSearched: any[] = []
  public countrySelected: any;
  public tempSelected: any;
  public country: any;
  public countriesList = countriesList

  constructor(private testService: TestService, private router: ActivatedRoute) {
  }

  ngOnInit():void {

    if(window.localStorage.getItem('countries')){
      const countriesSaved:any = window.localStorage.getItem('countries');
      this.countriesSearched = JSON.parse(countriesSaved);
    }

    if( this.router.snapshot.params['id']){
      this.countrySelected = this.router.snapshot.params['id']
      this.onSearch()
    }
  }

  onSearch(): void {
    this.country = this.countriesList.find(s => s.id = this.countrySelected)
    if (!this.countriesSearched.find((s:any) => s.id === this.countrySelected)) {
      this.countriesSearched.push(this.country)
      window.localStorage.setItem('countries', JSON.stringify(this.countriesSearched))
    }
    this.testService.getCityWeather(this.countrySelected).subscribe(res => {
      this.country = this.countriesList.find(s => s.id = this.countrySelected)
      this.country = {...this.country, ...res}
    })
  }

}
