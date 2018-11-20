import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'trendingApp-UI';
  public itemsList : any;
  public item: any;
  
  public imagesUrl;
  public restItemsUrl = 'http://localhost:9080/trending';
  public restItemUrl = 'http://localhost:9080//item/';

  constructor(private http: HttpClient) {}
 
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
          console.log("#######################################################")
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
  
  $(document).ready(function () {

    var itemsMainDiv = ('.MultiCarousel');

    var itemsDiv = ('.MultiCarousel-inner');

    var itemWidth = "";



    $('.leftLst, .rightLst').click(function () {

        var condition = $(this).hasClass("leftLst");

        if (condition)

            click(0, this);

        else

            click(1, this)

    });



    ResCarouselSize();









    $(window).resize(function () {

        ResCarouselSize();

    });



    //this function define the size of the items

    function ResCarouselSize() {

        var incno = 0;

        var dataItems = ("data-items");

        var itemClass = ('.item');

        var id = 0;

        var btnParentSb = '';

        var itemsSplit = '';

        var sampwidth = $(itemsMainDiv).width();

        var bodyWidth = $('body').width();

        $(itemsDiv).each(function () {

            id = id + 1;

            var itemNumbers = $(this).find(itemClass).length;

            btnParentSb = $(this).parent().attr(dataItems);

            itemsSplit = btnParentSb.split(',');

            $(this).parent().attr("id", "MultiCarousel" + id);





            if (bodyWidth >= 1200) {

                incno = itemsSplit[3];

                itemWidth = sampwidth / incno;

            }

            else if (bodyWidth >= 992) {

                incno = itemsSplit[2];

                itemWidth = sampwidth / incno;

            }

            else if (bodyWidth >= 768) {

                incno = itemsSplit[1];

                itemWidth = sampwidth / incno;

            }

            else {

                incno = itemsSplit[0];

                itemWidth = sampwidth / incno;

            }

            $(this).css({ 'transform': 'translateX(0px)', 'width': itemWidth * itemNumbers });

            $(this).find(itemClass).each(function () {

                $(this).outerWidth(itemWidth);

            });



            $(".leftLst").addClass("over");

            $(".rightLst").removeClass("over");



        });

    }





    //this function used to move the items

    function ResCarousel(e, el, s) {

        var leftBtn = ('.leftLst');

        var rightBtn = ('.rightLst');

        var translateXval = '';

        var divStyle = $(el + ' ' + itemsDiv).css('transform');

        var values = divStyle.match(/-?[\d\.]+/g);

        var xds = Math.abs(values[4]);

        if (e == 0) {

            translateXval = parseInt(xds) - parseInt(itemWidth * s);

            $(el + ' ' + rightBtn).removeClass("over");



            if (translateXval <= itemWidth / 2) {

                translateXval = 0;

                $(el + ' ' + leftBtn).addClass("over");

            }

        }

        else if (e == 1) {

            var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();

            translateXval = parseInt(xds) + parseInt(itemWidth * s);

            $(el + ' ' + leftBtn).removeClass("over");



            if (translateXval >= itemsCondition - itemWidth / 2) {

                translateXval = itemsCondition;

                $(el + ' ' + rightBtn).addClass("over");

            }

        }

        $(el + ' ' + itemsDiv).css('transform', 'translateX(' + -translateXval + 'px)');

    }



    //It is used to get some elements from btn

    function click(ell, ee) {

        var Parent = "#" + $(ee).parent().attr("id");

        var slide = $(Parent).attr("data-slide");

        ResCarousel(ell, Parent, slide);

    }



});
}
