import { Component, OnInit, Input } from '@angular/core';
import { CounterService } from '../counter.service';
import { Observable } from 'rxjs';
import { Counter } from '../counter';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Input() position: number;  // id du compteur
  value: number;
  name: string;

  constructor(public counterService: CounterService) { }

  ngOnInit() {
    this.counterService.getCounterValue(this.position)
      .subscribe(counter => {
        this.value = counter.value;
        this.position = counter.id;
        this.name = counter.name;
      });
  }

  increment() {
    this.counterService.increment(this.position)
      .subscribe(counter => {
        this.value = counter.value;
      });
  }

}
