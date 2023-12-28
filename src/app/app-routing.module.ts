import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {StoryComponent} from "./pages/story/story.component";

const routes: Routes = [
  {path: 'home', component:  HomeComponent},
  {path: 'home/:id', component:  HomeComponent},
  {path: 'story', component:  StoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
