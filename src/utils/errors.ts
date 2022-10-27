export const errors = {
  required: (name: string) => `${name} field is required`,
  minLength: (name: string, length: number) => `${name} field should be more than ${length} characters`,
  maxLength: (name: string, length: number) => `${name} field should be less than ${length} characters`,
  singleEnum: (name: string, enumValue: string | number) => `${name} field should be ${enumValue}`,
  arrayEnum: (name: string, enums: Array<string | number>) => `${name} field should be one of ${enums.join(', ')}`,
  fieldNotFound: (name: string) => `${name} field not found in Schema`,
}
