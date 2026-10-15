import { inject, Service } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Service()
export class SnackBarService {

    private snackBar = inject(MatSnackBar);

    openSnackBar(name: string, action: string){
        this.snackBar.open(name, action);
    }
}