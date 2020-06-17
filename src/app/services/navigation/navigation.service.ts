import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  public activeFeature = new EventEmitter<string>();
  constructor() {}
}
