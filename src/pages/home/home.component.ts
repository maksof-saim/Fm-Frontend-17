import { Component, OnInit } from '@angular/core';
import { FishService } from '../../app/services/fish.service';
import { Fish } from '../../app/models/fish.model';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { CommonService } from '../../app/services/common.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}