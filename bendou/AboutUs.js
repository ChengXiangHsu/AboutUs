addEventListener('load',function(){
    let name = document.getElementsByClassName('name');
    let intro = this.document.getElementsByClassName('intro');

    let pic1 = document.getElementById('per1');
    let pic2 = document.getElementById('per2');
    let pic3 = document.getElementById('per3');
    let pic4 = document.getElementById('per4');
    let pic5 = document.getElementById('per5');
    let b1 = document.getElementById('b1');
    let b2 = document.getElementById('b2');
    let b3 = document.getElementById('b3');
    let b4 = document.getElementById('b4');
    let b5 = document.getElementById('b5');
    $(name[0]).click(() => {
        $(b1).css("visibility","visible");
        $(pic1).css("visibility","visible");
        $(pic1).animate({
            opacity:"100%",   
            //visibility:"visible",
        }, 1000)
        //$(b1).css("display","block");
    })
    $(name[1]).click(() => {
        $(b2).css("visibility","visible");
        $(pic2).css("visibility","visible");
        $(pic2).animate({   
            opacity:"100%",
            //visibility:"visible",
        }, 1000)
       // $(b2).css("display","block");
    })
    $(name[2]).click(() => {
        $(b3).css("visibility","visible");
        $(pic3).css("visibility","visible");
        $(pic3).animate({   
           opacity:"100%",
           //visibility:"visible",
        }, 1000)
        //$(b3).css("display","block");
    })
    $(name[3]).click(() => {
        $(b4).css("visibility","visible");
        $(pic4).css("visibility","visible");
        $(pic4).animate({   
            opacity:"100%",
            //visibility:"visible",
        }, 1000)
        //$(b4).css("display","block");
    })
    $(name[4]).click(() => {
        $(b5).css("visibility","visible");
        $(pic5).css("visibility","visible");
        $(pic5).animate({   
            opacity:"100%",
            //visibility:"visible",
        }, 1000)
        //$(b5).css("display","block");
    })
    
    b1.addEventListener('click',()=>{
        pic1.style.visibility="hidden";
        pic1.style.opacity="0%";
        b1.style.visibility="hidden";
    })
    b2.addEventListener('click',()=>{
        pic2.style.visibility="hidden";
        pic2.style.opacity="0%";
        b2.style.visibility="hidden";
    })
    b3.addEventListener('click',()=>{
        pic3.style.visibility="hidden";
        pic3.style.opacity="0%";
        b3.style.visibility="hidden";
    })
    b4.addEventListener('click',()=>{
        pic4.style.visibility="hidden";
        pic4.style.opacity="0%";
        b4.style.visibility="hidden";
    })
    b5.addEventListener('click',()=>{
        pic5.style.visibility="hidden"
        pic5.style.opacity="0%";
        b5.style.visibility="hidden";
    })
})