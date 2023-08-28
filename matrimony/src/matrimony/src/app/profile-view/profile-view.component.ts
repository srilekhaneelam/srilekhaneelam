import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Profile {
  name: string;
  age: number;
  description: string;
  imageURL: string;
}

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css'],
})
export class ProfileViewComponent implements OnInit {
  selectedProfile: Profile | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.selectedProfile = history.state.profile;
  }
}
