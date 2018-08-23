export interface fieldsOptions{
    [field: string]: {
        id: string,
        label: string,
        validationMessage?: {
            [error: string]: any
        }
    }

}
