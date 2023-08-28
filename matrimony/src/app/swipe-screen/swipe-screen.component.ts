import { Component} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-swipe-screen',
  templateUrl: './swipe-screen.component.html',
  styleUrls: ['./swipe-screen.component.css']
})
export class SwipeScreenComponent {
  profiles: any[] = [];

  currentIndex = 0;

  profileImages: string[] = [];

  startX = 0;
  isSwiping = false;
  swipeTransform = '';
  isShortlisted = false;

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  ngOnInit() {
    this.loadProfiles();
  }

  loadProfiles() {
    this.http.get<any[]>('./assets/profiles.json').subscribe(data => {
      console.log('Fetched profiles:', data);
      this.profiles = data;
    });
  }


  onSwipeStart(event: MouseEvent | TouchEvent) {
    event.preventDefault();
    if (event instanceof MouseEvent) {
      this.startX = event.clientX;
    } else if (event instanceof TouchEvent) {
      this.startX = event.touches[0].clientX;
    }
    this.isSwiping = true;
  }


  onYesClick() {
    this.showInterestedSnackBar();
    this.moveToNextProfile();
  }

  onNoClick() {
    this.showNotInterestedSnackBar();
    this.moveToNextProfile();
  }
    onShortlist() {
      this.showShortlistedSnackBar();
      this.moveToNextProfile();
      this.isShortlisted = !this.isShortlisted;
    }


  private moveToNextProfile() {
    if (this.currentIndex < this.profiles.length - 1) {
      this.currentIndex++;
    }
    this.isSwiping = false;
    this.swipeTransform = '';
  }

  private showInterestedSnackBar() {
    this.snackBar.open('Interested', '', { duration: 2000 });
  }

  private showNotInterestedSnackBar() {
    this.snackBar.open('Not Interested', '', { duration: 2000 });
  }

  private showShortlistedSnackBar() {
    this.snackBar.open('Shortlisted', '', { duration: 2000 });
  }

  onSwipeMove(event: MouseEvent | TouchEvent) {
    if (!this.isSwiping) {
      return;
    }

    let clientX;
    if (event instanceof MouseEvent) {
      clientX = event.clientX;
    } else if (event instanceof TouchEvent) {
      clientX = event.touches[0].clientX;
    }

    if (clientX !== undefined) {
      const deltaX = clientX - this.startX;
      const rotation = Math.min(Math.max(-180, (deltaX / 5)), 180);
      this.swipeTransform = `translateX(${deltaX}px) rotate(${rotation}deg)`;
    }
  }

  onSwipeEnd(event: MouseEvent | TouchEvent) {
    if (!this.isSwiping) {
      return;
    }
    let clientX;
    if (event instanceof MouseEvent) {
      clientX = event.clientX;
    } else if (event instanceof TouchEvent) {
      clientX = event.changedTouches[0].clientX;
    }
    if (clientX !== undefined) {
      this.isSwiping = false;
      this.swipeTransform = '';

      if (this.startX - clientX > 50) {

      } else if (clientX - this.startX > 50) {

      }
    }
  }
  }

