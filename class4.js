// var arr=["ubaid","umair",33,false]
// document.write(arr[3])



//  var arr=["ubaid","umair",33,false]
//  document.write(arr[0]+" "+arr[2])




//  var arr=["ubaid","umair",33,false]
//   arr.push("hamza","khan")
//   document.write(arr)



  // var arr=["ubaid","umair",33,false]
  //  arr.push("hamza","khan")
  //  arr.pop()
  //  arr.pop()
  // document.write(arr)

//  var arr=["qazi","2345","ubaid",125]

//  arr.push("hello")
//  arr.push("jeee")
//  arr.pop("")
//   arr.pop("")

//  document.write(arr)


//  var arr=["qazi","2345","ubaid",125]
// arr.unshift("boss","rehman")
// arr.shift()

// document.write(arr)





// var arr=["qazi","2345","ubaid",125]
// // arr.splice(2,1,"hello")
// arr.splice(2,1,"ubaidullah","qazi")
// document.write(arr)





// var arr=["qazi","786","hello","125","ubaid","150"]
// arr.push("world","#1")
//  arr.pop()
//  arr.pop()
//  arr.unshift("mamm","nikl")
//  arr.shift()
//  arr.shift()
//  arr.splice(0,2,"know","jee")
// document.write(arr)





// var num1= prompt("enter a number")

// document.write(num1+" x 1 ="+num1*1)
// document.write(num1+" x 2 ="+num1*2)
// document.write(num1+" x 3 ="+num1*3)
// document.write(num1+" x 4 ="+num1*4)
// document.write(num1+" x 5 ="+num1*5)
// document.write(num1+" x 6 ="+num1*6)




//  var arr=["islamabada","quetta","karachi","peshawar","multan","punjab","lahore"]
//    arr.push ("jaamal","kamal")
//    arr.pop()
//    arr.unshift("kashif")
//  arr.unshift("hamza")
//    arr.shift()
//    arr.splice(0,2,"opo","ui")

//   document.write(arr)

//  var arr=["Pakistan","India","Bangladesh","USA","Sirilanka"]
//  var unlike=prompt("enter unlike")
//  var index=arr.indexOf(unlike)
//  arr.splice(index,1)
//  document.write(arr)


//  var arr=["Pakistan","India","Bangladesh","USA","Sirilanka"]
//  arr[1]="baharat"
// document.write(arr)


//  var color=["red","green","blue","orange"]
//  var colorindex=prompt("wchich index")
//  var colorname=prompt('enter color for add')
//  color.splice(colorindex,0,colorname)
//  document.write(color)

// var color=["red","green","blue","orange"]
// var colorindex=prompt("wchich index")
// var colorname=prompt('enter color for remove')
// color.splice(colorindex,colorname)
// document.write(color)

//  var arr=["red","green","blue","black","orange"]
//  arr.slice(1,2)
//  arr[1]="white"
//  document.write(arr)

// ****************************************************************

//  var a="kashif"
//  for(var i=a.length-1;i>=0;i--)
//  {
//    document.write(i,a[i])
//  }


//  var Name=prompt("enter a name")
//  var reversetext=""
//  for(var i=Name.length-1;i>=0;i--)
//  {
//   reversetext=reversetext+Name[i]
  
  
//  }
//  document.write( reversetext)
//  document.write("<br>")
//  if(Name===reversetext)
//  {
//    document.write("pallindrome <br>")
   
//  }
//  else{
//    document.write("not palindrome <br>")
//  }


//   var text="Topic sentences are similar to mini thesis statements. Like a thesis statement, a topic sentence has a specific main point. Whereas the thesis is the main point of the essay, the topic sentence is the main point of the paragraph. Like the thesis statement, a topic sentence has a unifying function. But a thesis statement or topic sentence alone doesnt guarantee unity. An essay is unified if all the paragraphs relate to the thesis, whereas a paragraph is unified if all the sentences relate to the topic sentence. Note: Not all paragraphs need topic sentences. In particular, opening and closing paragraphs, which serve different functions from body paragraphs, generally dont have topic sentence"
//  for(var i=0;i<text.length;i++)
//  {
//     var extract=text.slice(i,i+7)
//     if(extract==="similar")
//     {
//         text=text.slice(0,i)+"Fimilar"+text.slice(i+7)
//         document.write(text)
//     }


