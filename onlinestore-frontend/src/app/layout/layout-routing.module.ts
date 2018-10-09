import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'userdashboard', loadChildren: './userdashboard/userdashboard.module#UserdashboardModule' },          
            { path: 'user', loadChildren: './user/user.module#UserModule' },
            { path: 'product', loadChildren: './product/product.module#ProductModule' },
            { path: 'order', loadChildren: './order/order.module#OrderModule' },
            { path: 'payment', loadChildren: './payment/payment.module#PaymentModule' },
            { path: 'delivery', loadChildren: './delivery-person/delivery-person.module#DeliveryPersonModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
