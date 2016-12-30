import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { FrontpageComponent } from './Components/frontpage/Frontpage.component';
import { BedChooserComponent } from './Components/bed-chooser/bed-chooser.component';
import { BedComponent } from './Components/bed/bed.component';

const appRoutes: Routes = [
    {
        path: 'frontpage',
        component: FrontpageComponent
    },
    {
        path: '',
        redirectTo: '/frontpage',
        pathMatch: 'full'
    },
    {
        path: 'bed/:id',
        component: BedComponent
    },
    {
        path: 'webshop',
        component: BedChooserComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);