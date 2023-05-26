let url="https://www.coursehubiitg.in/api/codingweek/contributions"
let response= fetch(url)
response.then((v)=>{
    return v.json()
}).then ((v)=> {
    
    v.sort((s1,s2)=>s2.points-s1.points)
    console.log(v)
        ihtml1 = ""
    for(item in v){
       
        ihtml1 = ` 
        <div class="container1">
    
    <div class="rectangle">Leaderboard</div>
    <hr style: width:2px;>
<div class="fcontainer">

<div class="fcontainer2 fitem">
    <div id="circle1"><img src="${v[1].avatar}"></img></div>
    <div id="circle4">2</div>
    <div id="ellipse1">${v[1].name}
        <div class="circle2 c1"></div>
        ${v[1].points}</div>
</div>
<div class="fcontainer1 fitem">
    <div id="circle2"><img src="${v[0].avatar}"></img></div>
    <div id="circle5">1</div>
    <div id="ellipse2">${v[0].name}
        <div class="circle2 c1"></div>
        ${v[0].points}</div>
</div>
<div class="fcontainer2 fitem">
    <div id="circle3"><img src="${v[2].avatar}"></img></div>
    <div id="circle6">3</div>
    <div id="ellipse3">${v[2].name}
        <div class="circle2 c1"></div>
        ${v[2].points}</div>
</div>
</div>
        
        `
        
    }
 winners.innerHTML= ihtml1;


 ihtml2 = ""
    for(item in v){
        
        ihtml2 = ` <div class="container2">
        <div class="a circle" >4</div>
        
        <div class="b circle" ><img src="${v[3].avatar}"></img></div>
        <div class="c circle" >${v[3].name}</div>
        <div class="d circle" >${v[3].points}</div>
        </div>
       `
    }
    winner4.innerHTML=ihtml2;
     
      
    ihtml3 = ""
    for (item=4; item<v.length; item++){
       
        ihtml3 +=

         ` <div class="container3">
         <div class="a circle" >${item+1}</div>
         
         <div class="b circle" ><img src="${v[item].avatar}"></img></div>
         <div class="c circle" >${v[item].name}</div>
         <div class="d circle" >${v[item].points}</div>
         </div>
        `

}
rest.innerHTML= ihtml3;

})