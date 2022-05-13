window.addEventListener('load',function(){
    var allfans=document.querySelector('.all-fans');
    var backbtnfans=document.querySelector('.backbtn-fans');
    var allpersonal=document.querySelector('.all-personal');
    
    // 退回个人中心页面
    backbtnfans.addEventListener('click',function(){
        allfans.style.display='none';
        allpersonal.style.display='block';
    })
})