import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { UserService } from "src/app/services/user.service";

@Component({
    selector: 'signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnDestroy {

    sub!: Subscription;

    constructor(private userService: UserService) { }

    signUp(): void {
        const userData = {
            userName: (<HTMLInputElement>document.getElementById("username")).value,
            password: (<HTMLInputElement>document.getElementById("password")).value,
        }
        this.sub = this.userService
            .signUp(userData).subscribe({
                next: user => {
                    location.href = 'signin';
                },
                error: (err: string) => {
                    alert('something went wrong');
                    this.errorMessage = err
                }
            });
    }

    errorMessage: string = '';

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
}