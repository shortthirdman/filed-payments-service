import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './core/services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  hideIfRouted: boolean = false;

  constructor(private router: Router, private appService: AppService) {
  }

  ngOnInit(): void {
    this.hideIfRouted = true;
  }

  ngOnDestroy(): void {
  }

  proceedToPay() {
    this.hideIfRouted = false;
    this.router.navigate(['checkout']);
  }
}
