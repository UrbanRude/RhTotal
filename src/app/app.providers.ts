import { DataService } from './services/data.service';
import { ConsumeService } from "./services/consume.service";
import { UserService } from './services/user.service';

export const APP_PROVIDERS = [
    DataService,
    ConsumeService,
    UserService
];
