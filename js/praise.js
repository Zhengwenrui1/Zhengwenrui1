window.addEventListener('load', function () {
    var allshoucang = document.querySelector('.all-shoucang');
    var backbtnshoucang = document.querySelector('.backbtn-shoucang');
    var allpersonal = document.querySelector('.all-personal');
    var get_praise = document.querySelector('.get-praise');
    var get_collect = document.querySelector('.get-collect');
    var main_getpraise = document.querySelector('.getpraise');
    var main_getcollect = document.querySelector('.getcollect');
    // 退回个人中心页面
    backbtnshoucang.addEventListener('click', function () {
        allshoucang.style.display = 'none';
        allpersonal.style.display = 'block';
    })
    // 点击获赞按钮  
    get_praise.addEventListener('click', function () {
        main_getpraise.style.display = 'block';
        main_getcollect.style.display = 'none';
        get_praise.className = 'get-praise praise-current';
        get_collect.className = "get-collect";
    })
    // 点击收藏按钮
    get_collect.addEventListener('click', function () {
        main_getpraise.style.display = 'none';
        main_getcollect.style.display = 'block';
        get_praise.className = 'get-praise';
        get_collect.className = "get-collect praise-current";
    })

})