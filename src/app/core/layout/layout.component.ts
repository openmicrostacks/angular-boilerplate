import { Component, OnInit } from '@angular/core';
import { Router, UrlTree } from '@angular/router';


@Component({
  selector: 'app-layout',
  moduleId: module.id,
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  public isLoggedIn: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }


  isActiveRoute(route: string) {
    const tree: UrlTree = this.router.parseUrl(route);
    const treeCurrent: UrlTree = this.router.parseUrl(this.router.url);

    return this.router.serializeUrl(tree) == this.router.serializeUrl(treeCurrent);
  }

}
