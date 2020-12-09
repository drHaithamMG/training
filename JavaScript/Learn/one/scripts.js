// let age = prompt('When was you born?');
// console.debug(age,typeof age)
// let answer = confirm('Are you sure?');
// if (answer == true) {
//     alert(2020 - age);
//     console.debug(typeof(2020-age));
// }
// else {
//     let age = prompt('When was you born?');
//     let answer = confirm('Are you sure?');
// }
// let bool=null;
// console.debug(bool , typeof bool);
// // bool=Number(bool);
// console.debug(Number(bool) , typeof Number(bool));
// // bool=String(bool);
// console.debug(String(bool) , typeof String(bool));
// // bool=Boolean(bool);
// console.debug(Boolean(bool) , typeof Boolean(bool));
// let x=5,y=4;
// console.log(x+y -(x=x*5))//4+5-25
// console.log(x)

// for (a=1,b=3,c=a*b;c<10;a++){
// console.log('a b c  :>> ', a ,b, c );
//

// let a = 1, b = 1;

// let c = ++a; // ? a=2 , b=1 , c=2
// let d = b++; // ? a=2 , b=2, c=2 ,d=1

/*
10
-1
1
2
6
9px
$45
2
NaN
infinity

*/
// console.log("4ok" - 8);//NaN

// for (a = 1 ,b = 3, c = a*b; a < 10; a++) {
//     c = a*b
//     console.log('a b c  :>> ', a ,b, c );
// }

// a 1
// b 3
// c 3
// ----
// a 2
// b 3
// c 3

// let GPA = prompt("What is your GPA?","60");
// let grade = (GPA <=100||GPA>=60) ? (GPA>=84) ? "A":(GPA>=76)?"B":(GPA>=68)?"C":(GPA>=60)?"D":"F":"GPA must be higher or equil to 60";

// alert("Your GPA is : ",GPA,"\n","Your grade is : ",grade)

// let jsName="ECMAScript";
// if(jsName=="ECMAScript")
//     console.log("Right");
// else
//     console.log("You don\' know ? \"ECMAScript\"!");
// IsNaN fun
// let input=prompt("Enter a number");
// if(isNaN)
//     alert("Input is not a  valid number")
// else{  if (input>0) {
//     alert("1")
// }
// else if (input<0) {
//     alert("-1")
// }
// else{
//     alert("0")
// }
// }
// alert("yellow"&&"Green"&&"White"&&"Nothing")
// if (-1 || 0) alert( 'first' );
// if (-1 && 0) alert( 'second' );
// if (null || -1 && 1) alert( 'third' );

// A:for (let x=12;x>0;x--){
//     B:for(let y=12;y>0;y--){
//         console.log(x,"*",y,"=",x*y);
//     }
//     if(x==5)break A;
// }
// let i = 0;
// while (++i < 5) alert( i );
// i=0  1<5  1
// i=1  2<5  2
// i=2  3<5  3
// i=3  4<5  4
// i=4  5<5  break
// let i = 0;
// while (i++ < 5) alert( i );
// i=0  0<5  1
// i=1  1<5  2
// i=2  2<5  3
// i=3  3<5  4
// i=4  4<5  5
// i=5  5<5  break
// let i=0;
// while(i<3){
//     alert( `number ${i++}!` );
// }
// let answer;
// while(1){
//     answer=prompt("Enter a number");
//     if(answer=="100"||answer) break;
// }
// let isPrime;
// while(1){
//     isPrime=prompt("Enter a number to see if is it prime or not");
//     if(isPrime%2==0)
//         alert(isPrime +" is a PRIME!")
//     else if (!isPrime%2==0)
//     alert(isPrime +" is Not a PRIME!")
//     else
//     break;
// }
// let a= +prompt('a?','');
// switch(a){
//     case 0:alert(0);break;
//     case 1:alert(1);break;
//     case 2:
//     case 3:
//         alert(' 2,3 ');
//         break;
// }
// let browsers;
// if(browsers=="Edge") alert( "You've got the Edge!" );
// else if(browsers=="Chrome"||browsers=="Firefox"||browsers=="Safari"||browsers=="Opera")    alert( 'Okay we support these browsers too' );
// else alert( 'We hope that this page looks ok!' );
// function checkAge(age){
//     return (age>18)||"Did your parents allow you?";
// }
// alert(checkAge(15));
// function Min(a,b){
//     return (a<b)?a:b;
// }
// console.log(Min(2,5));
// console.log(Min(3,-1));
// console.log(Min(1,1));
// function pow(x,n){
//     let value=1;
//     for(let i=1;i<=n;i++){
//         value*=x;
//     }
//     return value;
// }
// console.log(pow(3,2));
// console.log(pow(3,3));
// console.log(pow(1,100));
// function pow(x,n){
//     return(x**n);
// }
// console.log(pow(3,2));
// console.log(pow(3,3));
// console.log(pow(1,100));
// let m=6,r=1/2,q=7;
// let value=function mass(){
//     return m*r/q+2;};
// console.log(value);
// function agreement(body,yes,no) {
//     answer=confirm(body);
//     (answer)?yes():no();
// }
// function agree() {
//     console.log("Agree");
// }
// function disagree() {
//     console.log("Disagree");
// }
// agreement("Do you agree to use cookies ?",agree,disagree);
// function ask(question,yes,no) {
//     confirm(question)?yes():no();
// }
// ask("Do you agree?"
// ,()=>alert('Yes'),
// ()=>alert("No")
// )
// let x=1;
// let raise =()=>x+1;
// console.log(raise(),x);
// function pow(x, n) {
//     if (n < 0) {
//       alert("Negative 'n' not supported");
//       return;
//     }

