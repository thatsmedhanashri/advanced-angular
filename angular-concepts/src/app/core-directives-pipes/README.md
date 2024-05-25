## @Input() decorator

@Input({
    required:true
  }) 
  data1 = ''

We can set required true if the input value is necessary to work component properly, by default it is false. By setting it true it will give the error at compile time instead of run time.

## @Output() decorator

@Output("data2")
  data_ = new EventEmitter<person>()
this.data_.emit({name:"Dhanashri", employeeId:123})

<app-child1 [data1]="child1Data" (data2)="getData($event)"></app-child1>

We can use different variable name in child component, but need to mention the name we are using in Parent component's template in the Output decorator as param