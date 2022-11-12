import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IUser } from "src/app/models/user";
import { UserService } from "src/app/services/user.service";

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

export class SigninComponent {

    sub!: Subscription;

    constructor(private userService: UserService) { }

    signIn(): void {
        const userData = {
            userName: (<HTMLInputElement>document.getElementById("username")).value,
            password: (<HTMLInputElement>document.getElementById("password")).value,
        }
        this.sub = this.userService
            .signIn(userData).subscribe({
                next: user => {
                    location.href = 'app-home';
                },
                error: (err: string) => {
                    alert('Invalid username or password!');
                    this.errorMessage = err
                }
            });
    }

    errorMessage: string = '';

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
}