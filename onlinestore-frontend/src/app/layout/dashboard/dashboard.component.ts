import { Component, OnInit,AfterViewInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { DashboardService } from './dashboard.service';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit , AfterViewInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];
    private totalUser: string;
    private totalProduct: string;
    private totalOrder: string;
    private totalDelivery: string;

    constructor(private dashboardService: DashboardService) {
        // this.sliders.push(
        //     {
        //         imagePath: 'assets/images/slider1.jpg',
        //         label: 'First slide label',
        //         text:
        //             'Nulla vitae elit libero, a pharetra augue mollis interdum.'
        //     },
        //     {
        //         imagePath: 'assets/images/slider2.jpg',
        //         label: 'Second slide label',
        //         text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        //     },
        //     {
        //         imagePath: 'assets/images/slider3.jpg',
        //         label: 'Third slide label',
        //         text:
        //             'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
        //     }
        // );

        // this.alerts.push(
        //     {
        //         id: 1,
        //         type: 'success',
        //         message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        //         Voluptates est animi quibusdam praesentium quam, et perspiciatis,
        //         consectetur velit culpa molestias dignissimos
        //         voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
        //     },
        //     {
        //         id: 2,
        //         type: 'warning',
        //         message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        //         Voluptates est animi quibusdam praesentium quam, et perspiciatis,
        //         consectetur velit culpa molestias dignissimos
        //         voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
        //     }
        // );
    }
    ngAfterViewInit(){
          this.getUserCount();
          this.getproductCount();
          this. getOrderCount();
          this.getDeliveryPersonCount();
    }
    ngOnInit() {
    }

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
    getUserCount(){
        this.dashboardService.getUserCount().subscribe(data => {
            this.totalUser = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        },
            error => {

            });
    }
    getproductCount(){
        this.dashboardService.getProductCount().subscribe(data => {
            this.totalProduct = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        },
            error => {

            });
    }
    getOrderCount(){
        this.dashboardService.getOrderCount().subscribe(data => {
            this.totalOrder = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        },
            error => {

            });
    }
    getDeliveryPersonCount(){
        this.dashboardService.getDeliveryPersonCount().subscribe(data => {
            this.totalDelivery = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        },
            error => {

            });
    }
}
