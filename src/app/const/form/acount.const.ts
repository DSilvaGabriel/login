import { Validators } from "@angular/forms"

export const formAccount = {
    email: { validators: [ Validators.required ] },
    password: { validators: [ Validators.required ] }
};

export const formCreateAccount = {
    name: { validators: [ Validators.required ] },
    phone: { validators: [ Validators.required ] },
    year: { validators: [ Validators.required ] },
    sex: { validators: [ Validators.required ] },

    email: { validators: [ Validators.required ] },
    password: { validators: [ Validators.required ] }
}