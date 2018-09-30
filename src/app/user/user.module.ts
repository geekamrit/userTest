import { UserComponent } from './user.component';
import { NgModule } from '@angular/core';
import { UserRoutingModule } from './user-route-module';
import { CommonModule } from '@angular/common';
@NgModule({
    declarations: [
        UserComponent
    ],
    imports: [
        CommonModule,
        UserRoutingModule
    ],
    providers: [],
    bootstrap: []
})
export class UserModule { }
