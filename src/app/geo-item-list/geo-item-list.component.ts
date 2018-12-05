import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-items',
  templateUrl: './geo-item-list.component.html',
  styleUrls: ['./geo-item-list.component.scss']
})
export class GeoItemListComponent implements OnInit {
  title = 'trendingApp-UI';
  public itemsList : any;
  public item: any;
  
  public imagesUrl;
  public restItemsUrl = 'http://localhost:9080/trending';
  public restItemUrl = 'http://localhost:9080//item/';

  constructor(private http: HttpClient,private router: Router) {}
 
    ngOnInit() {
    
        this.getTrendingItems();
        this.imagesUrl = [
          'http://www.telegraph.co.uk/content/dam/motoring2/2015/12/07/01-Kia-Sportage-front-xlarge_trans_NvBQzQNjv4BqrWYeUU_H0zBKyvljOo6zlkYMapKPjdhyLnv9ax6_too.jpg',
          'http://www.telegraph.co.uk/cars/images/2017/01/24/A5-Sportback-main-xlarge_trans_NvBQzQNjv4BqZR6q1BRVjLLZ5nciTmZ6ABYYy2HF4Csw_oYIEcbI_AA.jpg',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXPopqXeuO7fqot51N7vaZuh9EqBYgZkLexcmQ_A0Fy0CjjW6J',
          'https://www.cars.co.za/carimages_gen/Audi-TT/Audi-TT-coupe-1.8TFSI_AudiTT3c6l.jpg',
          'http://comicsalliance.com/files/2011/04/strips02.jpg',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq4HTtZrfKqNo5riVYiOBBL7-9laaPZcW1RfDfYGvb6BezfMtQ',
          'https://s-media-cache-ak0.pinimg.com/originals/73/f3/08/73f30861d214eea1d6c5d99fe72b3053.jpg',
          'https://bmj2k.files.wordpress.com/2011/04/heroes.jpg'
        ];
    }    
   

  // Read all Trending Items
  getTrendingItems(): void {
    this.restItemsServiceGetTrendingItems()
      .subscribe(
        restItems => {
          this.itemsList = restItems;
          console.log(this.itemsList);
        }
      )
  }
  
  // Rest Items Service: Read all Trending Items
  restItemsServiceGetTrendingItems() {
    return this.http
      .get<any[]>(this.restItemsUrl)
      .pipe(map(data => data));
  
  }
  
  redirectToTrendingItem(itemKey: string) {
	  this.router.navigate(['/item/'+itemKey]);
	}
	
	gotoHeroes() {
	    //let heroId = hero ? hero.id : null;
	    // Pass along the hero id if available
	    // so that the HeroList component can select that hero.
	    // Include a junk 'foo' property for fun.
	    this.router.navigate(['/item', { id: 'KEY-004'}]);
	  }
}
