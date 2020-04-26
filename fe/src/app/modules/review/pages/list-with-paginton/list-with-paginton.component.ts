import { Component, OnInit, ViewChild } from '@angular/core';
import { BusinessList } from 'src/app/modules/core/models/business-list';
import { Authetication } from 'src/app/modules/auth/models/authentication';
import { GoogleMap, MapInfoWindow, MapMarker } from "@angular/google-maps";
import { Business } from 'src/app/modules/core/models/business';
import { BusinessService } from 'src/app/modules/core/services/business.service';

@Component({
  selector: 'app-list-with-paginton',
  templateUrl: './list-with-paginton.component.html',
  styleUrls: ['./list-with-paginton.component.scss']
})
export class ListWithPagintonComponent implements OnInit {

  businessList = new BusinessList();
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow;

  zoom = 14;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.RIGHT_TOP
    },
    streetViewControlOptions: {
      position: google.maps.ControlPosition.LEFT_TOP
    },
    scrollwheel: false,
    disableDoubleClickZoom: true,
    mapTypeId: "roadmap",
    fullscreenControl: false,
    mapTypeControl: false
  };
  markers = [];
  infoContent = "";

  constructor(
    private readonly authetication: Authetication,
    private readonly businessService: BusinessService) { }

  ngOnInit(): void {
    //TODO: takeUntil unsubscribe !!!! 
    this.businessService.loadBusinessList(this.businessList.pagination)
      .subscribe(businessList => {
        this.businessList = businessList;
        this.googleMapMethod();
      })
    // this.businessList.loadBusinessList(() => {
    //   console.log(this.businessList);
    //   this.googleMapMethod();
    // });
  }

  paginationChanged() {
        //TODO: takeUntil unsubscribe !!!! 
    this.businessService.loadBusinessList(this.businessList.pagination)
      .subscribe(businessList => {
        this.businessList = businessList;
        this.googleMapMethod();
      })

    // this.businessList.loadBusinessList(() => {
    //   this.pushMarkers();
    // });
  }

  logout() {
    this.authetication.logout();
  }

  googleMapMethod() {
    navigator.geolocation.getCurrentPosition(x => {
      this.center = {
        lat: x.coords.latitude,
        lng: x.coords.longitude
      };
      this.pushMarkers();
    });
  }

  openInfo(marker: MapMarker, info) {
    this.infoContent = info;
    this.info.open(marker);
  }

  pushMarkers() {
    this.markers = [];
    this.businessList.elements.forEach((item, index) => {
      const business = <Business>item;
      console.log(business)
      this.markers.push({
        position: {
          lat: business.latitude,
          lng: business.longitude
        },
        info: business.title,
        options: {
          animation: google.maps.Animation.DROP
        }
      });
    });
  }
}
