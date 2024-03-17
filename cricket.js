
//  function toss()
//   {
//      var team1="pakistani"
//       var team12="india"
//       document.write("Helloww today match in Srilankan ground in Colombo,<br>")
//        var a=Math.round(Math.random())
//       document.write("<br>")
//       //  document.write(a)
//       if(a==0)
//       {
//           document.write("Pakistan won the toss,and elected to bat first ")

//             var pakscore=inning("pakistan")
//             document.write("********************************************************************")

//             var indscore=inning("india",pakscore)


//        }
//       else{
//           document.write("India won the toss,and elected to bat first")
//           var indscore=inning("India")
//           var pakscore=inning("pakistan",indscore)
//        }
//   }

//  toss()






//  function inning(team)
//  {
//      var wickets=0
//      var score=0
 
//      document.write(team+" is going to bat <br>")
//      overloop:for(var i=1;i<=5;i++)
//      {
//          document.write("Over "+i+" started <br>")
        
//         for(var j=1;j<=6;j++)
//         {
        
//          document.write(" Ball ",i,".",j,"<br>")
//          var run=Math.round(Math.random()*6) 
//          if(run==0)
//          {
//              document.write("OUT <br>")
//              wickets++
//              if(wickets===2)
//              {
//                  document.write("All Out ",score," runs", "<br>")
                
//                 break overloop 
//              }
//          }
//          else{
//              document.write(run," Runs <br>")
//              score=score+run
//          }
   
//         }
       
//         document.write(i," OVER Completed <br>")
//         document.write(score,"/",wickets,"<br>")
       
//         document.write('*******************************************<br>')
      
//      }
//    document.write(team,":",score,"/",wickets,"<br>")
//    document.write(team+" has given the target of "+(score+1)+ " runs by ",wickets," wickets","<br>")
 
//  }
//  inning("India")



function toss()
{
    document.write(" *****************Welcome to Captains**************** <br>")
document.write("Heyy today match in Srilanka <br>")
 var a=Math.round(Math.random())
 if(a==0){
    document.write("pakistan won the toss elected to bat <br> ")
    var pakscore=inning("pakistan")
    document.write("*******************")
     var indscore=inning("india",pakscore)
 }
 else{
    document.write("india won the toss elected to bat")
    var indscore=inning("india")
    var pakscore=inning("pakistan",indscore)
 }
}
 toss()




function inning(team,target)
{
     var wickets=0
     var score=0

document.write(team+"is going to bat <br>")
overloop:for(var i=1;i<=5;i++)
{
    document.write("Over ",i," started <br>")
  
    for(var j=1;j<=6;j++)
    
    {
        document.write("Ball ",i,".",j,"<br>")
        var run=Math.round(Math.random()*6)
       
        if(run==0)
        {
            document.write("Out <br>")
            wickets++
            if(wickets==3)
            {
                document.write("All Out <br>")
                if(target)
                {
                    document.write(team,"lost the match of",(target-score),"runs")
                }
                else
                {
                    document.write(team," has given the target of",(score+1),"Runs <br>")
                }
                break overloop
            }

        }
        else
        {
            document.write(run," Runs...<br>")
            score=score+run
            if(score<target){
                document.write(team,"won he Match by",(3-wickets),"wickets ","<br>")
                 break overloop

            }
  

        }
    }m
    document.write(score,"/", wickets," score <br>")
 
}


document.write(team," runs total ",score," / ",wickets ,"<br>" )
document.write("Target ",score+1,)
if(target)
{
    if(score<target){
        document.write(team,"loss the match",(target-score)+"runs ")
    }
}


return score
}
inning("pakistan")