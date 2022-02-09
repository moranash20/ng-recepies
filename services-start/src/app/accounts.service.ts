import { EventEmitter, Injectable } from "@angular/core";
import { LogginService } from "./loggin.sevice";

@Injectable()
export class AccountService {
  accounts = [
    {
      name: "Master Account",
      status: "active",
    },
    {
      name: "Testaccount",
      status: "inactive",
    },
    {
      name: "Hidden Account",
      status: "unknown",
    },
  ];

  statusUpdateed = new EventEmitter<string>();

  constructor(private logginService: LogginService) {}

  public addAccount(name: string, status: string) {
    this.accounts.push({ name: name, status: status });
  }

  public updateAStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.logginService.logStatusChange(status);
  }
}
