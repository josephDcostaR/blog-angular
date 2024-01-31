import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent implements OnInit{

  @Input() photoCover:string = ""
  @Input() cardTitle:string = ""
  @Input() Id:string= "0"

  constructor() {

  }
  ngOnInit(): void {
    console.log("")
  }

}