//  var text="Topic sentences are similar to mini thesis statements. Like a thesis statement, a topic sentence has a specific main point. Whereas the thesis is the main point of the essay, the topic sentence is the main point of the paragraph. Like the thesis statement, a topic sentence has a unifying function. But a thesis statement or topic sentence alone doesnt guarantee unity. An essay is unified if all the paragraphs relate to the thesis, whereas a paragraph is unified if all the sentences relate to the topic sentence. Note: Not all paragraphs need topic sentences. In particular, opening and closing paragraphs, which serve different functions from body paragraphs, generally dont have topic sentence"
//  var a=text.replace("similar","fimilar")
//  document.write(a)

//  var arr=["Pakistan","India","Bangladesh","USA","Sirilanka"]
// //  arr[0]= "afghani"
// //  arr.splice(1,2,"canada","germany")
//  arr.splice(1,2)
 
//  document.write(arr)



// function loop()
// {
//   for(var i=0;i<=3;i++)
//   {
//     for(var j=0;j<=i;j++)
//     {
//       document.write("*")
//     }
//     document.write("<br>")
//   }
// }
// loop()

// ***************************************************************************

// function creatloop(num1,num2)
// {
// for(var i=num1;i<=num2;i++)
// document.write(i)
// }
// creatloop(3,9)


// function calculateHypotenuse()
// {

//   var base=prompt("enter base value")
//   var perpendicular=prompt("enter perpendicular value")

//   var Hypotenuse= calculatesquare(base) + calculatesquare(perpendicular)
//   function calculatesquare(value)
//   {
//      return value*value
//   }
// document.write(Hypotenuse)
// }
// calculateHypotenuse()

// ********************************* local vs global

//  function checkkro()
//  {
//  var text="hello world"
//  document.write(text)
//  }

// checkkro()


//   var text
//  function checkkro()
//  {
//   text="hello world"
//   document.write("inside wala",text)
// }
//  document.write("outside 1",text) // ye nh chlega q ke humne call krane se pehle print kraya he or text ke value andr function ke update horhi he function chlega tw print hoga function chla hi nh he tw undefine ayega osme
// checkkro()
// document.write("outside 2",text)

// var text=null
// function checkkro()
// {
// var text="hello world"
// document.write("inside text",text)
// }
// document.write("outside 1",text)
// checkkro()
// document.write("outside 2",text)



// var a=parseInt("2.34")
// document.write(a)

// var a=parseFloat("2.34")
// document.write(a)


// var t=32
// var a=t.toString()

// var t=32
// t+""
// document.write(t ,typeof t)

// var t=75/130*100
//  var a=t.toFixed(4)
// document.write(a)

// ***************************************

// var a=new Date()
// document.write(a)

// var a=new Date("3 17 2002")
// document.write(a)

// var date=new Date("3 17 2002")
//  var a =date.getDay()
// document.write(a,date) 

// var days=["sun","mon","tue","wed","thur","fri","sat"]
// var date=new Date("3 18 2002")
// var a=date.getDay()
// days[a]
// document.write(days[a])

// var arr=["sun","mon","tue","wed","thur","fri","sat"]
// var date=new Date("3 17 2002")
// var a=date.getDay()
// arr[a]
// document.write(arr[a])


   
//  var date=new Date("3 17 2002")
// var a=date.getMonth()
// document.write(date,a)

// var date=new Date()
// var a=date.getHours()
// document.write(a,date)

// var date =new Date()
// var b=date.getTime()
// document.write(b)

// ******************************************
// var i=0
//  while(i<10)
//  {
//   document.write(i)
//   i++
  
//  }

// var i=0
// do{

//   i++
//   document.write(i)
// } while(i<10)

// *****************************************************

// var car={
//   name: "cultus",
//   model:2023,
//   color:"purple",
//   brand:"suzuki"
// }
// car.model
// if(car.model>2015 )
// {
//   document.write("latest")
// }
// else{
//   document.write("old")
// }


