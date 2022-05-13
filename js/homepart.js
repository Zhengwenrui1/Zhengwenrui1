window.addEventListener('load',function(){
var add=document.querySelector('.add');
var homepart=document.querySelector('.homepart');
var allwrite=document.querySelector('.all-write');
var gosearch=document.querySelector('.search');
var allsearch=document.querySelector('.all-search');
var gotoperson=document.querySelector('.goto-person');
var gotomessage=document.querySelector('.goto-message');
var allpersonal=document.querySelector('.all-personal');
var allmymessage=document.querySelector('.all-mymessage');

// 点击+号按钮到达写文章页面
add.addEventListener('click',function(){
    homepart.style.display='none';
    allwrite.style.display='block';
})
//点击搜索到达搜索页面
gosearch.addEventListener('click',function(){
    homepart.style.display='none';
    allsearch.style.display='block';
   
})
// 点击到达我的消息页面
gotomessage.addEventListener('click',function(){
    homepart.style.display='none';
    allmymessage.style.display='block';
})

// 点击到达个人中心页面
gotoperson.addEventListener('click',function(){
    homepart.style.display='none';
    allpersonal.style.display='block';
})

})