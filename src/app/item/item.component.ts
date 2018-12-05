import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map,switchMap } from 'rxjs/operators';
import { ModuleWithProviders } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
	selector: 'item-detail',
	templateUrl: './item.component.html',
	styleUrls: []
})

export class ItemDetailComponent implements OnInit {

	title = 'trendingApp-UI';
	public itemsList : any;
	public itemKey: string;
	public item:any;
	public imagesUrl;
	
	
	public restItemsUrl = 'http://localhost:9080/trending';
	public restItemUrl = 'http://localhost:9080/item/';
	
	constructor(private http: HttpClient,private route: ActivatedRoute) {}
	
	ngOnInit(): void{
		this.getTrendingItem(this.route.snapshot.paramMap.get('id'));
	} 
	
	// Read Trending Item
	getTrendingItem(itemKey: string): void {
		this.restItemsServiceGetTrendingItem(itemKey)
		.subscribe(
			restItem => {
				this.item = restItem;
				console.log("#######################################################");
				console.log(this.item);
			}
		)
	}
	// Rest Items Service: Read Trending Item
	restItemsServiceGetTrendingItem(itemKey: string) {
		return this.http
		.get<any[]>(this.restItemUrl+itemKey)
		.pipe(map(data => data));
	}
}