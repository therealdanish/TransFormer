import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Dashboard",
    rtlTitle: "لوحة القيادة",
    icon: "icon-align-center",
    class: ""
  },
  {
    path: "/history",
    title: "History",
    rtlTitle: "قائمة الجدول",
    icon: "icon-atom",
    class: ""
  },

  // {
  //   path: "/lol",
  //   title: "GGraph",
  //   rtlTitle: "لوحة القيادة",
  //   icon: "icon-align-center",
  //   class: ""
  // },
  {
    path: "/graphs",
    title: "Graphs",
    rtlTitle: "لوحة القيادة",
    icon: "icon-chart-bar-32",
    class: ""
  },
  // {
  //   path: "/reports",
  //   title: "Reports",
  //   rtlTitle: "لوحة القيادة",
  //   icon: "icon-notes",
  //   class: ""
  // },
  // {
  //   path: "/history",
  //   title: "History",
  //   rtlTitle: "قائمة الجدول",
  //   icon: "icon-atom",
  //   class: ""
  // },
  {
    path: "/maps",
    title: "Maps",
    rtlTitle: "لوحة القيادة",
    icon: "icon-pin",
    class: ""
  }
  // {
  //   path: "http://52.168.163.234/",
  //   title: "AI",
  //   rtlTitle: "قائمة الجدول",
  //   icon: "icon-atom",
  //   class: ""
  // },
  // {
  //   path: "http://52.168.163.234/fault_view",
  //   title: "Fault Prediction",
  //   rtlTitle: "قائمة الجدول",
  //   icon: "icon-atom",
  //   class: ""
  // },
  
  // {
  //   path: "/icons",
  //   title: "Icons",
  //   rtlTitle: "الرموز",
  //   icon: "icon-atom",
  //   class: ""
  // },
  //  {
  //   path: "/maps",
  //   title: "Maps",
  //   rtlTitle: "خرائط",
  //   icon: "icon-pin",
  //   class: "" },
  // {
  //   path: "/notifications",
  //   title: "Notifications",
  //   rtlTitle: "إخطارات",
  //   icon: "icon-bell-55",
  //   class: ""
  // },

  // {
  //   path: "/user",
  //   title: "User Profile",
  //   rtlTitle: "ملف تعريفي للمستخدم",
  //   icon: "icon-single-02",
  //   class: ""
  // },
  // {
  //   path: "/tables",
  //   title: "Table List",
  //   rtlTitle: "قائمة الجدول",
  //   icon: "icon-puzzle-10",
  //   class: ""
  // },
  // {
  //   path: "/transformer",
  //   title: "Transformer",
  //   rtlTitle: "قائمة الجدول",
  //   icon: "icon-atom",
  //   class: ""
  // },
  // {
  //   path: "/typography",
  //   title: "Typography",
  //   rtlTitle: "طباعة",
  //   icon: "icon-align-center",
  //   class: ""
  // },
  // {
  //   path: "/rtl",
  //   title: "RTL Support",
  //   rtlTitle: "ار تي ال",
  //   icon: "icon-world",
  //   class: ""
  // }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
