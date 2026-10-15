import { inject, Service } from '@angular/core';

import { Router } from '@angular/router';

@Service()
export class RouterService {

    private router = inject(Router);

    navigatePage(name: string){
        this.router.navigate([name]);
    }
}