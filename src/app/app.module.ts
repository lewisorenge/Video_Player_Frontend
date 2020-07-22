
// export class AppModule { }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
// Components
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { BookmarksComponent } from './main/bookmarks/bookmarks.component';
import { HistoryComponent } from './main/history/history.component';
import { SearchBarComponent } from './main/search-bar/search-bar.component';
import { VideoViewComponent } from './main/video-view/video-view.component';
// Services
import { YoutubeApiService } from './shared/services/youtube-api.service';
import { YoutubePlayerService } from './shared/services/youtube-player.service';
import { PlaylistStoreService } from './shared/services/playlist-store.service';
import { NotificationService } from './shared/services/notification.service';
import { BrowserNotificationService } from './shared/services/browser-notification.service';
// Pipes
import { VideoDurationPipe } from './shared/pipes/video-duration.pipe';
import { VideoLikesViewsPipe } from './shared/pipes/video-likes-views.pipe';
import { VideoNamePipe } from './shared/pipes/video-name.pipe';
import { LazyScrollDirective } from './shared/directives/lazy-scroll.directive';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    MainComponent,

    BookmarksComponent,
    HistoryComponent,
    SearchBarComponent,
    VideoViewComponent,

    VideoDurationPipe,
    VideoLikesViewsPipe,
    VideoNamePipe,

    LazyScrollDirective
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    YoutubeApiService,
    YoutubePlayerService,
    PlaylistStoreService,
    NotificationService,
    BrowserNotificationService
  ]
})
export class AppModule {
}
0.00322259