//     let result = 1;

//     for (let i = 0; i < n; i++) {
//       result *= x;
//     }

//     return result;
//   }
// console.log(pow(5,-2));
// let ob1={
//     name:undefined,
//     age:undefined
// };
// ob1.name=prompt("Enter your name","User");
// ob1.age=Number(prompt("Enter your age",0));
// alert("Your name is : "+ob1.name+"\nYour age is  : "+ob1.age)
// alert("You are creating an object");
// let ob = {};
// let key,value;
// do{
//     key=prompt("Enter key name : ");
//     value=prompt("Enter "+key +" value's : ");
//     ob[key]=value;
// }
// while(confirm("Do you want to exit?")!=true);
// for (let key in ob){
//     console.log(key,ob[key]);
// }
// let user=Object();
// user["name"]="John";
// console.log(user["name"]);
// user["surName"]="Smith";
// console.log(user["surName"]);
// user["name"]="Pete";
// console.log(user["name"]);
// delete user["name"];
// function isEmpty(obj) {
//     for (key in obj){
//         return true;
//     }
//     return false;
// }

// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) );
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }
// let answer=count(salaries)
// function count(obj){
//     let result=0;
//     for (number in obj){
//         isNaN(obj[number])?console.log(NaN):result+=obj[number];
//         console.log('Current result number is  :>> ', result );

//     }
//     console.log('***** Final result is :>> ', result,"******" );
//     return result;
// }
// console.log('answer :>> ', answer);
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };

//   menu=multiplyNumeric(menu);

//   function multiplyNumeric(obj){
//       for (key in obj){
//           if(isNaN(obj[key]))continue;
//           else
//             obj[key]*=2
//       }
//       return obj;
//   }
//   for (key in menu){
//       console.log(key,menu[key]);
//   }
// let x={name:"Haitham"};
// let y=x;
// console.log(y.name);
// let a={
//     id:undefined,
//     name:undefined
// }
// let b=Object();

// for (item in a){
//     b[item]=a[item];
// }
// b["name"]="haitham";
// console.log(b["name"]);
// let a={
//     id:undefined,
//     name:undefined
// }
// let b=Object();
// Object.assign(b,a,{user:"Rami"});
// console.log(b);
// let house={
//     color:"Green",
//     dimintions:{
//         x:100,
//         y:200,
//         z:500
//     }
// }
// for (item in house){
//     console.log("Item : ",item);
//     for(prob in item){
//         console.log("Item's prob",prob);
//     }
// }
// let user = {
//     first: "Ali",
//     greeting() {
//         console.log(this.first);
//     }
// }
// user.greeting()
// function User(name) {
//     this.name=name;
//     this.isAdmin+false;
// }
// let normalUser=new User("Rami")
// console.log(normalUser);
// function User(name){
//     if(!new.target){
//         console.log("New user has been generated titled by : ",name);
//         return new User(name);

//     }
//     console.log("User : ",name);
//     this.name=name;
// }
// let john=User("John")
// let calculator={
//     read(){
//         this.x=Number(prompt("Enter X value : "));
//         this.y=Number(prompt("Enter Y value : "));
//     },
//     sum(){return this.x+this.y;},
//     mul(){return this.x*this.y;}

// };
// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );
// let s="hello";
// s.test=5;
// console.log(s.test);

