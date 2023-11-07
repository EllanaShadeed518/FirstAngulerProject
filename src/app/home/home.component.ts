import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
title="old title";
number=0;
names=["ellana","ahmad"];
address:string="jbkjbkb";//how to define variable with type and value
link="https://www.youtube.com/watch?v=cCv4b188T50&list=PLZyQU-WOzZF3WA7WLCMJCYa3Lwa2U8YWy&index=4";
customers=[{
  "id":1,
  "name":"Ellana",
  "age":23,
  "children":['a','b']
},
{
  "id":2,
  "name":"Ahmed",
"age":25,
"children":['c']

}
]

animals=['cat','dog'];
animal:string='';
toggle=true;//اي تاج بعطي قيمو فولز بعرف انو هذا التاج ما رح يظهر
text="close";
changetitle(t:any){
  this.title=t;
}
increamentNum(){
  this.number+=1;
}
addName(){
  this.names.push(this.number.toString())//push function to add new item in the list
  console.log(this.names);

}
addCustomer(){
  this.customers.push({
    "id":3,
    "name":"Omar",
  "age":15,
  "children":['a','b'],

  });
}
changeToggle(){
  this.toggle=!this.toggle;
  this.text=this.toggle?"close":"open";
}
changeaddress(){
  this.address="jvjhvjvm";
}
addanimale(){
  this.animals.push(this.animal);
}
}
