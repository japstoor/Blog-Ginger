import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from './services/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  constructor(private routes: ActivatedRoute, private apiService: ServiceService) {}

  ngOnInit() {
   // this.apiService.params$ = this.routes.params;
  }
}
