import { Component, Input } from "@angular/core";
import { AccountService } from "../accounts.service";
import { LogginService } from "../loggin.sevice";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.css"],
})
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() id: number;

  constructor(
    private logginSerice: LogginService,
    private accountService: AccountService
  ) {}

  onSetTo(status: string) {
    this.accountService.updateAStatus(this.id, status);
    //this.logginSerice.logStatusChange(status);
    this.accountService.statusUpdateed.emit(status);
  }
}
