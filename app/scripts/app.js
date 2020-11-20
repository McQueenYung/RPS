 function reset(){
  
   $(".paper").animate({
     left:'2%',
     width:'32%',
     height:'230px'
    });
   
    $(".scissors").animate({
      left:'34%',
      width:'32%',
      height:'230px'
    });
   
     $(".rock").animate({
      left:'66%',
      width:'32%',
      height:'230px'
    });
   
    $(".paper").show();
    $(".scissors").show(); 
    $(".rock").show();
   
   document.getElementById('paper').style.visibility = 'visible';
   document.getElementById('scissors').style.visibility = 'visible';
   document.getElementById('rock').style.visibility = 'visible';
  
    }  


function paper(){
  
  $(".scissors").hide();
  $(".rock").hide();
  
  document.getElementById('scissors').style.visibility = 'hidden';
  document.getElementById('rock').style.visibility = 'hidden';
  
 $(".paper").animate({
   left:'2%',
   width:'96%',
   height:'500px'
 });
                      
  document.getElementById('show').style.visibility = 'visible';
}

function scissors(){
 
  $(".paper").hide();
  $(".rock").hide();
 
 document.getElementById('paper').style.visibility = 'hidden';
 document.getElementById('rock').style.visibility = 'hidden';
  
  $(".scissors").animate({
    left:'2%',
    width:'96%',
    height:'500px'
    });
  
  document.getElementById('show').style.visibility = 'visible';
}

function rock(){
  
   $(".paper").hide();
   $(".scissors").hide();
  
  document.getElementById('paper').style.visibility = 'hidden';
  document.getElementById('scissors').style.visibility = 'hidden';
  
 $(".rock").animate({
   left:'2%',
    width:'96%',
    height:'500px'
    });
  
  document.getElementById('show').style.visibility = 'visible';
}
