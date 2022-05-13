window.addEventListener('load',function(){
    var allattention=document.querySelector('.all-attention');
    var backbtnattention=document.querySelector('.backbtn-attention');
    var allpersonal=document.querySelector('.all-personal');
    
    // 退回个人中心页面
    backbtnattention.addEventListener('click',function(){
        allattention.style.display='none';
        allpersonal.style.display='block';
    })
})