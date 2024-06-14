import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
	heroRocketLaunch,
	heroPresentationChartBar,
  heroArrowRightStartOnRectangle,
} from '@ng-icons/heroicons/outline';
import { Component } from '@angular/core';
import { LinksItems } from '../../core/interfaces/link-item.interface';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
	selector: 'app-nav-bar',
	standalone: true,
	imports: [NgIconComponent, RouterLink, RouterLinkActive],
	templateUrl: './nav-bar.component.html',
	styleUrl: './nav-bar.component.css',
	viewProviders: [
		provideIcons({ heroRocketLaunch, heroPresentationChartBar, heroArrowRightStartOnRectangle }),
	],
})
export class NavBarComponent {

  public linksItems: LinksItems[] = [
    {
      name: 'Ejecutar RPA',
      routerLink: 'execute-rpa',
      icon: 'heroRocketLaunch'
    },
    {
      name: 'Ver Reporte',
      routerLink: 'process-report',
      icon: 'heroPresentationChartBar'
    },
  ]

}
