import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SwipeProfileComponent } from './swipe-profile/swipe-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

import { ProfileViewComponent } from './profile-view/profile-view.component';
import { SwipeScreenComponent } from './swipe-screen/swipe-screen.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    SwipeProfileComponent,
    ProfileViewComponent,
    SwipeScreenComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
     MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,

    RouterModule.forRoot([
      { path: '', component: SwipeProfileComponent },
      { path: 'profile-view', component: ProfileViewComponent },
      {path:  'swipe-screen', component:SwipeScreenComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
