import { Pipe, PipeTransform } from '@angular/core';
import {AuthProvider} from "../../providers/auth/auth";

@Pipe({
  name: 'isCurrentUser',
})
export class IsCurrentUserPipe implements PipeTransform {

  constructor(private auth: AuthProvider){
  }

  transform(value: string, ...args) {
    return this.auth.me.profile.firebase_uid === value;
  }
}
