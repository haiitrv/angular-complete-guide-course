import { Component, EventEmitter, Input, Output } from '@angular/core';

export type TUser = { id: string; avatar: string; name: string };

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  // @Input({ required: true }) id: string;
  // @Input({ required: true }) avatar: string;
  // @Input({ required: true }) name: string;
  @Input({ required: true }) user: TUser;
  @Output() select = new EventEmitter<string>();
  @Input({ required: true }) selected: boolean;

  // avatar = input.required<string>();
  // name = input.required<string>();

  // select = output<string>();

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
