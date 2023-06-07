function windowScroll(){const t=document.getElementById("navbar");document.body.scrollTop>=50||document.documentElement.scrollTop>=50?t.classList.add("nav-sticky"):t.classList.remove("nav-sticky")}window.addEventListener("scroll",(t=>{t.preventDefault(),windowScroll()}));const btn=document.getElementById("mode");btn.addEventListener("click",(t=>{let e=localStorage.getItem("theme");"light"==e||""==e?(document.body.setAttribute("data-layout-mode","dark"),localStorage.setItem("theme","dark")):(document.body.removeAttribute("data-layout-mode"),localStorage.setItem("theme","light"))}));try{var slider=tns({container:".home-slider",loop:!0,autoplay:!1,mouseDrag:!0,controls:!0,navPosition:"bottom",nav:!1,autoplayTimeout:5e3,speed:900,center:!1,animateIn:"fadeIn",animateOut:"fadeOut",controlsText:["&#8592;","&#8594;"],autoplayButtonOutput:!1,gutter:30,responsive:{992:{gutter:30,items:1}}})}catch(t){}try{var TxtType=function(t,e,n){this.toRotate=e,this.el=t,this.loopNum=0,this.period=parseInt(n,10)||2e3,this.txt="",this.tick(),this.isDeleting=!1};function typewrite(){if("undefined"===n)changeText();else var t=document.getElementsByClassName("typewrite");for(var e=0;e<t.length;e++){var n=t[e].getAttribute("data-type"),o=t[e].getAttribute("data-period");n&&new TxtType(t[e],JSON.parse(n),o)}var a=document.createElement("style");a.type="text/css",a.innerHTML=".typewrite > .wrap { border-right: 0.08em solid #ffffff}",document.body.appendChild(a)}TxtType.prototype.tick=function(){var t=this.loopNum%this.toRotate.length,e=this.toRotate[t];this.isDeleting?this.txt=e.substring(0,this.txt.length-1):this.txt=e.substring(0,this.txt.length+1),this.el.innerHTML='<span class="wrap">'+this.txt+"</span>";var n=this,o=200-100*Math.random();this.isDeleting&&(o/=2),this.isDeleting||this.txt!==e?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,o=500):(o=this.period,this.isDeleting=!0),setTimeout((function(){n.tick()}),o)},typewrite()}catch(t){}try{new Swiper(".swiper-container",{loop:!0,slidesPerView:3,paginationClickable:!0,spaceBetween:20,pagination:".swiper-pagination",slidesPerView:"auto",paginationClickable:!0,spaceBetween:0,centeredSlides:!0,speed:1500,breakpoints:{1920:{slidesPerView:3,spaceBetween:30},1028:{slidesPerView:2,spaceBetween:30},768:{slidesPerView:1,spaceBetween:10}}})}catch(t){}try{slider=tns({container:".work-slider",loop:!0,autoplay:!0,mouseDrag:!0,controls:!0,navPosition:"bottom",nav:!1,autoplayTimeout:5e3,speed:900,center:!1,animateIn:"fadeIn",animateOut:"fadeOut",controlsText:["&#8592;","&#8594;"],autoplayButtonOutput:!1,gutter:30,responsive:{992:{gutter:30,items:3}}})}catch(t){}try{var tooltipTriggerList=[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')),tooltipList=tooltipTriggerList.map((function(t){return new bootstrap.Tooltip(t)}))}catch(t){}try{slider=tns({container:".home5-slider",loop:!0,autoplay:!0,mouseDrag:!0,controls:!1,navPosition:"bottom",nav:!1,autoplayTimeout:5e3,speed:900,center:!1,animateIn:"fadeIn",animateOut:"fadeOut",controlsText:["&#8592;","&#8594;"],autoplayButtonOutput:!1,items:2,gutter:30,responsive:{992:{gutter:30,items:3},576:{gutter:30,items:2}}})}catch(t){}try{slider=tns({container:".home6-slider",loop:!0,autoplay:!0,mouseDrag:!0,controls:!1,navPosition:"bottom",nav:!1,autoplayTimeout:5e3,speed:900,center:!1,animateIn:"fadeIn",animateOut:"fadeOut",controlsText:["&#8592;","&#8594;"],autoplayButtonOutput:!1,items:2,gutter:30,responsive:{992:{gutter:30,items:2.5},576:{gutter:30,items:2}}})}catch(t){}function validateForm(){var t=document.forms.myForm.name.value,e=document.forms.myForm.email.value,n=document.forms.myForm.subject.value,o=document.forms.myForm.comments.value;if(document.getElementById("error-msg").style.opacity=0,document.getElementById("error-msg").innerHTML="",""==t||null==t)return document.getElementById("error-msg").innerHTML="<div class='alert alert-warning'>*Please enter a Name*</div>",fadeIn(),!1;if(""==e||null==e)return document.getElementById("error-msg").innerHTML="<div class='alert alert-warning'>*Please enter a Email*</div>",fadeIn(),!1;if(""==n||null==n)return document.getElementById("error-msg").innerHTML="<div class='alert alert-warning'>*Please enter a Subject*</div>",fadeIn(),!1;if(""==o||null==o)return document.getElementById("error-msg").innerHTML="<div class='alert alert-warning'>*Please enter a Comments*</div>",fadeIn(),!1;var a=new XMLHttpRequest;return a.onreadystatechange=function(){4==this.readyState&&200==this.status&&(document.getElementById("simple-msg").innerHTML=this.responseText,document.forms.myForm.name.value="",document.forms.myForm.email.value="",document.forms.myForm.subject.value="",document.forms.myForm.comments.value="")},a.open("POST","php/contact.php",!0),a.setRequestHeader("Content-type","application/x-www-form-urlencoded"),a.send("name="+t+"&email="+e+"&subject="+n+"&comments="+o),!1}function fadeIn(){var t=document.getElementById("error-msg"),e=0,n=setInterval((function(){e<1?(e+=.5,t.style.opacity=e):clearInterval(n)}),200)}