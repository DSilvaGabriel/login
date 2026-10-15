import { Service, signal } from '@angular/core';
import { userInterface } from '../interface/user.interface';

@Service()
export class UserService {
    user = signal<userInterface | null>(null);

    defineUser(data: any){
        this.user.set(data);
    }
}
