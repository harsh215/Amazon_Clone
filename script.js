var index=1;
var sliderButton1;
var sliderButton2;
var finalWidth;
var slider = document.getElementById("slider");
var body = document.querySelector("body");
var deals=document.querySelectorAll(".deal");
sliderResize();
console.log(body.offsetWidth);
var on;
var first=true;
var slide=document.querySelectorAll(".slide");
var slides=document.querySelector(".slides");
var lb=document.querySelector(".lf");
var rb=document.querySelector(".rt");
var search=document.querySelector(".search-bar");
var searchRemove= document.querySelector("body > div:not(.search-bar)")
search.addEventListener("click",function(){
    search.style.border="3px solid #ec933a";
    search.style.borderRadius="7px";
});
searchRemove.addEventListener("click",function(){
    search.style.border="3px solid #131921";
});
$(document).ready(function() {
    $('#resizing_select').change(function(){
      $("#width_tmp_option").html($('#resizing_select option:selected').text()); 
      $(this).width($("#width_tmp_select").width());  
      $('.search-bar-center').css("padding-left",($("#width_tmp_select").width())+20);
    });
  });
  auto();
  lb.onclick=function(){
      clearTimeout(on);
      if(first===true && index<slide.length-2){
          index-=2;
          for(var i=0;i<slide.length;i++){
          slide[i].style.transform="translateX(-"+index*100+"%)";
          slide[i].style.transition=".3s";
          }
          first=false;
      }
          else{
              index--;
              for(var i=0;i<slide.length;i++){
                  slide[i].style.transform="translateX(-"+index*100+"%)";
                  slide[i].style.transition=".3s";
                  }
          }
  }
  rb.onclick=function(){
      clearTimeout(on);
      if(first===true && index<slide.length-2){
      for(var i=0;i<slide.length;i++){
      slide[i].style.transform="translateX(-"+index*100+"%)";
      slide[i].style.transition=".3s";
      }
      first=false;
  }
      else{
          index++;
          for(var i=0;i<slide.length;i++){
              slide[i].style.transform="translateX(-"+index*100+"%)";
              slide[i].style.transition=".3s";
              }
      }
  }
  for(var i=0;i<slide.length;i++){
      slide[i].addEventListener("transitionend",function(){
          if(index===0){
              console.log("called");
              index=slide.length-2;
              for(var i=0;i<slide.length;i++){
              slide[i].style.transform="translateX(-"+index*100+"%)";
              slide[i].style.transition="none"; 
              }
          }
          if(index===slide.length-1){
              clearTimeout(on);
              console.log("called");
              index=1;
              for(var i=0;i<slide.length;i++){
              slide[i].style.transform="translateX(-"+index*100+"%)";
              slide[i].style.transition="none"; 
              }
          }
      });
  }
  function auto(){
      for(var i=0;i<slide.length;i++){
          slide[i].style.transform="translateX(-"+index*100+"%)";
          slide[i].style.transition=".3s";
          }
          if(index<slide.length-2){
          on=setTimeout(auto,5000);
          index++;
          }
          else{
              return;
          }
        }
        window.onresize=sliderResize;
        sliderButton1=document.querySelector(".left");
        sliderButton2=document.querySelector(".right");
 function sliderResize(){
    var Dealswidth=document.querySelector(".All-deals").offsetWidth;
    finalWidth=(224*deals.length)-Dealswidth;
    slider.setAttribute("max",finalWidth);
 } 
  slider.oninput=function(){
      for(var i=0;i<deals.length;i++){
          deals[i].style.right=slider.value+"px";
          deals[i].style.transition="0.1s all";
      }
      opCount();
  }

  function opCount(){
    if(slider.value>=finalWidth){
        sliderButton2.style.opacity="0.7";
    }
    else{
      sliderButton2.style.opacity="1";
    }
    console.log(slider.value);
    if(slider.value<=2){
        sliderButton2.style.opacity="1";
        console.log("inside");
      sliderButton1.style.opacity="0.7";
    }
    else{
      sliderButton1.style.opacity="1";
    }
  }
  sliderButton1.onclick=function(){
    if(parseInt(slider.value)-400 >= 0){
        sliderButton2.style.opacity="1";
        slider.value=parseInt(slider.value)-200;
        for(var i=0;i<deals.length;i++){
            deals[i].style.transition="1s all";
            deals[i].style.right=parseInt(slider.value)-200+"px";
        }
    }
    else{
        sliderButton1.style.opacity="0.7";
        slider.value=0;
        console.log(slider.value)
        for(var i=0;i<deals.length;i++){
            deals[i].style.transition="1s all";
            deals[i].style.right=slider.value+"px";
        }
    }
  }
  sliderButton2.onclick=function(){
    if(parseInt(slider.value)+400 <= finalWidth){
        sliderButton1.style.opacity="1";
        slider.value=parseInt(slider.value)+200;
        for(var i=0;i<deals.length;i++){
            deals[i].style.transition="1s all";
            deals[i].style.right=parseInt(slider.value)+200+"px";
        }
    }
    else{
        sliderButton2.style.opacity=".7";
        slider.value=finalWidth;
        console.log(slider.value)
        for(var i=0;i<deals.length;i++){
            deals[i].style.transition="1s all";
            deals[i].style.right=slider.value+"px";
        }
    }
  }
  var mobile=document.querySelector(".changeable");
  var mobileText=document.querySelector(".replacebale-text");
  var mobileClass=document.querySelectorAll(".mobileClass");
  var mobilePrice=document.querySelector(".mobile-price");
  function displayMobile(i){
      for(var a=0;a<mobileClass.length;a++){
        mobileClass[a].classList.remove("active");
      }
      mobileClass[i-1].classList.add("active");
    mobile.setAttribute("src","images/phone"+i+".jpg");
    if(i===1){
        mobileText.innerHTML="OnePlus Nord CE 5G (Blue Void, 8GB RAM, 128GB Storage)";
        mobilePrice.innerHTML="<p><b> 24,999</b></p>";
    }
    else if(i===2){
        mobileText.innerHTML="OnePlus Nord 2 5G (Blue Haze, 8GB RAM, 128GB Storage)";
        mobilePrice.innerHTML="<p><b> 29,999</b></p>";
    }
    else if(i===3){
        mobileText.innerHTML="OnePlus 9R 5G (Lake Blue, 8GB RAM, 128GB Storage)";
        mobilePrice.innerHTML="<p><b> 39,999</b></p>";
    }
    else{
        mobileText.innerHTML="iQOO Z5 5G (Mystic Space, 8GB RAM, 128GB Storage) | SnapDragon 778G....";
        mobilePrice.innerHTML="<p><b>23,990 <del>29,999</del></b></p>";
    }
  }
  var contentCont7=document.querySelector(".content-cont7");
  var cont7Images=document.querySelector(".images-cont-7");
  var cont7Rt=document.querySelector(".rt-btn-cont7");
  var cont7Lt=document.querySelector(".lt-btn-cont7");
  var cont7Index=0;
  var page=document.querySelector(".page");
  cont7Rt.onclick=function(){
      if(cont7Index<2*contentCont7.offsetWidth){
        cont7Index+=contentCont7.offsetWidth;
        if(cont7Index===contentCont7.offsetWidth){
            page.innerHTML="Page 2 of 3";
        }
        else{
            page.innerHTML="Page 3 of 3";
        }
        console.log(cont7Index);
        cont7Rt.classList.add("checkBlue");
        cont7Lt.classList.remove("checkBlue");
        cont7Images.style.transform="translateX(-"+cont7Index+"px)";
      }
      else{
        page.innerHTML="Page 1 of 3";
        cont7Index=0;
        console.log(cont7Index);
        cont7Rt.classList.add("checkBlue");
        cont7Lt.classList.remove("checkBlue");
        cont7Images.style.transform="translateX(-"+cont7Index+"px)";
      }
  }
  cont7Lt.onclick=function(){
    if(cont7Index===0){
        page.innerHTML="Page 3 of 3";
        cont7Index=2*contentCont7.offsetWidth;
        console.log(cont7Index);
        cont7Rt.classList.add("checkBlue");
        cont7Lt.classList.remove("checkBlue");
        cont7Images.style.transform="translateX(-"+cont7Index+"px)";
      }
      else{
        cont7Index-=contentCont7.offsetWidth;
        if(cont7Index===contentCont7.offsetWidth){
            page.innerHTML="Page 2 of 3";
        }
        else{
            page.innerHTML="Page 1 of 3";
        }
        console.log(cont7Index);
        cont7Rt.classList.add("checkBlue");
        cont7Lt.classList.remove("checkBlue");
        cont7Images.style.transform="translateX(-"+cont7Index+"px)";
      }
}
document.querySelector(".back-to-top").onclick=function(){
    window.scrollY=0;
}