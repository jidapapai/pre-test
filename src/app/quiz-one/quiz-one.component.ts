import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-quiz-one',
  templateUrl: './quiz-one.component.html',
  styleUrls: ['./quiz-one.component.css']
})
export class QuizOneComponent implements OnInit {
  num ? : number;
  selectedOption: string = "isPrime";
  options: string[] = ['isPrime', 'isFibanacci'];
  result ? : boolean;
  constructor() {}

  ngOnInit(): void {}

  onSearchChange(e: any) {
    let value = e.target.value;
    if (!value) {
      this.result = undefined;
      return;
    }

    if (value.startsWith("-")) {
      e.target.value = 1;
    } else if (value.includes(".")) {
      e.target.value = Math.round(value);
    }
    this.num = parseInt(e.target.value);
    this.calculate();

  }

  onOptionChange(e: any) {
    this.selectedOption = e.target.value;
    this.calculate();
  }

  calculate() {
    if (this.num === undefined) {
        return;
    }

    switch (this.selectedOption) {
      case "isPrime":
        this.result = this.isPrimeNumber(this.num);
        break;

      case "isFibanacci":
        this.result = this.isFibanacciNumber(this.num);
        break;
    }
  }

  isPrimeNumber(number: number) {
    let isPrime = true;
    if (number < 2) {
      isPrime = false
    } else if (number > 2) {
      for (let i = 2; i < number; i++) {
        if (number % i === 0) {
          isPrime = false;
          break;
        }
      }
    }
    return isPrime;
  }

  isFibanacciNumber(number: number) {
    return this.isPerfectSquare(5 * number * number + 4) ||
           this.isPerfectSquare(5 * number * number - 4);
  }

  isPerfectSquare(n: number) {
    let sqrt = Math.sqrt(n);
    let s = parseInt(sqrt.toString());
    return (s * s == n);
  }

}
