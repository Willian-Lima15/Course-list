import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CourseListComponent } from './course/course-list/course-list.component';
import { StarComponent } from './star/star.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ErroComponent } from './erro/erro.component';
import { CourseInfoComponent } from './course/course-info/course-info.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    NavBarComponent,
    ErroComponent,
    CourseInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'courses', component: CourseListComponent},
      {path: 'course/info', component: CourseInfoComponent},
      {path:'', redirectTo:'courses', pathMatch:'full'},
      {path:'**', component: ErroComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
