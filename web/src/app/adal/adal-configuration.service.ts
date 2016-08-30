import { Injectable } from '@angular/core';

@Injectable()
export class AdalConfigurationService {
    public get adalConfig(): any {
        return {
            tenant: 'etech.net',
            clientId: '86f477f8-cdbe-4b60-bdd8-44d840f955f9',
            redirectUri: window.location.origin + '/',
            postLogoutRedirectUri: window.location.origin + '/'
        };
    }
}
