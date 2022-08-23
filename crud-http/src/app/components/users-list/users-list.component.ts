import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../shared/crud.service';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  Users: any = []
  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.fetchUsers();
  }
  fetchUsers() {
    return this.crudService.getUsers().subscribe(
      (result) => {
          this.Users = result;
      }
    )
  }
  delete(id: any) {
    if (window.confirm('Really?')) {
      this.crudService.deleteUser(id).subscribe((res) => {
        this.fetchUsers();
      });
    }
  }

}
