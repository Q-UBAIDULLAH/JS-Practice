// var students = [
//     {
//     _id: 'std1',
//     name: 'Bill Gates',
//     age: 30
//     },
//     {
//     _id: 'std2',
//     name: 'Steve Jobs',
//     age: 30
//     },
//     {
//     _id: 'std3',
//     name: 'Suzanne Collins',
//     age: 30
//     }]
   
    
    
 var students = [
    {
    _id: 'std1',
     name: 'Bill Gates',
     age: 30
     },
     {
    _id: 'std2',
    name: 'Steve Jobs',
    age: 30
    },
     {
     _id: 'std3',
     name: 'Suzanne Collins',
     age: 30
     }]
     var courses = [
        {
        name: 'Maths',
        std_id: ['std3', 'std1']
        },
        {
        name: 'Computer Science',
        std_id: ['std3', 'std2']
         },
         {
        name: 'Commerce',
        std_id: ['std1']
         },
         ]
         for(var i=0;i<students.length;i++)
         {
            for(var j=0;j<courses.length;j++)
            {
                if(courses[j].std_id.includes(students[i]._id))
                students[i].name=courses[j].name
            }
         }
   
    //  for(var i=0;i<students.length;i++)
    //  {
    //     students[i].courses=[ ]
    //     for(var j=0;j<courses.length;j++)
    //     {
         
    //         if(courses[j].std_id.includes(students[i]._id))
    //         students[i].courses.push(courses[j].name)
    //     }
    //  }

//     for(var i=0;i<students.length;i++)
//     {
//         var currentstudent=students[i] // hmne iska current index variable me daldiya jo be hoga index iska
//         currentstudent.courses=[]
//         for(var j=0;j<courses.length;j++)
//         {
//             var currentcourses=courses[j]
//             if(currentcourses.std_id.includes(currentstudent._id))
//             {
//                 currentstudent.courses.push(currentcourses.name)
//             }
//         }
//     }


// var courses=[
//     {
//     name:"Math",
//     uni_id:["uni1","uni2"]
//     },
//     {
//         name:"Computer Science",
//         uni_id:["uni2","uni1"]
//     },
//     {
//         name:"Commerse",
//         _id:["uni3"]
//     }
//     ]

        
// var university=[
// {_id:"uni1",
// name:"IQRA uni"
// },
// {
//     _id:"uni2",
//     name:"SSUET uni"
// },
// {
//     _id:"uni3",
//     name:"BAHRIA uni"
// },
// ]

// for(var i=0;i<courses.length;i++)
// {
//     var currentcourses=courses[i]
//     currentcourses.uni_names=[]
//     for(var j=0;j<university.length;j++)
//     {
//         var currentUni=university[j]
//         if(currentcourses.uni_id.includes(currentUni._id))
//         {
//             currentcourses.uni_names.push(currentUni.name)
//         }
        
//     }
// }











// var children=[
//     {name:"pappu",parents:["p1","p2"]},
//     {name:"Aslam",parents:["p3","p4"]},
//     {name:"nattu",parents:["p1","p5"]},
    
// ]
// var parents=[
//     {_id:"p1",name:"chotu"},
//     {_id:"p2",name:"choti"},
//     {_id:"p3",name:"bholu"},
//     {_id:"p4",name:"bholi"},
//     {_id:"p5",name:"kokan bhen"},
    
// ]
// for(var i=0;i<children.length;i++)
// {
//     children[i].newname=[]
//     for(var j=0;j<parents.length;j++)
//     {
//         if(parents[j]._id.includes(children[i].parents))
//         {
//             children[i].newname.push(parents[j].name)
//         }
//     }
// }



// var users = [ 
//     { id: 1, name: 'Alice', roleId: 1 },
//     { id: 2, name: 'Bob', roleId: 2 },
//     { id: 3, name: 'Charlie', roleId: 1 },
//  ]
//   var roles = [ 

//     { _id: 1, name: 'Admin' },
//    { _id: 2, name: 'User' },

//  ]
// for(var i=0;i<users.length;i++)
// {
//     var currentuser=users[i]
//     for(var j=0;j<roles.length;j++)
//     {
//         var currentrole=roles[j]
//         if(currentuser.roleId===currentrole.id)  //hme check krna he users ke andr jo roleId he wo Roles ke id se match horhi he ya nh
//         currentuser.rolename=currentrole.name 
        
//     }
// }

var university=[
     {_id:"uni1",
     name:"IQRA uni"
     },
     {
         _id:"uni2",
         name:"SSUET uni"
     },
    {
         _id:"uni3",
         name:"BAHRIA uni"
     },
    ]
    


 var students=[
     {name:"adil",uni_id:"uni2"},
     {name:"shabbir",uni_id:"uni1"},
     {name:"farrukh",uni_id:"uni3"},
]

//  for(var i=0;i<students.length;i++)
//  {
//      var currentstudent=students[i]
//     for(var j=0;j<university.length;j++)
//      {
//          var currentUni=university[j]
//          if(currentstudent.uni_id===currentUni._id)//student ke uni id agr match hoti he uni ke id se tw student ke andr uni ka name ajae oss
//         {
//             currentstudent.uni_name=currentUni.name //new field add krdi hmne student me osme daal diya hmne uni ka name
//          }
//      }
//  }

