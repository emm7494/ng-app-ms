import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NavigationService } from '../services/navigation/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public activeFeature = 'recipes';

  constructor(private navigationService: NavigationService) {}

  ngOnInit(): void {
    this.navigationService.activeFeature.emit(this.activeFeature);
  }

  onSelect(activeFeature: string) {
    this.navigationService.activeFeature.emit(activeFeature);
    this.activeFeature = activeFeature;
  }
}