// alert(parseInt(prompt("Enter a value")))
// let b=1085e6+15e12+1e-2;
// console.log(b);
// let c=12.6588;
// console.log(c.toFixed(1),c.toFixed(2),c.toFixed(3));
// let r=Math.floor((Math.random()*5)+1)
// console.log(r);
// let name="Haitham";
// console.log(name.length);
// for (char of name){
//     console.log(char);
// }
// let name = "Haitham";
// console.log(name.indexOf("a",2));
// let id="120160622038";
// console.log("ID","Char");
// for (let i=0;i<id.length;i++){
//     console.log(i,'  ',id[i]);
// }
// console.log("slice",id.slice(6,-3));
// console.log("SubString",id.substring(-1,2));
// console.log("Substr",id.substr(6,3));
// for(let i=65;i<255;i++){
//     console.log(i,'  ',String.fromCodePoint(i));
// }
// function ucFirst(word){
//     return(word[0].toUpperCase()+word.slice(1))
// }
// console.log(ucFirst("john") == "John");
// "xxx".includes
// checkSpam('buy ViAgRA now')
// checkSpam('free xxxxx')
// checkSpam("innocent rabbit")
// function checkSpam(sentences) {
//     if (!sentences) console.log("Empty string");

//     switch (sentences) {
//         case sentences.includes("xxx"):
//             console.log("Include");
//             break;
//         case sentences.indexOf("xxx") > -1:
//             console.log("Include");
//             break;
//     }
// }
// function checkSpam(word){
//     checkWord=word.toLowerCase();
//     if(checkWord.includes("xxx")||checkWord.includes("viagra")){
//         console.log(word,"Found!");
//     }

// }
// function truncate(word,maxLen) {
//     wlen=word.length;
//     if (wlen>=maxLen){
//         word=word.substr(0,maxLen)+"...";
//         // console.log(new_word);
//         // let temp=0;
//         // for(latter of word){
//         //     console.log(temp++,latter);
//         // }
//     }
//     console.log(word);
//     return word;
// }
// truncate("hello and welcome to this stage ,in this stage we are going to read about java script",15)
// let phones=["Apple","Samsung","Motorola","HTC","Nokia"]
// for (phone of phones){
//     console.log(phone,",Length of word is : "+phone.length);
//     for(latter of phone){
//         console.log(latter);
//     }
// }
// let word=["A","a","B","z"];
// for(l of word){
//     console.log(l , l.codePointAt(0));
// }
// console.log(word);
// word.sort();
// console.log(word);
// word.reverse();
// console.log(word);
// let list=[1,3,5,7,9];
// console.log(list.shift(),`[ New list items : ${list} ]`);
// console.log(list.unshift(7),`[ New list items : ${list} ]`);
// console.log(list.pop(),`[ New list items : ${list} ]`);
// console.log(list.push(18),`[ New list items : ${list} ]`);
// let list=[1,3,5,7,9];
// for (key in list){
//     console.log(key , list[key]);
// }
// let x=[[1,2,3],[4,5,6],[7,8,9],9,18,function ok(){console.log("OKay");},{a:1}];
// // console.log(x[1][1]);
// console.log(x.toString());
// /*1*/styles=["Jazz","Blues"];
// /*2*/styles.push("Rock-n-Roll");
// /*3*/temp_arr=[];
//      mid=Math.floor(styles.length/2);
//      for(let i=mid;i<=styles.length;i++){
//          temp_arr.unshift(styles.pop());
//      }
//      styles.push("Classics");
//      temp_arr.shift();
//      for (item of temp_arr){
//         styles.push(item)
//      }
//      console.log(styles);
// /*1*/let styles=["Jazz","Blues"];
// /*2*/styles.push("Rock-n-Roll");
// /*3A*/mid=Math.floor(styles.length/2);
//     //  styles[mid]="Classics";
//     //  console.log(styles);
// /*3B*/styles.splice(mid,0,"Classics")
//       console.log(styles);
// /*4*/console.log(styles.shift());
// /*5*/styles.unshift("Rap","Reggae");
//      console.log(styles);
// styles.splice(3,4)
// console.log(styles);
// list1=[1,2]
// list2=[1]
// list2=list2.concat(list1,[4,5]);
// console.log(list2);
// let styles=["Jazz","Blues"];
// styles.forEach(function(x){
//     console.log(x.length);
// })
// console.log(styles[0].includes("z"));
// let users = [
//     {id: 1, name: "John"},
//     {id: 2, name: "Pete"},
//     {id: 3, name: "Mary"}
//   ];
//   let user = users.filter(item => item.id <=90);

//   console.log(user);
// const array1 = [
//     { id:5, name:"item 1" },
//     { id:12, name:"item 2" }
// ];
// const itemValue = array1.find(item => item.id>2);

