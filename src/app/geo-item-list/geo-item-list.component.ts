import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import { map } from 'rxjs/operators';
import { } from 'googlemaps';

@Component({
  selector: 'app-geo-items',
  templateUrl: './geo-item-list.component.html',
  styleUrls: ['./geo-item-list.component.scss']
})
export class GeoItemListComponent implements OnInit {

  title = 'Geographical Location wise Item Details';
  public itemsList : any;
  public item: any;
  public google: any;
  public imagesUrl;
  public zipCode = '411014' ;
  public restItemsUrl = 'http://localhost:9080/trending/geolocation/items/';
  public restItemUrl = 'http://localhost:9080/item/';

  constructor(private http: HttpClient,private router: Router) {}
 
    ngOnInit() {
    	this.getTrendingItems('411014');
    	/*
    	window.navigator.geolocation.getCurrentPosition(position => {
                
            var pos =  {
            	lat: position.coords.latitude,
             	lng: position.coords.longitude
           	};
            
		    let geocoder = new google.maps.Geocoder();

		    geocoder.geocode({'location': pos}, (results, status) => {
		      if (status == google.maps.GeocoderStatus.OK) {
		        let result = results[0];
		        let rsltAdrComponent = result.address_components;
		        let resultLength = rsltAdrComponent.length;
		        if (result != null) {
		          let postalCode = rsltAdrComponent[resultLength-1].long_name;
		          this.getTrendingItems(postalCode);
		        } else {
		          alert("No address available!");
		        }
		      }
		    });
		});  */  
    }    
   

  // Read all Trending Items
  getTrendingItems(postalCode: string): void {
    this.restItemsServiceGetTrendingItems(postalCode)
      .subscribe(
        restItems => {
          this.itemsList = restItems;
          console.log(this.itemsList);
        }
      )
  }
  
  // Rest Items Service: Read all Trending Items
  restItemsServiceGetTrendingItems(postalCode: string) {
    return this.http
      .get<any[]>(this.restItemsUrl+postalCode)
      .pipe(map(data => data));
  
  }  
}
