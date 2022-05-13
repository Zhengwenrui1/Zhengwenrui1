window.addEventListener('click', function () {
    var pgohome = document.querySelector('.p-gohome');
    var homepart = document.querySelector('.homepart');
    var allpersonal = document.querySelector('.all-personal');
    var gotoedit = document.querySelector('.edit-btn');
    var alledit = document.querySelector('.all-edit');
    var attention = document.querySelector('.attention');
    var allattention = document.querySelector('.all-attention');
    var fans = document.querySelector('.fans');
    var allfans = document.querySelector('.all-fans');
    var collect = document.querySelector('.collect');
    var allshoucang = document.querySelector('.all-shoucang');
    var p_gotomessage = document.querySelector('.p-goto-message');
    var allmymessage = document.querySelector('.all-mymessage');
    var fansnum = document.querySelector('.num-fans');
    var thesuerid = localStorage.getItem('userId');
    var numattention = document.querySelector('.num-attention');
    var likenum = document.querySelector('.num-collect');
    var notebtn = document.querySelector('#notebtn');
    var collectbtn = document.querySelector('#collectbtn');
    var zanguobtn = document.querySelector('#zanguobtn');
    var addmyarticle = document.querySelector('#addmyarticle');
    var addzanguo = document.querySelector('#addzanguo');
    var addcollect = document.querySelector('#addcollect');

    // 跳到首页
    pgohome.addEventListener('click', function () {
        homepart.style.display = 'block';
        allpersonal.style.display = 'none';
    })

    // 跳到我的消息
    p_gotomessage.addEventListener('click', function () {
        allmymessage.style.display = 'block';
        allpersonal.style.display = 'none';
    })

    // 跳到编辑页面
    gotoedit.addEventListener('click', function () {
        allpersonal.style.display = 'none';
        alledit.style.display = 'block';
    })
    // 跳转到关注的人页面
    attention.addEventListener('click', function () {
        allattention.style.display = 'block';
        allpersonal.style.display = 'none';
    })
    // 跳转到粉丝页面
    fans.addEventListener('click', function () {
        allfans.style.display = 'block';
        allpersonal.style.display = 'none';
    })

    // 跳转到获赞和收藏页面
    collect.addEventListener('click', function () {
        allshoucang.style.display = 'block';
        allpersonal.style.display = 'none';
    })
    // 点击跳到笔记版块
    notebtn.addEventListener('click', function () {
        addmyarticle.style.display = 'block';
        addcollect.style.display = 'none';
        addzanguo.style.display = 'none';
        notebtn.className = 'p-tag p-tag-current';
        collectbtn.className = 'p-tag';
        zanguobtn.className = 'p-tag';
    })
    // 点击跳到收藏部分
    collectbtn.addEventListener('click', function () {
        addmyarticle.style.display = 'none';
        addcollect.style.display = 'block';
        addzanguo.style.display = 'none';
        notebtn.className = 'p-tag';
        collectbtn.className = 'p-tag p-tag-current';
        zanguobtn.className = 'p-tag';
    })
    // 点击跳到赞过部分
    zanguobtn.addEventListener('click', function () {
        addmyarticle.style.display = 'none';
        addcollect.style.display = 'none';
        addzanguo.style.display = 'block';
        notebtn.className = 'p-tag';
        collectbtn.className = 'p-tag';
        zanguobtn.className = 'p-tag  p-tag-current';
    })
    // 获取粉丝列表
    // 粉丝人数
    myajax({
        method: 'GET',
        url: 'http://175.178.193.182:8080/user/fanList',
        data: {
            userId: thesuerid
        },
        success: function (res) {
            fansnum.innerHTML = '&ensp;' + res.fansList.length
        }
    })

    // 获取关注的人
    myajax({
        method: 'GET',
        url: 'http://175.178.193.182:8080/user/followerList',
        data: {
            userId: thesuerid
        },
        success: function (res) {
            numattention.innerHTML = '&ensp;' + res.followsList.length
        }
    })
    // 获取点赞的人
    myajax({
        method: 'GET',
        url: 'http://175.178.193.182:8080/notice/article/like',
        data: {
            userId: thesuerid
        },
        success: function (res) {
            likenum.innerHTML = '&ensp;&ensp;' + res.like.length
        }
    })

})