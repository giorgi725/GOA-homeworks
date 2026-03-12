class Account {
    constructor(firstname ,lastname, email, password){
        this.firstname = firstname
        this.lastname = lastname
        this.email = email
        this.password = password
    }
}
export function getfullname (user) {
    return `${user.firstname} ${user.lastname}`
}

export function getemail(user) {
    return `${user.email}`
}
export default Account;

