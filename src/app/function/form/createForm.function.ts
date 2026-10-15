import { FormBuilder, FormGroup, ValidatorFn } from '@angular/forms';

type CampoConfig = {
  value?: any;
  validators?: ValidatorFn[];
};

export function createForm(
    campos: Record<string, CampoConfig>,
    builder: FormBuilder
): FormGroup {

    const group: any = {};

    for (const key in campos) {
      const config = campos[key];

      group[key] = [
        config.value ?? '',
        config.validators ?? []
      ];
    }

    return builder.group(group);
}