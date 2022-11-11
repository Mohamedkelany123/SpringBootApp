import { Component, OnInit } from "@angular/core";

// Select all input elements for varification
const name = (<HTMLInputElement>document.getElementById("name"));
const username = (<HTMLInputElement>document.getElementById("username"));
const email = (<HTMLInputElement>document.getElementById("email"));
const password = (<HTMLInputElement>document.getElementById("password"));
const confirmpassword = (<HTMLInputElement>document.getElementById("confirmpassword"));
const phoneNumber = (<HTMLInputElement>document.getElementById("phoneNumber"));

// function for form varification
function formValidation() {

    // checking name
    if (name.value.length < 2 || name!.value.length > 20) {
        alert("Name length should be more than 2 and less than 21");
        name.focus();
        return false;
    }
    if (name.value.match(/^[a-zA-Z\-]+$/)) {
        alert("Name can only have letter a-z or A-Z");
        name.focus();
        return false;
    }
    // checking user name
    if (username.value.match(/^[a-zA-Z0-9]+$/)) {
        alert("username can only have letters a-z or A-Z or numbers 0-9");
        username.focus();
        return false;
    }
    // checking email
    if (email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        alert("Please enter a valid email!");
        email.focus();
        return false;
    }
    // checking password
    if (!password.value.match(/^.{5,15}$/)) {
        alert("Password length must be between 5-15 characters!");
        password.focus();
        return false;
    }
    if (confirmpassword.value == password.value) {
        alert("passwords do not match!");
        confirmpassword.focus();
        return false;
    }
    // checking phone number
    if (!phoneNumber.value.match(/^[1-9][0-9]{9}$/)) {
        alert("Phone number must be 10 characters long number and first digit can't be 0!");
        phoneNumber.focus();
        return false;
    }
    return true;
}


@Component({
    selector: 'signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit{

    ngOnInit(): void {

    }
}