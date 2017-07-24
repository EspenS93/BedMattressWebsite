import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { FrontpageComponent } from './Components/frontpage/frontpage.component';
import { BedChooserComponent } from './Components/bed-chooser/bed-chooser.component';
import { BedComponent } from './Components/bed/bed.component';
import { NewBedComponent } from './Components/new-bed/new-bed.component';

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
    },
    {
        path: 'newBed',
        component: NewBedComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);