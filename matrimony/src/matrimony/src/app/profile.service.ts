import { Injectable } from '@angular/core';

interface Profile {
  name: string;
  age: number;
  description: string;
  imageURL: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private readonly STORAGE_KEY = 'profiles';

  constructor() {}

  saveProfiles(profiles: Profile[]): void { 
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(profiles));
  }

  getProfiles(): Profile[] {
    const storedProfiles = localStorage.getItem(this.STORAGE_KEY);
    return storedProfiles ? JSON.parse(storedProfiles) : [];
  }
}
