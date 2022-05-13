window.addEventListener('click',function(){
    var backbtn_comment=document.querySelector('.backbtn-comment');
    var allmymessage = document.querySelector('.all-mymessage');
    var allcomment=document.querySelector('.all-comment');

    // 点击跳转到个人消息页面
    backbtn_comment.addEventListener('click',function(){
        allcomment.style.display='none';
        allmymessage.style.display='block';
    })
})
