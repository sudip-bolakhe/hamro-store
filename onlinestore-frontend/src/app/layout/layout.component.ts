import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
    private role:String='';
    constructor() {}

    ngOnInit() {
        this.role=localStorage.getItem('role');
    }

    
}
