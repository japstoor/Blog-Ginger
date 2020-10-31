import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  imageUrl = '/assets/img/user.png';
  Logo = '/assets/img/Blog-Ginger.jpg';
  Img$: string;
  token: any;
  user: any;
  constructor(private router: Router, private apiService: ServiceService) { }
  LoginStatus$: Observable<boolean>;
  ngOnInit(): void {
     this.LoginStatus$ = this.apiService.isLoggesIn;
     this.apiService.getUserProfile()
    .subscribe( (data: any) => {
      this.Img$ = data.image;
      this.user = data;
      });
  }
  logOut(){

    this.apiService.logout();
    this.router.navigate(['/login']);
}

}
