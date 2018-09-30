import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '', pathMatch: 'full', redirectTo: '/user',
    },
    {
        path: 'user',
        loadChildren: './user/user.module#UserModule'
    },
    {
        path: 'userdetail',
        loadChildren: './user-detail/user-detail.module#UserDetailModule'
    }

];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class appRoutingModule {

}
