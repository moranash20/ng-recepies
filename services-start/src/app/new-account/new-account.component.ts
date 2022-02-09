import { Component, EventEmitter, Output } from "@angular/core";
import { AccountService } from "../accounts.service";
import { LogginService } from "../loggin.sevice";

@Component({
  selector: "app-new-account",
  templateUrl: "./new-account.component.html",
  styleUrls: ["./new-account.component.css"],
  //providers: [LogginService],
})
export class NewAccountComponent {
  constructor(
    private logginSerice: LogginService,
    private accountService: AccountService
  ) {
    this.accountService.statusUpdateed.subscribe((status) =>
      alert("New Status: " + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    //this.logginSerice.logStatusChange(accountStatus);
  }
}
