import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Profile {
  name: string;
  age: number;
  description: string;
  imageURL: string;
}

@Component({
  selector: 'app-swipe-profile',
  templateUrl: './swipe-profile.component.html',
  styleUrls: ['./swipe-profile.component.css'],
})
export class SwipeProfileComponent implements OnInit {
  profiles: Profile[] = [];
  currentIndex = 0;
  profileImages: string[] = [];

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.loadProfiles();
  }

  loadProfiles() {
    this.http.get<Profile[]>('./assets/profiles.json').subscribe(data => {
      console.log('Fetched profiles:', data);
      this.profiles = data;
    });
  }

  onImageClick(event: MouseEvent) {
    const target = event.target as HTMLElement | null;
    if (target) {
      const clickX = event.clientX;
      const imageWidth = target.clientWidth;
      const clickPosition = clickX / imageWidth;

      if (clickPosition < 0.5) {
        this.previousProfile();
      } else {
        this.nextProfile();
      }
    }
  }

  @HostListener('swipeleft')
  onSwipeLeft() {
    this.nextProfile();
  }

  @HostListener('swiperight')
  onSwipeRight() {
    this.previousProfile();
  }

  nextProfile() {
    this.currentIndex = Math.min(this.currentIndex + 1, this.profiles.length - 1);
  }

  previousProfile() {
    this.currentIndex = Math.max(this.currentIndex - 1, 0);
  }

  onYesClick() {
    const selectedProfile = this.profiles[this.currentIndex];
    this.router.navigate(['/profile-view'], { state: { profile: selectedProfile } });
  }

  onNoClick() {
    console.log('No clicked');
  }
}
