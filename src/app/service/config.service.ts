import { Injectable } from '@angular/core';

export interface IMenuItem {
  text: string;
  link: string;
  icon?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  appName: string = 'Team 07 Movie Webshop';

  menuItems: IMenuItem[] = [
    { text: 'Home', link: '/', icon: 'home' },
    { text: 'Documentary', link: '/cat01' },
    { text: 'Comedy', link: '/cat02' },
    { text: 'Adventure', link: '/cat03' },
    { text: 'Admin', link: '/admin' }
  ];

  constructor() {}
}
