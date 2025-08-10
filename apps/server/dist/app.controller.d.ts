import { AppService } from "./app.service";
import { UserEntity } from "./cl";
export declare class AppController {
  private readonly appService;
  constructor(appService: AppService);
  getHello(): UserEntity;
}
