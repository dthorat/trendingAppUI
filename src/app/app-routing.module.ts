import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
import { ItemDetailComponent } from './item/item.component';
import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component'; 
import { GeoItemListComponent } from './geo-item-list/geo-item-list.component'; 
import { PageNotFoundComponent }    from './page-not-found/page-not-found.component';

const routes: Routes = [
					{ path: '', component: ItemListComponent },
					{ path: "item/:id", component: ItemDetailComponent },
					{ path: 'items', component: ItemListComponent },
					{ path: 'geoItems', component: GeoItemListComponent},
					{ path: '**', component: PageNotFoundComponent }
			  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}