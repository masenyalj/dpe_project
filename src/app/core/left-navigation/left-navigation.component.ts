import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-left-navigation',
  templateUrl: './left-navigation.component.html',
  styleUrls: ['./left-navigation.component.css']
})
export class LeftNavigationComponent implements OnInit {

@Output() expand: EventEmitter<any> = new EventEmitter(); //"Expand" is output that will be used in TopNavComponent


  /**
   * Private boolean properties.
   */
  showMenu: boolean;
  expandMenu: boolean;
  superUserSub: boolean;
  superUserOrganisationSub: boolean;
  showOverlay: boolean;

  router: Router;

  constructor(router: Router) { //Properties are all constructed to be false on default
    this.router = router;
    this.showMenu = false;
    this.superUserSub = false;
    this.superUserOrganisationSub = false;
    this.showOverlay = false;
    this.expandMenu = false;
  }

  ngOnInit(): void {
  }

  /**
   * This method is used to toggle a sub menu inside the side menu.
   *
   * @param menu    The name of the submenu that should be toggled
   */
  toggleSubMenu(menu: string): void {
    event.preventDefault();
    this[menu + "Sub"] = !this[menu + "Sub"];
  }

  /**
   * This method is used to show & hide (toggle) the side menu overlay (expand it).
   */
  toggleOverlay(): void {
    event.preventDefault();
    this.showOverlay = !this.showOverlay;
  }

  /**
   * This method is used to close all submenus in side navigation.
   */
  closeAllSubMenus(): void {
    this.superUserSub = false;
    this.superUserOrganisationSub = false;
  }

  /**
   * This method is used to pin and unpin the menu.
   */
  toggleExpanded(): void {
    this.expandMenu = !this.expandMenu;
    this.expand.emit(this.expandMenu);
  }

  /**
   * This method is used to show the side menu content.
   */
  displayMenu(): void {
    this.showMenu = true;
  }


  /**
   * This method is used to hide the side menu content.
   */
  hideMenu(): void {
    this.showMenu = false;
  }


}
