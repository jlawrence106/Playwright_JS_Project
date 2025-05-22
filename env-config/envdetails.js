const envdetails = JSON.parse(JSON.stringify(require("../env-config/login-data.json")));


export function baseurl() {
    return process.env.URL;
  }

export function username() {
    return envdetails.username;
}


export function password() {
    return envdetails.password;
}