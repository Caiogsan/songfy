export class Users {
    email: string;
    name: string;
    password: string;


    constructor(email = '', name = '', password = ''){
        this.email = email
        this.name = name
        this.password = password
    }
}

export const UsersData = new Users()