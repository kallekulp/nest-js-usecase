// auth.guard.ts
import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";

import { BService } from "../b/b.service"; // Import SubService from the submodule

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private subService: BService) {
  } // Inject SubService into AuthGuard

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    // Use SubService in your guard logic
    return true; // Replace with your actual guard logic
  }
}