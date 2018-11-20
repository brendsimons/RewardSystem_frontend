import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  constructor(private auth: AuthService) { }

  ngOnInit() {
    // CHECK OP PERMISSION "ADMIN3"
    console.log(this.auth.hasPermission("ADMIN3"));
  }
}