// var car={
//      name: "cultus",
//      model:2023,
//      color:"purple",
//      brand:"suzuki"
//   }
//    car.model=390
 

// var car={
//      name: "cultus",
//      model:2023,
//      color:"purple",
//      brand:"suzuki"
//   }
//    var a=car.darwaze=4


// {name: 'honda', model: 1990, color: 'black', brand: 'civic'}
// undefined
// delete car.model
// true
// console.log(car)
// VM552:1 {name: 'honda', color: 'black', brand: 'civic'}


// *****************************return************************
// var car=["cultus","civic","alto","mehran"]
// car.push("audi")

// document.write(car)

// var car=["cultus","civic","alto","mehran"]
// car.push("audi")


// 5
//  car.uns
// undefined
// car.unshift("core")
// 6
// car.pop()
// 'audi'
// car.shift()
// 'core'
// car.splice(2,1,"parado")
// ['alto']
// car.splice(2,0,"corolla")
// []
// car
// (5) ['cultus', 'civic', 'corolla', 'parado', 'mehran']


// ***************************************
// var car={ name: "cultus",
//       model:2023,
//       color:"purple"
//       }
// var car2={ name: "cultus",
//       model:2023,
//       color:"purple"
//       }
//       var car2=car
// undefined
// car.model=2000
// 2000
// car
// {name: 'cultus', model: 2000, color: 'purple'}
// car2
// {name: 'cultus', model: 2000, color: 'purple'}


// var car=["cultus","civic","alto","mehran"]
// undefined
// var newcars=[...car]
// undefined
// newcars.push("audi")
// 5
// car
// (4) ['cultus', 'civic', 'alto', 'mehran']0: "cultus"1: "civic"2: "alto"3: "mehran"length: 4[[Prototype]]: Array(0)
// newcars
// (5) ['cultus', 'civic', 'alto', 'mehran', 'audi']


// var student={studentName:"qaziubaid",studentage:20}
// student.studentage
// if(student.studentage<20)
// {
//   document.write("young")
// }
// else{
//   document.write("child")
// }

// var Name=prompt("enter a name")
// var Model=prompt("enter a model")
// var Color=prompt("enter a color")

// var car= {name: Name, model: Model, color: Color}
// document.write(car)




// var car=[
//   {name:"cultus",model:"2020"},
//    {name:"fx",model:"1999"},
//    {name:"civic",model:"2023"}
//   ]
// for(var i=0;i<car.length;i++)
// {
// console.log(car[i].name)
// }
// VM644:8 cultus
// VM644:8 fx
// VM644:8 civic


// var car=[
//      {name:"cultus",model:"2020"},
//       {name:"fx",model:"1999"},
//       {name:"civic",model:"2023"}
//      ]
//      for(var i=0;i<car.length;i++)
//      {
//       console.log(car[i].name)
//       if(car[i].name=="fx")
//       {
//         car[i].name="alto"
//       }
//      }

//  ************** output
     
// var car=[
//   {name:"cultus",model:"2020"},
//    {name:"fx",model:"1999"},
//    {name:"civic",model:"2023"}
//   ]
//   for(var i=0;i<car.length;i++)
//   {
//    console.log(car[i].name)
//    if(car[i].name=="fx")
//    {
//      car[i].name="alto"
//    }
//   }
// VM674:9 cultus
// VM674:9 fx
// VM674:9 civic
// undefined
// car
// (3) [{…}, {…}, {…}]
// 0
// : 
// {name: 'cultus', model: '2020'}
// 1
// : 
// {name: 'alto', model: '1999'}
// 2
// : 
// {name: 'civic', model: '2023'}
// length
// : 
// 3
// [[Prototype]]
// : 
// Array(0)


// var cars=[{name:"cultus",model:2002},
//          {name:"mehran",model:2018},
//         {name:"fx",model:1999},
//          {name:"civic",model:2023}
// ]
// for(var i=0;i<cars.length;i++)
// {
//  if(cars[i].model>2000)
//  {
//   cars.splice(i,1)
//  }
// }


