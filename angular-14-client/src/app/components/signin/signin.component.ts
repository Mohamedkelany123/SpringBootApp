import { Component, OnInit } from "@angular/core";
// Select all input elements for varification
const username = (<HTMLInputElement>document.getElementById("username"));
const password = (<HTMLInputElement>document.getElementById("password"));

// function for form varification
function formValidation() {
    // checking user name
    if (username.value.length > 0) {
        alert("Please enter username");
        username.focus();
        return false;
    }
    // checking password
    if (password.value.length > 0) {
        alert("Please enter password");
        password.focus();
        return false;
    }
    return true;
}


@Component({
    selector: 'signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit{
    title = "Sign In";
    SignUp(): void {
        location.href = '/SignUp';
    }

    ngOnInit(): void {
    }
}