import { Component, OnInit } from '@angular/core';
import { NavigationService } from './services/navigation/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public loadedFeature: string;
  constructor(private navigationService: NavigationService) {}

  ngOnInit(): void {
    this.navigationService.activeFeature.subscribe((feature: string) => {
      this.loadedFeature = feature;
    });
  }
}
