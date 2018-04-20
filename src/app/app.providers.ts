import { DataService } from './services/data.service';
import { ConsumeService } from "./services/consume.service";
import { GitHubService } from "./services/git-hut.service";
import { ColorService } from "./services/color.service";
import { LoginServices } from "./services/login.services";

export const APP_PROVIDERS = [
    DataService,
    ConsumeService,
    GitHubService,
    ColorService,
    LoginServices
   
];
