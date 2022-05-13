window.addEventListener('click', function () {
    var homepart = document.querySelector('.homepart');
    var allsearch = document.querySelector('.all-search');
    var backbtnsearch = document.querySelector('.backbtn-search');
    var searchbtn = document.querySelector('.searchbtn');
    var inputsearch = document.querySelector('.inputsearch');
    var s_article = document.querySelector('.s-article');
    var s_user = document.querySelector('.s-user');
    var search_article = document.querySelector('.search-article');
    var search_user = document.querySelector('.search-user');
    var each_sarticle = document.querySelector('.each-sarticle');

    // 回到homepart部分
    backbtnsearch.addEventListener('click', function () {
        homepart.style.display = 'block';
        allsearch.style.display = 'none';
    })
    // 点击进入文章和用户
    s_article.addEventListener('click', function () {
        search_article.style.display = 'block';
        search_user.style.display = 'none';
    })
    s_user.addEventListener('click', function () {
        search_article.style.display = 'none';
        search_user.style.display = 'block';
    })


    // 创建节流函数
    function throttle(func, delay) {
        let timer;
        return function (e) {
            let context = this;
            let args = arguments;
            if (timer) {
                return;
            }
            timer = setTimeout(function () {
                func(context, args);
                timer = null;
            }, delay);
        }
    }

    // 根据关键字搜索文章
    function search(e) {
        if (inputsearch.value) {
            myajax({
                method: 'GET',
                url: 'http://175.178.193.182:8080/search/byArticle',
                data: {
                    keyWord: inputsearch.value
                },
                success: function (res) {
                    if (res.status === 200) {
                        search_article.innerHTML = ''
                        each_sarticle.innerHTML = ''
                        if (search_article.firstChild) {
                            search_article.removeChild(search_article.firstChild);
                            each_sarticle.removeChild(each_sarticle.firstChild);
                        }
                        // console.log(res);
                        if (res.articles.length) {
                            var html3 = ''
                            for (var i = 0; i < res.articles.length; i++) {
                                var result = res.articles[i];
                                if (result.images[0]) {
                                    for (var k = 0; k < result.images.length; k++) {
                                        html3 += '<li class=li-scroll><img src="' + result.images[k] + '" alt="" class="main-pic"></li>'
                                    }
                                    search_article.innerHTML += '<div class="s-abox"><img src="' + result.images[0] + '" alt="" class="imgpart" style="width: 315px;height: 350px;"><span class="s-word">' + result.title + '<img src="' + result.avatar + '" alt="" class="s-author-avatar"></span><span class="s-author">' + result.authorName + '</span><span class="s-loveicon"></span><span class="s-lovenum">' + result.likes + '</span></div>'
                                } else {
                                    search_article.innerHTML += '<div class="s-abox"><span class="s-word">' + result.title + '<img src="' + result.avatar + '" alt="" class="s-author-avatar"></span><span class="s-author">' + result.authorName + '</span><span class="s-loveicon"></span><span class="s-lovenum">' + result.likes + '</span></div>'
                                }
                                each_sarticle.innerHTML += '<div class="se-all" style="display: none;" ><div class="se-all-top"><span class="se-backsearch"></span><span class="se-share"></span><img src="' + result.avatar + '" alt="" class="se-avatar"><span class="se-author">' + result.authorName + '</span><button class="se-follow">关注</button></div><div class="se-picbox se-hiddenit" id="hiddenit"><ul class="se-scroll" id="scroll">' + html3 + '</ul><ol class=se-circle id="circle"></ol></div><div class="se-databox"><div class="se-title">' + result.title + '</div><div class="se-content">' + result.content + '</div><div class="se-tag">#' + result.tags + '</div><div class="se-date">' + result.postDate + '</div><button class="se-dislike"> 不喜欢</button></div><div class="se-allcomment"><div class="allcommentnum">共' + result.reviews + '条评论</div></div><div class="se-commentall"><div class="se-comment1"><img src="' + result.avatar + '" alt="" class="se-comment1-avatar"><input type="text" class="se-input1" placeholder="说点什么吧，万一火了呢~"></div><div class="se-comment2"><input type="text" class="se-input2" placeholder="说点什么吧"><span class="sec-love" id="sec-icon"></span><span class="sec-lovenum" id="sec-icon">' + result.likes + '</span><span class="sec-collect" id="sec-icon"></span><span class="sec-collectnum" id="ec-icon">' + result.stars + '</span><span class="sec-comment" id="ec-icon"></span><span class="sec-commentnum" id="ec-icon">' + result.reviews + '</span></div></div></div>'

                                // 实现轮播图效果
                                var hiddenit = document.querySelectorAll('.se-hiddenit');
                                var ul = hiddenit[i].querySelector('.se-scroll');
                                var ol = hiddenit[i].querySelector('.se-circle');
                                for (var j = 0; j < ul.children.length; j++) {
                                    var li = document.createElement('li');
                                    // console.log(ul);            
                                    li.setAttribute('index', j);
                                    ol.appendChild(li);
                                }



                                html3 = ''
                            }
                            var ols = document.querySelectorAll('.se-circle');
                            var uls = document.querySelectorAll('.se-scroll');
                            for (var u = 0; u < ols.length; u++) {
                                ols[u].children[0].className = 'current';
                                ols[u].index = u;
                                for (var j = 0; j < ols[u].children.length; j++) {
                                    ols[u].children[j].index = j;
                                    // console.log(ols[i].children[j]);
                                    ols[u].children[j].addEventListener('click', function () {
                                        var nowindex = this.parentNode.index;
                                        var index = this.getAttribute('index');
                                        for (var k = 0; k < ols[nowindex].children.length; k++) {
                                            ols[nowindex].children[k].className = '';
                                        };
                                        this.className = 'current';
                                        var hiddenitWidth = -740;

                                        animate(uls[nowindex], index * hiddenitWidth);
                                    })
                                }
                            }
                        }
                        else {
                            search_article.innerHTML = '没有更多了'
                        }
                        var sallarticlebox = document.querySelectorAll('.s-abox');
                        var salle_all = document.querySelectorAll('.se-all');
                        var sebacksearchall = document.querySelectorAll('.se-backsearch');
                        var sloveicon = document.querySelectorAll('.s-loveicon');
                        // console.log(sallarticlebox.length);
                        // 点击进入详情 页面
                        for (var i = 0; i < sallarticlebox.length; i++) {
                            sallarticlebox[i].index = i;
                            sebacksearchall[i].index = i;
                            sallarticlebox[i].addEventListener('click', function () {
                                allsearch.style.display = "none";
                                for (var j = 0; j < sallarticlebox.length; j++) {
                                    salle_all[j].style.display = "none";
                                }
                                salle_all[this.index].style.display = "block";
                                sebacksearchall[this.index].addEventListener('click', function () {
                                    salle_all[this.index].style.display = "none";
                                    allsearch.style.display = "block";
                                })
                            })
                        }
                        var thesuerid = localStorage.getItem('userId');
                        // 搜索点赞
                        for (var k = 0; k < sallarticlebox.length; k++) {
                            // console.log(res.articles[k].articleId);
                            sloveicon[k].index = k
                            sloveicon[k].addEventListener('click', function (e) {
                                e.stopPropagation();
                                console.log(this.index);
                                myajax({
                                    method: 'POST',
                                    url: 'http://175.178.193.182:8080/article/like',
                                    data: {
                                        userId: thesuerid,
                                        articleId: res.articles[this.index].articleId
                                    },
                                    success: function (res) {
                                        console.log(res);
                                        console.log('ok');
                                    }
                                })
                                this.className = 's-loveicon topink'
                                console.log(this);
                            })
                        }
                    }
                }
            })
        }
        // e.stopPropagation();
    }

    searchbtn.addEventListener('click',throttle(search,1000));
    // 跳转至文章页面
    s_article.addEventListener('click', function () {
        search_article.style.display = 'block';
        search_user.style.display = 'none';
        this.className = "s-article s-current";
        s_user.className = 's-user';

    })
    // 跳转至用户页面
    s_user.addEventListener('click', function () {
        search_article.style.display = 'none';
        search_user.style.display = 'block';
        this.className = "s-user s-current";
        s_article.className = 's-article';
    })
    // 渲染搜索用户
    searchbtn.addEventListener('click', function () {
        var thesuerid = localStorage.getItem('userId');
        if (search_user.firstChild) {
            search_user.removeChild(search_user.firstChild);
        }
        myajax({
            method: 'GET',
            url: 'http://175.178.193.182:8080/search/byUser',
            data: {
                keyWord: inputsearch.value
            },
            success: function (res) {
                if (res.status === 200) {
                    if (res.users.length) {
                        var html = ''
                        for (var i = 0; i < res.users.length; i++) {
                            var result = res.users[i];
                            html += '<div class="s-auser"><img src="' + result.avatar + ' " alt="" class="s-useravarar"><span class="s-username">' + result.nickname + '</span><span class="s-descript">' + result.description + '</span><button class="s-guanzhu">未关注</button></div>'
                        }
                        search_user.innerHTML = html;
                    } else {
                        search_user.innerHTML = '没有更多了';
                    }

                }
                // 搜索关注
                var btnguanzhu = document.querySelectorAll('.s-guanzhu');
                for (var i = 0; i < res.users.length; i++) {
                    btnguanzhu[i].index = i;
                    btnguanzhu[i].addEventListener('click', function (e) {
                        // console.log(res.users[this.index].userId);
                        // console.log(res.users.length);
                        console.log(this.index);
                        // e.stopPropagation();
                        myajax({
                            method: 'POST',
                            url: 'http://175.178.193.182:8080/user/follow',
                            data: {
                                userId: thesuerid,
                                followerId: res.users[this.index].userId
                            },
                            success: function (res) {
                                if (res.status === 200) {
                                    console.log(res);
                                    // btnguanzhu[i].innerHTML = '已关注';
                                    console.log('关注成功');
                                } else {
                                    // console.log(result);
                                    myajax({
                                        method: 'POST',
                                        url: 'http://175.178.193.182:8080/user/cancelFollow',
                                        data: {
                                            userId: thesuerid,
                                            followerId: result.userId
                                        },
                                        success: function (res) {
                                            if (res.status === 200) {
                                                console.log(res);
                                                // btnguanzhu[this.index].innerHTML='未关注';
                                                console.log('取消关注成功');
                                            }
                                        }
                                    })
                                }
                            }
                        })
                    })
                }
            }
        })
    })
})