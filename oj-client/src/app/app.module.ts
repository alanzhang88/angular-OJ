import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProblemComponent } from './problem/problem.component';
import { ProblemListComponent } from './problem/problem-list/problem-list.component';
import { ProblemStartComponent } from './problem/problem-start/problem-start.component';
import { ProblemDetailComponent } from './problem/problem-detail/problem-detail.component';
import { AppRoutingModule } from "./app-routing.module";
import { ProblemService } from "./problem/problem.service";
import { EditorMarkerService } from "./problem/problem-detail/editor-marker.service";
import { EditorUpdateService } from "./problem/problem-detail/editor-update.service";
import { ProblemEditComponent } from './problem/problem-edit/problem-edit.component';
import { ProblemEditFormComponent } from './problem/problem-edit/problem-edit-form/problem-edit-form.component';
import { AuthModule } from "./auth/auth.module";
import { HomeComponent } from './home/home.component';
import { AuthService } from "./auth/auth.service";
import { HttpModule } from "@angular/http";
import { RoomService } from "./problem/room.service";
import { ProblemGuard } from "./problem/problem-guard-service";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProblemComponent,
    ProblemListComponent,
    ProblemStartComponent,
    ProblemDetailComponent,
    ProblemEditComponent,
    ProblemEditFormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AuthModule,
    HttpModule
  ],
  providers: [RoomService, AuthService, ProblemService, EditorMarkerService, EditorUpdateService, ProblemGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
