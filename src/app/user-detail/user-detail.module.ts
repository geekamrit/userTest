import { UserDetailComponent } from './user-detail.component';
import { NgModule } from '@angular/core';
import { UserDetailRoutingModule } from './user-detail.modulerouting';
import { CommonModule } from '@angular/common';
@NgModule({
    declarations: [
        UserDetailComponent
    ],
    imports: [
        CommonModule,
        UserDetailRoutingModule
    ],
    providers: [],
    bootstrap: []
})
export class UserDetailModule { }