// let names = 'Bilbo, Gandalf, Nazgul';

// let arr = names.split(', ');
// console.log(arr);
// let mapOfItems=new Map();
// mapOfItems.set('x','x2');
// console.log(mapOfItems.get('x'));
// const posts=[
//     {
//         title:"post one ",body:"this is post one"
//     },
//     {
//         title:"post two ",body:"this is post two"
//     }
// ];
// function getPosts(){
//     setTimeout(()=>{
//         let output='';
//         posts.forEach((post)=>{output+=`<li>${post.title}</li>`});
//         document.body.innerHTML=output;
//     },1000);
// }
// function createPost(post,callback){
//   setTimeout(()=>{
//       posts.push(post);
//       callback();
//   },3000);
// }

// createPost({title:"post three",body:'This is post three'},getPosts);
// let x=new Map();
// x.set('userName','u1u1u1');
// // console.log(x.get('userName'));
// x.set('1', 'str1')
//   .set(1, 'num1')
//   .set(true, 'bool1');
// // for (key of x.entries()){
// //     console.log(key);
// // }
// x.forEach((value,key) =>{
//     console.log(`Current key is [${key}] and it's value is [${value}]`);
// });
// let a=['Ali',44,function x(){console.log('welcome')}];
// a.forEach((item,index)=>console.log(`Current index is [${index}] and it's value is [${item}]`));
// a.x();
// let set = new Set(["oranges", "apples", "bananas"]);
// // the same with forEach:
// set.forEach((value, valueAgain, set) => {
//   console.log(value,valueAgain);
// });
// function unique(arr) {
//     let set=new Set();
//     for (let i of arr){
//         set.add(i);
//     }
//     return set;
//   }

//   let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
//   ];
//   console.log(unique(values));

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
// function aclean(arr){
//     let map=new Map();
//     for (let word of arr){
//         let sorted=word.toLowerCase().split('').sort().join('');
//         map.set(sorted,word);
//     }
//     return Array.from(map.values());
// }
// console.log(( aclean(arr) ));
// let map = new Map();

// map.set("name", "John");

// let keys=Array.from(map.keys())

// // Error: keys.push is not a function
// keys.push("more");
// console.log(keys);
// let student = {
//     name: 'John',
//     age: 30,
//     isAdmin: false,
//     courses: ['html', 'css', 'js'],
//     wife: null
//   };
// let jsonObj=JSON.stringify(student);
// console.log(jsonObj);
// let parsedJSON=JSON.parse(jsonObj);
// console.log(parsedJSON);
// let val;
// const today = new Date();
// val = today.getDate();
// console.log("getDate()",val);

// val = today.getDay();
// console.log("getDay()",val);

// val = today.getMonth();
// console.log("getMonth()",val);

// val = today.getYear();
// console.log("getYear()",val);

// val = today.getFullYear();
// console.log("getFullYear()",val);

// val = today.getUTCMonth();
// console.log("getUTCMonth()",val);

// val = today.getUTCDay();
// console.log("getUTCDay()",val);

// val = today.setDate(12);
// console.log(today);
// const arr1 = [
//     "name",
//     44,
//     function x(){console.log("hi");}, { name: 'name', id: 1 }];
// for (let daddy of arr1) {
//     if (typeof (daddy == Object)) {
//         for (let child in daddy) {
//             console.log(`I am ${daddy}'s child and my value is child`);
//         }
//     }
//     console.log(`I am the daddy : ${daddy}`);

// }
// arr1.splice(arr1.indexOf(function x(){console.log("hi");}),1,"okay")
// console.log(arr1);
// console.log(Date.now());
// const map = new Map();
// map.set('key1','Item1').set('key2','item2').set('key3','item3');
// const list = [77,66,99,881,228,67,5,3,6,53,6,3,6,36,3,6];
// // let list3 = list.map((number)=>Number(number.toString().split('').sort().join('')));
// let list3 =[];
//  list.forEach((number,index)=>list3.push(Number(number.toString().split('').sort().join(''))));

// const list2 = list.filter((age)=>age>=60);
// console.log(list,'\n',list3);
// let arr=[1,2,3];
// let [a,b,c]=arr;
// console.log(arr,'  ',a,'  ',b,'  ',c);
// const programmer = ['haitham', 24, 'html', 'css', 'flutter', 'c#', 'java script', 'c++', 'oracle pl/sql'];
// const [name, age, ...ok] = programmer;
// console.log(name, age, programmingLanguages);
// console.log(Number('11ls'));
