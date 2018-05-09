import { Component, OnInit } from '@angular/core';
import { Configuration } from "../core/sidebar/sidebar.component";
import { routerTransition } from './app-routing.animation'

import {
  Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
  ActivatedRoute
} from "@angular/router";
import { merge } from 'rxjs';


/**
 * Main Component of the application, it contain router and sub components
 */
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [routerTransition]
})
export class AppComponent implements OnInit {
  /**
   * Check if a component is loading on a route changing
   */
  loading = true;

  /**
   * Configuration of the navbar
   */
  navbarConf: Configuration
  /**
   * Constructor of AppComponent
   * @param {SideBarService} sidebar Control the sidebar status
   */
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    const router = this.router
    this.navbarConf = {
      list: [
        {
          icon: "fa fa-home",
          id: "home",
          description: "Accueil",
          click: function () {
            router.navigate(['/home'])
          }
        },
        {
          icon: "fa fa-home",
          id: "card",
          description: "Card list",
          click: function () {
            router.navigate(['/card-list'])
          }
        }
      ],
      // bottom: [
      //   {
      //     icon: "fa fa-cog",
      //     id: "settings",
      //     description: "Settings",
      //     click: ["/settings"]
      //   }
      // ]
    };
  }

  /**
   * Get status of the component loader
   * @param {Object} outlet Object which it put right component in the app 
   */
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

  /**
   * Intercept event from the router to expose it with the loading variable of the AppComponent
   * @param event 
   */
  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.loading = true;
    }
    if (event instanceof NavigationEnd) {
      this.loading = false;
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.loading = false;
    }
    if (event instanceof NavigationError) {
      this.loading = false;
    }
  }
}