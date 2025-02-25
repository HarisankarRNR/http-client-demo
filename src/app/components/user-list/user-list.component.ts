import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  newUser: User = { name: '', email: '' };
  editingUser: User | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe(users => (this.users = users));
  }

  addUser(): void {
    if (this.newUser.name && this.newUser.email) {
      this.userService.addUser(this.newUser).subscribe(user => {
        this.users.push(user);
        this.newUser = { name: '', email: '' };
      });
    }
  }

  editUser(user: User): void {
    this.editingUser = { ...user };
  }

  updateUser(): void {
    if (this.editingUser) {
      this.userService.updateUser(this.editingUser).subscribe(updatedUser => {
        const index = this.users.findIndex(u => u.id === updatedUser.id);
        if (index !== -1) {
          this.users[index] = updatedUser;
        }
        this.editingUser = null;
      });
    }
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(() => {
      this.users = this.users.filter(user => user.id !== id);
    });
  }
}
