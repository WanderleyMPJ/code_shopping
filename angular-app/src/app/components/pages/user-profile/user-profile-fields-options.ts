import {FieldsOptions} from "../../../common/fields-options";


const fieldsOptions: FieldsOptions = {
    name: {
        id: "name",
        label: 'Nome',
        validationMessage: {
            maxlenght: 255
        }
    },
    email: {
        id: "email",
        label: 'E-mail',
        validationMessage:{
            maxlenght: 255
        }
    },
    password: {
        id: "password",
        label: 'Senha',
        validationMessage:{
            maxlenght: 16,
            minlength: 4
        }
    }
};

export default fieldsOptions;