import {NgModule} from "@angular/core";
import {AuthComponent} from "./auth.component";
import {AuthRoutingModule} from "./auth-routing.module";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    FormsModule,
    RouterModule,
    SharedModule,
    AuthRoutingModule
  ]
})
export class AuthModule {}
