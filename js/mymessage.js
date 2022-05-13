window.addEventListener('load', function () {
    var allmymessage = document.querySelector('.all-mymessage');
    var homepart = document.querySelector('.homepart');
    var gotoperson = document.querySelector('#goto-person');
    var gotohomepart = document.querySelector('.goto-homepart');
    var allpersonal = document.querySelector('.all-personal');
    var m_gotocollect = document.querySelector('#m-gotocollect');
    var allshoucang = document.querySelector('.all-shoucang');
    var allattention = document.querySelector('.all-attention');
    var m_gotoattention = document.querySelector('.m-gotoattention');
    var m_gotocomment = document.querySelector('.m-gotocomment');
    var allcomment = document.querySelector('.all-comment');
    // 返回主页
    gotohomepart.addEventListener('click', function () {
        allmymessage.style.display = 'none';
        homepart.style.display = 'block';
    })

    // 跳转个人中心
    gotoperson.addEventListener('click', function () {
        allmymessage.style.display = 'none';
        allpersonal.style.display = 'block';
    })
    // 跳到点赞和收藏
    m_gotocollect.addEventListener('click', function () {
        allshoucang.style.display = 'block';
        allmymessage.style.display = 'none';
    })
    // 跳到关注的人
    m_gotoattention.addEventListener('click', function () {
        allmymessage.style.display = 'none';
        allattention.style.display = 'block';
    })
    // 跳到评论和@
    m_gotocomment.addEventListener('click', function () {
        allmymessage.style.display = 'none';
        allcomment.style.display = 'block';
    })
    
})