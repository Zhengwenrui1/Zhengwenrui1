window.addEventListener('load', function () {

    var btn = document.querySelector('#denglu');
    var usernameInput = document.querySelector('#username');
    var pwdInput = document.querySelector('#pwd');
    var alllogin = document.querySelector('.alllogin');
    var homepart = this.document.querySelector('.homepart');
    var logoutbtn = document.querySelector('.logout');
    var allpersonal = document.querySelector('.all-personal');
    var avatarfile = document.querySelector('#avatar-file');
    var avatarimg = document.querySelector('#avatar');
    var myavatar = document.querySelector('.myavatar');
    var editavatar = document.querySelector('.edit-avatar');
    var backbtnedit = document.querySelector('.backbtn-edit');
    var alledit = document.querySelector('.all-edit');
    var p_username = document.querySelector('.p-username');

    var allrecommend = document.querySelector('.all-recommend');
    var alltravel = document.querySelector('.all-travel');
    var allfood = document.querySelector('.all-food');
    var allfasion = document.querySelector('.all-fasion');
    var allmakeup = document.querySelector('.all-makeup');
    var allefficient = document.querySelector('.all-efficient');
    var allskincare = document.querySelector('.all-skincare');
    var emyarticleall = document.querySelector('.e-myarticleall');
    var ezanguoall = document.querySelector('.e-zanguoall');
    var ecollectall = document.querySelector('.e-collectall');
    var topfixed = document.querySelector('.topfixed-box');
    var create = document.querySelector('.create');
    var chatterbox = document.querySelector('.chatterbox');
    var createchatbtn = document.querySelector('.createchat');
    var message_backbtn = document.querySelector('.message-backbtn');
    var allmymeassage = document.querySelector('.all-mymessage');

    var tuijian = document.querySelector('#tuijian');
    var lvxing = document.querySelector('#lvxing');
    var meishi = document.querySelector('#meishi');
    var shishang = document.querySelector('#shishang');
    var caizhuang = document.querySelector('#caizhuang');
    var gaoxiao = document.querySelector('#gaoxiao');
    var hufu = document.querySelector('#hufu');

    var addmyarticle = document.querySelector('.addmyarticle');
    var addcollect = document.querySelector('.addcollect');
    var addzanguo = document.querySelector('.addzanguo');

    let eachrecommend = document.querySelector('.each-recommend');
    let eachtravel = document.querySelector('.each-travel');
    let eachfood = document.querySelector('.each-food');
    let eachfasion = document.querySelector('.each-fasion');
    let eachmakeup = document.querySelector('.each-makeup');
    let eachefficient = document.querySelector('.each-efficient');
    let eachskincare = document.querySelector('.each-skincare');

    var p_eachrecommend = document.querySelector('.each-pprecommend');
    var p_eachtravel = document.querySelector('.each-pptravel');
    var p_eachfood = document.querySelector('.each-ppfood');
    var p_eachfasion = document.querySelector('.each-ppfasion');
    var p_eachmakeup = document.querySelector('.each-ppmakeup');
    var p_eachefficient = document.querySelector('.each-ppefficient');
    var p_eachskincare = document.querySelector('.each-ppskincare');
    // 
    var Sexvalue = document.querySelector('.Sex-value');
    var birthvalue = document.querySelector('.birth-value');
    var professionvalue = document.querySelector('.profession-value');
    var regionvalue = document.querySelector('.region-value');
    var Briefvalue = document.querySelector('.Brief-value');
    var namevalue = document.querySelector('.name-value');
    var getpraise = document.querySelector('.getpraise');
    var reviewme = document.querySelector('.reviewme')
    var getcollect = document.querySelector('.getcollect');
    var attentionmain = document.querySelector('.attention-main');
    var fansmain = document.querySelector('.fans-main');
    var notenum = document.querySelector('.notenum');
    var collectnum = document.querySelector('.collectnum');
    var zanguonum = document.querySelector('.zanguonum');
    var allchat = document.querySelector('.allchat');
    var chatlist = document.querySelector('.chatlist');
    // ????????????
    window.onscroll = function () {
        if (document.documentElement.scrollTop >= 170) {          //???????????????
            topfixed.style.position = 'fixed';
            topfixed.style.marginTop = '0px';
            topfixed.style.top = '-5px';
            topfixed.style.zIndex = '1000000';
        } else {
            // topfixed.style.marginTop = '30px';
            topfixed.style.position = 'static';
        }
    };
    function insertAfter(newElement, targetElement) {
        var parent = targetElement.parentNode;
        if (parent.lastChild == targetElement) {
            parent.appendChild(newElement);
        } else {
            parent.insertBefore(newElement, targetElement.nextsibling);
        }
    }

    // ??????tag?????????
    tuijian.addEventListener('click', function () {
        tuijian.className = 'eachtag tag-current';
        lvxing.className = 'eachtag';
        meishi.className = 'eachtag';
        shishang.className = 'eachtag';
        caizhuang.className = 'eachtag';
        gaoxiao.className = 'eachtag';
        hufu.className = 'eachtag';

        allrecommend.style.display = 'block';
        alltravel.style.display = 'none';
        allfood.style.display = 'none';
        allfasion.style.display = 'none';
        allmakeup.style.display = 'none';
        allefficient.style.display = 'none';
        allskincare.style.display = 'none';
    })
    lvxing.addEventListener('click', function () {
        tuijian.className = 'eachtag';
        lvxing.className = 'eachtag tag-current';
        meishi.className = 'eachtag';
        shishang.className = 'eachtag';
        caizhuang.className = 'eachtag';
        gaoxiao.className = 'eachtag';
        hufu.className = 'eachtag';
        allrecommend.style.display = 'none';
        alltravel.style.display = 'block';
        allfood.style.display = 'none';
        allfasion.style.display = 'none';
        allmakeup.style.display = 'none';
        allefficient.style.display = 'none';
        allskincare.style.display = 'none';
    })
    meishi.addEventListener('click', function () {
        tuijian.className = 'eachtag';
        lvxing.className = 'eachtag';
        meishi.className = 'eachtag tag-current';
        shishang.className = 'eachtag';
        caizhuang.className = 'eachtag';
        gaoxiao.className = 'eachtag';
        hufu.className = 'eachtag';
        allrecommend.style.display = 'none';
        alltravel.style.display = 'none';
        allfood.style.display = 'block';
        allfasion.style.display = 'none';
        allmakeup.style.display = 'none';
        allefficient.style.display = 'none';
        allskincare.style.display = 'none';
    })
    shishang.addEventListener('click', function () {
        tuijian.className = 'eachtag';
        lvxing.className = 'eachtag';
        meishi.className = 'eachtag';
        shishang.className = 'eachtag tag-current';
        caizhuang.className = 'eachtag';
        gaoxiao.className = 'eachtag';
        hufu.className = 'eachtag';
        allrecommend.style.display = 'none';
        alltravel.style.display = 'none';
        allfood.style.display = 'none';
        allfasion.style.display = 'block';
        allmakeup.style.display = 'none';
        allefficient.style.display = 'none';
        allskincare.style.display = 'none';
    })

    caizhuang.addEventListener('click', function () {
        tuijian.className = 'eachtag';
        lvxing.className = 'eachtag';
        meishi.className = 'eachtag';
        shishang.className = 'eachtag';
        caizhuang.className = 'eachtag tag-current';
        gaoxiao.className = 'eachtag';
        hufu.className = 'eachtag';
        allrecommend.style.display = 'none';
        alltravel.style.display = 'none';
        allfood.style.display = 'none';
        allfasion.style.display = 'none';
        allmakeup.style.display = 'block';
        allefficient.style.display = 'none';
        allskincare.style.display = 'none';
    })
    gaoxiao.addEventListener('click', function () {
        tuijian.className = 'eachtag';
        lvxing.className = 'eachtag';
        meishi.className = 'eachtag';
        shishang.className = 'eachtag';
        caizhuang.className = 'eachtag';
        gaoxiao.className = 'eachtag tag-current';
        hufu.className = 'eachtag';
        allrecommend.style.display = 'none';
        alltravel.style.display = 'none';
        allfood.style.display = 'none';
        allfasion.style.display = 'none';
        allmakeup.style.display = 'none';
        allefficient.style.display = 'block';
        allskincare.style.display = 'none';
    })
    hufu.addEventListener('click', function () {
        tuijian.className = 'eachtag';
        lvxing.className = 'eachtag';
        meishi.className = 'eachtag';
        shishang.className = 'eachtag';
        caizhuang.className = 'eachtag';
        gaoxiao.className = 'eachtag';
        hufu.className = 'eachtag tag-current';
        allrecommend.style.display = 'none';
        alltravel.style.display = 'none';
        allfood.style.display = 'none';
        allfasion.style.display = 'none';
        allmakeup.style.display = 'none';
        allefficient.style.display = 'none';
        allskincare.style.display = 'block';
    })
    // ??????????????????
    function throttle(func, delay) {
        let timer;

        return function () {
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
    // ??????
    function login() {
        //????????????????????????
        var username1 = usernameInput.value;
        var pwd = pwdInput.value;
        myajax({
            method: 'POST',
            url: 'http://175.178.193.182:8080/login',
            data: {
                username: username1,
                password: pwd
            },
            success: function (res) {
                // console.log(res);
                //????????????????????????
                if (res.msg === '??????????????????' || res.msg === '????????????') {
                    alllogin.style.display = 'none';
                    homepart.style.display = 'block';
                    // console.log(res.userId);
                    localStorage.setItem('userId', res.userId)
                    // localStorage.setItem('nowavatar',)
                    // console.log(res.userId);
                } else {
                    alert('??????????????????????????????!');
                }
            }
        })
        var thesuerid = localStorage.getItem('userId');
        console.log(thesuerid);
        // ??????????????????
        myajax({
            method: 'GET',
            url: 'http://175.178.193.182:8080/user/baseInfo',
            data: {
                userId: thesuerid,
            },
            success: function (res) {
                if (res.status === 200) {
                    console.log(res);
                    namevalue.innerHTML = res.user.nickname;
                    Sexvalue.innerHTML = res.user.gender;
                    p_username.innerHTML = res.user.nickname;
                    birthvalue.innerHTML = res.user.birthday;
                    professionvalue.innerHTML = res.user.description;
                    regionvalue.innerHTML = res.user.area;
                    Briefvalue.innerHTML = res.user.description;
                    avatarimg.src = res.user.avatar;
                    localStorage.setItem('nowavatar', res.user.avatar)
                    editavatar.src = res.user.avatar;
                }
            }
        })
        // ??????????????????
        myajax({
            method: 'GET',
            data: {
                authorId: thesuerid
            },
            url: 'http://175.178.193.182:8080/article/byAuthor',
            success: function (res) {
                // console.log(res);
                notenum.innerHTML = '(' + res.articles.length + ')';
                var html = ''
                var html3 = ''
                for (let i = 0; i < res.articles.length; i++) {
                    var result = res.articles[i]
                    html += '<div class="mybox" articleid="' + result.articleId + '" index="' + i + '">'
                    if (result.images[0]) {
                        html += '<img src="' + result.images[0] + '" alt="" class="imgpart" style="width: 315px;  "><span class="word">' + result.title + '</span><span class="loveicon">???</span><span class="lovenum">' + result.likes + '</span>'
                        for (let k = 0; k < result.images.length; k++) {
                            html3 += '<li class=li-scroll><img src="' + result.images[k] + '" alt="" class="main-pic"></li>'
                        }
                    } else {
                        html += '<span class="word">' + result.title + '</span><span class="loveicon">???</span><span class="lovenum">' + result.likes + '</span>';
                    }
                    html += '</div>'
                    emyarticleall.innerHTML += '<div class="e-myarticle" style="display: none;" ><div class="e-all-top"><span class="pe-backpersonal">???</span><span class="pe-share">???</span></div><div class="pe-hiddenit" id="hiddenit"><ul class="pe-scroll" id="scroll">' + html3 + '</ul><ol class="pe-circle" id="circle"></ol></div><div class="e-databox"><div class="e-title">' + result.title + '</div><div class="e-content">' + result.content + '</div><div class="e-tag">#' + result.tags + '</div><div class="e-date">' + result.postDate + '</div><button class="e-delete">????????????</button></div><div class="e-allcomment"><div class="allcommentnum">???' + result.reviews + '?????????</div></div><div class="e-commentall"><div class="e-comment1"></div><div class="e-comment2"><input type="text" class="e-input2" placeholder="??????????????????"><span class="ec-love" id="ec-icon">???</span><span class="ec-lovenum" id="ec-icon">' + result.likes + '</span><span class="ec-collect" id="ec-icon">???</span><span class="ec-collectnum" id="ec-icon">' + result.stars + '</span><span class="ec-comment" id="ec-icon">???</span><span class="ec-commentnum" id="ec-icon">' + result.reviews + '</span></div></div></div>'
                    // ?????????????????????(??????li???)
                    var hiddenit = document.querySelectorAll('.pe-hiddenit');
                    var ul = hiddenit[i].querySelector('.pe-scroll');
                    var ol = hiddenit[i].querySelector('.pe-circle');
                    for (let j = 0; j < ul.children.length; j++) {
                        var li = document.createElement('li');
                        // console.log(ul);            
                        li.setAttribute('index', j);
                        ol.appendChild(li);
                    }
                    html3 = ''
                }
                addmyarticle.innerHTML = html;
                // ????????????
                var ols = document.querySelectorAll('.pe-circle');
                var uls = document.querySelectorAll('.pe-scroll');
                for (let u = 0; u < ols.length; u++) {
                    if (ols[u].children[0]) {
                        ols[u].children[0].className = 'current';
                    }
                    ols[u].index = u;
                    for (let j = 0; j < ols[u].children.length; j++) {
                        ols[u].children[j].index = j;
                        // console.log(ols[i].children[j]);
                        ols[u].children[j].addEventListener('click', function () {
                            var nowindex = this.parentNode.index;
                            var index = this.getAttribute('index');
                            for (let k = 0; k < ols[nowindex].children.length; k++) {
                                ols[nowindex].children[k].className = '';
                            };
                            this.className = 'current';
                            var hiddenitWidth = -740;
                            animate(uls[nowindex], index * hiddenitWidth);
                        })
                    }
                }
                var allmybox = document.querySelectorAll('.mybox');
                var alle_myarticle = document.querySelectorAll('.e-myarticle');
                var ebackpersonall = document.querySelectorAll('.pe-backpersonal');
                // ?????????????????? ??????
                for (let i = 0; i < allmybox.length; i++) {
                    allmybox[i].index = i;
                    ebackpersonall[i].index = i;
                    allmybox[i].addEventListener('click', function () {
                        allpersonal.style.display = "none";
                        for (let j = 0; j < allmybox.length; j++) {
                            alle_myarticle[j].style.display = "none";
                        }
                        emyarticleall.style.display = 'block';
                        alle_myarticle[this.index].style.display = "block";
                        ebackpersonall[this.index].addEventListener('click', function () {
                            emyarticleall.style.display = 'none';
                            alle_myarticle[this.index].style.display = "none";
                            allpersonal.style.display = "block";
                        })
                    })
                }
                // ??????????????????
                var deletebtn = document.querySelectorAll('.e-delete');

                for (let i = 0; i < allmybox.length; i++) {
                    var myarticleid = allmybox[i].getAttribute('articleid');
                    deletebtn[i].setAttribute('articleid', myarticleid)
                    deletebtn[i].addEventListener('click', function () {
                        var dearticleid = this.getAttribute('articleid');
                        axios.post('http://175.178.193.182:8080/article/delete', { articleId: dearticleid }).then(function (res) {
                            if (res.status === 200) {
                                alert('??????????????????')
                                console.log(i);
                                // allmybox[i].style.style.display='none'
                            }
                        })
                    })

                }
            }
        })
        // ?????????????????????
        myajax({
            method: 'GET',
            data: {
                userId: thesuerid,
            },
            url: 'http://175.178.193.182:8080/article/getStar',
            success: function (res) {
                // console.log(res.staredArticles.length);
                collectnum.innerHTML = '(' + res.staredArticles.length + ')';
                var html = ''
                var html3 = ''
                for (let i = 0; i < res.staredArticles.length; i++) {
                    var result = res.staredArticles[i];
                    html += '<div class="collectbox">'
                    if (result.images[0]) {

                        html += '<img src="' + result.images[0] + '" alt="" class="imgpart" style="width: 315px;  "><span class="word"><img src="' + result.avatar + '" alt="" class="author-avatar">' + result.title + '</span><span class="author">' + result.authorName + '</span><span class="loveicon">???</span><span class="lovenum">' + result.likes + '</span>'
                        for (let k = 0; k < result.images.length; k++) {
                            html3 += '<li class=li-scroll><img src="' + result.images[k] + '" alt="" class="main-pic"></li>'
                        }
                    } else {
                        html += '<span class="word"><img src="' + result.avatar + '" alt="" class="author-avatar">' + result.title + '</span><span class="author">' + result.authorName + '</span><span class="loveicon">???</span><span class="lovenum">' + result.likes + '</span>';
                    }
                    html += '</div>'
                    ecollectall.innerHTML += '<div class="e-collect" style="display: none;" ><div class="e-all-top"><span class="sc-backpersonal">???</span><span class="e-share">???</span><img src="' + result.avatar + '" alt="" class="e-avatar"><span class="e-author">' + result.authorName + '</span><button class="e-follow"  authorid=' + result.authorId + '>??????</button></div><div class="sc-hiddenit" id="hiddenit"><ul class="sc-scroll" id="scroll">' + html3 + '</ul><ol class="sc-circle" id="circle"></ol></div><div class="e-databox"><div class="e-title">' + result.title + '</div><div class="e-content">' + result.content + '</div><div class="e-tag">#' + result.tags + '</div><div class="e-date">' + result.postDate + '</div><button class="e-dislike">??? ?????????</button></div><div class="e-allcomment"><div class="allcommentnum">???' + result.reviews + '?????????</div><div class="e-comment1"><img src="' + nowavatar + '" alt="" class="e-comment1-avatar"><input type="text" class="e-input1" placeholder="?????????????????????????????????~"><button id="sent-review" class="r-sentreview"  authorid="' + result.authorId + '" articleid="' + result.articleId + '">??????</button></div></div><div class="readcomment"></div><div class="e-commentall"><div class="e-comment2"><input type="text" class="e-input2" placeholder="??????????????????"><span class="ec-love" id="ec-icon">???</span><span class="ec-lovenum" id="ec-icon">' + result.likes + '</span><span class="ec-collect" id="ec-icon">???</span><span class="ec-collectnum" id="ec-icon">' + result.stars + '</span><span class="ec-comment" id="ec-icon">???</span><span class="ec-commentnum" id="ec-icon">' + result.reviews + '</span></div></div></div>'
                    // ?????????????????????(??????li???)
                    var hiddenit = document.querySelectorAll('.sc-hiddenit');
                    var ul = hiddenit[i].querySelector('.sc-scroll');
                    var ol = hiddenit[i].querySelector('.sc-circle');
                    for (let j = 0; j < ul.children.length; j++) {
                        var li = document.createElement('li');
                        // console.log(ul);            
                        li.setAttribute('index', j);
                        ol.appendChild(li);
                    }
                    html3 = ''
                }
                addcollect.innerHTML = html;
                // ????????????
                var ols = document.querySelectorAll('.sc-circle');
                var uls = document.querySelectorAll('.sc-scroll');
                for (let u = 0; u < ols.length; u++) {
                    if (ols[u].children[0]) {
                        ols[u].children[0].className = 'current';
                    }
                    ols[u].index = u;
                    for (let j = 0; j < ols[u].children.length; j++) {
                        ols[u].children[j].index = j;
                        ols[u].children[j].addEventListener('click', function () {
                            var nowindex = this.parentNode.index;
                            var index = this.getAttribute('index');
                            for (let k = 0; k < ols[nowindex].children.length; k++) {
                                ols[nowindex].children[k].className = '';
                            };
                            this.className = 'current';
                            var hiddenitWidth = -740;
                            animate(uls[nowindex], index * hiddenitWidth);
                        })
                    }
                }
                var allcollectbox = document.querySelectorAll('.collectbox');
                var alle_collect = document.querySelectorAll('.e-collect');
                var scbackpersonall = document.querySelectorAll('.sc-backpersonal');
                // ?????????????????? ??????
                for (let i = 0; i < allcollectbox.length; i++) {

                    allcollectbox[i].index = i;
                    scbackpersonall[i].index = i;
                    allcollectbox[i].addEventListener('click', function () {
                        allpersonal.style.display = "none";
                        for (let j = 0; j < allcollectbox.length; j++) {
                            alle_collect[j].style.display = "none";
                        }
                        emyarticleall.style.display = 'block';
                        alle_collect[this.index].style.display = "block";
                        scbackpersonall[this.index].addEventListener('click', function () {
                            emyarticleall.style.display = 'none';
                            alle_collect[this.index].style.display = "none";
                            allpersonal.style.display = "block";
                        })
                    })
                }
            }
        })

        // ?????????????????????
        myajax({
            method: 'GET',
            data: {
                userId: thesuerid
            },
            url: 'http://175.178.193.182:8080/article/getLike',
            success: function (res) {
                zanguonum.innerHTML = '(' + res.likedArticles.length + ')'
                var html = ''
                var html3 = ''
                for (let i = 0; i < res.likedArticles.length; i++) {
                    var result = res.likedArticles[i];
                    html += '<div class="othersbox">'
                    if (result.images[0]) {
                        html += '<img src="' + result.images[0] + '" alt="" class="imgpart" style="width: 315px;  "><span class="word"><img src="' + result.avatar + '" alt="" class="author-avatar">' + result.title + '</span><span class="author">' + result.authorName + '</span><span class="loveicon">???</span><span class="lovenum">' + result.likes + '</span>'
                        for (let k = 0; k < result.images.length; k++) {
                            html3 += '<li class=li-scroll><img src="' + result.images[k] + '" alt="" class="main-pic"></li>'
                        }
                    } else {
                        html += '<span class="word"><img src="' + result.avatar + '" alt="" class="author-avatar">' + result.title + '</span><span class="author">' + result.authorName + '</span><span class="loveicon">???</span><span class="lovenum">' + result.likes + '</span>';
                    }
                    html += '</div>'
                    ezanguoall.innerHTML += '<div class="e-zanguo" style="display: none;" ><div class="e-all-top"><span class="oe-backpersonal">???</span><span class="e-share">???</span><img src="' + result.avatar + '" alt="" class="e-avatar"><span class="e-author">' + result.authorName + '</span><button class="e-follow"  authorid=' + result.authorId + '>??????</button></div><div class="ope-hiddenit" id="hiddenit"><ul class="ope-scroll" id="scroll">' + html3 + '</ul><ol class="ope-circle" id="circle"></ol></div><div class="e-databox"><div class="e-title">' + result.title + '</div><div class="e-content">' + result.content + '</div><div class="e-tag">#' + result.tags + '</div><div class="e-date">' + result.postDate + '</div><button class="e-dislike">??? ?????????</button></div><div class="e-allcomment"><div class="allcommentnum">???' + result.reviews + '?????????</div><div class="e-comment1"><img src="' + nowavatar + '" alt="" class="e-comment1-avatar"><input type="text" class="e-input1 " placeholder="?????????????????????????????????~"><button id="sent-review" class="r-sentreview"  authorid="' + result.authorId + '" articleid="' + result.articleId + '">??????</button></div></div><div class="readcomment"></div><div class="e-commentall"><div class="e-comment2"><input type="text" class="e-input2" placeholder="??????????????????"><span class="ec-love" id="ec-icon">???</span><span class="ec-lovenum" id="ec-icon">' + result.likes + '</span><span class="ec-collect" id="ec-icon">???</span><span class="ec-collectnum" id="ec-icon">' + result.stars + '</span><span class="ec-comment" id="ec-icon">???</span><span class="ec-commentnum" id="ec-icon">' + result.reviews + '</span></div></div></div>'

                    // ?????????????????????(??????li???)
                    var hiddenit = document.querySelectorAll('.ope-hiddenit');
                    var ul = hiddenit[i].querySelector('.ope-scroll');
                    var ol = hiddenit[i].querySelector('.ope-circle');
                    for (let j = 0; j < ul.children.length; j++) {
                        var li = document.createElement('li');
                        // console.log(ul);            
                        li.setAttribute('index', j);
                        ol.appendChild(li);
                    }
                    html3 = ''
                }
                addzanguo.innerHTML = html;
                // ????????????
                var e_follow = document.querySelectorAll('.e-follow');
                for (let i = 0; i < e_follow.length; i++) {
                    var followid = e_follow[i].getAttribute('authorid');
                    e_follow[i].addEventListener('click', function () {
                        myajax({
                            method: 'POST',
                            url: 'http://175.178.193.182:8080/user/follow',
                            data: {
                                userId: thesuerid,
                                followerId: followid
                            },
                            success: function (res) {
                                if (res.status === 200) {
                                    // btnguanzhu[i].innerHTML = '?????????';
                                    e_follow[i].innerHTML = '?????????'
                                    e_follow[i].style.backgroundColor = '#fff';
                                } else {
                                    // console.log(result);
                                    myajax({
                                        method: 'POST',
                                        url: 'http://175.178.193.182:8080/user/cancelFollow',
                                        data: {
                                            userId: thesuerid,
                                            followerId: followid
                                        },
                                        success: function (res) {
                                            if (res.status === 200) {

                                                // btnguanzhu[this.index].innerHTML='?????????';
                                                e_follow[i].innerHTML = '??????'
                                                e_follow[i].style.backgroundColor = 'orange';
                                            }
                                        }
                                    })
                                }
                            }
                        })
                    })
                }
                // ?????????????????????

                for (let i = 0; i < e_follow.length; i++) {
                    var followid = e_follow[i].getAttribute('authorid');
                    myajax({
                        method: 'GET',
                        url: 'http://175.178.193.182:8080/user/fullInfo',
                        data: {
                            userId: followid
                        },
                        success: function (res) {
                            if (res.user.fans) {
                                for (let j = 0; j < res.user.fans.length; j++) {
                                    var fan = res.user.fans[j];
                                    if (thesuerid == fan) {
                                        e_follow[i].innerHTML = '?????????'
                                        e_follow[i].style.backgroundColor = '#fff'
                                    }
                                }
                            }
                        }
                    })
                }




                // ????????????
                var ols = document.querySelectorAll('.ope-circle');
                var uls = document.querySelectorAll('.ope-scroll');
                for (let u = 0; u < ols.length; u++) {
                    if (ols[u].children[0]) {
                        ols[u].children[0].className = 'current';
                    }
                    ols[u].index = u;
                    for (let j = 0; j < ols[u].children.length; j++) {
                        ols[u].children[j].index = j;
                        // console.log(ols[i].children[j]);
                        ols[u].children[j].addEventListener('click', function () {
                            var nowindex = this.parentNode.index;
                            var index = this.getAttribute('index');
                            for (let k = 0; k < ols[nowindex].children.length; k++) {
                                ols[nowindex].children[k].className = '';
                            };
                            this.className = 'current';
                            var hiddenitWidth = -740;
                            animate(uls[nowindex], index * hiddenitWidth);
                        })
                    }
                }
                var allothersbox = document.querySelectorAll('.othersbox');
                var alle_myzanguo = document.querySelectorAll('.e-zanguo');
                var oebackpersonall = document.querySelectorAll('.oe-backpersonal');
                // ?????????????????? ??????
                for (let i = 0; i < allothersbox.length; i++) {
                    allothersbox[i].index = i;
                    oebackpersonall[i].index = i;
                    allothersbox[i].addEventListener('click', function () {
                        allpersonal.style.display = "none";
                        for (let j = 0; j < allothersbox.length; j++) {
                            alle_myzanguo[j].style.display = "none";
                        }
                        emyarticleall.style.display = 'block';
                        alle_myzanguo[this.index].style.display = "block";
                        oebackpersonall[this.index].addEventListener('click', function () {
                            emyarticleall.style.display = 'none';
                            alle_myzanguo[this.index].style.display = "none";
                            allpersonal.style.display = "block";
                        })
                    })
                }
            }
        })
        // ?????????????????????
        myajax({
            method: 'GET',
            data: {
                userId: thesuerid
            },
            url: 'http://175.178.193.182:8080/notice/article/like',
            success: function (res) {
                var html = ''
                for (let i = 0; i < res.like.length; i++) {
                    html += ''
                    if (res.like[i].articleInfo.images[0]) {
                        html += '<div class="eachpraise"><img src="' + res.like[i].userInfo.avatar + '" alt="" class="praiser-avatar"><span class="praiser-name">' + res.like[i].userInfo.nickname + '</span><span class="praise-words">??????????????????</span><img src="' + res.like[i].articleInfo.images[0] + '" alt="" class="praise-artimg"><span class="praise-right">></span></div>'
                    } else {
                        html += '<div class="eachpraise"><img src="' + res.like[i].userInfo.avatar + '" alt="" class="praiser-avatar"><span class="praiser-name">' + res.like[i].userInfo.nickname + '</span><span class="praise-words">??????????????????</span><span class="praise-right">></span></div>';
                    }
                    html += ''
                }
                getpraise.innerHTML = html;
            }
        })
        // ?????????????????????

        myajax({
            method: 'GET',
            data: {
                userId: thesuerid
            },
            url: 'http://175.178.193.182:8080/notice/comment',
            success: function (res) {
                var html = ''
                for (let i = 0; i < res.like.length; i++) {
                    html += ''
                    if (res.like[i].articleInfo.images[0]) {
                        html += '<div class="eachpraise"><img src="' + res.like[i].userInfo.avatar + '" alt="" class="praiser-avatar"><span class="praiser-name">' + res.like[i].userInfo.nickname + '</span><span class="praise-words">?????????????????????</span><img src="' + res.like[i].articleInfo.images[0] + '" alt="" class="praise-artimg"><span class="praise-right">></span></div>'
                    } else {
                        html += '<div class="eachpraise"><img src="' + res.like[i].userInfo.avatar + '" alt="" class="praiser-avatar"><span class="praiser-name">' + res.like[i].userInfo.nickname + '</span><span class="praise-words">?????????????????????</span><span class="praise-right">></span></div>';
                    }
                    html += ''
                }
                reviewme.innerHTML = html;
            }
        })

        // ??????????????????????????????
        myajax({
            method: 'GET',
            data: {
                userId: thesuerid
            },
            url: 'http://175.178.193.182:8080/notice/article/star',
            success: function (res) {
                var html = ''
                for (let i = 0; i < res.star.length; i++) {
                    html += ''
                    if (res.star[i].articleInfo.images[0]) {
                        html += '<div class="eachpraise"><img src="' + res.star[i].userInfo.avatar + '" alt="" class="praiser-avatar"><span class="praiser-name">' + res.star[i].userInfo.nickname + '</span><span class="praise-words">?????????????????????</span><img src="' + res.star[i].articleInfo.images[0] + '" alt="" class="praise-artimg"><span class="praise-right">></span></div>'
                    } else {
                        html += '<div class="eachpraise"><img src="' + res.star[i].userInfo.avatar + '" alt="" class="praiser-avatar"><span class="praiser-name">' + res.star[i].userInfo.nickname + '</span><span class="praise-words">?????????????????????</span><span class="praise-right">></span></div>';
                    }
                    html += ''
                }
                getcollect.innerHTML = html;
            }
        })
        // ??????????????????
        myajax({
            method: 'GET',
            url: 'http://175.178.193.182:8080/user/followerList',
            data: {
                userId: thesuerid
            },
            success: function (res) {
                if (res.status === 200) {
                    for (let i = 0; i < res.followsList.length; i++) {
                        var result = res.followsList[i];
                        attentionmain.innerHTML += '<div class="s-auser" userid="' + result.userId + '"><img src="' + result.avatar + ' " alt="" class="s-useravarar"><span class="s-username">' + result.nickname + '</span><button class="s-yiguanzhu">?????????</button></div>'
                        var followbtn = document.querySelectorAll('.s-yiguanzhu');
                        myajax({
                            method: 'GET',
                            data: {
                                userId: result.userId
                            },
                            url: 'http://175.178.193.182:8080/user/fullInfo',
                            success: function (res) {
                                for (let j = 0; j < res.user.follows.length; j++) {
                                    if (thesuerid == res.user.follows[j]) {
                                        followbtn[i].innerHTML = '????????????';
                                        followbtn[i].style.color = ''
                                    }
                                }
                            }
                        })
                    }
                }
            }
        })
        // ??????????????????
        myajax({
            method: 'GET',
            url: 'http://175.178.193.182:8080/user/fanList',
            data: {
                userId: thesuerid
            },
            success: function (res) {
                if (res.status === 200) {
                    if (res.fansList[0]) {
                        for (let i = 0; i < res.fansList.length; i++) {
                            var result = res.fansList[i];
                            fansmain.innerHTML += '<div class="f-auser"><img src="' + result.avatar + ' " alt="" class="f-useravatar"><span class="f-username">' + result.nickname + '</span><button class="f-yiguanzhu">?????????</button></div>'
                            var followbtn = document.querySelectorAll('.f-yiguanzhu');
                            myajax({
                                method: 'GET',
                                data: {
                                    userId: result.userId
                                },
                                url: 'http://175.178.193.182:8080/user/fullInfo',
                                success: function (res) {
                                    for (let j = 0; j < res.user.follows.length; j++) {
                                        if (thesuerid == res.user.follows[j]) {
                                            followbtn[i].innerHTML = '????????????';
                                            followbtn[i].style.color = ''
                                        }
                                    }
                                }
                            })
                        }
                    } else {
                        fansmain.innerHTML = '</br>???????????????';
                    }
                }
            }
        })
        // ??????????????????
        myajax({
            method: 'GET',
            url: 'http://175.178.193.182:8080/getLoginStatus',
            data: {
                userId: thesuerid
            },
            success: function (res) {
                if (res.status === 200) {
                    // console.log(res);
                    // alert('1');
                }
            }
        })
    }
    btn.addEventListener('click', throttle(login, 800));
    var thesuerid = localStorage.getItem('userId');
    // ????????????
    logoutbtn.addEventListener('click', function () {
        var thesuerid = localStorage.getItem('userId');
        myajax({
            method: 'POST',
            url: 'http://175.178.193.182:8080/logout',
            data: {
                userId: thesuerid
            },
            success: function (res) {
                //????????????????????????
                // console.log(res);
                if (res.status === 200) {
                    alllogin.style.display = 'block';
                    allpersonal.style.display = 'none';
                    localStorage.removeItem('userId');
                    localStorage.removeItem('nowavatar');
                    // localStorage.clear();
                    // Storage.removeItem('userId');
                }
            }
        })
    })
    var nowavatar = localStorage.getItem('nowavatar');
    editavatar.addEventListener('click', function () {
        avatarfile.click();
    })
    // ????????????
    avatarfile.addEventListener('change', function () {
        var files1 = avatarfile.files;
        // console.log(files1[0].name);
        // editavatar.src='img/'+files1[0].name;
        var imgvalue = localStorage.getItem('imgsrc');
        console.log(imgvalue);
        if (files1.length <= 0) {
            alert('???????????????????????????')
        }

        var fd1 = new FormData()
        fd1.append('userId', thesuerid)
        fd1.append('avatar', files1[0])
        fd1.append('backGroundPicture', files1[0])
        var xhr = new XMLHttpRequest()
        xhr.open('POST', 'http://175.178.193.182:8080/user/upload')
        xhr.send(fd1);
        xhr.onreadystatechange = function (e) {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var data = JSON.parse(xhr.responseText);
                if (data.status === 200) {
                    console.log(data.avatar);
                    localStorage.setItem('avatarvalue', data.avatar)
                    avatarimg.src = data.avatar;
                    editavatar.src = data.avatar;
                    localStorage.setItem('theavatar', data.avatar)//??????????????????                   
                    // console.log(data.avatar);
                }
            }
        }
    })
    // ?????????????????????????????????????????????
    backbtnedit.addEventListener('click', function () {
        alledit.style.display = 'none';
        allpersonal.style.display = 'block';
    })
    // ????????????????????????
    myajax({
        method: 'GET',
        url: 'http://175.178.193.182:8080/article/getHomePage',
        success: function (res) {
            var html3 = ''
            for (let i = 0; i < res.pages.??????.length; i++) {
                var result = res.pages.??????[i];
                if (result.images[0]) {
                    for (let k = 0; k < result.images.length; k++) {
                        html3 += '<li class=li-scroll><img src="' + result.images[k] + '" alt="" class="main-pic"></li>'
                    }
                    allrecommend.innerHTML += '<div class="abox" authorid="' + result.authorId + '" articleid="' + result.articleId + '"><img src="' + result.images[0] + '" alt="" class="imgpart" style="width: 315px;  "><span class="word">' + result.title + '<img src="' + result.avatar + '" alt="" class="author-avatar"></span><span class="author">' + result.authorName + '</span><span class="r-loveicon"id="loveicon" articleid=' + result.articleId + '>???</span><span class="lovenum">' + result.likes + '</span></div>'
                } else {
                    allrecommend.innerHTML += '<div class="abox" authorid="' + result.authorId + '" articleid="' + result.articleId + '"><span class="word">' + result.title + '<img src="' + result.avatar + '" alt="" class="author-avatar"></span><span class="author">' + result.authorName + '</span><span class="r-loveicon" id="loveicon" articleid="' + result.articleId + '">???</span><span class="lovenum">' + result.likes + '</span></div>'
                }
                eachrecommend.innerHTML += '<div class="e-all" id="e-all"  style="display: none;" ><div id="mark-input" class="r-mark-input" ><input class="child-review" placeholder="????????????"><button class="sentchildreview">??????</button></div><div class="e-all-top"><span class="e-backhome" id="e-backhome" >???</span><span class="e-share">???</span><img src="' + result.avatar + '" alt="" class="e-avatar"><span class="e-author">' + result.authorName + '</span><button class="e-follow" authorid=' + result.authorId + '>??????</button></div><div class="r-hiddenit" id="hiddenit"><ul class="r-scroll" id="scroll">' + html3 + '</ul><ol class="r-circle" id="circle"></ol></div><div class="e-databox"><div class="e-title">' + result.title + '</div><div class="e-content">' + result.content + '</div><div class="e-tag">#' + result.tags + '</div><div class="e-date">' + result.postDate + '</div><button class="e-dislike">??? ?????????</button></div><div class="e-allcomment"><div class="allcommentnum">???' + result.reviews + '?????????</div><div class="e-comment1"><img src="' + nowavatar + '" alt="" class="e-comment1-avatar"><input type="text" class="e-input1 r-reviewinput" authroid="' + result.authorId + '" articleid="' + result.articleId + '" placeholder="?????????????????????????????????~"><button id="sent-review" class="r-sentreview" authorid="' + result.authorId + '" articleid="' + result.articleId + '">??????</button></div></div><div class="readcomment"></div><div class="e-commentall"><div class="e-comment2"><input type="text" class="e-input2" placeholder="??????????????????"><span class="ec-love r-loveicon" id="ec-icon" articleid="' + result.articleId + '">???</span><span class="ec-lovenum"  id="ec-icon" articleid=' + result.articleId + '>' + result.likes + '</span><span class="ec-collect r-collecticon" id="ec-icon" articleid="' + result.articleId + '">???</span><span class="ec-collectnum" id="ec-icon">' + result.stars + '</span><span class="ec-comment" id="ec-icon">???</span><span class="ec-commentnum" id="ec-icon">' + result.reviews + '</span></div></div></div>'
                // ?????????????????????(??????li)
                var hiddenit = document.querySelectorAll('.r-hiddenit');
                var ul = hiddenit[i].querySelector('.r-scroll');
                var ol = hiddenit[i].querySelector('.r-circle');
                for (let j = 0; j < ul.children.length; j++) {
                    var li = document.createElement('li');
                    // console.log(ul);            
                    li.setAttribute('index', j);
                    ol.appendChild(li);
                }
                html3 = ''
            }
            // ????????????
            var e_follow = eachrecommend.querySelectorAll('.e-follow');
            for (let i = 0; i < e_follow.length; i++) {
                var followid = e_follow[i].getAttribute('authorid');
                e_follow[i].addEventListener('click', function () {
                    myajax({
                        method: 'POST',
                        url: 'http://175.178.193.182:8080/user/follow',
                        data: {
                            userId: thesuerid,
                            followerId: followid
                        },
                        success: function (res) {
                            if (res.status === 200) {

                                // btnguanzhu[i].innerHTML = '?????????';
                                e_follow[i].innerHTML = '?????????'
                                e_follow[i].style.backgroundColor = '#fff';
                            } else {
                                // console.log(result);
                                myajax({
                                    method: 'POST',
                                    url: 'http://175.178.193.182:8080/user/cancelFollow',
                                    data: {
                                        userId: thesuerid,
                                        followerId: followid
                                    },
                                    success: function (res) {
                                        if (res.status === 200) {

                                            // btnguanzhu[this.index].innerHTML='?????????';
                                            e_follow[i].innerHTML = '??????'
                                            e_follow[i].style.backgroundColor = 'orange';
                                        }
                                    }
                                })
                            }
                        }
                    })
                })
            }
            // ?????????????????????
            for (let i = 0; i < e_follow.length; i++) {
                var followid = e_follow[i].getAttribute('authorid');
                myajax({
                    method: 'GET',
                    url: 'http://175.178.193.182:8080/user/fullInfo',
                    data: {
                        userId: followid
                    },
                    success: function (res) {
                        if (res.user.fans) {
                            for (let j = 0; j < res.user.fans.length; j++) {
                                var fan = res.user.fans[j];
                                if (thesuerid == fan) {
                                    e_follow[i].innerHTML = '?????????'
                                    e_follow[i].style.backgroundColor = '#fff'
                                }
                            }
                        }
                    }
                })
            }

            // ??????????????????
            var ols = document.querySelectorAll('.r-circle');
            var uls = document.querySelectorAll('.r-scroll');
            for (let u = 0; u < ols.length; u++) {
                ols[u].children[0].className = 'current';
                ols[u].index = u;
                for (let j = 0; j < ols[u].children.length; j++) {
                    ols[u].children[j].index = j;
                    // console.log(ols[i].children[j]);
                    ols[u].children[j].addEventListener('click', function () {
                        var nowindex = this.parentNode.index;
                        var index = this.getAttribute('index');
                        for (let k = 0; k < ols[nowindex].children.length; k++) {
                            ols[nowindex].children[k].className = '';
                        };
                        this.className = 'current';
                        var hiddenitWidth = -740;
                        animate(uls[nowindex], index * hiddenitWidth);
                    })
                }
            }
            let allarticlebox = document.querySelectorAll('.abox');
            let alle_all = document.querySelectorAll('.e-all');
            let ebackhomeall = document.querySelectorAll('.e-backhome');
            let e_avatar = document.querySelectorAll('.e-avatar');
            let readcomment = document.querySelectorAll('.readcomment');
            let r_sentreview = document.querySelectorAll('.r-sentreview');
            let r_reviewinput = document.querySelectorAll('.e-input1');
            // ?????????????????? ??????
            localStorage.setItem('p', 0);
            var p = localStorage.getItem('p');
            // ??????????????????????????????    ?????????????????????
            for (let i = 0; i < allarticlebox.length; i++) {
                allarticlebox[i].setAttribute('index', i);
                allarticlebox[i].addEventListener('click', function () {
                    var getauthorid = this.getAttribute('authorid');
                    localStorage.setItem('aboxindex', this.index);
                    var aboxindex = localStorage.getItem('aboxindex');
                    var getarticleid = this.getAttribute('articleid');
                    // ??????????????????
                    myajax({
                        method: 'GET',
                        data: {
                            articleId: getarticleid,
                            pages: 0
                        },
                        url: 'http://175.178.193.182:8080/review/byArticle',
                        success: function (res) {
                            // console.log(res);
                            let theinnerHTML = ''
                            let childhtml = ''
                            for (let j = 0; j < res.reviews.length; j++) {
                                let result = res.reviews[j];
                                for (let k = 0; k < res.reviews[j].reviewList.length; k++) {
                                    chiildresult = res.reviews[j].reviewList[k]
                                    childhtml += '<div class="ej-eachcomment" index="' + k + '" reviewerid="' + chiildresult.authorId + '"><img src="img/backgroundimg/loginbgcimg.jpg"alt="" class="ej-commentor-avatar"><span class="ej-commentor-name">' + chiildresult.authorId + '</span><span class="ej-comment-main">' + chiildresult.content + '</span><span class="ej-comment-date">' + chiildresult.postDate + '</span><span class="comment-love">???</span><span class="comment-lovenum">' + chiildresult.likes + '</span></div>'
                                }
                                theinnerHTML += '<div class="eachcomment" reviewerid="' + result.authorId + '" thereviewid="' + result.reviewId + '"><img src=""alt="" class="commentor-avatar" index="' + j + '"><span class="commentor-name" index="' + j + '">' + result.authorId + '</span><span class="comment-main">' + result.content + '</span><span class="comment-date">' + result.postDate + '</span><span class="comment-love"  reviewid="' + result.reviewId + '">???</span><span class="comment-lovenum">' + result.likes + '</span>' + childhtml + '</div>';
                                childhtml = '';
                            }
                            readcomment[i].innerHTML = theinnerHTML;
                            let reviewbox = readcomment[i].querySelectorAll('.eachcomment');
                            let reviewer_avatar = readcomment[i].querySelectorAll('.commentor-avatar');
                            let review_name = readcomment[i].querySelectorAll('.commentor-name');
                            let markinput = document.querySelectorAll('.r-mark-input');
                            let childinput = document.querySelectorAll('.child-review');
                            let sentchildreview = document.querySelectorAll('.sentchildreview');
                            // console.log(childinput[i]);
                            for (let j = 0; j < res.reviews.length; j++) {
                                // result.authorId????????????????????????????????? 
                                let nowj = review_name[j].getAttribute('index');
                                let nowreviewer_avatar = reviewer_avatar[nowj];
                                let nowreview_name = review_name[nowj];
                                let reviewerid = reviewbox[nowj].getAttribute('reviewerid');
                                myajax({
                                    method: 'GET',
                                    data: {
                                        userId: reviewerid
                                    },
                                    url: 'http://175.178.193.182:8080/user/fullInfo',
                                    success: function (ee) {
                                        // console.log(nowreviewer_avatar);
                                        nowreviewer_avatar.src = ee.user.avatar;
                                        nowreview_name.innerHTML = ee.user.nickname;
                                        // j = 0;
                                    }
                                })

                                let childbox = reviewbox[j].querySelectorAll('.ej-eachcomment');
                                for (let k = 0; k < childbox.length; k++) {
                                    let childavatar = childbox[k].querySelector('.ej-commentor-avatar');
                                    let childname = childbox[k].querySelector('.ej-commentor-name');
                                    let childid = childbox[k].getAttribute('reviewerid');

                                    myajax({
                                        method: 'GET',
                                        data: {
                                            userId: childid
                                        },
                                        url: 'http://175.178.193.182:8080/user/fullInfo',
                                        success: function (ee) {
                                            childavatar.src = ee.user.avatar;
                                            childname.innerHTML = ee.user.nickname;
                                            // j = 0;
                                        }
                                    })
                                }
                                // ??????????????????
                                reviewbox[j].addEventListener('click', function () {
                                    var replyToUserId = r_sentreview[i].getAttribute('authorid');
                                    var replyToArticleId = r_sentreview[i].getAttribute('articleid');
                                    let parentreview = this.getAttribute('thereviewid');

                                    markinput[i].style.display = 'block';
                                    sentchildreview[i].addEventListener('click', function (e) {
                                        e.stopPropagation();
                                        console.log(childinput[i].value);
                                        if (childinput[i].value) {

                                            myajax({
                                                method: 'POST',
                                                data: {
                                                    replyToUserId: replyToUserId,
                                                    replyToArticleId: replyToArticleId,
                                                    parentReviewId: parentreview,
                                                    authorId: thesuerid,
                                                    content: childinput[i].value
                                                },
                                                url: 'http://175.178.193.182:8080/review',
                                                success: function (res) {
                                                    console.log(res);
                                                    markinput[i].style.display = 'none';
                                                    var div = document.createElement('div');
                                                    div.className = 'child-review';
                                                    div.innerHTML = '<div class="ej-eachcomment"><img src="img/backgroundimg/loginbgcimg.jpg"alt="" class="ej-commentor-avatar"><span class="ej-commentor-name">' + thesuerid + '</span><span class="ej-comment-main">' + childinput[i].value + '</span><span class="ej-comment-date">??????</span><span class="comment-love reviewid="' + result.reviewId + '">???</span><span class="comment-lovenum">0</span></div>'
                                                    readcomment[i].insertBefore(div, reviewbox[j + 1])
                                                    markinput[i].style.display = 'none';
                                                }
                                            })
                                        }
                                    })
                                })
                            }
                            // ????????????
                            var love_review = document.querySelectorAll('.comment-love')
                            if (love_review[0]) {
                                for (let j = 0; j < love_review.length; j++) {
                                    // console.log(love_review[j]);
                                    love_review[j].addEventListener('click', function () {
                                        var reviewid = this.getAttribute('reviewid');
                                        myajax({
                                            method: 'POST',
                                            data: {
                                                userId: thesuerid,
                                                reviewId: reviewid
                                            },
                                            url: 'http://175.178.193.182:8080/review/like',
                                            success: function (res) {
                                                if (res.status === 200) {
                                                    console.log('????????????');
                                                } else {
                                                    // ??????????????????
                                                    myajax({
                                                        method: 'POST',
                                                        data: {
                                                            userId: thesuerid,
                                                            reviewId: reviewid
                                                        },
                                                        url: 'http://175.178.193.182:8080/review/unlike',
                                                        success: function (res) {
                                                            console.log(res);
                                                            console.log('??????????????????');
                                                        }
                                                    })
                                                }
                                            }
                                        })
                                        this.style.color = 'red';
                                    })
                                }
                            }
                        }
                    })

                    // ????????????
                    r_sentreview[i].addEventListener('click', function (e) {
                        e.stopPropagation();
                        var replyToUserId = this.getAttribute('authorid');
                        var replyToArticleId = this.getAttribute('articleid');
                        var content = r_reviewinput[i].value;
                        if (r_reviewinput[i].value) {
                            myajax({
                                method: 'POST',
                                data: {
                                    replyToUserId: replyToUserId,
                                    replyToArticleId: replyToArticleId,
                                    authorId: thesuerid,
                                    content: content
                                },
                                url: 'http://175.178.193.182:8080/review',
                                success: function (res) {
                                    console.log(res);
                                }
                            })
                            readcomment[i].innerHTML += '<div class="eachcomment"><img src="img/backgroundimg/loginbgcimg.jpg"alt="" class="commentor-avatar"><span class="commentor-name">' + thesuerid + '</span><span class="comment-main">' + content + '</span><span class="comment-date">??????</span><span class="comment-love reviewid="' + result.reviewId + '">???</span><span class="comment-lovenum">0</span></div>'
                        }

                    })
                    // ????????????
                    // ??????????????????
                    myajax({
                        method: 'GET',
                        data: {
                            userId: getauthorid
                        },
                        url: 'http://175.178.193.182:8080/user/fullInfo',
                        success: function (data) {
                            p_eachrecommend.innerHTML += '<div class="other-personal" id="other-personal"><div class="personal-top"><span id="back-article" class="back-article">???</span><span  class="share">???</span></div><div class="avatar-name"><div class="myavatar"><img  src="' + data.user.avatar + '" id="avatar" alt=""></div><div class="p-username">' + data.user.nickname + '</div></div><div class="givehigh"><div class="three-data"><div  class="attention" id="p-data"><span class="num-attention" id="p-datanum">&ensp;' + data.user.follows.length + '</span></br><span class="guanzhu">??????</span></div><div class="fans" id="p-data"><span class="num-fans" id="p-datanum">&ensp;' + data.user.fans.length + '</span></br><span class="fensi">??????</span></div><div class="collect" id="p-data"><span class="num-collect" id="p-datanum">&ensp;&ensp;' + data.user.likedArticles.length + '</span></br><span class="shoucang">???????????????</span></div><button class="edit-btn">?????????</button></div><div class="person-tag"><span class="p-tag p-tag-current r-articlebtn" id="notebtn">??????</span><span class="p-tag r-collectbtn" id="collectbtn">??????</span><span class="p-tag r-zanguobtn" id="zanguobtn">??????</span></div></div><div class="r-addmyarticle" id="addmyarticle" index="' + p + '"></div><div class="r-addcollect" index="' + p + '" id="addcollect" style="display: none;"></div><div class="r-addzanguo" index="' + p + '" id="addzanguo" style="display: none;"></div></div>'
                            var backarticle = document.querySelectorAll('.back-article');

                            // ??????????????????
                            var r_addmyarticle = document.querySelectorAll('.r-addmyarticle');
                            var r_addcollect = document.querySelectorAll('.r-addcollect');
                            var r_addzanguo = document.querySelectorAll('.r-addzanguo');
                            var r_articlebtn = document.querySelectorAll('.r-articlebtn');
                            var r_collectbtn = document.querySelectorAll('.r-collectbtn');
                            var r_zanguobtn = document.querySelectorAll('.r-zanguobtn');
                            myajax({
                                method: 'GET',
                                data: {
                                    authorId: getauthorid
                                },
                                url: 'http://175.178.193.182:8080/article/byAuthor',
                                success: function (res) {
                                    var html = ''
                                    var html3 = ''
                                    for (let r = 0; r < res.articles.length; r++) {
                                        var result = res.articles[r]
                                        html += '<div class="mybox">'
                                        if (result.images[0]) {
                                            html += '<img src="' + result.images[0] + '" alt="" class="imgpart" style="width: 315px;  "><span class="word">' + result.title + '</span><span class="loveicon">???</span><span class="lovenum">' + result.likes + '</span>'

                                        } else {
                                            html += '<span class="word">' + result.title + '</span><span class="loveicon">???</span><span class="lovenum">' + result.likes + '</span>';
                                        }
                                        html += '</div>'
                                        r_addmyarticle[p].innerHTML = html
                                    }
                                }
                            })
                            // ???????????????????????????
                            myajax({
                                method: 'GET',
                                data: {
                                    userId: getauthorid
                                },
                                url: 'http://175.178.193.182:8080/article/getStar',
                                success: function (res) {
                                    var html = ''
                                    for (let r = 0; r < res.staredArticles.length; r++) {
                                        var result = res.staredArticles[r]
                                        html += '<div class="mybox">'
                                        if (result.images[0]) {
                                            html += '<img src="' + result.images[0] + '" alt="" class="imgpart" style="width: 315px;  "><span class="word">' + result.title + '</span><span class="loveicon">???</span><span class="lovenum">' + result.likes + '</span>'

                                        } else {
                                            html += '<span class="word">' + result.title + '</span><span class="loveicon">???</span><span class="lovenum">' + result.likes + '</span>';
                                        }
                                        html += '</div>'
                                        r_addcollect[p].innerHTML = html
                                    }
                                }
                            })
                            // ???????????????????????????
                            myajax({
                                method: 'GET',
                                data: {
                                    userId: getauthorid
                                },
                                url: 'http://175.178.193.182:8080/article/getLike',
                                success: function (res) {
                                    var html = ''
                                    for (let r = 0; r < res.likedArticles.length; r++) {
                                        var result = res.likedArticles[r]
                                        html += '<div class="mybox">'
                                        if (result.images[0]) {
                                            html += '<img src="' + result.images[0] + '" alt="" class="imgpart" style="width: 315px;  "><span class="word">' + result.title + '</span><span class="loveicon">???</span><span class="lovenum">' + result.likes + '</span>'

                                        } else {
                                            html += '<span class="word">' + result.title + '</span><span class="loveicon">???</span><span class="lovenum">' + result.likes + '</span>';
                                        }
                                        html += '</div>'
                                        r_addzanguo[p].innerHTML = html
                                    }
                                }
                            })

                            // ????????????????????? ?????? ?????? ??????????????????

                            // ??????

                            r_articlebtn[p].addEventListener('click', function () {
                                console.log(this);
                                r_addmyarticle[p].style.display = 'block';
                                r_addcollect[p].style.display = 'none';
                                r_addzanguo[p].style.display = 'none';
                                r_articlebtn[p].className = 'p-tag p-tag-current r-articlebtn';
                                r_collectbtn[p].className = 'p-tag r-collectbtn';
                                r_zanguobtn[p].className = 'p-tag r-zanguobtn';
                            })

                            // ??????
                            r_collectbtn[p].addEventListener('click', function () {
                                r_addmyarticle[p].style.display = 'none';
                                r_addcollect[p].style.display = 'block';
                                r_addzanguo[p].style.display = 'none';
                                r_articlebtn[p].className = 'p-tag  r-articlebtn';
                                r_collectbtn[p].className = 'p-tag r-collectbtn p-tag-current';
                                r_zanguobtn[p].className = 'p-tag r-zanguobtn';
                            })
                            // ??????
                            r_zanguobtn[p].addEventListener('click', function () {
                                r_addmyarticle[p].style.display = 'none';
                                r_addcollect[p].style.display = 'none';
                                r_addzanguo[p].style.display = 'block';
                                r_articlebtn[p].className = 'p-tag  r-articlebtn';
                                r_collectbtn[p].className = 'p-tag r-collectbtn ';
                                r_zanguobtn[p].className = 'p-tag r-zanguobtn p-tag-current';
                            })
                            console.log(backarticle[p]);
                            // ????????????
                            backarticle[p].addEventListener('click', function () {
                                p_eachrecommend.lastChild.style.display = 'none';
                                p_eachrecommend.style.display = 'none';
                                alle_all[aboxindex].style.display = 'block'
                                localStorage.removeItem('aboxindex');
                                p++;
                            })

                        }
                    })
                    e_avatar[this.index].addEventListener('click', function () {
                        p_eachrecommend.style.display = 'block';
                        p_eachrecommend.lastChild.style.display = 'block';
                        alle_all[this.index].style.display = 'none'
                    })

                })
            }
            // ???????????????????????????
            for (let i = 0; i < allarticlebox.length; i++) {
                allarticlebox[i].index = i;
                ebackhomeall[i].index = i;
                e_avatar[i].index = i;
                allarticlebox[i].addEventListener('click', function () {
                    var getauthorid = this.getAttribute('authorid');
                    homepart.style.display = "none";
                    for (let j = 0; j < allarticlebox.length; j++) {
                        alle_all[j].style.display = "none";
                    }
                    eachrecommend.style.display = 'block';
                    alle_all[this.index].style.display = "block";
                    ebackhomeall[this.index].addEventListener('click', function () {
                        eachrecommend.style.display = 'none';
                        alle_all[this.index].style.display = "none";
                        homepart.style.display = "block";
                        theinnerHTML = '';
                        childhtml = '';
                    })
                })
            }
            var r_loveicon = document.querySelectorAll('.r-loveicon');
            var r_collecticon = document.querySelectorAll('.r-collecticon');

            // ?????????????????????
            for (let k = 0; k < r_loveicon.length; k++) {
                // ??????
                r_loveicon[k].addEventListener('click', function (e) {
                    e.stopPropagation();
                    var loveid = this.getAttribute('articleid');
                    myajax({
                        method: 'POST',
                        url: 'http://175.178.193.182:8080/article/like',
                        data: {
                            userId: thesuerid,
                            articleId: loveid
                        },
                        success: function (res) {
                            if (res.status === 200) {
                                console.log('????????????');
                            } else {
                                // ????????????
                                myajax({
                                    method: 'POST',
                                    url: 'http://175.178.193.182:8080/article/unlike',
                                    data: {
                                        userId: thesuerid,
                                        articleId: loveid
                                    },
                                    success: function (ress) {
                                        if (ress.status === 200) {
                                            console.log('??????????????????');
                                        }
                                    }
                                })
                            }
                        }
                    })
                })
            }
            // ?????????????????????
            for (let i = 0; i < r_loveicon.length; i++) {
                let loveid = r_loveicon[i].getAttribute('articleid');
                myajax({
                    method: 'GET',
                    data: {
                        articleId: loveid
                    },
                    url: 'http://175.178.193.182:8080/article/byId',
                    success: function (res) {
                        for (let j = 0; j < res.article.likerList.length; j++) {
                            if (thesuerid === res.article.likerList[j]) {
                                r_loveicon[i].style.color = 'red';
                            }
                        }
                    }
                })
            }
            // ?????????????????????
            for (let i = 0; i < r_collecticon.length; i++) {
                let collectid = r_collecticon[i].getAttribute('articleid');
                myajax({
                    method: 'GET',
                    data: {
                        articleId: collectid
                    },
                    url: 'http://175.178.193.182:8080/article/byId',
                    success: function (res) {
                        for (let j = 0; j < res.article.starerList.length; j++) {
                            if (thesuerid === res.article.starerList[j]) {
                                r_collecticon[i].style.color = 'yellow';
                            }
                        }
                    }
                })
            }
            // ?????????????????????
            for (let k = 0; k < r_collecticon.length; k++) {
                r_collecticon[k].addEventListener('click', function (e) {
                    var collectid = this.getAttribute('articleid');
                    e.stopPropagation();
                    myajax({
                        method: 'POST',
                        url: 'http://175.178.193.182:8080/article/star',
                        data: {
                            userId: thesuerid,
                            articleId: collectid
                        },
                        success: function (ress) {
                            if (ress.status === 200) {
                                console.log('????????????');
                            } else {
                                // ??????????????????
                                myajax({
                                    method: 'POST',
                                    url: 'http://175.178.193.182:8080/article/unstar',
                                    data: {
                                        userId: thesuerid,
                                        articleId: collectid
                                    },
                                    success: function (ress) {
                                        if (ress.status === 200) {
                                            console.log('??????????????????');
                                        }
                                    }
                                })
                            }
                        }
                    })
                    this.className = 'ec-collect toyellow'
                })
            }
        }
    })

    // ????????????????????????
    myajax({
        method: 'GET',
        url: 'http://175.178.193.182:8080/article/getHomePage',
        success: function (res) {
            var html3 = ''
            for (let i = 0; i < res.pages.??????.length; i++) {
                var result = res.pages.??????[i];
                if (result.images[0]) {
                    for (let k = 0; k < result.images.length; k++) {
                        html3 += '<li class=li-scroll><img src="' + result.images[k] + '" alt="" class="main-pic"></li>'
                    }
                    alltravel.innerHTML += '<div class="t-abox" id="abox" authorid="' + result.authorId + '" articleid="' + result.articleId + '" index="' + i + '"><img src="' + result.images[0] + '" alt="" class="imgpart" style="width: 315px;  "><span class="word">' + result.title + '<img src="' + result.avatar + '" alt="" class="author-avatar"></span><span class="author">' + result.authorName + '</span><span class="t-loveicon" id="loveicon" articleid="' + result.articleId + '">???</span><span class="lovenum">' + result.likes + '</span></div>'
                } else {
                    alltravel.innerHTML += '<div class="t-abox" id="abox" authorid="' + result.authorId + '" articleid="' + result.articleId + '" index="' + i + '"><span class="word">' + result.title + '<img src="' + result.avatar + '" alt="" class="author-avatar"></span><span class="author">' + result.authorName + '</span><span class="t-loveicon" id="loveicon" articleid="' + result.articleId + '">???</span><span class="lovenum">' + result.likes + '</span></div>' + '<div class="te-all" style="display: none;" ><div class="e-all-top"><span  id="e-backhome" class="te-backhome">???</span><span class="e-share">???</span><img src="' + result.avatar + '" alt="" class="t-avatar" id="e-avatar"><span class="e-author">' + result.authorName + '</span><button class="e-follow" authorid=' + result.authorId + '>??????</button></div><div class="e-picbox"><img src="' + result.images[0] + '" alt="" class="main-pic"></div><div class="e-databox"><div class="e-title">' + result.title + '</div><div class="e-content">' + result.content + '</div><div class="e-tag">#' + result.tags + '</div><div class="e-date">' + result.postDate + '</div><button class="e-dislike">??? ?????????</button></div><div class="e-allcomment"><div class="allcommentnum">???' + result.reviews + '?????????</div><div class="e-comment1"><img src="' + nowavatar + '" alt="" class="e-comment1-avatar"><input type="text" class="e-input1 t-reviewinput" placeholder="?????????????????????????????????~"><button id="sent-review" class="r-sentreview" authorid="' + result.authorId + '" articleid="' + result.articleId + '">??????</button></div></div><div class="readcomment"></div><div class="e-commentall"><div class="e-comment2"><input type="text" class="e-input2" placeholder="??????????????????"><span class="ec-love t-loveicon" id="ec-icon" articleid="' + result.articleId + '">???</span><span class="ec-lovenum" id="ec-icon">' + result.likes + '</span><span class="ec-collect t-collecticon" articleid="' + result.articleId + '" id="ec-icon">???</span><span class="ec-collectnum" id="ec-icon">' + result.stars + '</span><span class="ec-comment" id="ec-icon">???</span><span class="ec-commentnum" id="ec-icon">' + result.reviews + '</span></div></div></div>'
                }
                eachtravel.innerHTML += '<div class="te-all" id="e-all"  style="display: none;" ><div id="mark-input" class="t-mark-input" ><input class="child-review" placeholder="????????????"><button class="sentchildreview">??????</button></div><div class="e-all-top"><span class="te-backhome" id="e-backhome" >???</span><span class="e-share">???</span><img src="' + result.avatar + '" alt="" class="t-avatar" id="e-avatar"><span class="e-author">' + result.authorName + '</span><button class="e-follow" authorid=' + result.authorId + '>??????</button></div><div class="t-hiddenit" id="hiddenit"><ul class="t-scroll" id="scroll">' + html3 + '</ul><ol class="t-circle" id="circle"></ol></div><div class="e-databox"><div class="e-title">' + result.title + '</div><div class="e-content">' + result.content + '</div><div class="e-tag">#' + result.tags + '</div><div class="e-date">' + result.postDate + '</div><button class="e-dislike">??? ?????????</button></div><div class="e-allcomment"><div class="allcommentnum">???' + result.reviews + '?????????</div><div class="e-comment1"><img src="' + nowavatar + '" alt="" class="e-comment1-avatar"><input type="text" class="e-input1"  placeholder="?????????????????????????????????~"><button id="sent-review" class="r-sentreview"  authorid="' + result.authorId + '" articleid="' + result.articleId + '">??????</button></div></div><div class="readcomment"></div><div class="e-commentall"><div class="e-comment2"><input type="text" class="e-input2" placeholder="??????????????????"><span class="ec-love t-loveicon" articleid="' + result.articleId + '" id="ec-icon">???</span><span class="ec-lovenum" id="ec-icon">' + result.likes + '</span><span class="ec-collect t-collecticon" id="ec-icon" articleid="' + result.articleId + '">???</span><span class="ec-collectnum" id="ec-icon">' + result.stars + '</span><span class="ec-comment" id="ec-icon">???</span><span class="ec-commentnum" id="ec-icon">' + result.reviews + '</span></div></div></div>'

                // ?????????????????????(??????li)
                var hiddenit = document.querySelectorAll('.t-hiddenit');
                var ul = hiddenit[i].querySelector('.t-scroll');
                var ol = hiddenit[i].querySelector('.t-circle');
                for (let j = 0; j < ul.children.length; j++) {
                    var li = document.createElement('li');
                    li.setAttribute('index', j);
                    ol.appendChild(li);
                }
                html3 = ''
            }

            // ????????????
            var e_follow = eachtravel.querySelectorAll('.e-follow');
            for (let i = 0; i < e_follow.length; i++) {
                var followid = e_follow[i].getAttribute('authorid');
                e_follow[i].addEventListener('click', function () {
                    myajax({
                        method: 'POST',
                        url: 'http://175.178.193.182:8080/user/follow',
                        data: {
                            userId: thesuerid,
                            followerId: followid
                        },
                        success: function (res) {
                            if (res.status === 200) {

                                // btnguanzhu[i].innerHTML = '?????????';
                                e_follow[i].innerHTML = '?????????'
                                e_follow[i].style.backgroundColor = '#fff';
                            } else {
                                myajax({
                                    method: 'POST',
                                    url: 'http://175.178.193.182:8080/user/cancelFollow',
                                    data: {
                                        userId: thesuerid,
                                        followerId: followid
                                    },
                                    success: function (res) {
                                        if (res.status === 200) {
                                            e_follow[i].innerHTML = '??????'
                                            e_follow[i].style.backgroundColor = 'orange';
                                        }
                                    }
                                })
                            }
                        }
                    })
                })
            }
            // ?????????????????????
            for (let i = 0; i < e_follow.length; i++) {
                var followid = e_follow[i].getAttribute('authorid');
                myajax({
                    method: 'GET',
                    url: 'http://175.178.193.182:8080/user/fullInfo',
                    data: {
                        userId: followid
                    },
                    success: function (res) {
                        if (res.user.fans) {
                            for (let j = 0; j < res.user.fans.length; j++) {
                                var fan = res.user.fans[j];
                                if (thesuerid == fan) {
                                    e_follow[i].innerHTML = '?????????'
                                    e_follow[i].style.backgroundColor = '#fff'
                                }
                            }
                        }
                    }
                })
            }
            // ??????????????????
            var ols = document.querySelectorAll('.t-circle');
            var uls = document.querySelectorAll('.t-scroll');
            for (let u = 0; u < ols.length; u++) {
                ols[u].children[0].className = 'current';
                ols[u].index = u;
                for (let j = 0; j < ols[u].children.length; j++) {
                    ols[u].children[j].index = j;
                    ols[u].children[j].addEventListener('click', function () {
                        var nowindex = this.parentNode.index;
                        var index = this.getAttribute('index');
                        for (let k = 0; k < ols[nowindex].children.length; k++) {
                            ols[nowindex].children[k].className = '';
                        };
                        this.className = 'current';
                        var hiddenitWidth = -740;

                        animate(uls[nowindex], index * hiddenitWidth);
                    })
                }
            }
            let allarticlebox = document.querySelectorAll('.t-abox');
            let alle_all = eachtravel.querySelectorAll('.te-all');
            let ebackhomeall = document.querySelectorAll('.te-backhome');
            let t_avatar = document.querySelectorAll('.t-avatar');
            let readcomment = eachtravel.querySelectorAll('.readcomment');
            let r_sentreview = document.querySelectorAll('.r-sentreview');
            let r_reviewinput = document.querySelectorAll('.e-input1')
            // ????????????????????????
            localStorage.setItem('t', 0);
            let t = localStorage.getItem('t');
            // ??????????????????????????????
            for (let i = 0; i < allarticlebox.length; i++) {
                allarticlebox[i].setAttribute('index', i);
                allarticlebox[i].addEventListener('click', function () {
                    let getauthorid = this.getAttribute('authorid');
                    localStorage.setItem('t-aboxindex', this.index);
                    let aboxindex = localStorage.getItem('t-aboxindex');
                    let getarticleid = this.getAttribute('articleid');
                    // ??????????????????
                    myajax({
                        method: 'GET',
                        data: {
                            articleId: getarticleid,
                            pages: 0
                        },
                        url: 'http://175.178.193.182:8080/review/byArticle',
                        success: function (res) {
                            let theinnerHTML = ''
                            let childhtml = ''
                            for (let j = 0; j < res.reviews.length; j++) {
                                let result = res.reviews[j];
                                for (let k = 0; k < res.reviews[j].reviewList.length; k++) {
                                    chiildresult = res.reviews[j].reviewList[k]
                                    childhtml += '<div class="ej-eachcomment" index="' + k + '" reviewerid="' + chiildresult.authorId + '"><img src="img/backgroundimg/loginbgcimg.jpg"alt="" class="ej-commentor-avatar"><span class="ej-commentor-name">' + chiildresult.authorId + '</span><span class="ej-comment-main">' + chiildresult.content + '</span><span class="ej-comment-date">' + chiildresult.postDate + '</span><span class="comment-love">???</span><span class="comment-lovenum">' + chiildresult.likes + '</span></div>'
                                }
                                theinnerHTML += '<div class="eachcomment" reviewerid="' + result.authorId + '" thereviewid="' + result.reviewId + '"><img src=""alt="" class="commentor-avatar" index="' + j + '"><span class="commentor-name" index="' + j + '">' + result.authorId + '</span><span class="comment-main">' + result.content + '</span><span class="comment-date">' + result.postDate + '</span><span class="comment-love"  reviewid="' + result.reviewId + '">???</span><span class="comment-lovenum">' + result.likes + '</span>' + childhtml + '</div>';
                                childhtml = '';
                            }
                            readcomment[i].innerHTML = theinnerHTML;
                            let reviewbox = readcomment[i].querySelectorAll('.eachcomment');
                            let reviewer_avatar = readcomment[i].querySelectorAll('.commentor-avatar');
                            let review_name = readcomment[i].querySelectorAll('.commentor-name');
                            let markinput = document.querySelectorAll('.t-mark-input');
                            let childinput = document.querySelectorAll('.child-review');
                            let sentchildreview = document.querySelectorAll('.sentchildreview');
                            for (let j = 0; j < res.reviews.length; j++) {
                                // result.authorId????????????????????????????????? 
                                let nowj = review_name[j].getAttribute('index');
                                let nowreviewer_avatar = reviewer_avatar[nowj];
                                let nowreview_name = review_name[nowj];
                                let reviewerid = reviewbox[nowj].getAttribute('reviewerid');
                                myajax({
                                    method: 'GET',
                                    data: {
                                        userId: reviewerid
                                    },
                                    url: 'http://175.178.193.182:8080/user/fullInfo',
                                    success: function (ee) {
                                        nowreviewer_avatar.src = ee.user.avatar;
                                        nowreview_name.innerHTML = ee.user.nickname;
                                        // j = 0;
                                    }
                                })
                                let childbox = reviewbox[j].querySelectorAll('.ej-eachcomment');
                                for (let k = 0; k < childbox.length; k++) {
                                    let childavatar = childbox[k].querySelector('.ej-commentor-avatar');
                                    let childname = childbox[k].querySelector('.ej-commentor-name');
                                    let childid = childbox[k].getAttribute('reviewerid');
                                    myajax({
                                        method: 'GET',
                                        data: {
                                            userId: childid
                                        },
                                        url: 'http://175.178.193.182:8080/user/fullInfo',
                                        success: function (ee) {
                                            childavatar.src = ee.user.avatar;
                                            childname.innerHTML = ee.user.nickname;
                                            // j = 0;
                                        }
                                    })
                                }
                                // ??????????????????
                                reviewbox[j].addEventListener('click', function () {
                                    var replyToUserId = r_sentreview[i].getAttribute('authorid');
                                    var replyToArticleId = r_sentreview[i].getAttribute('articleid');
                                    let parentreview = this.getAttribute('thereviewid');
                                    markinput[i].style.display = 'block';
                                    sentchildreview[i].addEventListener('click', function (e) {
                                        e.stopPropagation();
                                        if (childinput[i].value) {
                                            myajax({
                                                method: 'POST',
                                                data: {
                                                    replyToUserId: replyToUserId,
                                                    replyToArticleId: replyToArticleId,
                                                    parentReviewId: parentreview,
                                                    authorId: thesuerid,
                                                    content: childinput[i].value
                                                },
                                                url: 'http://175.178.193.182:8080/review',
                                                success: function (res) {
                                                    markinput[i].style.display = 'none';
                                                    var div = document.createElement('div');
                                                    div.className = 'child-review';
                                                    div.innerHTML = '<div class="ej-eachcomment"><img src="img/backgroundimg/loginbgcimg.jpg"alt="" class="ej-commentor-avatar"><span class="ej-commentor-name">' + thesuerid + '</span><span class="ej-comment-main">' + childinput[i].value + '</span><span class="ej-comment-date">??????</span><span class="comment-love reviewid="' + result.reviewId + '">???</span><span class="comment-lovenum">0</span></div>'
                                                    readcomment[i].insertBefore(div, reviewbox[j + 1])
                                                    markinput[i].style.display = 'none';
                                                }
                                            })
                                        }
                                    })

                                })
                            }
                            // ????????????
                            var love_review = document.querySelectorAll('.comment-love')
                            if (love_review[0]) {
                                for (let j = 0; j < love_review.length; j++) {
                                    love_review[j].addEventListener('click', function () {
                                        var reviewid = this.getAttribute('reviewid');
                                        myajax({
                                            method: 'POST',
                                            data: {
                                                userId: thesuerid,
                                                reviewId: reviewid
                                            },
                                            url: 'http://175.178.193.182:8080/review/like',
                                            success: function (res) {
                                                if (res.status === 200) {
                                                    console.log('????????????');
                                                } else {
                                                    // ??????????????????
                                                    myajax({
                                                        method: 'POST',
                                                        data: {
                                                            userId: thesuerid,
                                                            reviewId: reviewid
                                                        },
                                                        url: 'http://175.178.193.182:8080/review/unlike',
                                                        success: function (res) {
                                                            console.log('??????????????????');
                                                        }
                                                    })
                                                }
                                            }
                                        })
                                        this.style.color = 'red';
                                    })
                                }
                            }
                        }
                    })

                    // ????????????
                    r_sentreview[i].addEventListener('click', function (e) {
                        e.stopPropagation();
                        var replyToUserId = this.getAttribute('authorid');
                        var replyToArticleId = this.getAttribute('articleid');
                        var content = r_reviewinput[i].value;
                        if (r_reviewinput[i].value) {
                            myajax({
                                method: 'POST',
                                data: {
                                    replyToUserId: replyToUserId,
                                    replyToArticleId: replyToArticleId,
                                    authorId: thesuerid,
                                    content: content
                                },
                                url: 'http://175.178.193.182:8080/review',
                                success: function (res) {
                                    console.log(res);
                                }
                            })
                            readcomment[i].innerHTML += '<div class="eachcomment"><img src="img/backgroundimg/loginbgcimg.jpg"alt="" class="commentor-avatar"><span class="commentor-name">' + thesuerid + '</span><span class="comment-main">' + content + '</span><span class="comment-date">??????</span><span class="comment-love reviewid="' + result.reviewId + '">???</span><span class="comment-lovenum">0</span></div>'
                        }

                    })



                    // ??????????????????
                    myajax({
                        method: 'GET',
                        data: {
                            userId: getauthorid
                        },
                        url: 'http://175.178.193.182:8080/user/fullInfo',
                        success: function (data) {
                            p_eachtravel.innerHTML += '<div class="other-personal" id="other-personal"><div class="personal-top"><span id="back-article" class="t-back-article">???</span><span  class="share">???</span></div><div class="avatar-name"><div class="myavatar"><img  src="' + data.user.avatar + '" id="avatar" alt=""></div><div class="p-username">' + data.user.nickname + '</div></div><div class="givehigh"><div class="three-data"><div  class="attention" id="p-data"><span class="num-attention" id="p-datanum">&ensp;' + data.user.follows.length + '</span></br><span class="guanzhu">??????</span></div><div class="fans" id="p-data"><span class="num-fans" id="p-datanum">&ensp;' + data.user.fans.length + '</span></br><span class="fensi">??????</span></div><div class="collect" id="p-data"><span class="num-collect" id="p-datanum">&ensp;&ensp;' + data.user.likedArticles.length + '</span></br><span class="shoucang">???????????????</span></div><button class="edit-btn">?????????</button></div><div class="person-tag"><span class="p-tag p-tag-current t-articlebtn" id="notebtn">??????</span><span class="p-tag t-collectbtn" id="collectbtn">??????</span><span class="p-tag t-zanguobtn" id="zanguobtn">??????</span></div></div><div class="t-addmyarticle" id="addmyarticle" index="' + t + '"></div><div class="t-addcollect" index="' + t + '" id="addcollect" style="display: none;"></div><div class="t-addzanguo" index="' + t + '" id="addzanguo" style="display: none;"></div></div>'
                            var backarticle = document.querySelectorAll('.t-back-article');

                            // ??????????????????
                            var t_addmyarticle = document.querySelectorAll('.t-addmyarticle');
                            var t_addcollect = document.querySelectorAll('.t-addcollect');
                            var t_addzanguo = document.querySelectorAll('.t-addzanguo');
                            var t_articlebtn = document.querySelectorAll('.t-articlebtn');
                            var t_collectbtn = document.querySelectorAll('.t-collectbtn');
                            var t_zanguobtn = document.querySelectorAll('.t-zanguobtn');
                            // ??????????????????
                            myajax({
                                method: 'GET',
                                data: {
                                    authorId: getauthorid
                                },
                                url: 'http://175.178.193.182:8080/article/byAuthor',
                                success: function (res) {
                                    var html = ''
                                    for (let r = 0; r < res.articles.length; r++) {
                                        var result = res.articles[r]
                                        html += '<div class="mybox">'
                                        if (result.images[0]) {
                                            html += '<img src="' + result.images[0] + '" alt="" class="imgpart" style="width: 315px;  "><span class="word">' + result.title + '</span><span class="loveicon">???</span><span class="lovenum">' + result.likes + '</span>'

                                        } else {
                                            html += '<span class="word">' + result.title + '</span><span class="loveicon">???</span><span class="lovenum">' + result.likes + '</span>';
                                        }
                                        html += '</div>'
                                        t_addmyarticle[t].innerHTML = html

                                    }
                                }
                            })

                            //???????????????????????????
                            myajax({
                                method: 'GET',
                                data: {
                                    userId: getauthorid
                                },
                                url: 'http://175.178.193.182:8080/article/getStar',
                                success: function (res) {
                                    var html = ''
                                    for (let r = 0; r < res.staredArticles.length; r++) {
                                        var result = res.staredArticles[r]
                                        html += '<div class="mybox">'
                                        if (result.images[0]) {
                                            html += '<img src="' + result.images[0] + '" alt="" class="imgpart" style="width: 315px;  "><span class="word">' + result.title + '</span><span class="loveicon">???</span><span class="lovenum">' + result.likes + '</span>'

                                        } else {
                                            html += '<span class="word">' + result.title + '</span><span class="loveicon">???</span><span class="lovenum">' + result.likes + '</span>';
                                        }
                                        html += '</div>'
                                        t_addcollect[t].innerHTML = html
                                    }
                                }
                            })

                            // ???????????????????????????
                            myajax({
                                method: 'GET',
                                data: {
                                    userId: getauthorid
                                },
                                url: 'http://175.178.193.182:8080/article/getLike',
                                success: function (res) {
                                    var html = ''
                                    for (let r = 0; r < res.likedArticles.length; r++) {
                                        var result = res.likedArticles[r]
                                        html += '<div class="mybox">'
                                        if (result.images[0]) {
                                            html += '<img src="' + result.images[0] + '" alt="" class="imgpart" style="width: 315px;  "><span class="word">' + result.title + '</span><span class="loveicon">???</span><span class="lovenum">' + result.likes + '</span>'

                                        } else {
                                            html += '<span class="word">' + result.title + '</span><span class="loveicon">???</span><span class="lovenum">' + result.likes + '</span>';
                                        }
                                        html += '</div>'
                                        t_addzanguo[t].innerHTML = html
                                    }
                                }
                            })


                            // ????????????????????? ?????? ?????? ??????????????????

                            // ??????
                            t_articlebtn[t].addEventListener('click', function () {
                                t_addmyarticle[t].style.display = 'block';
                                t_addcollect[t].style.display = 'none';
                                t_addzanguo[t].style.display = 'none';
                                t_articlebtn[t].className = 'p-tag p-tag-current t-articlebtn';
                                t_collectbtn[t].className = 'p-tag t-collectbtn';
                                t_zanguobtn[t].className = 'p-tag t-zanguobtn';
                            })

                            // ??????
                            t_collectbtn[t].addEventListener('click', function () {
                                t_addmyarticle[t].style.display = 'none';
                                t_addcollect[t].style.display = 'block';
                                t_addzanguo[t].style.display = 'none';
                                t_articlebtn[t].className = 'p-tag  t-articlebtn';
                                t_collectbtn[t].className = 'p-tag t-collectbtn p-tag-current';
                                t_zanguobtn[t].className = 'p-tag t-zanguobtn';
                            })
                            // ??????
                            t_zanguobtn[t].addEventListener('click', function () {
                                t_addmyarticle[t].style.display = 'none';
                                t_addcollect[t].style.display = 'none';
                                t_addzanguo[t].style.display = 'block';
                                t_articlebtn[t].className = 'p-tag  t-articlebtn';
                                t_collectbtn[t].className = 'p-tag t-collectbtn ';
                                t_zanguobtn[t].className = 'p-tag t-zanguobtn p-tag-current';
                            })

                            // ????????????
                            backarticle[t].addEventListener('click', function () {
                                p_eachtravel.lastChild.style.display = 'none';
                                p_eachtravel.style.display = 'none';
                                alle_all[aboxindex].style.display = 'block'
                                localStorage.removeItem('t-aboxindex');
                                t++;
                            })

                        }
                    })
                    t_avatar[this.index].addEventListener('click', function () {
                        p_eachtravel.style.display = 'block';
                        p_eachtravel.lastChild.style.display = 'block';
                        alle_all[this.index].style.display = 'none'
                    })
                })
            }



            // ???????????????????????????
            for (let i = 0; i < allarticlebox.length; i++) {
                allarticlebox[i].index = i;
                ebackhomeall[i].index = i;
                t_avatar[i].index = i;
                allarticlebox[i].addEventListener('click', function () {
                    homepart.style.display = "none";
                    for (let j = 0; j < allarticlebox.length; j++) {
                        alle_all[j].style.display = "none";
                    }
                    eachtravel.style.display = 'block';
                    alle_all[this.index].style.display = "block";
                    ebackhomeall[this.index].addEventListener('click', function () {
                        homepart.style.display = "block";
                        eachtravel.style.display = 'none';
                        alle_all[this.index].style.display = "none";
                    })
                })
            }



            var t_loveicon = document.querySelectorAll('.t-loveicon');
            var t_collecticon = document.querySelectorAll('.t-collecticon');
            // ?????????????????????
            for (let k = 0; k < t_loveicon.length; k++) {
                // ??????
                t_loveicon[k].addEventListener('click', function (e) {
                    e.stopPropagation();
                    var loveid = this.getAttribute('articleid');
                    myajax({
                        method: 'POST',
                        url: 'http://175.178.193.182:8080/article/like',
                        data: {
                            userId: thesuerid,
                            articleId: loveid
                        },
                        success: function (res) {
                            if (res.status === 200) {
                                console.log('????????????');
                                // console.log(k);
                            } else {
                                // ????????????
                                myajax({
                                    method: 'POST',
                                    url: 'http://175.178.193.182:8080/article/unlike',
                                    data: {
                                        userId: thesuerid,
                                        articleId: loveid
                                    },
                                    success: function (ress) {
                                        if (ress.status === 200) {
                                            console.log('??????????????????');
                                        }
                                    }
                                })
                            }
                        }
                    })
                })
            }
            // ??????
            for (let k = 0; k < t_collecticon.length; k++) {
                t_collecticon[k].addEventListener('click', function (e) {
                    var collectid = this.getAttribute('articleid');
                    e.stopPropagation();
                    myajax({
                        method: 'POST',
                        url: 'http://175.178.193.182:8080/article/star',
                        data: {
                            userId: thesuerid,
                            articleId: collectid
                        },
                        success: function (ress) {
                            if (ress.status === 200) {
                                console.log('????????????');
                            } else {
                                // ??????????????????
                                myajax({
                                    method: 'POST',
                                    url: 'http://175.178.193.182:8080/article/unstar',
                                    data: {
                                        userId: thesuerid,
                                        articleId: collectid
                                    },
                                    success: function (ress) {
                                        if (ress.status === 200) {
                                            console.log(ress);
                                            console.log('??????????????????');
                                        }
                                    }
                                })
                            }
                        }
                    })
                    this.className = 'ec-collect toyellow'
                })
            }

            // ?????????????????????
            for (let i = 0; i < t_loveicon.length; i++) {
                let loveid = t_loveicon[i].getAttribute('articleid');
                myajax({
                    method: 'GET',
                    data: {
                        articleId: loveid
                    },
                    url: 'http://175.178.193.182:8080/article/byId',
                    success: function (res) {
                        for (let j = 0; j < res.article.likerList.length; j++) {
                            if (thesuerid === res.article.likerList[j]) {
                                t_loveicon[i].style.color = 'red';
                            }
                        }
                        // console.log(res);
                    }
                })
            }
            // ?????????????????????
            for (let i = 0; i < t_collecticon.length; i++) {
                let collectid = t_collecticon[i].getAttribute('articleid');
                myajax({
                    method: 'GET',
                    data: {
                        articleId: collectid
                    },
                    url: 'http://175.178.193.182:8080/article/byId',
                    success: function (res) {
                        for (let j = 0; j < res.article.starerList.length; j++) {
                            if (thesuerid === res.article.starerList[j]) {
                                t_collecticon[i].style.color = 'yellow';
                            }
                        }
                        // console.log(res);
                    }
                })
            }
        }


    })

    // ??????????????????
    myajax({
        method: 'GET',
        url: 'http://175.178.193.182:8080/article/getHomePage',
        success: function (res) {
            var html3 = ''
            for (let i = 0; i < res.pages.??????.length; i++) {
                var result = res.pages.??????[i];
                if (result.images[0]) {
                    for (let k = 0; k < result.images.length; k++) {
                        html3 += '<li class=li-scroll><img src="' + result.images[k] + '" alt="" class="main-pic"></li>'
                    }
                    allfood.innerHTML += '<div class="f-abox" id="abox" authorid="' + result.authorId + '" articleid="' + result.articleId + '"><img src="' + result.images[0] + '" alt="" class="imgpart" style="width: 315px;  "><span class="word">' + result.title + '<img src="' + result.avatar + '" alt="" class="author-avatar"></span><span class="author">' + result.authorName + '</span><span class="f-loveicon" id="loveicon" articleid="' + result.articleId + '">???</span><span class="lovenum">' + result.likes + '</span></div>'
                } else {
                    allfood.innerHTML += '<div class="f-abox" id="abox" authorid="' + result.authorId + '" articleid="' + result.articleId + '"><span class="word">' + result.title + '<img src="' + result.avatar + '" alt="" class="author-avatar"></span><span class="author">' + result.authorName + '</span><span class="f-loveicon" id="loveicon" articleid="' + result.articleId + '">???</span><span class="lovenum">' + result.likes + '</span></div>' + '<div  id="e-all" class="fe-all" style="display: none;" ><div class="e-all-top"><span  id="e-backhome" class="fe-backhome">???</span><span class="e-share">???</span><img src="' + result.avatar + '" alt="" class="f-avatar" id="e-avatar"><span class="e-author">' + result.authorName + '</span><button class="e-follow" authorid=' + result.authorId + '>??????</button></div><div class="e-picbox"><img src="' + result.images[0] + '" alt="" class="main-pic"></div><div class="e-databox"><div class="e-title">' + result.title + '</div><div class="e-content">' + result.content + '</div><div class="e-tag">#' + result.tags + '</div><div class="e-date">' + result.postDate + '</div><button class="e-dislike">??? ?????????</button></div><div class="e-allcomment"><div class="allcommentnum">???' + result.reviews + '?????????</div><div class="e-comment1"><img src="' + nowavatar + '" alt="" class="e-comment1-avatar"><input type="text" class="e-input1" placeholder="?????????????????????????????????~"><button id="sent-review" class="f-sentreview"  authorid="' + result.authorId + '" articleid="' + result.articleId + '">??????</button></div></div><div class="readcomment"></div><div class="e-commentall"><div class="e-comment2"><input type="text" class="e-input2" placeholder="??????????????????"><span class="ec-love f-loveicon" id="ec-icon"  articleid="' + result.articleId + '">???</span><span class="ec-lovenum" id="ec-icon">' + result.likes + '</span><span class="ec-collect f-collecticon" id="ec-icon" aritcleid="' + result.articleId + '">???</span><span class="ec-collectnum" id="ec-icon">' + result.stars + '</span><span class="ec-comment" id="ec-icon">???</span><span class="ec-commentnum" id="ec-icon">' + result.reviews + '</span></div></div></div>'
                }
                eachfood.innerHTML += '<div class="fe-all"  id="e-all" style="display: none;" ><div id="mark-input" class="f-mark-input" ><input class="child-review" placeholder="????????????"><button class="sentchildreview">??????</button></div><div class="e-all-top"><span class="fe-backhome" id="e-backhome" >???</span><span class="e-share">???</span><img src="' + result.avatar + '" alt="" class="f-avatar" id="e-avatar"><span class="e-author">' + result.authorName + '</span><button class="e-follow" authorid=' + result.authorId + '>??????</button></div><div class="f-hiddenit" id="hiddenit"><ul class="f-scroll" id="scroll">' + html3 + '</ul><ol class="f-circle" id="circle"></ol></div><div class="e-databox"><div class="e-title">' + result.title + '</div><div class="e-content">' + result.content + '</div><div class="e-tag">#' + result.tags + '</div><div class="e-date">' + result.postDate + '</div><button class="e-dislike">??? ?????????</button></div><div class="e-allcomment"><div class="allcommentnum">???' + result.reviews + '?????????</div><div class="e-comment1"><img src="' + nowavatar + '" alt="" class="e-comment1-avatar"><input type="text" class="e-input1" placeholder="?????????????????????????????????~"><button id="sent-review" class="f-sentreview"  authorid="' + result.authorId + '" articleid="' + result.articleId + '">??????</button></div></div><div class="readcomment"></div><div class="e-commentall"><div class="e-comment2"><input type="text" class="e-input2" placeholder="??????????????????"><span class="ec-love f-loveicon" id="ec-icon" articleid="' + result.articleId + '">???</span><span class="ec-lovenum" id="ec-icon">' + result.likes + '</span><span class="ec-collect f-collecticon" id="ec-icon" articleid="' + result.articleId + '">???</span><span class="ec-collectnum" id="ec-icon">' + result.stars + '</span><span class="ec-comment" id="ec-icon">???</span><span class="ec-commentnum" id="ec-icon">' + result.reviews + '</span></div></div></div>'

                // ?????????????????????(??????li)
                var hiddenit = document.querySelectorAll('.f-hiddenit');
                var ul = hiddenit[i].querySelector('.f-scroll');
                var ol = hiddenit[i].querySelector('.f-circle');
                for (let j = 0; j < ul.children.length; j++) {
                    var li = document.createElement('li');
                    // console.log(ul);            
                    li.setAttribute('index', j);
                    ol.appendChild(li);
                }
                html3 = ''
            }

            // ????????????
            var e_follow = eachfood.querySelectorAll('.e-follow');
            for (let i = 0; i < e_follow.length; i++) {
                var followid = e_follow[i].getAttribute('authorid');
                e_follow[i].addEventListener('click', function (e) {
                    e.stopPropagation()
                    myajax({
                        method: 'POST',
                        url: 'http://175.178.193.182:8080/user/follow',
                        data: {
                            userId: thesuerid,
                            followerId: followid
                        },
                        success: function (res) {
                            if (res.status === 200) {

                                // btnguanzhu[i].innerHTML = '?????????';
                                e_follow[i].innerHTML = '?????????'
                                e_follow[i].style.backgroundColor = '#fff';
                            } else {
                                // console.log(result);
                                myajax({
                                    method: 'POST',
                                    url: 'http://175.178.193.182:8080/user/cancelFollow',
                                    data: {
                                        userId: thesuerid,
                                        followerId: followid
                                    },
                                    success: function (res) {
                                        if (res.status === 200) {

                                            // btnguanzhu[this.index].innerHTML='?????????';
                                            e_follow[i].innerHTML = '??????'
                                            e_follow[i].style.backgroundColor = 'orange';
                                        }
                                    }
                                })
                            }
                        }
                    })
                })
            }
            // ?????????????????????

            for (let i = 0; i < e_follow.length; i++) {
                var followid = e_follow[i].getAttribute('authorid');
                myajax({
                    method: 'GET',
                    url: 'http://175.178.193.182:8080/user/fullInfo',
                    data: {
                        userId: followid
                    },
                    success: function (res) {
                        if (res.user.fans) {
                            for (let j = 0; j < res.user.fans.length; j++) {
                                var fan = res.user.fans[j];
                                if (thesuerid == fan) {
                                    e_follow[i].innerHTML = '?????????'
                                    e_follow[i].style.backgroundColor = '#fff'
                                }
                            }
                        }
                    }
                })
            }

            // ??????????????????
            var ols = document.querySelectorAll('.f-circle');
            var uls = document.querySelectorAll('.f-scroll');
            for (let u = 0; u < ols.length; u++) {
                ols[u].children[0].className = 'current';
                ols[u].index = u;
                for (let j = 0; j < ols[u].children.length; j++) {
                    ols[u].children[j].index = j;
                    ols[u].children[j].addEventListener('click', function () {
                        var nowindex = this.parentNode.index;
                        var index = this.getAttribute('index');
                        for (let k = 0; k < ols[nowindex].children.length; k++) {
                            ols[nowindex].children[k].className = '';
                        };
                        this.className = 'current';
                        var hiddenitWidth = -740;
                        animate(uls[nowindex], index * hiddenitWidth);
                    })
                }
            }


            var allarticlebox = document.querySelectorAll('.f-abox');
            var alle_all = document.querySelectorAll('.fe-all');
            var ebackhomeall = document.querySelectorAll('.fe-backhome');
            var collecticon = document.querySelectorAll('.ec-collect');
            var f_avatar = document.querySelectorAll('.f-avatar');
            var readcomment = eachfood.querySelectorAll('.readcomment');
            var r_sentreview = document.querySelectorAll('.f-sentreview');
            var r_reviewinput = document.querySelectorAll('.e-input1');
            // ????????????????????????
            localStorage.setItem('f', 0);
            var f = localStorage.getItem('f');
            // ??????????????????????????????
            for (let i = 0; i < allarticlebox.length; i++) {
                allarticlebox[i].setAttribute('index', i);

                allarticlebox[i].addEventListener('click', function () {
                    var getauthorid = this.getAttribute('authorid');
                    localStorage.setItem('f-aboxindex', this.index);
                    var aboxindex = localStorage.getItem('f-aboxindex');
                    var getarticleid = this.getAttribute('articleid');
                    // ??????????????????
                    // ??????????????????
                    myajax({
                        method: 'GET',
                        data: {
                            articleId: getarticleid,
                            pages: 0
                        },
                        url: 'http://175.178.193.182:8080/review/byArticle',
                        success: function (res) {
                            let theinnerHTML = ''
                            let childhtml = ''
                            for (let j = 0; j < res.reviews.length; j++) {
                                let result = res.reviews[j];
                                for (let k = 0; k < res.reviews[j].reviewList.length; k++) {
                                    chiildresult = res.reviews[j].reviewList[k]
                                    childhtml += '<div class="ej-eachcomment" index="' + k + '" reviewerid="' + chiildresult.authorId + '"><img src="img/backgroundimg/loginbgcimg.jpg"alt="" class="ej-commentor-avatar"><span class="ej-commentor-name">' + chiildresult.authorId + '</span><span class="ej-comment-main">' + chiildresult.content + '</span><span class="ej-comment-date">' + chiildresult.postDate + '</span><span class="comment-love">???</span><span class="comment-lovenum">' + chiildresult.likes + '</span></div>'
                                }
                                theinnerHTML += '<div class="eachcomment" reviewerid="' + result.authorId + '" thereviewid="' + result.reviewId + '"><img src=""alt="" class="commentor-avatar" index="' + j + '"><span class="commentor-name" index="' + j + '">' + result.authorId + '</span><span class="comment-main">' + result.content + '</span><span class="comment-date">' + result.postDate + '</span><span class="comment-love"  reviewid="' + result.reviewId + '">???</span><span class="comment-lovenum">' + result.likes + '</span>' + childhtml + '</div>';
                                childhtml = '';
                            }

                            readcomment[i].innerHTML = theinnerHTML;
                            let reviewbox = readcomment[i].querySelectorAll('.eachcomment');
                            let reviewer_avatar = readcomment[i].querySelectorAll('.commentor-avatar');
                            let review_name = readcomment[i].querySelectorAll('.commentor-name');
                            let markinput = document.querySelectorAll('.f-mark-input');
                            let childinput = document.querySelectorAll('.child-review');
                            let sentchildreview = document.querySelectorAll('.sentchildreview');
                            // console.log(childinput[i]);
                            for (let j = 0; j < res.reviews.length; j++) {
                                // result.authorId????????????????????????????????? 
                                let nowj = review_name[j].getAttribute('index');
                                let nowreviewer_avatar = reviewer_avatar[nowj];
                                let nowreview_name = review_name[nowj];
                                let reviewerid = reviewbox[nowj].getAttribute('reviewerid');
                                myajax({
                                    method: 'GET',
                                    data: {
                                        userId: reviewerid
                                    },
                                    url: 'http://175.178.193.182:8080/user/fullInfo',
                                    success: function (ee) {
                                        // console.log(nowreviewer_avatar);
                                        nowreviewer_avatar.src = ee.user.avatar;
                                        nowreview_name.innerHTML = ee.user.nickname;
                                        // j = 0;
                                    }
                                })
                                let childbox = reviewbox[j].querySelectorAll('.ej-eachcomment')
                                console.log(reviewbox[j].querySelectorAll('.ej-eachcomment'));

                                for (let k = 0; k < childbox.length; k++) {
                                    let childavatar = childbox[k].querySelector('.ej-commentor-avatar');
                                    let childname = childbox[k].querySelector('.ej-commentor-name');
                                    let childid = childbox[k].getAttribute('reviewerid');
                                    myajax({
                                        method: 'GET',
                                        data: {
                                            userId: childid
                                        },
                                        url: 'http://175.178.193.182:8080/user/fullInfo',
                                        success: function (ee) {
                                            // console.log(nowreviewer_avatar);
                                            childavatar.src = ee.user.avatar;
                                            childname.innerHTML = ee.user.nickname;
                                            // j = 0;
                                        }
                                    })
                                }
                                // ??????????????????
                                reviewbox[j].addEventListener('click', function () {
                                    var replyToUserId = r_sentreview[i].getAttribute('authorid');
                                    var replyToArticleId = r_sentreview[i].getAttribute('articleid');
                                    let parentreview = this.getAttribute('thereviewid');

                                    markinput[i].style.display = 'block';

                                    sentchildreview[i].addEventListener('click', function (e) {
                                        e.stopPropagation();
                                        if (childinput[i].value) {

                                            myajax({
                                                method: 'POST',
                                                data: {
                                                    replyToUserId: replyToUserId,
                                                    replyToArticleId: replyToArticleId,
                                                    parentReviewId: parentreview,
                                                    authorId: thesuerid,
                                                    content: childinput[i].value
                                                },
                                                url: 'http://175.178.193.182:8080/review',
                                                success: function (res) {
                                                    markinput[i].style.display = 'none';
                                                    var div = document.createElement('div');
                                                    div.className = 'child-review';
                                                    div.innerHTML = '<div class="ej-eachcomment"><img src="img/backgroundimg/loginbgcimg.jpg"alt="" class="ej-commentor-avatar"><span class="ej-commentor-name">' + thesuerid + '</span><span class="ej-comment-main">' + childinput[i].value + '</span><span class="ej-comment-date">??????</span><span class="comment-love reviewid="' + result.reviewId + '">???</span><span class="comment-lovenum">0</span></div>'
                                                    readcomment[i].insertBefore(div, reviewbox[j + 1])
                                                    markinput[i].style.display = 'none';
                                                }
                                            })
                                        }
                                    })
                                })
                            }
                            // ????????????
                            var love_review = document.querySelectorAll('.comment-love')
                            if (love_review[0]) {
                                for (let j = 0; j < love_review.length; j++) {
                                    love_review[j].addEventListener('click', function () {
                                        var reviewid = this.getAttribute('reviewid');
                                        myajax({
                                            method: 'POST',
                                            data: {
                                                userId: thesuerid,
                                                reviewId: reviewid
                                            },
                                            url: 'http://175.178.193.182:8080/review/like',
                                            success: function (res) {
                                                if (res.status === 200) {
                                                } else {
                                                    // ??????????????????
                                                    myajax({
                                                        method: 'POST',
                                                        data: {
                                                            userId: thesuerid,
                                                            reviewId: reviewid
                                                        },
                                                        url: 'http://175.178.193.182:8080/review/unlike',
                                                        success: function (res) {
                                                            console.log(res);
                                                            console.log('??????????????????');
                                                        }
                                                    })
                                                }
                                            }
                                        })
                                        this.style.color = 'red';
                                    })
                                }
                            }
                        }
                    })
                    console.log(i);
                    // ????????????
                    r_sentreview[i].addEventListener('click', function (e) {
                        e.stopPropagation();
                        var replyToUserId = this.getAttribute('authorid');
                        var replyToArticleId = this.getAttribute('articleid');
                        var content = r_reviewinput[i].value;
                        if (r_reviewinput[i].value) {
                            myajax({
                                method: 'POST',
                                data: {
                                    replyToUserId: replyToUserId,
                                    replyToArticleId: replyToArticleId,
                                    authorId: thesuerid,
                                    content: content
                                },
                                url: 'http://175.178.193.182:8080/review',
                                success: function (res) {
                                    console.log(res);
                                }
                            })
                            readcomment[i].innerHTML += '<div class="eachcomment"><img src="img/backgroundimg/loginbgcimg.jpg"alt="" class="commentor-avatar"><span class="commentor-name">' + thesuerid + '</span><span class="comment-main">' + content + '</span><span class="comment-date">??????</span><span class="comment-love reviewid="' + result.reviewId + '">???</span><span class="comment-lovenum">0</span></div>'
                        }

                    })


                    // ??????????????????
                    myajax({
                        method: 'GET',
                        data: {
                            userId: getauthorid
                        },
                        url: 'http://175.178.193.182:8080/user/fullInfo',
                        success: function (data) {
                            p_eachfood.innerHTML += '<div class="other-personal" id="other-personal"><div class="personal-top"><span id="back-article" class="f-back-article">???</span><span  class="share">???</span></div><div class="avatar-name"><div class="myavatar"><img  src="' + data.user.avatar + '" id="avatar" alt=""></div><div class="p-username">' + data.user.nickname + '</div></div><div class="givehigh"><div class="three-data"><div  class="attention" id="p-data"><span class="num-attention" id="p-datanum">&ensp;' + data.user.follows.length + '</span></br><span class="guanzhu">??????</span></div><div class="fans" id="p-data"><span class="num-fans" id="p-datanum">&ensp;' + data.user.fans.length + '</span></br><span class="fensi">??????</span></div><div class="collect" id="p-data"><span class="num-collect" id="p-datanum">&ensp;&ensp;' + data.user.likedArticles.length + '</span></br><span class="shoucang">???????????????</span></div><button class="edit-btn">?????????</button></div><div class="person-tag"><span class="p-tag p-tag-current f-articlebtn" id="notebtn">??????</span><span class="p-tag f-collectbtn" id="collectbtn">??????</span><span class="p-tag f-zanguobtn" id="zanguobtn">??????</span></div></div><div class="f-addmyarticle" id="addmyarticle" index="' + f + '"></div><div class="f-addcollect" index="' + f + '" id="addcollect" style="display: none;"></div><div class="f-addzanguo" index="' + f + '" id="addzanguo" style="display: none;"></div></div>'
                            var backarticle = document.querySelectorAll('.f-back-article');

                            // ??????????????????
                            var f_addmyarticle = document.querySelectorAll('.f-addmyarticle');
                            var f_addcollect = document.querySelectorAll('.f-addcollect');
                            var f_addzanguo = document.querySelectorAll('.f-addzanguo');
                            var f_articlebtn = document.querySelectorAll('.f-articlebtn');
                            var f_collectbtn = document.querySelectorAll('.f-collectbtn');
                            var f_zanguobtn = document.querySelectorAll('.f-zanguobtn');
                            //    ??????????????????
                            myajax({
                                method: 'GET',
                                data: {
                                    authorId: getauthorid
                                },
                                url: 'http://175.178.193.182:8080/article/byAuthor',
                                success: function (res) {
                                    var html = ''
                                    for (let r = 0; r < res.articles.length; r++) {
                                        var result = res.articles[r]
                                        html += '<div class="mybox">'
                                        if (result.images[0]) {
                                            html += '<img src="' + result.images[0] + '" alt="" class="imgpart" style="width: 315px;  "><span class="word">' + result.title + '</span><span class="loveicon">???</span><span class="lovenum">' + result.likes + '</span>'

                                        } else {
                                            html += '<span class="word">' + result.title + '</span><span class="loveicon">???</span><span class="lovenum">' + result.likes + '</span>';
                                        }
                                        html += '</div>'
                                        f_addmyarticle[f].innerHTML = html

                                    }
                                }
                            })
                            // ???????????????????????????
                            myajax({
                                method: 'GET',
                                data: {
                                    userId: getauthorid
                                },
                                url: 'http://175.178.193.182:8080/article/getStar',
                                success: function (res) {
                                    var html = ''
                                    for (let r = 0; r < res.staredArticles.length; r++) {
                                        var result = res.staredArticles[r]
                                        html += '<div class="mybox">'
                                        if (result.images[0]) {
                                            html += '<img src="' + result.images[0] + '" alt="" class="imgpart" style="width: 315px;  "><span class="word">' + result.title + '</span><span class="loveicon">???</span><span class="lovenum">' + result.likes + '</span>'

                                        } else {
                                            html += '<span class="word">' + result.title + '</span><span class="loveicon">???</span><span class="lovenum">' + result.likes + '</span>';
                                        }
                                        html += '</div>'
                                        f_addcollect[f].innerHTML = html
                                    }
                                }
                            })
                            // ???????????????????????????
                            myajax({
                                method: 'GET',
                                data: {
                                    userId: getauthorid
                                },
                                url: 'http://175.178.193.182:8080/article/getLike',
                                success: function (res) {
                                    var html = ''
                                    for (let r = 0; r < res.likedArticles.length; r++) {
                                        var result = res.likedArticles[r]
                                        html += '<div class="mybox">'
                                        if (result.images[0]) {
                                            html += '<img src="' + result.images[0] + '" alt="" class="imgpart" style="width: 315px;  "><span class="word">' + result.title + '</span><span class="loveicon">???</span><span class="lovenum">' + result.likes + '</span>'

                                        } else {
                                            html += '<span class="word">' + result.title + '</span><span class="loveicon">???</span><span class="lovenum">' + result.likes + '</span>';
                                        }
                                        html += '</div>'
                                        f_addzanguo[f].innerHTML = html
                                    }
                                }
                            })

                            // ???????????? ????????? ?????? ?????? ??????????????????
                            // ??????
                            f_articlebtn[f].addEventListener('click', function () {
                                f_addmyarticle[f].style.display = 'block';
                                f_addcollect[f].style.display = 'none';
                                f_addzanguo[f].style.display = 'none';
                                f_articlebtn[f].className = 'p-tag p-tag-current f-articlebtn';
                                f_collectbtn[f].className = 'p-tag f-collectbtn';
                                f_zanguobtn[f].className = 'p-tag f-zanguobtn';
                            })

                            // ??????
                            f_collectbtn[f].addEventListener('click', function () {
                                f_addmyarticle[f].style.display = 'none';
                                f_addcollect[f].style.display = 'block';
                                f_addzanguo[f].style.display = 'none';
                                f_articlebtn[f].className = 'p-tag  f-articlebtn';
                                f_collectbtn[f].className = 'p-tag f-collectbtn p-tag-current';
                                f_zanguobtn[f].className = 'p-tag f-zanguobtn';
                            })
                            // ??????
                            f_zanguobtn[f].addEventListener('click', function () {
                                f_addmyarticle[f].style.display = 'none';
                                f_addcollect[f].style.display = 'none';
                                f_addzanguo[f].style.display = 'block';
                                f_articlebtn[f].className = 'p-tag  f-articlebtn';
                                f_collectbtn[f].className = 'p-tag f-collectbtn ';
                                f_zanguobtn[f].className = 'p-tag f-zanguobtn p-tag-current';
                            })
                            // ????????????
                            backarticle[f].addEventListener('click', function () {
                                p_eachfood.lastChild.style.display = 'none';
                                p_eachfood.style.display = 'none';
                                alle_all[aboxindex].style.display = 'block'
                                localStorage.removeItem('f-aboxindex');
                                f++;
                            })

                        }
                    })
                    f_avatar[this.index].addEventListener('click', function () {
                        p_eachfood.style.display = 'block';
                        p_eachfood.lastChild.style.display = 'block';
                        alle_all[this.index].style.display = 'none'
                    })
                })
            }

            // ???????????????????????????
            for (let i = 0; i < allarticlebox.length; i++) {
                allarticlebox[i].index = i;
                ebackhomeall[i].index = i;
                f_avatar[i].index = i;
                allarticlebox[i].addEventListener('click', function () {
                    homepart.style.display = "none";
                    for (let j = 0; j < allarticlebox.length; j++) {
                        alle_all[j].style.display = "none";
                    }
                    eachfood.style.display = 'block';
                    alle_all[this.index].style.display = "block";
                    ebackhomeall[this.index].addEventListener('click', function () {
                        homepart.style.display = "block";
                        eachfood.style.display = 'none';
                        alle_all[this.index].style.display = "none";
                    })
                })
            }

            var f_loveicon = document.querySelectorAll('.f-loveicon');
            var f_collecticon = document.querySelectorAll('.f-collecticon');
            // ?????????????????????
            for (let k = 0; k < f_loveicon.length; k++) {
                // ??????
                f_loveicon[k].addEventListener('click', function (e) {
                    e.stopPropagation();
                    var loveid = this.getAttribute('articleid');
                    console.log(loveid);
                    myajax({
                        method: 'POST',
                        url: 'http://175.178.193.182:8080/article/like',
                        data: {
                            userId: thesuerid,
                            articleId: loveid
                        },
                        success: function (res) {
                            if (res.status === 200) {
                                console.log('????????????');
                                // console.log(k);
                            } else {
                                // ????????????
                                myajax({
                                    method: 'POST',
                                    url: 'http://175.178.193.182:8080/article/unlike',
                                    data: {
                                        userId: thesuerid,
                                        articleId: loveid
                                    },
                                    success: function (ress) {
                                        if (ress.status === 200) {
                                            console.log(ress);
                                            console.log('??????????????????');
                                        }
                                    }
                                })
                            }
                        }
                    })
                })
            }
            // ??????
            for (let k = 0; k < f_collecticon.length; k++) {
                f_collecticon[k].addEventListener('click', function (e) {
                    var collectid = this.getAttribute('articleid');
                    e.stopPropagation();
                    myajax({
                        method: 'POST',
                        url: 'http://175.178.193.182:8080/article/star',
                        data: {
                            userId: thesuerid,
                            articleId: collectid
                        },
                        success: function (ress) {
                            if (ress.status === 200) {
                                console.log('????????????');
                            } else {
                                // ??????????????????
                                myajax({
                                    method: 'POST',
                                    url: 'http://175.178.193.182:8080/article/unstar',
                                    data: {
                                        userId: thesuerid,
                                        articleId: collectid
                                    },
                                    success: function (ress) {
                                        if (ress.status === 200) {
                                            console.log(ress);
                                            console.log('??????????????????');
                                        }
                                    }
                                })
                            }
                        }
                    })
                    this.className = 'ec-collect toyellow'
                    console.log(this);
                })
            }
            // ?????????????????????
            for (let i = 0; i < f_loveicon.length; i++) {
                let loveid = f_loveicon[i].getAttribute('articleid');
                myajax({
                    method: 'GET',
                    data: {
                        articleId: loveid
                    },
                    url: 'http://175.178.193.182:8080/article/byId',
                    success: function (res) {
                        for (let j = 0; j < res.article.likerList.length; j++) {
                            if (thesuerid === res.article.likerList[j]) {
                                f_loveicon[i].style.color = 'red';
                            }
                        }
                        // console.log(res);
                    }
                })
            }
            // ?????????????????????
            for (let i = 0; i < f_collecticon.length; i++) {
                let collectid = f_collecticon[i].getAttribute('articleid');
                myajax({
                    method: 'GET',
                    data: {
                        articleId: collectid
                    },
                    url: 'http://175.178.193.182:8080/article/byId',
                    success: function (res) {
                        for (let j = 0; j < res.article.starerList.length; j++) {
                            if (thesuerid === res.article.starerList[j]) {
                                f_collecticon[i].style.color = 'yellow';
                            }
                        }
                        // console.log(res);
                    }
                })
            }
        }
    })
    // ??????????????????
    myajax({
        method: 'GET',
        url: 'http://175.178.193.182:8080/article/getHomePage',
        success: function (res) {
            var html3 = ''
            for (let i = 0; i < res.pages.??????.length; i++) {
                var result = res.pages.??????[i];
                if (result.images[0]) {
                    for (let k = 0; k < result.images.length; k++) {
                        html3 += '<li class=li-scroll><img src="' + result.images[k] + '" alt="" class="main-pic"></li>'
                    }
                    allfasion.innerHTML += '<div class="ss-abox" id="abox" authorid="' + result.authorId + '"articleid="' + result.articleId + '"><img src="' + result.images[0] + '" alt="" class="imgpart" style="width: 315px;  "><span class="word">' + result.title + '<img src="' + result.avatar + '" alt="" class="author-avatar"></span><span class="author">' + result.authorName + '</span><span class="ss-loveicon" id="loveicon" articleid="' + result.articleId + '">???</span><span class="lovenum">' + result.likes + '</span></div>'
                } else {
                    allfasion.innerHTML += '<div class="ss-abox" authorid="' + result.authorId + '" articleid="' + result.articleId + '"><span class="word">' + result.title + '<img src="' + result.avatar + '" alt="" class="author-avatar"></span><span class="author">' + result.authorName + '</span><span class="ss-loveicon" id="loveicon" articleid="' + result.articleId + '">???</span><span class="lovenum">' + result.likes + '</span></div>' + '<div class="sse-all" id="e-all"  style="display: none;" ><div class="e-all-top"><span id="e-backhome" class="sse-backhome">???</span><span class="e-share">???</span><img src="' + result.avatar + '" alt="" id="e-avatar" class="ss-avatar"><span class="e-author">' + result.authorName + '</span><button class="e-follow" authorid=' + result.authorId + '>??????</button></div><div class="e-picbox"><img src="' + result.images[0] + '" alt="" class="main-pic"></div><div class="e-databox"><div class="e-title">' + result.title + '</div><div class="e-content">' + result.content + '</div><div class="e-tag">#' + result.tags + '</div><div class="e-date">' + result.postDate + '</div><button class="e-dislike">??? ?????????</button></div><div class="e-allcomment"><div class="allcommentnum">???' + result.reviews + '?????????</div><div class="e-comment1"><img src="' + nowavatar + '" alt="" class="e-comment1-avatar"><input type="text" class="e-input1" placeholder="?????????????????????????????????~"><button id="sent-review" class="r-sentreview"  authorid="' + result.authorId + '" articleid="' + result.articleId + '">??????</button></div></div><div class="readcomment"></div><div class="e-commentall"><div class="e-comment2"><input type="text" class="e-input2" placeholder="??????????????????"><span class="ec-love ss-loveicon" id="ec-icon" articleid="' + result.articleId + '">???</span><span class="ec-lovenum" id="ec-icon">' + result.likes + '</span><span class="ec-collect ss-collecticon" articleid="' + result.articleId + '" id="ec-icon">???</span><span class="ec-collectnum" id="ec-icon">' + result.stars + '</span><span class="ec-comment" id="ec-icon">???</span><span class="ec-commentnum" id="ec-icon">' + result.reviews + '</span></div></div></div>'
                }
                eachfasion.innerHTML += '<div class="sse-all"  id="e-all" style="display: none;" ><div id="mark-input" class="mark-input" ><input class="child-review" placeholder="????????????"><button class="sentchildreview">??????</button></div><div class="e-all-top"><span class="sse-backhome" id="e-backhome" >???</span><span class="e-share">???</span><img src="' + result.avatar + '" alt="" class="ss-avatar" id="e-avatar"><span class="e-author">' + result.authorName + '</span><button class="e-follow" authorid=' + result.authorId + '>??????</button></div><div class="ss-hiddenit" id="hiddenit"><ul class="ss-scroll" id="scroll">' + html3 + '</ul><ol class="ss-circle" id="circle"></ol></div><div class="e-databox"><div class="e-title">' + result.title + '</div><div class="e-content">' + result.content + '</div><div class="e-tag">#' + result.tags + '</div><div class="e-date">' + result.postDate + '</div><button class="e-dislike">??? ?????????</button></div><div class="e-allcomment"><div class="allcommentnum">???' + result.reviews + '?????????</div><div class="e-comment1"><img src="' + nowavatar + '" alt="" class="e-comment1-avatar"><input type="text" class="e-input1" placeholder="?????????????????????????????????~"><button id="sent-review" class="r-sentreview"  authorid="' + result.authorId + '" articleid="' + result.articleId + '">??????</button></div></div><div class="readcomment"></div><div class="e-commentall"><div class="e-comment2"><input type="text" class="e-input2" placeholder="??????????????????"><span class="ec-love ss-loveicon" id="ec-icon" articleid="' + result.articleId + '">???</span><span class="ec-lovenum" id="ec-icon">' + result.likes + '</span><span class="ec-collect ss-collecticon" articleid="' + result.articleId + '" id="ec-icon">???</span><span class="ec-collectnum" id="ec-icon">' + result.stars + '</span><span class="ec-comment" id="ec-icon">???</span><span class="ec-commentnum" id="ec-icon">' + result.reviews + '</span></div></div></div>'

                // ??????????????????????????????li???
                var hiddenit = document.querySelectorAll('.ss-hiddenit');
                var ul = hiddenit[i].querySelector('.ss-scroll');
                var ol = hiddenit[i].querySelector('.ss-circle');
                for (let j = 0; j < ul.children.length; j++) {
                    var li = document.createElement('li');
                    // console.log(ul);            
                    li.setAttribute('index', j);
                    ol.appendChild(li);

                }
                html3 = ''
            }

            // ????????????
            var e_follow = eachfasion.querySelectorAll('.e-follow');
            for (let i = 0; i < e_follow.length; i++) {
                var followid = e_follow[i].getAttribute('authorid');
                e_follow[i].addEventListener('click', function () {
                    console.log(this);
                    myajax({
                        method: 'POST',
                        url: 'http://175.178.193.182:8080/user/follow',
                        data: {
                            userId: thesuerid,
                            followerId: followid
                        },
                        success: function (res) {
                            if (res.status === 200) {

                                // btnguanzhu[i].innerHTML = '?????????';
                                e_follow[i].innerHTML = '?????????'
                                e_follow[i].style.backgroundColor = '#fff';
                            } else {
                                // console.log(result);
                                myajax({
                                    method: 'POST',
                                    url: 'http://175.178.193.182:8080/user/cancelFollow',
                                    data: {
                                        userId: thesuerid,
                                        followerId: followid
                                    },
                                    success: function (res) {
                                        if (res.status === 200) {

                                            // btnguanzhu[this.index].innerHTML='?????????';
                                            e_follow[i].innerHTML = '??????'
                                            e_follow[i].style.backgroundColor = 'orange';
                                        }
                                    }
                                })
                            }
                        }
                    })
                })
            }
            // ?????????????????????

            for (let i = 0; i < e_follow.length; i++) {
                var followid = e_follow[i].getAttribute('authorid');
                myajax({
                    method: 'GET',
                    url: 'http://175.178.193.182:8080/user/fullInfo',
                    data: {
                        userId: followid
                    },
                    success: function (res) {
                        if (res.user.fans) {
                            for (let j = 0; j < res.user.fans.length; j++) {
                                var fan = res.user.fans[j];
                                if (thesuerid == fan) {
                                    e_follow[i].innerHTML = '?????????'
                                    e_follow[i].style.backgroundColor = '#fff'
                                }
                            }
                        }
                    }
                })
            }

            // ??????????????????
            var ols = document.querySelectorAll('.ss-circle');
            var uls = document.querySelectorAll('.ss-scroll');
            for (let u = 0; u < ols.length; u++) {
                ols[u].children[0].className = 'current';
                ols[u].index = u;
                for (let j = 0; j < ols[u].children.length; j++) {
                    ols[u].children[j].index = j;
                    // console.log(ols[i].children[j]);
                    ols[u].children[j].addEventListener('click', function () {
                        var nowindex = this.parentNode.index;
                        var index = this.getAttribute('index');
                        for (let k = 0; k < ols[nowindex].children.length; k++) {
                            ols[nowindex].children[k].className = '';
                        };
                        this.className = 'current';
                        var hiddenitWidth = -740;

                        animate(uls[nowindex], index * hiddenitWidth);
                    })
                }
            }


            var allarticlebox = document.querySelectorAll('.ss-abox');
            var alle_all = document.querySelectorAll('.sse-all');
            var ebackhomeall = document.querySelectorAll('.sse-backhome');
            var collecticon = document.querySelectorAll('.ec-collect');
            var ss_avatar = document.querySelectorAll('.ss-avatar');
            var readcomment = eachfasion.querySelectorAll('.readcomment');
            var r_sentreview = document.querySelectorAll('.r-sentreview');
            var r_reviewinput = document.querySelectorAll('.e-input1');
            // ????????????????????????
            localStorage.setItem('ss', 0);
            var ss = localStorage.getItem('ss');
            // ???????????????????????????
            for (let i = 0; i < allarticlebox.length; i++) {
                allarticlebox[i].setAttribute('index', i);
                //    ????????????
                allarticlebox[i].addEventListener('click', function () {
                    var getauthorid = this.getAttribute('authorid');
                    localStorage.setItem('ss-aboxindex', this.index);
                    var aboxindex = localStorage.getItem('ss-aboxindex');
                    var getarticleid = this.getAttribute('articleid');
                    // ??????????????????
                    myajax({
                        method: 'GET',
                        data: {
                            articleId: getarticleid,
                            pages: 0
                        },
                        url: 'http://175.178.193.182:8080/review/byArticle',
                        success: function (res) {
                            // console.log(res);
                            let theinnerHTML = ''
                            let childhtml = ''
                            for (let j = 0; j < res.reviews.length; j++) {
                                let result = res.reviews[j];
                                for (let k = 0; k < res.reviews[j].reviewList.length; k++) {
                                    chiildresult = res.reviews[j].reviewList[k]
                                    childhtml += '<div class="ej-eachcomment" index="' + k + '" reviewerid="' + chiildresult.authorId + '"><img src="img/backgroundimg/loginbgcimg.jpg"alt="" class="ej-commentor-avatar"><span class="ej-commentor-name">' + chiildresult.authorId + '</span><span class="ej-comment-main">' + chiildresult.content + '</span><span class="ej-comment-date">' + chiildresult.postDate + '</span><span class="comment-love">???</span><span class="comment-lovenum">' + chiildresult.likes + '</span></div>'
                                }
                                theinnerHTML += '<div class="eachcomment" reviewerid="' + result.authorId + '" thereviewid="' + result.reviewId + '"><img src=""alt="" class="commentor-avatar" index="' + j + '"><span class="commentor-name" index="' + j + '">' + result.authorId + '</span><span class="comment-main">' + result.content + '</span><span class="comment-date">' + result.postDate + '</span><span class="comment-love"  reviewid="' + result.reviewId + '">???</span><span class="comment-lovenum">' + result.likes + '</span>' + childhtml + '</div>';
                                childhtml = '';
                            }

                            readcomment[i].innerHTML = theinnerHTML;
                            let reviewbox = readcomment[i].querySelectorAll('.eachcomment');
                            let reviewer_avatar = readcomment[i].querySelectorAll('.commentor-avatar');
                            let review_name = readcomment[i].querySelectorAll('.commentor-name');
                            let markinput = document.querySelectorAll('.r-mark-input');
                            let childinput = document.querySelectorAll('.child-review');
                            let sentchildreview = document.querySelectorAll('.sentchildreview');
                            // console.log(childinput[i]);
                            for (let j = 0; j < res.reviews.length; j++) {
                                // result.authorId????????????????????????????????? 
                                let nowj = review_name[j].getAttribute('index');
                                let nowreviewer_avatar = reviewer_avatar[nowj];
                                let nowreview_name = review_name[nowj];
                                let reviewerid = reviewbox[nowj].getAttribute('reviewerid');
                                // console.log(review_name[j]);
                                myajax({
                                    method: 'GET',
                                    data: {
                                        userId: reviewerid
                                    },
                                    url: 'http://175.178.193.182:8080/user/fullInfo',
                                    success: function (ee) {
                                        // console.log(nowreviewer_avatar);
                                        nowreviewer_avatar.src = ee.user.avatar;
                                        nowreview_name.innerHTML = ee.user.nickname;
                                        // j = 0;
                                    }
                                })
                                let childbox = reviewbox[j].querySelectorAll('.ej-eachcomment')
                                for (let k = 0; k < childbox.length; k++) {
                                    let childid = childbox[k].getAttribute('reviewerid');
                                    let childavatar = childbox[k].querySelectorAll('.ej-commentor-avatar');
                                    let childname = childbox[k].querySelectorAll('.ej-commentor-name');
                                    myajax({
                                        method: 'GET',
                                        data: {
                                            userId: childid
                                        },
                                        url: 'http://175.178.193.182:8080/user/fullInfo',
                                        success: function (ee) {
                                            // console.log(nowreviewer_avatar);
                                            childavatar.src = ee.user.avatar;
                                            childname.innerHTML = ee.user.nickname;
                                            // j = 0;
                                        }
                                    })
                                }
                                // ??????????????????
                                reviewbox[j].addEventListener('click', function () {
                                    let replyToUserId = r_sentreview[i].getAttribute('authorid');
                                    let replyToArticleId = r_sentreview[i].getAttribute('articleid');
                                    let parentreview = this.getAttribute('thereviewid');

                                    markinput[i].style.display = 'block';

                                    console.log(childinput[i].value);
                                    sentchildreview[i].addEventListener('click', function (e) {

                                        e.stopPropagation();
                                        console.log(childinput[i].value);
                                        if (childinput[i].value) {
                                            console.log(j);
                                            console.log(reviewbox[j + 1]);
                                            console.log(this);
                                            myajax({
                                                method: 'POST',
                                                data: {
                                                    replyToUserId: replyToUserId,
                                                    replyToArticleId: replyToArticleId,
                                                    parentReviewId: parentreview,
                                                    authorId: thesuerid,
                                                    content: childinput[i].value
                                                },
                                                url: 'http://175.178.193.182:8080/review',
                                                success: function (res) {
                                                    console.log(res);
                                                    markinput[i].style.display = 'none';
                                                    var div = document.createElement('div');
                                                    div.className = 'child-review';
                                                    div.innerHTML = '<div class="ej-eachcomment"><img src="img/backgroundimg/loginbgcimg.jpg"alt="" class="ej-commentor-avatar"><span class="ej-commentor-name">' + thesuerid + '</span><span class="ej-comment-main">' + childinput[i].value + '</span><span class="ej-comment-date">??????</span><span class="comment-love reviewid="' + result.reviewId + '">???</span><span class="comment-lovenum">0</span></div>'
                                                    readcomment[i].insertBefore(div, reviewbox[j + 1])
                                                    markinput[i].style.display = 'none';
                                                }
                                            })
                                        }
                                    })
                                })
                            }
                            // ????????????
                            var love_review = document.querySelectorAll('.comment-love')
                            if (love_review[0]) {
                                for (let j = 0; j < love_review.length; j++) {
                                    // console.log(love_review[j]);
                                    love_review[j].addEventListener('click', function () {
                                        var reviewid = this.getAttribute('reviewid');
                                        myajax({
                                            method: 'POST',
                                            data: {
                                                userId: thesuerid,
                                                reviewId: reviewid
                                            },
                                            url: 'http://175.178.193.182:8080/review/like',
                                            success: function (res) {
                                                if (res.status === 200) {
                                                    console.log('????????????');
                                                } else {
                                                    // ??????????????????
                                                    myajax({
                                                        method: 'POST',
                                                        data: {
                                                            userId: thesuerid,
                                                            reviewId: reviewid
                                                        },
                                                        url: 'http://175.178.193.182:8080/review/unlike',
                                                        success: function (res) {
                                                            console.log(res);
                                                            console.log('??????????????????');
                                                        }
                                                    })
                                                }
                                            }
                                        })
                                        this.style.color = 'red';
                                    })
                                }
                            }
                        }
                    })

                    // ????????????
                    r_sentreview[i].addEventListener('click', function (e) {
                        e.stopPropagation();
                        var replyToUserId = this.getAttribute('authorid');
                        var replyToArticleId = this.getAttribute('articleid');
                        var content = r_reviewinput[i].value;
                        if (r_reviewinput[i].value) {
                            myajax({
                                method: 'POST',
                                data: {
                                    replyToUserId: replyToUserId,
                                    replyToArticleId: replyToArticleId,
                                    authorId: thesuerid,
                                    content: content
                                },
                                url: 'http://175.178.193.182:8080/review',
                                success: function (res) {
                                    console.log(res);
                                }
                            })
                            readcomment[i].innerHTML += '<div class="eachcomment"><img src="img/backgroundimg/loginbgcimg.jpg"alt="" class="commentor-avatar"><span class="commentor-name">' + thesuerid + '</span><span class="comment-main">' + content + '</span><span class="comment-date">??????</span><span class="comment-love reviewid="' + result.reviewId + '">???</span><span class="comment-lovenum">0</span></div>'
                        }

                    })










                    // ??????????????????
                    myajax({
                        method: 'GET',
                        data: {
                            userId: getauthorid
                        },
                        url: 'http://175.178.193.182:8080/user/fullInfo',
                        success: function (data) {
                            p_eachfasion.innerHTML += '<div class="other-personal" id="other-personal"><div class="personal-top"><span id="back-article" class="ss-back-article">???</span><span  class="share">???</span></div><div class="avatar-name"><div class="myavatar"><img  src="' + data.user.avatar + '" id="avatar" alt=""></div><div class="p-username">' + data.user.nickname + '</div></div><div class="givehigh"><div class="three-data"><div  class="attention" id="p-data"><span class="num-attention" id="p-datanum">&ensp;' + data.user.follows.length + '</span></br><span class="guanzhu">??????</span></div><div class="fans" id="p-data"><span class="num-fans" id="p-datanum">&ensp;' + data.user.fans.length + '</span></br><span class="fensi">??????</span></div><div class="collect" id="p-data"><span class="num-collect" id="p-datanum">&ensp;&ensp;' + data.user.likedArticles.length + '</span></br><span class="shoucang">???????????????</span></div><button class="edit-btn">?????????</button></div><div class="person-tag"><span class="p-tag p-tag-current ss-articlebtn" id="notebtn">??????</span><span class="p-tag ss-collectbtn" id="collectbtn">??????</span><span class="p-tag ss-zanguobtn" id="zanguobtn">??????</span></div></div><div class="ss-addmyarticle" id="addmyarticle" index="' + ss + '"></div><div class="ss-addcollect" index="' + ss + '" id="addcollect" style="display: none;"></div><div class="ss-addzanguo" index="' + ss + '" id="addzanguo" style="display: none;"></div></div>'
                            var backarticle = document.querySelectorAll('.ss-back-article');

                            // ??????????????????
                            var ss_addmyarticle = document.querySelectorAll('.ss-addmyarticle');
                            var ss_addcollect = document.querySelectorAll('.ss-addcollect');
                            var ss_addzanguo = document.querySelectorAll('.ss-addzanguo');
                            var ss_articlebtn = document.querySelectorAll('.ss-articlebtn');
                            var ss_collectbtn = document.querySelectorAll('.ss-collectbtn');
                            var ss_zanguobtn = document.querySelectorAll('.ss-zanguobtn');
                            //    ??????????????????
                            myajax({
                                method: 'GET',
                                data: {
                                    authorId: getauthorid
                                },
                                url: 'http://175.178.193.182:8080/article/byAuthor',
                                success: function (res) {
                                    var html = ''
                                    for (let r = 0; r < res.articles.length; r++) {
                                        var result = res.articles[r]
                                        html += '<div class="mybox">'
                                        if (result.images[0]) {
                                            html += '<img src="' + result.images[0] + '" alt="" class="imgpart" style="width: 315px;  "><span class="word">' + result.title + '</span><span class="loveicon">???</span><span class="lovenum">' + result.likes + '</span>'

                                        } else {
                                            html += '<span class="word">' + result.title + '</span><span class="loveicon">???</span><span class="lovenum">' + result.likes + '</span>';
                                        }
                                        html += '</div>'
                                        ss_addmyarticle[ss].innerHTML = html

                                    }
                                }
                            })
                            // ???????????????????????????
                            myajax({
                                method: 'GET',
                                data: {
                                    userId: getauthorid
                                },
                                url: 'http://175.178.193.182:8080/article/getStar',
                                success: function (res) {
                                    var html = ''
                                    for (let r = 0; r < res.staredArticles.length; r++) {
                                        var result = res.staredArticles[r]
                                        html += '<div class="mybox">'
                                        if (result.images[0]) {
                                            html += '<img src="' + result.images[0] + '" alt="" class="imgpart" style="width: 315px;  "><span class="word">' + result.title + '</span><span class="loveicon">???</span><span class="lovenum">' + result.likes + '</span>'

                                        } else {
                                            html += '<span class="word">' + result.title + '</span><span class="loveicon">???</span><span class="lovenum">' + result.likes + '</span>';
                                        }
                                        html += '</div>'
                                        ss_addcollect[ss].innerHTML = html
                                    }
                                }
                            })
                            // ???????????????????????????
                            myajax({
                                method: 'GET',
                                data: {
                                    userId: getauthorid
                                },
                                url: 'http://175.178.193.182:8080/article/getLike',
                                success: function (res) {
                                    var html = ''
                                    for (let r = 0; r < res.likedArticles.length; r++) {
                                        var result = res.likedArticles[r]
                                        html += '<div class="mybox">'
                                        if (result.images[0]) {
                                            html += '<img src="' + result.images[0] + '" alt="" class="imgpart" style="width: 315px;  "><span class="word">' + result.title + '</span><span class="loveicon">???</span><span class="lovenum">' + result.likes + '</span>'

                                        } else {
                                            html += '<span class="word">' + result.title + '</span><span class="loveicon">???</span><span class="lovenum">' + result.likes + '</span>';
                                        }
                                        html += '</div>'
                                        ss_addzanguo[ss].innerHTML = html
                                    }
                                }
                            })
                            // ???????????? ????????? ?????? ?????? ??????????????????
                            // ??????
                            ss_articlebtn[ss].addEventListener('click', function () {
                                ss_addmyarticle[ss].style.display = 'block';
                                ss_addcollect[ss].style.display = 'none';
                                ss_addzanguo[ss].style.display = 'none';
                                ss_articlebtn[ss].className = 'p-tag p-tag-current ss-articlebtn';
                                ss_collectbtn[ss].className = 'p-tag ss-collectbtn';
                                ss_zanguobtn[ss].className = 'p-tag ss-zanguobtn';
                            })
                            // ??????
                            ss_collectbtn[ss].addEventListener('click', function () {
                                ss_addmyarticle[ss].style.display = 'none';
                                ss_addcollect[ss].style.display = 'block';
                                ss_addzanguo[ss].style.display = 'none';
                                ss_articlebtn[ss].className = 'p-tag  ss-articlebtn';
                                ss_collectbtn[ss].className = 'p-tag ss-collectbtn p-tag-current';
                                ss_zanguobtn[ss].className = 'p-tag ss-zanguobtn';
                            })
                            // ??????
                            ss_zanguobtn[ss].addEventListener('click', function () {
                                ss_addmyarticle[ss].style.display = 'none';
                                ss_addcollect[ss].style.display = 'none';
                                ss_addzanguo[ss].style.display = 'block';
                                ss_articlebtn[ss].className = 'p-tag  ss-articlebtn';
                                ss_collectbtn[ss].className = 'p-tag ss-collectbtn ';
                                ss_zanguobtn[ss].className = 'p-tag ss-zanguobtn p-tag-current';
                            })
                            // ????????????
                            backarticle[ss].addEventListener('click', function () {
                                p_eachfasion.lastChild.style.display = 'none';
                                p_eachfasion.style.display = 'none';
                                alle_all[aboxindex].style.display = 'block'
                                localStorage.removeItem('ss-aboxindex');
                                ss++;

                            })

                        }
                    })
                    ss_avatar[this.index].addEventListener('click', function () {
                        p_eachfasion.style.display = 'block';
                        p_eachfasion.lastChild.style.display = 'block';
                        alle_all[this.index].style.display = 'none'
                    })

                })
            }

            for (let i = 0; i < allarticlebox.length; i++) {
                allarticlebox[i].index = i;
                ebackhomeall[i].index = i;
                ss_avatar[i].index = i;
                allarticlebox[i].addEventListener('click', function (e) {
                    homepart.style.display = "none";
                    for (let j = 0; j < allarticlebox.length; j++) {
                        alle_all[j].style.display = "none";
                    }
                    eachfasion.style.display = 'block';
                    alle_all[this.index].style.display = "block";
                    ebackhomeall[this.index].addEventListener('click', function () {
                        homepart.style.display = "block";
                        eachfasion.style.display = 'none';
                        alle_all[this.index].style.display = "none";
                    })
                })
            }

            var ss_loveicon = document.querySelectorAll('.ss-loveicon');
            var ss_collecticon = document.querySelectorAll('.ss-collecticon');
            // ?????????????????????
            // ?????????????????????
            for (let k = 0; k < ss_loveicon.length; k++) {
                // ??????
                ss_loveicon[k].addEventListener('click', function (e) {
                    e.stopPropagation();
                    var loveid = this.getAttribute('articleid');
                    console.log(loveid);
                    myajax({
                        method: 'POST',
                        url: 'http://175.178.193.182:8080/article/like',
                        data: {
                            userId: thesuerid,
                            articleId: loveid
                        },
                        success: function (res) {
                            if (res.status === 200) {
                                console.log('????????????');
                                // console.log(k);
                            } else {
                                // ????????????
                                myajax({
                                    method: 'POST',
                                    url: 'http://175.178.193.182:8080/article/unlike',
                                    data: {
                                        userId: thesuerid,
                                        articleId: loveid
                                    },
                                    success: function (ress) {
                                        if (ress.status === 200) {
                                            console.log(ress);
                                            console.log('??????????????????');
                                        }
                                    }
                                })
                            }
                        }
                    })
                })
            }
            // ??????
            for (let k = 0; k < ss_collecticon.length; k++) {
                ss_collecticon[k].addEventListener('click', function (e) {
                    var collectid = this.getAttribute('articleid');
                    e.stopPropagation();
                    myajax({
                        method: 'POST',
                        url: 'http://175.178.193.182:8080/article/star',
                        data: {
                            userId: thesuerid,
                            articleId: collectid
                        },
                        success: function (ress) {
                            if (ress.status === 200) {
                                console.log('????????????');
                            } else {
                                // ??????????????????
                                myajax({
                                    method: 'POST',
                                    url: 'http://175.178.193.182:8080/article/unstar',
                                    data: {
                                        userId: thesuerid,
                                        articleId: collectid
                                    },
                                    success: function (ress) {
                                        if (ress.status === 200) {
                                            console.log(ress);
                                            console.log('??????????????????');
                                        }
                                    }
                                })
                            }
                        }
                    })
                    this.className = 'ec-collect toyellow'
                    console.log(this);
                })
            }
            // ?????????????????????
            for (let i = 0; i < ss_loveicon.length; i++) {
                let loveid = ss_loveicon[i].getAttribute('articleid');
                myajax({
                    method: 'GET',
                    data: {
                        articleId: loveid
                    },
                    url: 'http://175.178.193.182:8080/article/byId',
                    success: function (res) {
                        for (let j = 0; j < res.article.likerList.length; j++) {
                            if (thesuerid === res.article.likerList[j]) {
                                ss_loveicon[i].style.color = 'red';
                            }
                        }
                        // console.log(res);
                    }
                })
            }
            // ?????????????????????
            for (let i = 0; i < ss_collecticon.length; i++) {
                let collectid = ss_collecticon[i].getAttribute('articleid');
                myajax({
                    method: 'GET',
                    data: {
                        articleId: collectid
                    },
                    url: 'http://175.178.193.182:8080/article/byId',
                    success: function (res) {
                        for (let j = 0; j < res.article.starerList.length; j++) {
                            if (thesuerid === res.article.starerList[j]) {
                                ss_collecticon[i].style.color = 'yellow';
                            }
                        }
                        // console.log(res);
                    }
                })
            }
        }
    })
    // ??????????????????
    myajax({
        method: 'GET',
        url: 'http://175.178.193.182:8080/article/getHomePage',
        success: function (res) {
            var html3 = ''
            for (let i = 0; i < res.pages.??????.length; i++) {
                var result = res.pages.??????[i];
                if (result.images[0]) {
                    for (let k = 0; k < result.images.length; k++) {
                        html3 += '<li class=li-scroll><img src="' + result.images[k] + '" alt="" class="main-pic"></li>'
                    }
                    allmakeup.innerHTML += '<div class="m-abox" id="abox" authorid="' + result.authorId + '" articleid="' + result.articleId + '"><img src="' + result.images[0] + '" alt="" class="imgpart" style="width: 315px;  "><span class="word">' + result.title + '<img src="' + result.avatar + '" alt="" class="author-avatar"></span><span class="author">' + result.authorName + '</span><span class="m-loveicon" id="loveicon" articleid="' + result.articleId + '">???</span><span class="lovenum">' + result.likes + '</span></div>'
                } else {
                    allmakeup.innerHTML += '<div class="m-abox" id="abox" authorid="' + result.authorId + '" articleid="' + result.articleId + '"><span class="word">' + result.title + '<img src="' + result.avatar + '" alt="" class="author-avatar"></span><span class="author">' + result.authorName + '</span><span class="m-loveicon"  id="loveicon" articleid="' + result.articleId + '">???</span><span class="lovenum">' + result.likes + '</span></div>' + '<div class="me-all" id="e-all"  style="display: none;" ><div class="e-all-top"><span  id="e-backhome" class="me-backhome">???</span><span class="e-share">???</span><img src="' + result.avatar + '" alt="" class="me-avatar"><span class="e-author">' + result.authorName + '</span><button class="e-follow" authorid=' + result.authorId + '>??????</button></div><div class="e-picbox"><img src="' + result.images[0] + '" alt="" class="main-pic"></div><div class="e-databox"><div class="e-title">' + result.title + '</div><div class="e-content">' + result.content + '</div><div class="e-tag">#' + result.tags + '</div><div class="e-date">' + result.postDate + '</div><button class="e-dislike">??? ?????????</button></div><div class="e-allcomment"><div class="allcommentnum">???' + result.reviews + '?????????</div><div class="e-comment1"><img src="' + nowavatar + '" alt="" class="e-comment1-avatar"><input type="text" class="e-input1" placeholder="?????????????????????????????????~"><button id="sent-review" class="r-sentreview"  authorid="' + result.authorId + '" articleid="' + result.articleId + '">??????</button></div></div><div class="readcomment"></div><div class="readcomment"></div><div class="e-commentall"><div class="e-comment2"><input type="text" class="e-input2" placeholder="??????????????????"><span class="ec-love m-loveicon" id="ec-icon" articleid="' + result.articleId + '">???</span><span class="ec-lovenum" id="ec-icon">' + result.likes + '</span><span class="ec-collect m-collecticon"  id="ec-icon" articleid="' + result.articleId + '">???</span><span class="ec-collectnum" id="ec-icon">' + result.stars + '</span><span class="ec-comment" id="ec-icon">???</span><span class="ec-commentnum" id="ec-icon">' + result.reviews + '</span></div></div></div>'
                }
                eachmakeup.innerHTML += '<div class="me-all"  id="e-all" style="display: none;" ><div id="mark-input" class="mark-input" ><input class="child-review" placeholder="????????????"><button class="sentchildreview">??????</button></div><div class="e-all-top"><span class="me-backhome" id="e-backhome" >???</span><span class="e-share">???</span><img src="' + result.avatar + '" alt="" class="me-avatar" id="e-avatar"><span class="e-author">' + result.authorName + '</span><button class="e-follow" authorid=' + result.authorId + '>??????</button></div><div class="m-hiddenit" id="hiddenit"><ul class="m-scroll" id="scroll">' + html3 + '</ul><ol class="m-circle" id="circle"></ol></div><div class="e-databox"><div class="e-title">' + result.title + '</div><div class="e-content">' + result.content + '</div><div class="e-tag">#' + result.tags + '</div><div class="e-date">' + result.postDate + '</div><button class="e-dislike">??? ?????????</button></div><div class="e-allcomment"><div class="allcommentnum">???' + result.reviews + '?????????</div><div class="e-comment1"><img src="' + nowavatar + '" alt="" class="e-comment1-avatar"><input type="text" class="e-input1" placeholder="?????????????????????????????????~"><button id="sent-review" class="r-sentreview"  authorid="' + result.authorId + '" articleid="' + result.articleId + '">??????</button></div></div><div class="readcomment"></div><div class="e-commentall"><div class="e-comment2"><input type="text" class="e-input2" placeholder="??????????????????"><span class="ec-love m-loveicon" id="ec-icon" articleid="' + result.articleId + '">???</span><span class="ec-lovenum" id="ec-icon">' + result.likes + '</span><span class="ec-collect m-collecticon" articleid="' + result.articleId + '" id="ec-icon">???</span><span class="ec-collectnum" id="ec-icon">' + result.stars + '</span><span class="ec-comment" id="ec-icon">???</span><span class="ec-commentnum" id="ec-icon">' + result.reviews + '</span></div></div></div>'

                // ?????????????????????(??????li)
                var hiddenit = document.querySelectorAll('.m-hiddenit');
                var ul = hiddenit[i].querySelector('.m-scroll');
                var ol = hiddenit[i].querySelector('.m-circle');
                for (let j = 0; j < ul.children.length; j++) {
                    var li = document.createElement('li');
                    // console.log(ul);            
                    li.setAttribute('index', j);
                    ol.appendChild(li);

                }
                html3 = ''
                // ???picnum?????????  picnum+result.images.length    li????????????
            }

            // ????????????
            var e_follow = eachmakeup.querySelectorAll('.e-follow');
            for (let i = 0; i < e_follow.length; i++) {
                var followid = e_follow[i].getAttribute('authorid');
                e_follow[i].addEventListener('click', function () {
                    myajax({
                        method: 'POST',
                        url: 'http://175.178.193.182:8080/user/follow',
                        data: {
                            userId: thesuerid,
                            followerId: followid
                        },
                        success: function (res) {
                            if (res.status === 200) {

                                // btnguanzhu[i].innerHTML = '?????????';
                                e_follow[i].innerHTML = '?????????'
                                e_follow[i].style.backgroundColor = '#fff';
                            } else {
                                // console.log(result);
                                myajax({
                                    method: 'POST',
                                    url: 'http://175.178.193.182:8080/user/cancelFollow',
                                    data: {
                                        userId: thesuerid,
                                        followerId: followid
                                    },
                                    success: function (res) {
                                        if (res.status === 200) {

                                            // btnguanzhu[this.index].innerHTML='?????????';
                                            e_follow[i].innerHTML = '??????'
                                            e_follow[i].style.backgroundColor = 'orange';
                                        }
                                    }
                                })
                            }
                        }
                    })
                })
            }
            // ?????????????????????

            for (let i = 0; i < e_follow.length; i++) {
                var followid = e_follow[i].getAttribute('authorid');
                myajax({
                    method: 'GET',
                    url: 'http://175.178.193.182:8080/user/fullInfo',
                    data: {
                        userId: followid
                    },
                    success: function (res) {
                        if (res.user.fans) {
                            for (let j = 0; j < res.user.fans.length; j++) {
                                var fan = res.user.fans[j];
                                if (thesuerid == fan) {
                                    e_follow[i].innerHTML = '?????????'
                                    e_follow[i].style.backgroundColor = '#fff'
                                }
                            }
                        }
                    }
                })
            }

            // ??????????????????
            var ols = document.querySelectorAll('.m-circle');
            var uls = document.querySelectorAll('.m-scroll');
            for (let u = 0; u < ols.length; u++) {
                ols[u].children[0].className = 'current';
                ols[u].index = u;
                for (let j = 0; j < ols[u].children.length; j++) {
                    ols[u].children[j].index = j;
                    // console.log(ols[i].children[j]);
                    ols[u].children[j].addEventListener('click', function () {
                        var nowindex = this.parentNode.index;
                        var index = this.getAttribute('index');
                        for (let k = 0; k < ols[nowindex].children.length; k++) {
                            ols[nowindex].children[k].className = '';
                        };
                        this.className = 'current';
                        var hiddenitWidth = -740;

                        animate(uls[nowindex], index * hiddenitWidth);
                    })
                }
            }

            var allarticlebox = document.querySelectorAll('.m-abox');
            var alle_all = document.querySelectorAll('.me-all');
            var ebackhomeall = document.querySelectorAll('.me-backhome');
            var collecticon = document.querySelectorAll('.ec-collect');
            var me_avatar = document.querySelectorAll('.me-avatar');
            var readcomment = eachmakeup.querySelectorAll('.readcomment');
            var r_sentreview = document.querySelectorAll('.r-sentreview');
            var r_reviewinput = document.querySelectorAll('.e-input1');
            // ????????????????????????
            localStorage.setItem('m', 0);
            var m = localStorage.getItem('m');
            // ???????????????????????????
            for (let i = 0; i < allarticlebox.length; i++) {
                allarticlebox[i].setAttribute('index', i);
                //    ????????????
                allarticlebox[i].addEventListener('click', function () {
                    var getauthorid = this.getAttribute('authorid');
                    localStorage.setItem('m-aboxindex', this.index);
                    var aboxindex = localStorage.getItem('m-aboxindex');
                    var getarticleid = this.getAttribute('articleid');
                    // ??????????????????
                    myajax({
                        method: 'GET',
                        data: {
                            articleId: getarticleid,
                            pages: 0
                        },
                        url: 'http://175.178.193.182:8080/review/byArticle',
                        success: function (res) {
                            // console.log(res);
                            let theinnerHTML = ''
                            let childhtml = ''
                            for (let j = 0; j < res.reviews.length; j++) {
                                let result = res.reviews[j];
                                for (let k = 0; k < res.reviews[j].reviewList.length; k++) {
                                    chiildresult = res.reviews[j].reviewList[k]
                                    childhtml += '<div class="ej-eachcomment" index="' + k + '" reviewerid="' + chiildresult.authorId + '"><img src="img/backgroundimg/loginbgcimg.jpg"alt="" class="ej-commentor-avatar"><span class="ej-commentor-name">' + chiildresult.authorId + '</span><span class="ej-comment-main">' + chiildresult.content + '</span><span class="ej-comment-date">' + chiildresult.postDate + '</span><span class="comment-love">???</span><span class="comment-lovenum">' + chiildresult.likes + '</span></div>'
                                }
                                theinnerHTML += '<div class="eachcomment" reviewerid="' + result.authorId + '" thereviewid="' + result.reviewId + '"><img src=""alt="" class="commentor-avatar" index="' + j + '"><span class="commentor-name" index="' + j + '">' + result.authorId + '</span><span class="comment-main">' + result.content + '</span><span class="comment-date">' + result.postDate + '</span><span class="comment-love"  reviewid="' + result.reviewId + '">???</span><span class="comment-lovenum">' + result.likes + '</span>' + childhtml + '</div>';
                                childhtml = '';
                            }
                            readcomment[i].innerHTML = theinnerHTML;
                            let reviewbox = readcomment[i].querySelectorAll('.eachcomment');
                            let reviewer_avatar = readcomment[i].querySelectorAll('.commentor-avatar');
                            let review_name = readcomment[i].querySelectorAll('.commentor-name');
                            let markinput = document.querySelectorAll('.r-mark-input');
                            let childinput = document.querySelectorAll('.child-review');
                            let sentchildreview = document.querySelectorAll('.sentchildreview');
                            // console.log(childinput[i]);
                            for (let j = 0; j < res.reviews.length; j++) {
                                // result.authorId????????????????????????????????? 
                                let nowj = review_name[j].getAttribute('index');
                                let nowreviewer_avatar = reviewer_avatar[nowj];
                                let nowreview_name = review_name[nowj];
                                let reviewerid = reviewbox[nowj].getAttribute('reviewerid');
                                // console.log(review_name[j]);
                                myajax({
                                    method: 'GET',
                                    data: {
                                        userId: reviewerid
                                    },
                                    url: 'http://175.178.193.182:8080/user/fullInfo',
                                    success: function (ee) {
                                        // console.log(nowreviewer_avatar);
                                        nowreviewer_avatar.src = ee.user.avatar;
                                        nowreview_name.innerHTML = ee.user.nickname;
                                        // j = 0;
                                    }
                                })
                                let childbox = reviewbox[j].querySelectorAll('.ej-eachcomment')
                                for (let k = 0; k < childbox.length; k++) {
                                    let childid = childbox[k].getAttribute('reviewerid');
                                    let childavatar = childbox[k].querySelectorAll('.ej-commentor-avatar');
                                    let childname = childbox[k].querySelectorAll('.ej-commentor-name');
                                    myajax({
                                        method: 'GET',
                                        data: {
                                            userId: childid
                                        },
                                        url: 'http://175.178.193.182:8080/user/fullInfo',
                                        success: function (ee) {
                                            // console.log(nowreviewer_avatar);
                                            childavatar.src = ee.user.avatar;
                                            childname.innerHTML = ee.user.nickname;
                                            // j = 0;
                                        }
                                    })
                                }
                                // ??????????????????
                                reviewbox[j].addEventListener('click', function () {
                                    var replyToUserId = r_sentreview[i].getAttribute('authorid');
                                    var replyToArticleId = r_sentreview[i].getAttribute('articleid');
                                    let parentreview = this.getAttribute('thereviewid');
                                    console.log(replyToUserId);
                                    console.log(replyToArticleId);
                                    console.log(parentreview);
                                    markinput[i].style.display = 'block';

                                    console.log(childinput[i].value);
                                    sentchildreview[i].addEventListener('click', function (e) {

                                        e.stopPropagation();
                                        console.log(childinput[i].value);
                                        if (childinput[i].value) {
                                            console.log(j);
                                            console.log(reviewbox[j + 1]);
                                            console.log(this);
                                            myajax({
                                                method: 'POST',
                                                data: {
                                                    replyToUserId: replyToUserId,
                                                    replyToArticleId: replyToArticleId,
                                                    parentReviewId: parentreview,
                                                    authorId: thesuerid,
                                                    content: childinput[i].value
                                                },
                                                url: 'http://175.178.193.182:8080/review',
                                                success: function (res) {
                                                    console.log(res);
                                                    markinput[i].style.display = 'none';
                                                    var div = document.createElement('div');
                                                    div.className = 'child-review';
                                                    div.innerHTML = '<div class="ej-eachcomment"><img src="img/backgroundimg/loginbgcimg.jpg"alt="" class="ej-commentor-avatar"><span class="ej-commentor-name">' + thesuerid + '</span><span class="ej-comment-main">' + childinput[i].value + '</span><span class="ej-comment-date">??????</span><span class="comment-love reviewid="' + result.reviewId + '">???</span><span class="comment-lovenum">0</span></div>'
                                                    readcomment[i].insertBefore(div, reviewbox[j + 1])
                                                    markinput[i].style.display = 'none';
                                                }
                                            })
                                        }
                                    })
                                })
                            }
                            // ????????????
                            var love_review = document.querySelectorAll('.comment-love')
                            if (love_review[0]) {
                                for (let j = 0; j < love_review.length; j++) {
                                    // console.log(love_review[j]);
                                    love_review[j].addEventListener('click', function () {
                                        var reviewid = this.getAttribute('reviewid');
                                        myajax({
                                            method: 'POST',
                                            data: {
                                                userId: thesuerid,
                                                reviewId: reviewid
                                            },
                                            url: 'http://175.178.193.182:8080/review/like',
                                            success: function (res) {
                                                if (res.status === 200) {
                                                    console.log('????????????');
                                                } else {
                                                    // ??????????????????
                                                    myajax({
                                                        method: 'POST',
                                                        data: {
                                                            userId: thesuerid,
                                                            reviewId: reviewid
                                                        },
                                                        url: 'http://175.178.193.182:8080/review/unlike',
                                                        success: function (res) {
                                                            console.log(res);
                                                            console.log('??????????????????');
                                                        }
                                                    })
                                                }
                                            }
                                        })
                                        this.style.color = 'red';
                                    })
                                }
                            }
                        }
                    })

                    // ????????????
                    r_sentreview[i].addEventListener('click', function (e) {
                        e.stopPropagation();
                        var replyToUserId = this.getAttribute('authorid');
                        var replyToArticleId = this.getAttribute('articleid');
                        var content = r_reviewinput[i].value;
                        if (r_reviewinput[i].value) {
                            myajax({
                                method: 'POST',
                                data: {
                                    replyToUserId: replyToUserId,
                                    replyToArticleId: replyToArticleId,
                                    authorId: thesuerid,
                                    content: content
                                },
                                url: 'http://175.178.193.182:8080/review',
                                success: function (res) {
                                    console.log(res);
                                }
                            })
                            readcomment[i].innerHTML += '<div class="eachcomment"><img src="img/backgroundimg/loginbgcimg.jpg"alt="" class="commentor-avatar"><span class="commentor-name">' + thesuerid + '</span><span class="comment-main">' + content + '</span><span class="comment-date">??????</span><span class="comment-love reviewid="' + result.reviewId + '">???</span><span class="comment-lovenum">0</span></div>'
                        }

                    })

                    // ??????????????????
                    myajax({
                        method: 'GET',
                        data: {
                            userId: getauthorid
                        },
                        url: 'http://175.178.193.182:8080/user/fullInfo',
                        success: function (data) {
                            p_eachmakeup.innerHTML += '<div class="other-personal" id="other-personal"><div class="personal-top"><span id="back-article" class="m-back-article">???</span><span  class="share">???</span></div><div class="avatar-name"><div class="myavatar"><img  src="' + data.user.avatar + '" id="avatar" alt=""></div><div class="p-username">' + data.user.nickname + '</div></div><div class="givehigh"><div class="three-data"><div  class="attention" id="p-data"><span class="num-attention" id="p-datanum">&ensp;' + data.user.follows.length + '</span></br><span class="guanzhu">??????</span></div><div class="fans" id="p-data"><span class="num-fans" id="p-datanum">&ensp;' + data.user.fans.length + '</span></br><span class="fensi">??????</span></div><div class="collect" id="p-data"><span class="num-collect" id="p-datanum">&ensp;&ensp;' + data.user.likedArticles.length + '</span></br><span class="shoucang">???????????????</span></div><button class="edit-btn">?????????</button></div><div class="person-tag"><span class="p-tag p-tag-current m-articlebtn" id="notebtn">??????</span><span class="p-tag m-collectbtn" id="collectbtn">??????</span><span class="p-tag m-zanguobtn" id="zanguobtn">??????</span></div></div><div class="m-addmyarticle" id="addmyarticle" index="' + m + '"></div><div class="m-addcollect" index="' + m + '" id="addcollect" style="display: none;"></div><div class="m-addzanguo" index="' + m + '" id="addzanguo" style="display: none;"></div></div>'
                            var backarticle = document.querySelectorAll('.m-back-article');
                            // ??????????????????
                            var m_addmyarticle = document.querySelectorAll('.m-addmyarticle');
                            var m_addcollect = document.querySelectorAll('.m-addcollect');
                            var m_addzanguo = document.querySelectorAll('.m-addzanguo');
                            var m_articlebtn = document.querySelectorAll('.m-articlebtn');
                            var m_collectbtn = document.querySelectorAll('.m-collectbtn');
                            var m_zanguobtn = document.querySelectorAll('.m-zanguobtn');
                            //    ??????????????????
                            myajax({
                                method: 'GET',
                                data: {
                                    authorId: getauthorid
                                },
                                url: 'http://175.178.193.182:8080/article/byAuthor',
                                success: function (res) {
                                    var html = ''
                                    for (let r = 0; r < res.articles.length; r++) {
                                        var result = res.articles[r]
                                        html += '<div class="mybox">'
                                        if (result.images[0]) {
                                            html += '<img src="' + result.images[0] + '" alt="" class="imgpart" style="width: 315px;  "><span class="word">' + result.title + '</span><span class="loveicon">???</span><span class="lovenum">' + result.likes + '</span>'

                                        } else {
                                            html += '<span class="word">' + result.title + '</span><span class="loveicon">???</span><span class="lovenum">' + result.likes + '</span>';
                                        }
                                        html += '</div>'
                                        m_addmyarticle[m].innerHTML = html
                                    }
                                }
                            })
                            // ???????????????????????????
                            myajax({
                                method: 'GET',
                                data: {
                                    userId: getauthorid
                                },
                                url: 'http://175.178.193.182:8080/article/getStar',
                                success: function (res) {
                                    var html = ''
                                    for (let r = 0; r < res.staredArticles.length; r++) {
                                        var result = res.staredArticles[r]
                                        html += '<div class="mybox">'
                                        if (result.images[0]) {
                                            html += '<img src="' + result.images[0] + '" alt="" class="imgpart" style="width: 315px;  "><span class="word">' + result.title + '</span><span class="loveicon">???</span><span class="lovenum">' + result.likes + '</span>'

                                        } else {
                                            html += '<span class="word">' + result.title + '</span><span class="loveicon">???</span><span class="lovenum">' + result.likes + '</span>';
                                        }
                                        html += '</div>'
                                        m_addcollect[m].innerHTML = html
                                    }
                                }
                            })
                            // ???????????????????????????
                            myajax({
                                method: 'GET',
                                data: {
                                    userId: getauthorid
                                },
                                url: 'http://175.178.193.182:8080/article/getLike',
                                success: function (res) {
                                    var html = ''
                                    for (let r = 0; r < res.likedArticles.length; r++) {
                                        var result = res.likedArticles[r]
                                        html += '<div class="mybox">'
                                        if (result.images[0]) {
                                            html += '<img src="' + result.images[0] + '" alt="" class="imgpart" style="width: 315px;  "><span class="word">' + result.title + '</span><span class="loveicon">???</span><span class="lovenum">' + result.likes + '</span>'

                                        } else {
                                            html += '<span class="word">' + result.title + '</span><span class="loveicon">???</span><span class="lovenum">' + result.likes + '</span>';
                                        }
                                        html += '</div>'
                                        m_addzanguo[m].innerHTML = html
                                    }
                                }
                            })
                            // ???????????? ????????? ?????? ?????? ??????????????????
                            // ??????
                            m_articlebtn[m].addEventListener('click', function () {
                                m_addmyarticle[m].style.display = 'block';
                                m_addcollect[m].style.display = 'none';
                                m_addzanguo[m].style.display = 'none';
                                m_articlebtn[m].className = 'p-tag p-tag-current m-articlebtn';
                                m_collectbtn[m].className = 'p-tag m-collectbtn';
                                m_zanguobtn[m].className = 'p-tag m-zanguobtn';
                            })
                            // ??????
                            m_collectbtn[m].addEventListener('click', function () {
                                m_addmyarticle[m].style.display = 'none';
                                m_addcollect[m].style.display = 'block';
                                m_addzanguo[m].style.display = 'none';
                                m_articlebtn[m].className = 'p-tag  m-articlebtn';
                                m_collectbtn[m].className = 'p-tag m-collectbtn p-tag-current';
                                m_zanguobtn[m].className = 'p-tag m-zanguobtn';
                            })
                            // ??????
                            m_zanguobtn[m].addEventListener('click', function () {
                                m_addmyarticle[m].style.display = 'none';
                                m_addcollect[m].style.display = 'none';
                                m_addzanguo[m].style.display = 'block';
                                m_articlebtn[m].className = 'p-tag  m-articlebtn';
                                m_collectbtn[m].className = 'p-tag m-collectbtn ';
                                m_zanguobtn[m].className = 'p-tag m-zanguobtn p-tag-current';
                            })
                            // ????????????
                            backarticle[m].addEventListener('click', function () {
                                p_eachmakeup.lastChild.style.display = 'none';
                                p_eachmakeup.style.display = 'none';
                                alle_all[aboxindex].style.display = 'block'
                                localStorage.removeItem('m-aboxindex');
                                m++;
                            })
                        }
                    })
                    me_avatar[this.index].addEventListener('click', function () {
                        p_eachmakeup.style.display = 'block';
                        p_eachmakeup.lastChild.style.display = 'block';
                        alle_all[this.index].style.display = 'none'
                    })

                })

            }

            for (let i = 0; i < allarticlebox.length; i++) {
                allarticlebox[i].index = i;
                ebackhomeall[i].index = i;
                me_avatar[i].index = i;
                allarticlebox[i].addEventListener('click', function () {
                    homepart.style.display = "none";
                    for (let j = 0; j < allarticlebox.length; j++) {
                        alle_all[j].style.display = "none";
                    }
                    eachmakeup.style.display = 'block';
                    alle_all[this.index].style.display = "block";
                    ebackhomeall[this.index].addEventListener('click', function () {
                        eachmakeup.style.display = 'none';
                        alle_all[this.index].style.display = "none";
                        homepart.style.display = "block";
                    })
                })
            }

            var m_loveicon = document.querySelectorAll('.m-loveicon');
            var m_collecticon = document.querySelectorAll('.m-collecticon');
            // ?????????????????????
            for (let k = 0; k < m_loveicon.length; k++) {
                // ??????
                m_loveicon[k].addEventListener('click', function (e) {
                    e.stopPropagation();
                    var loveid = this.getAttribute('articleid');
                    myajax({
                        method: 'POST',
                        url: 'http://175.178.193.182:8080/article/like',
                        data: {
                            userId: thesuerid,
                            articleId: loveid
                        },
                        success: function (res) {
                            if (res.status === 200) {
                                console.log('????????????');
                            } else {
                                // ????????????
                                myajax({
                                    method: 'POST',
                                    url: 'http://175.178.193.182:8080/article/unlike',
                                    data: {
                                        userId: thesuerid,
                                        articleId: loveid
                                    },
                                    success: function (ress) {
                                        if (ress.status === 200) {
                                            console.log(ress);
                                            console.log('??????????????????');
                                        }
                                    }
                                })
                            }
                        }
                    })
                })
            }
            // ??????
            // ??????
            for (let k = 0; k < m_collecticon.length; k++) {
                m_collecticon[k].addEventListener('click', function (e) {
                    var collectid = this.getAttribute('articleid');
                    e.stopPropagation();
                    myajax({
                        method: 'POST',
                        url: 'http://175.178.193.182:8080/article/star',
                        data: {
                            userId: thesuerid,
                            articleId: collectid
                        },
                        success: function (ress) {
                            if (ress.status === 200) {
                                console.log('????????????');
                            } else {
                                // ??????????????????
                                myajax({
                                    method: 'POST',
                                    url: 'http://175.178.193.182:8080/article/unstar',
                                    data: {
                                        userId: thesuerid,
                                        articleId: collectid
                                    },
                                    success: function (ress) {
                                        if (ress.status === 200) {
                                            console.log(ress);
                                            console.log('??????????????????');
                                        }
                                    }
                                })
                            }
                        }
                    })
                    this.className = 'ec-collect toyellow'
                })
            }
            // ?????????????????????
            for (let i = 0; i < m_loveicon.length; i++) {
                let loveid = m_loveicon[i].getAttribute('articleid');
                myajax({
                    method: 'GET',
                    data: {
                        articleId: loveid
                    },
                    url: 'http://175.178.193.182:8080/article/byId',
                    success: function (res) {
                        for (let j = 0; j < res.article.likerList.length; j++) {
                            if (thesuerid === res.article.likerList[j]) {
                                m_loveicon[i].style.color = 'red';
                            }
                        }
                    }
                })
            }
            // ?????????????????????
            for (let i = 0; i < m_collecticon.length; i++) {
                let collectid = m_collecticon[i].getAttribute('articleid');
                myajax({
                    method: 'GET',
                    data: {
                        articleId: collectid
                    },
                    url: 'http://175.178.193.182:8080/article/byId',
                    success: function (res) {
                        for (let j = 0; j < res.article.starerList.length; j++) {
                            if (thesuerid === res.article.starerList[j]) {
                                m_collecticon[i].style.color = 'yellow';
                            }
                        }
                    }
                })
            }
        }
    })
    // ??????????????????
    myajax({
        method: 'GET',
        url: 'http://175.178.193.182:8080/article/getHomePage',
        success: function (res) {
            var html3 = ''
            for (let i = 0; i < res.pages.??????.length; i++) {
                var result = res.pages.??????[i];
                if (result.images[0]) {
                    for (let k = 0; k < result.images.length; k++) {
                        html3 += '<li class=li-scroll><img src="' + result.images[k] + '" alt="" class="main-pic"></li>'
                    }
                    allefficient.innerHTML += '<div class="g-abox" id="abox" authorid="' + result.authorId + '" articleid="' + result.articleId + '"><img src="' + result.images[0] + '" alt="" class="imgpart" style="width: 315px;  "><span class="word">' + result.title + '<img src="' + result.avatar + '" alt="" class="author-avatar"></span><span class="author">' + result.authorName + '</span><span class="e-loveicon" id="loveicon" articleid="' + result.articleId + '">???</span><span class="lovenum">' + result.likes + '</span></div>'
                } else {
                    allefficient.innerHTML += '<div class="g-abox" id="abox" authorid="' + result.authorId + '" articleid="' + result.articleId + '"><span class="word">' + result.title + '<img src="' + result.avatar + '" alt="" class="author-avatar"></span><span class="author">' + result.authorName + '</span><span class="e-loveicon" id="loveicon" articleid="' + result.articleId + '">???</span><span class="lovenum">' + result.likes + '</span></div>' + '<div id="e-all"  class="ge-all" style="display: none;" ><div class="e-all-top"><span id="e-backhome"  class="ge-backhome">???</span><span class="e-share">???</span><img src="' + result.avatar + '" alt="" class="ge-avatar" id="e-avatar"><span class="e-author">' + result.authorName + '</span><button class="e-follow" authorid=' + result.authorId + '>??????</button></div><div class="e-picbox"><img src="' + result.images[0] + '" alt="" class="main-pic"></div><div class="e-databox"><div class="e-title">' + result.title + '</div><div class="e-content">' + result.content + '</div><div class="e-tag">#' + result.tags + '</div><div class="e-date">' + result.postDate + '</div><button class="e-dislike">??? ?????????</button></div><div class="e-allcomment"><div class="allcommentnum">???' + result.reviews + '?????????</div><div class="e-comment1"><img src="' + nowavatar + '" alt="" class="e-comment1-avatar"><input type="text" class="e-input1" placeholder="?????????????????????????????????~"><button id="sent-review" class="r-sentreview" authorid="' + result.authorId + '" articleid="' + result.articleId + '">??????</button></div></div><div class="readcomment"></div><div class="e-commentall"><div class="e-comment2"><input type="text" class="e-input2" placeholder="??????????????????"><span class="ec-love e-loveicon" id="ec-icon"  articleid="' + result.articleId + '">???</span><span class="ec-lovenum" id="ec-icon">' + result.likes + '</span><span class="ec-collect e-collecticon" id="ec-icon" articleid="' + result.articleId + '">???</span><span class="ec-collectnum" id="ec-icon">' + result.stars + '</span><span class="ec-comment" id="ec-icon">???</span><span class="ec-commentnum" id="ec-icon">' + result.reviews + '</span></div></div></div>'
                }
                eachefficient.innerHTML += '<div class="ge-all"  id="e-all" style="display: none;" ><div id="mark-input" class="mark-input" ><input class="child-review" placeholder="????????????"><button class="sentchildreview">??????</button></div><div class="e-all-top"><span class="ge-backhome" id="e-backhome" >???</span><span class="e-share">???</span><img src="' + result.avatar + '" alt="" class="ge-avatar" id="e-avatar"><span class="e-author">' + result.authorName + '</span><button class="e-follow" authorid=' + result.authorId + '>??????</button></div><div class="e-hiddenit" id="hiddenit"><ul class="e-scroll" id="scroll">' + html3 + '</ul><ol class="e-circle" id="circle"></ol></div><div class="e-databox"><div class="e-title">' + result.title + '</div><div class="e-content">' + result.content + '</div><div class="e-tag">#' + result.tags + '</div><div class="e-date">' + result.postDate + '</div><button class="e-dislike">??? ?????????</button></div><div class="e-allcomment"><div class="allcommentnum">???' + result.reviews + '?????????</div><div class="e-comment1"><img src="' + nowavatar + '" alt="" class="e-comment1-avatar"><input type="text" class="e-input1" placeholder="?????????????????????????????????~"><button id="sent-review" class="r-sentreview" authorid="' + result.authorId + '" articleid="' + result.articleId + '">??????</button></div></div><div class="readcomment"></div><div class="e-commentall"><div class="e-comment2"><input type="text" class="e-input2" placeholder="??????????????????"><span class="ec-love e-loveicon" articleid="' + result.articleId + '" id="ec-icon">???</span><span class="ec-lovenum" id="ec-icon">' + result.likes + '</span><span class="ec-collect e-collecticon" id="ec-icon" articleid="' + result.articleId + '">???</span><span class="ec-collectnum" id="ec-icon">' + result.stars + '</span><span class="ec-comment" id="ec-icon">???</span><span class="ec-commentnum" id="ec-icon">' + result.reviews + '</span></div></div></div>'

                // ??????????????????????????????li???
                var hiddenit = document.querySelectorAll('.e-hiddenit');
                var ul = hiddenit[i].querySelector('.e-scroll');
                var ol = hiddenit[i].querySelector('.e-circle');
                for (let j = 0; j < ul.children.length; j++) {
                    var li = document.createElement('li');
                    li.setAttribute('index', j);
                    ol.appendChild(li);

                }
                html3 = ''
                // ???picnum?????????  picnum+result.images.length    li????????????
            }

            // ????????????
            var e_follow = eachefficient.querySelectorAll('.e-follow');
            for (let i = 0; i < e_follow.length; i++) {
                var followid = e_follow[i].getAttribute('authorid');
                e_follow[i].addEventListener('click', function () {
                    myajax({
                        method: 'POST',
                        url: 'http://175.178.193.182:8080/user/follow',
                        data: {
                            userId: thesuerid,
                            followerId: followid
                        },
                        success: function (res) {
                            if (res.status === 200) {

                                // btnguanzhu[i].innerHTML = '?????????';
                                e_follow[i].innerHTML = '?????????'
                                e_follow[i].style.backgroundColor = '#fff';
                            } else {
                                myajax({
                                    method: 'POST',
                                    url: 'http://175.178.193.182:8080/user/cancelFollow',
                                    data: {
                                        userId: thesuerid,
                                        followerId: followid
                                    },
                                    success: function (res) {
                                        if (res.status === 200) {
                                            // btnguanzhu[this.index].innerHTML='?????????';
                                            e_follow[i].innerHTML = '??????'
                                            e_follow[i].style.backgroundColor = 'orange';
                                        }
                                    }
                                })
                            }
                        }
                    })
                })
            }
            // ?????????????????????
            for (let i = 0; i < e_follow.length; i++) {
                var followid = e_follow[i].getAttribute('authorid');
                myajax({
                    method: 'GET',
                    url: 'http://175.178.193.182:8080/user/fullInfo',
                    data: {
                        userId: followid
                    },
                    success: function (res) {
                        if (res.user.fans) {
                            for (let j = 0; j < res.user.fans.length; j++) {
                                var fan = res.user.fans[j];
                                if (thesuerid == fan) {
                                    e_follow[i].innerHTML = '?????????'
                                    e_follow[i].style.backgroundColor = '#fff'
                                }
                            }
                        }
                    }
                })
            }

            var ols = document.querySelectorAll('.e-circle');
            var uls = document.querySelectorAll('.e-scroll');
            for (let u = 0; u < ols.length; u++) {
                ols[u].children[0].className = 'current';
                ols[u].index = u;
                for (let j = 0; j < ols[u].children.length; j++) {
                    ols[u].children[j].index = j;
                    ols[u].children[j].addEventListener('click', function () {
                        var nowindex = this.parentNode.index;
                        var index = this.getAttribute('index');
                        for (let k = 0; k < ols[nowindex].children.length; k++) {
                            ols[nowindex].children[k].className = '';
                        };
                        this.className = 'current';
                        var hiddenitWidth = -740;

                        animate(uls[nowindex], index * hiddenitWidth);
                    })
                }
            }

            let allarticlebox = document.querySelectorAll('.g-abox');
            let alle_all = document.querySelectorAll('.ge-all');
            let ebackhomeall = document.querySelectorAll('.ge-backhome');
            let ge_avatar = document.querySelectorAll('.ge-avatar');
            let readcomment = eachefficient.querySelectorAll('.readcomment');
            let r_sentreview = document.querySelectorAll('.r-sentreview');
            let r_reviewinput = document.querySelectorAll('.e-input1');
            // ????????????????????????
            localStorage.setItem('g', 0);
            var g = localStorage.getItem('g');
            // ???????????????????????????
            for (let i = 0; i < allarticlebox.length; i++) {
                allarticlebox[i].setAttribute('index', i);
                //    ????????????
                allarticlebox[i].addEventListener('click', function () {
                    var getauthorid = this.getAttribute('authorid');
                    localStorage.setItem('g-aboxindex', this.index);
                    var aboxindex = localStorage.getItem('g-aboxindex');
                    var getarticleid = this.getAttribute('articleid');
                    // ??????????????????
                    myajax({
                        method: 'GET',
                        data: {
                            articleId: getarticleid,
                            pages: 0
                        },
                        url: 'http://175.178.193.182:8080/review/byArticle',
                        success: function (res) {
                            let theinnerHTML = ''
                            let childhtml = ''
                            for (let j = 0; j < res.reviews.length; j++) {
                                let result = res.reviews[j];
                                for (let k = 0; k < res.reviews[j].reviewList.length; k++) {
                                    chiildresult = res.reviews[j].reviewList[k]
                                    childhtml += '<div class="ej-eachcomment" index="' + k + '" reviewerid="' + chiildresult.authorId + '"><img src="img/backgroundimg/loginbgcimg.jpg"alt="" class="ej-commentor-avatar"><span class="ej-commentor-name">' + chiildresult.authorId + '</span><span class="ej-comment-main">' + chiildresult.content + '</span><span class="ej-comment-date">' + chiildresult.postDate + '</span><span class="comment-love">???</span><span class="comment-lovenum">' + chiildresult.likes + '</span></div>'
                                }
                                theinnerHTML += '<div class="eachcomment" reviewerid="' + result.authorId + '" thereviewid="' + result.reviewId + '"><img src=""alt="" class="commentor-avatar" index="' + j + '"><span class="commentor-name" index="' + j + '">' + result.authorId + '</span><span class="comment-main">' + result.content + '</span><span class="comment-date">' + result.postDate + '</span><span class="comment-love"  reviewid="' + result.reviewId + '">???</span><span class="comment-lovenum">' + result.likes + '</span>' + childhtml + '</div>';
                                childhtml = '';
                            }
                            readcomment[i].innerHTML = theinnerHTML;
                            let reviewbox = readcomment[i].querySelectorAll('.eachcomment');
                            let reviewer_avatar = readcomment[i].querySelectorAll('.commentor-avatar');
                            let review_name = readcomment[i].querySelectorAll('.commentor-name');
                            let markinput = document.querySelectorAll('.r-mark-input');
                            let childinput = document.querySelectorAll('.child-review');
                            let sentchildreview = document.querySelectorAll('.sentchildreview');
                            for (let j = 0; j < res.reviews.length; j++) {
                                // result.authorId????????????????????????????????? 
                                let nowj = review_name[j].getAttribute('index');
                                let nowreviewer_avatar = reviewer_avatar[nowj];
                                let nowreview_name = review_name[nowj];
                                let reviewerid = reviewbox[nowj].getAttribute('reviewerid');
                                myajax({
                                    method: 'GET',
                                    data: {
                                        userId: reviewerid
                                    },
                                    url: 'http://175.178.193.182:8080/user/fullInfo',
                                    success: function (ee) {
                                        nowreviewer_avatar.src = ee.user.avatar;
                                        nowreview_name.innerHTML = ee.user.nickname;
                                        // j = 0;
                                    }
                                })
                                let childbox = reviewbox[j].querySelectorAll('.ej-eachcomment')
                                for (let k = 0; k < childbox.length; k++) {
                                    let childid = childbox[k].getAttribute('reviewerid');
                                    let childavatar = childbox[k].querySelectorAll('.ej-commentor-avatar');
                                    let childname = childbox[k].querySelectorAll('.ej-commentor-name');
                                    myajax({
                                        method: 'GET',
                                        data: {
                                            userId: childid
                                        },
                                        url: 'http://175.178.193.182:8080/user/fullInfo',
                                        success: function (ee) {
                                            childavatar.src = ee.user.avatar;
                                            childname.innerHTML = ee.user.nickname;
                                            // j = 0;
                                        }
                                    })
                                }
                                // ??????????????????
                                reviewbox[j].addEventListener('click', function () {
                                    var replyToUserId = r_sentreview[i].getAttribute('authorid');
                                    var replyToArticleId = r_sentreview[i].getAttribute('articleid');
                                    let parentreview = this.getAttribute('thereviewid');
                                    markinput[i].style.display = 'block';
                                    sentchildreview[i].addEventListener('click', function (e) {
                                        e.stopPropagation();
                                        if (childinput[i].value) {

                                            myajax({
                                                method: 'POST',
                                                data: {
                                                    replyToUserId: replyToUserId,
                                                    replyToArticleId: replyToArticleId,
                                                    parentReviewId: parentreview,
                                                    authorId: thesuerid,
                                                    content: childinput[i].value
                                                },
                                                url: 'http://175.178.193.182:8080/review',
                                                success: function (res) {
                                                    markinput[i].style.display = 'none';
                                                    var div = document.createElement('div');
                                                    div.className = 'child-review';
                                                    div.innerHTML = '<div class="ej-eachcomment"><img src="img/backgroundimg/loginbgcimg.jpg"alt="" class="ej-commentor-avatar"><span class="ej-commentor-name">' + thesuerid + '</span><span class="ej-comment-main">' + childinput[i].value + '</span><span class="ej-comment-date">??????</span><span class="comment-love reviewid="' + result.reviewId + '">???</span><span class="comment-lovenum">0</span></div>'
                                                    readcomment[i].insertBefore(div, reviewbox[j + 1])
                                                    markinput[i].style.display = 'none';
                                                }
                                            })
                                        }
                                    })
                                })
                            }
                            // ????????????
                            var love_review = document.querySelectorAll('.comment-love')
                            if (love_review[0]) {
                                for (let j = 0; j < love_review.length; j++) {
                                    love_review[j].addEventListener('click', function () {
                                        var reviewid = this.getAttribute('reviewid');
                                        myajax({
                                            method: 'POST',
                                            data: {
                                                userId: thesuerid,
                                                reviewId: reviewid
                                            },
                                            url: 'http://175.178.193.182:8080/review/like',
                                            success: function (res) {
                                                if (res.status === 200) {
                                                    console.log('????????????');
                                                } else {
                                                    // ??????????????????
                                                    myajax({
                                                        method: 'POST',
                                                        data: {
                                                            userId: thesuerid,
                                                            reviewId: reviewid
                                                        },
                                                        url: 'http://175.178.193.182:8080/review/unlike',
                                                        success: function (res) {
                                                            console.log(res);
                                                            console.log('??????????????????');
                                                        }
                                                    })
                                                }
                                            }
                                        })
                                        this.style.color = 'red';
                                    })
                                }
                            }
                        }
                    })

                    // ????????????
                    r_sentreview[i].addEventListener('click', function (e) {
                        e.stopPropagation();
                        var replyToUserId = this.getAttribute('authorid');
                        var replyToArticleId = this.getAttribute('articleid');
                        var content = r_reviewinput[i].value;
                        if (r_reviewinput[i].value) {
                            myajax({
                                method: 'POST',
                                data: {
                                    replyToUserId: replyToUserId,
                                    replyToArticleId: replyToArticleId,
                                    authorId: thesuerid,
                                    content: content
                                },
                                url: 'http://175.178.193.182:8080/review',
                                success: function (res) {
                                    console.log(res);
                                }
                            })
                            readcomment[i].innerHTML += '<div class="eachcomment"><img src="img/backgroundimg/loginbgcimg.jpg"alt="" class="commentor-avatar"><span class="commentor-name">' + thesuerid + '</span><span class="comment-main">' + content + '</span><span class="comment-date">??????</span><span class="comment-love reviewid="' + result.reviewId + '">???</span><span class="comment-lovenum">0</span></div>'
                        }

                    })


                    // ??????????????????
                    myajax({
                        method: 'GET',
                        data: {
                            userId: getauthorid
                        },
                        url: 'http://175.178.193.182:8080/user/fullInfo',
                        success: function (data) {
                            p_eachefficient.innerHTML += '<div class="other-personal" id="other-personal"><div class="personal-top"><span id="back-article" class="g-back-article">???</span><span  class="share">???</span></div><div class="avatar-name"><div class="myavatar"><img  src="' + data.user.avatar + '" id="avatar" alt=""></div><div class="p-username">' + data.user.nickname + '</div></div><div class="givehigh"><div class="three-data"><div  class="attention" id="p-data"><span class="num-attention" id="p-datanum">&ensp;' + data.user.follows.length + '</span></br><span class="guanzhu">??????</span></div><div class="fans" id="p-data"><span class="num-fans" id="p-datanum">&ensp;' + data.user.fans.length + '</span></br><span class="fensi">??????</span></div><div class="collect" id="p-data"><span class="num-collect" id="p-datanum">&ensp;&ensp;' + data.user.likedArticles.length + '</span></br><span class="shoucang">???????????????</span></div><button class="edit-btn">?????????</button></div><div class="person-tag"><span class="p-tag p-tag-current g-articlebtn" id="notebtn">??????</span><span class="p-tag g-collectbtn" id="collectbtn">??????</span><span class="p-tag g-zanguobtn" id="zanguobtn">??????</span></div></div><div class="g-addmyarticle" id="addmyarticle" index="' + g + '"></div><div class="g-addcollect" index="' + g + '" id="addcollect" style="display: none;"></div><div class="g-addzanguo" index="' + g + '" id="addzanguo" style="display: none;"></div></div>'
                            var backarticle = document.querySelectorAll('.g-back-article');
                            // ??????????????????
                            var g_addmyarticle = document.querySelectorAll('.g-addmyarticle');
                            var g_addcollect = document.querySelectorAll('.g-addcollect');
                            var g_addzanguo = document.querySelectorAll('.g-addzanguo');
                            var g_articlebtn = document.querySelectorAll('.g-articlebtn');
                            var g_collectbtn = document.querySelectorAll('.g-collectbtn');
                            var g_zanguobtn = document.querySelectorAll('.g-zanguobtn');
                            //    ??????????????????
                            myajax({
                                method: 'GET',
                                data: {
                                    authorId: getauthorid
                                },
                                url: 'http://175.178.193.182:8080/article/byAuthor',
                                success: function (res) {
                                    var html = ''
                                    for (let r = 0; r < res.articles.length; r++) {
                                        var result = res.articles[r]
                                        html += '<div class="mybox">'
                                        if (result.images[0]) {
                                            html += '<img src="' + result.images[0] + '" alt="" class="imgpart" style="width: 315px;  "><span class="word">' + result.title + '</span><span class="loveicon">???</span><span class="lovenum">' + result.likes + '</span>'

                                        } else {
                                            html += '<span class="word">' + result.title + '</span><span class="loveicon">???</span><span class="lovenum">' + result.likes + '</span>';
                                        }
                                        html += '</div>'
                                        g_addmyarticle[g].innerHTML = html
                                    }
                                }
                            })
                            // ???????????????????????????
                            myajax({
                                method: 'GET',
                                data: {
                                    userId: getauthorid
                                },
                                url: 'http://175.178.193.182:8080/article/getStar',
                                success: function (res) {
                                    var html = ''
                                    for (let r = 0; r < res.staredArticles.length; r++) {
                                        var result = res.staredArticles[r]
                                        html += '<div class="mybox">'
                                        if (result.images[0]) {
                                            html += '<img src="' + result.images[0] + '" alt="" class="imgpart" style="width: 315px;  "><span class="word">' + result.title + '</span><span class="loveicon">???</span><span class="lovenum">' + result.likes + '</span>'

                                        } else {
                                            html += '<span class="word">' + result.title + '</span><span class="loveicon">???</span><span class="lovenum">' + result.likes + '</span>';
                                        }
                                        html += '</div>'
                                        g_addcollect[g].innerHTML = html
                                    }
                                }
                            })
                            // ???????????????????????????
                            myajax({
                                method: 'GET',
                                data: {
                                    userId: getauthorid
                                },
                                url: 'http://175.178.193.182:8080/article/getLike',
                                success: function (res) {
                                    var html = ''
                                    for (let r = 0; r < res.likedArticles.length; r++) {
                                        var result = res.likedArticles[r]
                                        html += '<div class="mybox">'
                                        if (result.images[0]) {
                                            html += '<img src="' + result.images[0] + '" alt="" class="imgpart" style="width: 315px;  "><span class="word">' + result.title + '</span><span class="loveicon">???</span><span class="lovenum">' + result.likes + '</span>'

                                        } else {
                                            html += '<span class="word">' + result.title + '</span><span class="loveicon">???</span><span class="lovenum">' + result.likes + '</span>';
                                        }
                                        html += '</div>'
                                        g_addzanguo[g].innerHTML = html
                                    }
                                }
                            })
                            // ???????????? ????????? ?????? ?????? ??????????????????
                            // ??????
                            g_articlebtn[g].addEventListener('click', function () {
                                g_addmyarticle[g].style.display = 'block';
                                g_addcollect[g].style.display = 'none';
                                g_addzanguo[g].style.display = 'none';
                                g_articlebtn[g].className = 'p-tag p-tag-current g-articlebtn';
                                g_collectbtn[g].className = 'p-tag g-collectbtn';
                                g_zanguobtn[g].className = 'p-tag g-zanguobtn';
                            })
                            // ??????
                            g_collectbtn[g].addEventListener('click', function () {
                                g_addmyarticle[g].style.display = 'none';
                                g_addcollect[g].style.display = 'block';
                                g_addzanguo[g].style.display = 'none';
                                g_articlebtn[g].className = 'p-tag  g-articlebtn';
                                g_collectbtn[g].className = 'p-tag g-collectbtn p-tag-current';
                                g_zanguobtn[g].className = 'p-tag g-zanguobtn';
                            })
                            // ??????
                            g_zanguobtn[g].addEventListener('click', function () {
                                g_addmyarticle[g].style.display = 'none';
                                g_addcollect[g].style.display = 'none';
                                g_addzanguo[g].style.display = 'block';
                                g_articlebtn[g].className = 'p-tag  g-articlebtn';
                                g_collectbtn[g].className = 'p-tag g-collectbtn ';
                                g_zanguobtn[g].className = 'p-tag g-zanguobtn p-tag-current';
                            })
                            // ????????????
                            backarticle[g].addEventListener('click', function () {
                                p_eachefficient.lastChild.style.display = 'none';
                                p_eachefficient.style.display = 'none';
                                alle_all[aboxindex].style.display = 'block'
                                localStorage.removeItem('g-aboxindex');
                                g++;
                            })

                        }
                    })
                    ge_avatar[this.index].addEventListener('click', function () {
                        p_eachefficient.style.display = 'block';
                        p_eachefficient.lastChild.style.display = 'block';
                        alle_all[this.index].style.display = 'none'
                    })
                })

            }

            for (let i = 0; i < allarticlebox.length; i++) {
                allarticlebox[i].index = i;
                ebackhomeall[i].index = i;
                ge_avatar[i].index = i;
                allarticlebox[i].addEventListener('click', function () {
                    homepart.style.display = "none";
                    for (let j = 0; j < allarticlebox.length; j++) {
                        alle_all[j].style.display = "none";
                    }
                    eachefficient.style.display = 'block';
                    alle_all[this.index].style.display = "block";
                    ebackhomeall[this.index].addEventListener('click', function () {
                        eachefficient.style.display = 'none';
                        alle_all[this.index].style.display = "none";
                        homepart.style.display = "block";
                    })
                })
            }

            var e_loveicon = document.querySelectorAll('.e-loveicon');
            var e_collecticon = document.querySelectorAll('.e-collecticon');
            // ?????????????????????
            for (let k = 0; k < e_loveicon.length; k++) {
                // ??????
                e_loveicon[k].addEventListener('click', function (e) {
                    e.stopPropagation();
                    var loveid = this.getAttribute('articleid');
                    console.log(loveid);
                    myajax({
                        method: 'POST',
                        url: 'http://175.178.193.182:8080/article/like',
                        data: {
                            userId: thesuerid,
                            articleId: loveid
                        },
                        success: function (res) {
                            if (res.status === 200) {
                                console.log('????????????');
                                // console.log(k);
                            } else {
                                // ????????????
                                myajax({
                                    method: 'POST',
                                    url: 'http://175.178.193.182:8080/article/unlike',
                                    data: {
                                        userId: thesuerid,
                                        articleId: loveid
                                    },
                                    success: function (ress) {
                                        if (ress.status === 200) {
                                            console.log(ress);
                                            console.log('??????????????????');
                                        }
                                    }
                                })
                            }
                        }
                    })
                })
            }
            // ??????
            for (let k = 0; k < e_collecticon.length; k++) {
                e_collecticon[k].addEventListener('click', function (e) {
                    var collectid = this.getAttribute('articleid');
                    e.stopPropagation();
                    myajax({
                        method: 'POST',
                        url: 'http://175.178.193.182:8080/article/star',
                        data: {
                            userId: thesuerid,
                            articleId: collectid
                        },
                        success: function (ress) {
                            if (ress.status === 200) {
                                console.log('????????????');
                            } else {
                                // ??????????????????
                                myajax({
                                    method: 'POST',
                                    url: 'http://175.178.193.182:8080/article/unstar',
                                    data: {
                                        userId: thesuerid,
                                        articleId: collectid
                                    },
                                    success: function (ress) {
                                        if (ress.status === 200) {
                                            console.log(ress);
                                            console.log('??????????????????');
                                        }
                                    }
                                })
                            }
                        }
                    })
                    this.className = 'ec-collect toyellow'
                })
            }
            // ?????????????????????
            for (let i = 0; i < e_loveicon.length; i++) {
                let loveid = e_loveicon[i].getAttribute('articleid');
                myajax({
                    method: 'GET',
                    data: {
                        articleId: loveid
                    },
                    url: 'http://175.178.193.182:8080/article/byId',
                    success: function (res) {
                        for (let j = 0; j < res.article.likerList.length; j++) {
                            if (thesuerid === res.article.likerList[j]) {
                                e_loveicon[i].style.color = 'red';
                            }
                        }
                    }
                })
            }
            // ?????????????????????
            for (let i = 0; i < e_collecticon.length; i++) {
                let collectid = e_collecticon[i].getAttribute('articleid');
                myajax({
                    method: 'GET',
                    data: {
                        articleId: collectid
                    },
                    url: 'http://175.178.193.182:8080/article/byId',
                    success: function (res) {
                        for (let j = 0; j < res.article.starerList.length; j++) {
                            if (thesuerid === res.article.starerList[j]) {
                                e_collecticon[i].style.color = 'yellow';
                            }
                        }
                    }
                })
            }
        }
    })
    // ??????????????????
    myajax({
        method: 'GET',
        url: 'http://175.178.193.182:8080/article/getHomePage',
        success: function (res) {
            var html3 = ''
            for (let i = 0; i < res.pages.??????.length; i++) {
                var result = res.pages.??????[i];
                if (result.images[0]) {
                    for (let k = 0; k < result.images.length; k++) {
                        html3 += '<li class=li-scroll><img src="' + result.images[k] + '" alt="" class="main-pic"></li>'
                    }
                    allskincare.innerHTML += '<div class="h-abox" id="abox" authorid="' + result.authorId + '" articleid="' + result.articleId + '"><img src="' + result.images[0] + '" alt="" class="imgpart" style="width: 315px;  "><span class="word">' + result.title + '<img src="' + result.avatar + '" alt="" class="author-avatar"></span><span class="author">' + result.authorName + '</span><span class="c-loveicon" id="loveicon" articleid="' + result.articleId + '">???</span><span class="lovenum">' + result.likes + '</span></div>'
                } else {
                    allskincare.innerHTML += '<div class="h-abox" id="abox" authorid="' + result.authorId + '" articleid="' + result.articleId + '"><span class="word">' + result.title + '<img src="' + result.avatar + '" alt="" class="author-avatar"></span><span class="author">' + result.authorName + '</span><span class="c-loveicon" id="loveicon" articleid="' + result.articleId + '">???</span><span class="lovenum">' + result.likes + '</span></div>' + '<div id="e-all"  class="e-all" style="display: none;" ><div class="e-all-top"><span id="e-backhome"  class="e-backhome">???</span><span class="e-share">???</span><img src="' + result.avatar + '" alt="" class="e-avatar" id="e-avatar"><span class="e-author">' + result.authorName + '</span><button class="e-follow" authorid=' + result.authorId + '>??????</button></div><div class="e-picbox"><img src="' + result.images[0] + '" alt="" class="main-pic"></div><div class="e-databox"><div class="e-title">' + result.title + '</div><div class="e-content">' + result.content + '</div><div class="e-tag">#' + result.tags + '</div><div class="e-date">' + result.postDate + '</div><button class="e-dislike">??? ?????????</button></div><div class="e-allcomment"><div class="allcommentnum">???' + result.reviews + '?????????</div><div class="e-comment1"><img src="' + nowavatar + '" alt="" class="e-comment1-avatar"><input type="text" class="e-input1" placeholder="?????????????????????????????????~"><button id="sent-review" class="r-sentreview" authorid="' + result.authorId + '" articleid="' + result.articleId + '">??????</button></div></div><div class="readcomment"></div><div class="e-commentall"><div class="e-comment2"><input type="text" class="e-input2" placeholder="??????????????????"><span class="ec-love c-loveicon" articleid="' + result.articleId + '" id="ec-icon">???</span><span class="ec-lovenum" id="ec-icon">' + result.likes + '</span><span class="ec-collect c-collecticon" articleid="' + result.articleId + '" id="ec-icon">???</span><span class="ec-collectnum" id="ec-icon">' + result.stars + '</span><span class="ec-comment" id="ec-icon">???</span><span class="ec-commentnum" id="ec-icon">' + result.reviews + '</span></div></div></div>'
                }
                eachskincare.innerHTML += '<div class="he-all" id="e-all"  style="display: none;" ><div class="mark-input" id="mark-input" ><input class="child-review" placeholder="????????????"><button class="sentchildreview">??????</button></div><div class="e-all-top"><span class="he-backhome" id="e-backhome" >???</span><span class="e-share">???</span><img src="' + result.avatar + '" alt="" class="he-avatar" id="e-avatar"><span class="e-author">' + result.authorName + '</span><button class="e-follow" authorid=' + result.authorId + '>??????</button></div><div class="h-hiddenit" id="hiddenit"><ul class="h-scroll" id="scroll">' + html3 + '</ul><ol class="h-circle" id="circle"></ol></div><div class="e-databox"><div class="e-title">' + result.title + '</div><div class="e-content">' + result.content + '</div><div class="e-tag">#' + result.tags + '</div><div class="e-date">' + result.postDate + '</div><button class="e-dislike">??? ?????????</button></div><div class="e-allcomment"><div class="allcommentnum">???' + result.reviews + '?????????</div><div class="e-comment1"><img src="' + nowavatar + '" alt="" class="e-comment1-avatar"><input type="text" class="e-input1" placeholder="?????????????????????????????????~"><button id="sent-review" class="r-sentreview"  authorid="' + result.authorId + '" articleid="' + result.articleId + '">??????</button></div></div><div class="readcomment"></div><div class="e-commentall"><div class="e-comment2"><input type="text" class="e-input2" placeholder="??????????????????"><span class="ec-love c-loveicon" articleid="' + result.articleId + '" id="ec-icon">???</span><span class="ec-lovenum c-loveicon" id="ec-icon" articleid="' + result.articleId + '">' + result.likes + '</span><span class="ec-collect c-collecticon" articleid="' + result.articleId + '" id="ec-icon">???</span><span class="ec-collectnum" id="ec-icon">' + result.stars + '</span><span class="ec-comment" id="ec-icon">???</span><span class="ec-commentnum" id="ec-icon">' + result.reviews + '</span></div></div></div>'

                // ?????????????????????(??????li)
                var hiddenit = document.querySelectorAll('.h-hiddenit');
                var ul = hiddenit[i].querySelector('.h-scroll');
                var ol = hiddenit[i].querySelector('.h-circle');
                for (let j = 0; j < ul.children.length; j++) {
                    var li = document.createElement('li');
                    li.setAttribute('index', j);
                    ol.appendChild(li);

                }
                html3 = ''
                // ???picnum?????????  picnum+result.images.length    li????????????
            }

            // ????????????
            var e_follow = eachskincare.querySelectorAll('.e-follow');
            for (let i = 0; i < e_follow.length; i++) {
                var followid = e_follow[i].getAttribute('authorid');
                e_follow[i].addEventListener('click', function () {
                    myajax({
                        method: 'POST',
                        url: 'http://175.178.193.182:8080/user/follow',
                        data: {
                            userId: thesuerid,
                            followerId: followid
                        },
                        success: function (res) {
                            if (res.status === 200) {

                                // btnguanzhu[i].innerHTML = '?????????';
                                e_follow[i].innerHTML = '?????????'
                                e_follow[i].style.backgroundColor = '#fff';
                            } else {
                                myajax({
                                    method: 'POST',
                                    url: 'http://175.178.193.182:8080/user/cancelFollow',
                                    data: {
                                        userId: thesuerid,
                                        followerId: followid
                                    },
                                    success: function (res) {
                                        if (res.status === 200) {

                                            // btnguanzhu[this.index].innerHTML='?????????';
                                            e_follow[i].innerHTML = '??????'
                                            e_follow[i].style.backgroundColor = 'orange';
                                        }
                                    }
                                })
                            }
                        }
                    })
                })
            }
            // ?????????????????????

            for (let i = 0; i < e_follow.length; i++) {
                var followid = e_follow[i].getAttribute('authorid');
                myajax({
                    method: 'GET',
                    url: 'http://175.178.193.182:8080/user/fullInfo',
                    data: {
                        userId: followid
                    },
                    success: function (res) {
                        if (res.user.fans) {
                            for (let j = 0; j < res.user.fans.length; j++) {
                                var fan = res.user.fans[j];
                                if (thesuerid == fan) {
                                    e_follow[i].innerHTML = '?????????'
                                    e_follow[i].style.backgroundColor = '#fff'
                                }
                            }
                        }
                    }
                })
            }

            var ols = document.querySelectorAll('.h-circle');
            var uls = document.querySelectorAll('.h-scroll');
            for (let u = 0; u < ols.length; u++) {
                ols[u].children[0].className = 'current';
                ols[u].index = u;
                for (let j = 0; j < ols[u].children.length; j++) {
                    ols[u].children[j].index = j;
                    ols[u].children[j].addEventListener('click', function () {
                        var nowindex = this.parentNode.index;
                        var index = this.getAttribute('index');
                        for (let k = 0; k < ols[nowindex].children.length; k++) {
                            ols[nowindex].children[k].className = '';
                        };
                        this.className = 'current';
                        var hiddenitWidth = -740;

                        animate(uls[nowindex], index * hiddenitWidth);
                    })
                }
            }

            let allarticlebox = document.querySelectorAll('.h-abox');
            let alle_all = document.querySelectorAll('.he-all');
            let ebackhomeall = document.querySelectorAll('.he-backhome');
            let he_avatar = document.querySelectorAll('.he-avatar');
            let readcomment = eachskincare.querySelectorAll('.readcomment');
            let r_sentreview = document.querySelectorAll('.r-sentreview');
            let r_reviewinput = document.querySelectorAll('.e-input1');
            // ????????????????????????
            localStorage.setItem('h', 0);
            var h = localStorage.getItem('h');
            // ???????????????????????????
            for (let i = 0; i < allarticlebox.length; i++) {
                allarticlebox[i].setAttribute('index', i);
                //    ????????????
                allarticlebox[i].addEventListener('click', function () {
                    var getauthorid = this.getAttribute('authorid');
                    localStorage.setItem('h-aboxindex', this.index);
                    var aboxindex = localStorage.getItem('h-aboxindex');
                    var getarticleid = this.getAttribute('articleid');
                    // ??????????????????
                    myajax({
                        method: 'GET',
                        data: {
                            articleId: getarticleid,
                            pages: 0
                        },
                        url: 'http://175.178.193.182:8080/review/byArticle',
                        success: function (res) {
                            let theinnerHTML = ''
                            let childhtml = ''
                            for (let j = 0; j < res.reviews.length; j++) {
                                let result = res.reviews[j];
                                for (let k = 0; k < res.reviews[j].reviewList.length; k++) {
                                    chiildresult = res.reviews[j].reviewList[k]
                                    childhtml += '<div class="ej-eachcomment" index="' + k + '" reviewerid="' + chiildresult.authorId + '"><img src="img/backgroundimg/loginbgcimg.jpg"alt="" class="ej-commentor-avatar"><span class="ej-commentor-name">' + chiildresult.authorId + '</span><span class="ej-comment-main">' + chiildresult.content + '</span><span class="ej-comment-date">' + chiildresult.postDate + '</span><span class="comment-love">???</span><span class="comment-lovenum">' + chiildresult.likes + '</span></div>'
                                }
                                theinnerHTML += '<div class="eachcomment" reviewerid="' + result.authorId + '" thereviewid="' + result.reviewId + '"><img src=""alt="" class="commentor-avatar" index="' + j + '"><span class="commentor-name" index="' + j + '">' + result.authorId + '</span><span class="comment-main">' + result.content + '</span><span class="comment-date">' + result.postDate + '</span><span class="comment-love"  reviewid="' + result.reviewId + '">???</span><span class="comment-lovenum">' + result.likes + '</span>' + childhtml + '</div>';
                                childhtml = '';
                            }
                            readcomment[i].innerHTML = theinnerHTML;
                            let reviewbox = readcomment[i].querySelectorAll('.eachcomment');
                            let reviewer_avatar = readcomment[i].querySelectorAll('.commentor-avatar');
                            let review_name = readcomment[i].querySelectorAll('.commentor-name');
                            let markinput = document.querySelectorAll('.r-mark-input');
                            let childinput = document.querySelectorAll('.child-review');
                            let sentchildreview = document.querySelectorAll('.sentchildreview');
                            for (let j = 0; j < res.reviews.length; j++) {
                                // result.authorId????????????????????????????????? 
                                let nowj = review_name[j].getAttribute('index');
                                let nowreviewer_avatar = reviewer_avatar[nowj];
                                let nowreview_name = review_name[nowj];
                                let reviewerid = reviewbox[nowj].getAttribute('reviewerid');
                                myajax({
                                    method: 'GET',
                                    data: {
                                        userId: reviewerid
                                    },
                                    url: 'http://175.178.193.182:8080/user/fullInfo',
                                    success: function (ee) {
                                        nowreviewer_avatar.src = ee.user.avatar;
                                        nowreview_name.innerHTML = ee.user.nickname;
                                    }
                                })
                                let childbox = reviewbox[j].querySelectorAll('.ej-eachcomment')
                                for (let k = 0; k < res.reviews[j].reviewList.length; k++) {
                                    let childid = childbox[k].getAttribute('reviewerid');
                                    let childavatar = childbox[k].querySelectorAll('.ej-commentor-avatar');
                                    let childname = childbox[k].querySelectorAll('.ej-commentor-name');
                                    myajax({
                                        method: 'GET',
                                        data: {
                                            userId: childid
                                        },
                                        url: 'http://175.178.193.182:8080/user/fullInfo',
                                        success: function (ee) {
                                            childavatar.src = ee.user.avatar;
                                            childname.innerHTML = ee.user.nickname;
                                            // j = 0;
                                        }
                                    })
                                }
                                // ??????????????????
                                reviewbox[j].addEventListener('click', function () {
                                    let replyToUserId = r_sentreview[i].getAttribute('authorid');
                                    let replyToArticleId = r_sentreview[i].getAttribute('articleid');
                                    let parentreview = this.getAttribute('thereviewid');
                                    markinput[i].style.display = 'block';
                                    sentchildreview[i].addEventListener('click', function (e) {
                                        e.stopPropagation();
                                        if (childinput[i].value) {
                                            myajax({
                                                method: 'POST',
                                                data: {
                                                    replyToUserId: replyToUserId,
                                                    replyToArticleId: replyToArticleId,
                                                    parentReviewId: parentreview,
                                                    authorId: thesuerid,
                                                    content: childinput[i].value
                                                },
                                                url: 'http://175.178.193.182:8080/review',
                                                success: function (res) {
                                                    console.log(res);
                                                    markinput[i].style.display = 'none';
                                                    var div = document.createElement('div');
                                                    div.className = 'child-review';
                                                    div.innerHTML = '<div class="ej-eachcomment"><img src="img/backgroundimg/loginbgcimg.jpg"alt="" class="ej-commentor-avatar"><span class="ej-commentor-name">' + thesuerid + '</span><span class="ej-comment-main">' + childinput[i].value + '</span><span class="ej-comment-date">??????</span><span class="comment-love reviewid="' + result.reviewId + '">???</span><span class="comment-lovenum">0</span></div>'
                                                    readcomment[i].insertBefore(div, reviewbox[j + 1])
                                                    markinput[i].style.display = 'none';
                                                }
                                            })
                                        }
                                    })
                                })
                            }
                            // ????????????
                            var love_review = document.querySelectorAll('.comment-love')
                            if (love_review[0]) {
                                for (let j = 0; j < love_review.length; j++) {
                                    // console.log(love_review[j]);
                                    love_review[j].addEventListener('click', function () {
                                        var reviewid = this.getAttribute('reviewid');
                                        myajax({
                                            method: 'POST',
                                            data: {
                                                userId: thesuerid,
                                                reviewId: reviewid
                                            },
                                            url: 'http://175.178.193.182:8080/review/like',
                                            success: function (res) {
                                                if (res.status === 200) {
                                                    console.log('????????????');
                                                } else {
                                                    // ??????????????????
                                                    myajax({
                                                        method: 'POST',
                                                        data: {
                                                            userId: thesuerid,
                                                            reviewId: reviewid
                                                        },
                                                        url: 'http://175.178.193.182:8080/review/unlike',
                                                        success: function (res) {
                                                            console.log(res);
                                                            console.log('??????????????????');
                                                        }
                                                    })
                                                }
                                            }
                                        })
                                        this.style.color = 'red';
                                    })
                                }
                            }
                        }
                    })

                    // ????????????
                    r_sentreview[i].addEventListener('click', function (e) {
                        e.stopPropagation();
                        var replyToUserId = this.getAttribute('authorid');
                        var replyToArticleId = this.getAttribute('articleid');
                        var content = r_reviewinput[i].value;
                        if (r_reviewinput[i].value) {
                            myajax({
                                method: 'POST',
                                data: {
                                    replyToUserId: replyToUserId,
                                    replyToArticleId: replyToArticleId,
                                    authorId: thesuerid,
                                    content: content
                                },
                                url: 'http://175.178.193.182:8080/review',
                                success: function (res) {
                                    console.log(res);
                                }
                            })
                            readcomment[i].innerHTML += '<div class="eachcomment"><img src="img/backgroundimg/loginbgcimg.jpg"alt="" class="commentor-avatar"><span class="commentor-name">' + thesuerid + '</span><span class="comment-main">' + content + '</span><span class="comment-date">??????</span><span class="comment-love reviewid="' + result.reviewId + '">???</span><span class="comment-lovenum">0</span></div>'
                        }

                    })





                    // ??????????????????
                    myajax({
                        method: 'GET',
                        data: {
                            userId: getauthorid
                        },
                        url: 'http://175.178.193.182:8080/user/fullInfo',
                        success: function (data) {
                            p_eachskincare.innerHTML += '<div class="other-personal" id="other-personal"><div class="personal-top"><span id="back-article" class="h-back-article">???</span><span  class="share">???</span></div><div class="avatar-name"><div class="myavatar"><img  src="' + data.user.avatar + '" id="avatar" alt=""></div><div class="p-username">' + data.user.nickname + '</div></div><div class="givehigh"><div class="three-data"><div  class="attention" id="p-data"><span class="num-attention" id="p-datanum">&ensp;' + data.user.follows.length + '</span></br><span class="guanzhu">??????</span></div><div class="fans" id="p-data"><span class="num-fans" id="p-datanum">&ensp;' + data.user.fans.length + '</span></br><span class="fensi">??????</span></div><div class="collect" id="p-data"><span class="num-collect" id="p-datanum">&ensp;&ensp;' + data.user.likedArticles.length + '</span></br><span class="shoucang">???????????????</span></div><button class="edit-btn">?????????</button></div><div class="person-tag"><span class="p-tag p-tag-current h-articlebtn" id="notebtn">??????</span><span class="p-tag h-collectbtn" id="collectbtn">??????</span><span class="p-tag h-zanguobtn" id="zanguobtn">??????</span></div></div><div class="h-addmyarticle" id="addmyarticle" index="' + h + '"></div><div class="h-addcollect" index="' + h + '" id="addcollect" style="display: none;"></div><div class="h-addzanguo" index="' + h + '" id="addzanguo" style="display: none;"></div></div>'
                            var backarticle = document.querySelectorAll('.h-back-article');
                            // ??????????????????
                            var h_addmyarticle = document.querySelectorAll('.h-addmyarticle');
                            var h_addcollect = document.querySelectorAll('.h-addcollect');
                            var h_addzanguo = document.querySelectorAll('.h-addzanguo');
                            var h_articlebtn = document.querySelectorAll('.h-articlebtn');
                            var h_collectbtn = document.querySelectorAll('.h-collectbtn');
                            var h_zanguobtn = document.querySelectorAll('.h-zanguobtn');
                            //    ??????????????????
                            myajax({
                                method: 'GET',
                                data: {
                                    authorId: getauthorid
                                },
                                url: 'http://175.178.193.182:8080/article/byAuthor',
                                success: function (res) {
                                    var html = ''
                                    for (let r = 0; r < res.articles.length; r++) {
                                        var result = res.articles[r]
                                        html += '<div class="mybox">'
                                        if (result.images[0]) {
                                            html += '<img src="' + result.images[0] + '" alt="" class="imgpart" style="width: 315px;  "><span class="word">' + result.title + '</span><span class="c-loveicon" id="loveicon" articleid="' + result.articleId + '">???</span><span class="lovenum">' + result.likes + '</span>'

                                        } else {
                                            html += '<span class="word">' + result.title + '</span><span class="c-loveicon" id="loveicon" articleid="' + result.articleId + '">???</span><span class="lovenum">' + result.likes + '</span>';
                                        }
                                        html += '</div>'
                                        h_addmyarticle[h].innerHTML = html
                                    }
                                }
                            })
                            // ???????????????????????????
                            myajax({
                                method: 'GET',
                                data: {
                                    userId: getauthorid
                                },
                                url: 'http://175.178.193.182:8080/article/getStar',
                                success: function (res) {
                                    var html = ''
                                    for (let r = 0; r < res.staredArticles.length; r++) {
                                        var result = res.staredArticles[r]
                                        html += '<div class="mybox">'
                                        if (result.images[0]) {
                                            html += '<img src="' + result.images[0] + '" alt="" class="imgpart" style="width: 315px;  "><span class="word">' + result.title + '</span><span class="loveicon">???</span><span class="lovenum">' + result.likes + '</span>'

                                        } else {
                                            html += '<span class="word">' + result.title + '</span><span class="loveicon">???</span><span class="lovenum">' + result.likes + '</span>';
                                        }
                                        html += '</div>'
                                        h_addcollect[h].innerHTML = html
                                    }
                                }
                            })
                            // ???????????????????????????
                            myajax({
                                method: 'GET',
                                data: {
                                    userId: getauthorid
                                },
                                url: 'http://175.178.193.182:8080/article/getLike',
                                success: function (res) {
                                    var html = ''
                                    for (let r = 0; r < res.likedArticles.length; r++) {
                                        var result = res.likedArticles[r]
                                        html += '<div class="mybox">'
                                        if (result.images[0]) {
                                            html += '<img src="' + result.images[0] + '" alt="" class="imgpart" style="width: 315px;  "><span class="word">' + result.title + '</span><span class="loveicon">???</span><span class="lovenum">' + result.likes + '</span>'

                                        } else {
                                            html += '<span class="word">' + result.title + '</span><span class="loveicon">???</span><span class="lovenum">' + result.likes + '</span>';
                                        }
                                        html += '</div>'
                                        h_addzanguo[h].innerHTML = html
                                    }
                                }
                            })
                            // ???????????? ????????? ?????? ?????? ??????????????????
                            // ??????
                            h_articlebtn[h].addEventListener('click', function () {
                                h_addmyarticle[h].style.display = 'block';
                                h_addcollect[h].style.display = 'none';
                                h_addzanguo[h].style.display = 'none';
                                h_articlebtn[h].className = 'p-tag p-tag-current h-articlebtn';
                                h_collectbtn[h].className = 'p-tag h-collectbtn';
                                h_zanguobtn[h].className = 'p-tag h-zanguobtn';
                            })
                            // ??????
                            h_collectbtn[h].addEventListener('click', function () {
                                h_addmyarticle[h].style.display = 'none';
                                h_addcollect[h].style.display = 'block';
                                h_addzanguo[h].style.display = 'none';
                                h_articlebtn[h].className = 'p-tag  h-articlebtn';
                                h_collectbtn[h].className = 'p-tag h-collectbtn p-tag-current';
                                h_zanguobtn[h].className = 'p-tag h-zanguobtn';
                            })
                            // ??????
                            h_zanguobtn[h].addEventListener('click', function () {
                                h_addmyarticle[h].style.display = 'none';
                                h_addcollect[h].style.display = 'none';
                                h_addzanguo[h].style.display = 'block';
                                h_articlebtn[h].className = 'p-tag  h-articlebtn';
                                h_collectbtn[h].className = 'p-tag h-collectbtn ';
                                h_zanguobtn[h].className = 'p-tag h-zanguobtn p-tag-current';
                            })
                            // ????????????
                            backarticle[h].addEventListener('click', function () {
                                p_eachskincare.lastChild.style.display = 'none';
                                p_eachskincare.style.display = 'none';
                                alle_all[aboxindex].style.display = 'block'
                                localStorage.removeItem('h-aboxindex');
                                h++;
                            })

                        }
                    })
                    he_avatar[this.index].addEventListener('click', function () {
                        p_eachskincare.style.display = 'block';
                        p_eachskincare.lastChild.style.display = 'block';
                        alle_all[this.index].style.display = 'none'
                    })
                })

            }

            for (let i = 0; i < allarticlebox.length; i++) {
                allarticlebox[i].index = i;
                ebackhomeall[i].index = i;
                he_avatar[i].index = i;
                allarticlebox[i].addEventListener('click', function () {
                    homepart.style.display = "none";
                    for (let j = 0; j < allarticlebox.length; j++) {
                        alle_all[j].style.display = "none";
                    }
                    eachskincare.style.display = 'block';
                    alle_all[this.index].style.display = "block";
                    ebackhomeall[this.index].addEventListener('click', function () {
                        eachskincare.style.display = 'none';
                        alle_all[this.index].style.display = "none";
                        homepart.style.display = "block";
                    })
                })
            }
            var c_loveicon = document.querySelectorAll('.c-loveicon');
            var c_collecticon = document.querySelectorAll('.c-collecticon');
            // ?????????????????????
            for (let k = 0; k < c_loveicon.length; k++) {
                // ??????
                c_loveicon[k].addEventListener('click', function (e) {
                    e.stopPropagation();
                    var loveid = this.getAttribute('articleid');
                    console.log(loveid);
                    myajax({
                        method: 'POST',
                        url: 'http://175.178.193.182:8080/article/like',
                        data: {
                            userId: thesuerid,
                            articleId: loveid
                        },
                        success: function (res) {
                            if (res.status === 200) {
                                console.log('????????????');
                                // console.log(k);
                            } else {
                                // ????????????
                                myajax({
                                    method: 'POST',
                                    url: 'http://175.178.193.182:8080/article/unlike',
                                    data: {
                                        userId: thesuerid,
                                        articleId: loveid
                                    },
                                    success: function (ress) {
                                        if (ress.status === 200) {
                                            console.log(ress);
                                            console.log('??????????????????');
                                        }
                                    }
                                })
                            }
                        }
                    })
                })
            }
            // ??????
            for (let k = 0; k < c_collecticon.length; k++) {
                c_collecticon[k].addEventListener('click', function (e) {
                    var collectid = this.getAttribute('articleid');
                    e.stopPropagation();
                    myajax({
                        method: 'POST',
                        url: 'http://175.178.193.182:8080/article/star',
                        data: {
                            userId: thesuerid,
                            articleId: collectid
                        },
                        success: function (ress) {
                            if (ress.status === 200) {
                                console.log('????????????');
                            } else {
                                // ??????????????????
                                myajax({
                                    method: 'POST',
                                    url: 'http://175.178.193.182:8080/article/unstar',
                                    data: {
                                        userId: thesuerid,
                                        articleId: collectid
                                    },
                                    success: function (ress) {
                                        if (ress.status === 200) {
                                            console.log(ress);
                                            console.log('??????????????????');
                                        }
                                    }
                                })
                            }
                        }
                    })
                    this.className = 'ec-collect toyellow'
                    console.log(this);
                })
            }
            // ?????????????????????
            for (let i = 0; i < c_loveicon.length; i++) {
                let loveid = c_loveicon[i].getAttribute('articleid');
                myajax({
                    method: 'GET',
                    data: {
                        articleId: loveid
                    },
                    url: 'http://175.178.193.182:8080/article/byId',
                    success: function (res) {
                        for (let j = 0; j < res.article.likerList.length; j++) {
                            if (thesuerid === res.article.likerList[j]) {
                                c_loveicon[i].style.color = 'red';
                            }
                        }
                        // console.log(res);
                    }
                })
            }
            // ?????????????????????
            for (let i = 0; i < c_collecticon.length; i++) {
                let collectid = c_collecticon[i].getAttribute('articleid');
                myajax({
                    method: 'GET',
                    data: {
                        articleId: collectid
                    },
                    url: 'http://175.178.193.182:8080/article/byId',
                    success: function (res) {
                        for (let j = 0; j < res.article.starerList.length; j++) {
                            if (thesuerid === res.article.starerList[j]) {
                                c_collecticon[i].style.color = 'yellow';
                            }
                        }
                        // console.log(res);
                    }
                })
            }
        }
    })
    // ??????????????????????????????
    createchatbtn.addEventListener('click', function () {
        allmymeassage.style.display = 'none';
        create.style.display = 'block';
    })
    // ????????????????????????
    message_backbtn.addEventListener('click', function () {
        allmymeassage.style.display = 'block';
        create.style.display = 'none';
    })
    // ??????????????????????????????
    // ??????????????????
    myajax({
        method: 'GET',
        url: 'http://175.178.193.182:8080/user/fanList',
        data: {
            userId: thesuerid
        },
        success: function (res) {
            if (res.status === 200) {
                if (res.fansList[0]) {
                    for (let i = 0; i < res.fansList.length; i++) {
                        var result = res.fansList[i];
                        chatterbox.innerHTML += '<div class="lt-auser"><img src="' + result.avatar + ' " alt="" class="f-useravatar"><span class="f-username">' + result.nickname + '</span><button class="faxiaoxi" index="' + i + '" userid="' + result.userId + '">?????????</button></div>'
                        allchat.innerHTML += '<div class="chatting" style="display: none;" index="' + i + '"><div class="chatting-top"><span class="chatting-backbtn">???</span><p class="shouye">' + result.nickname + '</p></div><div class="chatting-main"></div><div class="bottombox"><input type="text" class="chattinginput" placeholder="???????????????"><button class="chatting-sent" charid="' + result.userId + '">??????</button></div></div>'
                        myajax({
                            method: 'GET',
                            data: {
                                userId: result.userId
                            },
                            url: 'http://175.178.193.182:8080/user/fullInfo',
                            success: function (res) {
                                for (let j = 0; j < res.user.follows.length; j++) {
                                    if (thesuerid == res.user.follows[j]) {
                                        faxiaoxibtn[i].innerHTML = '?????????';
                                        faxiaoxibtn[i].style.color = ''
                                    }
                                }
                            }
                        })
                    }
                    var chatting_sent = document.querySelectorAll('.chatting-sent');
                    var faxiaoxibtn = document.querySelectorAll('.faxiaoxi');
                    var chat_main = document.querySelectorAll('.chatting-main');
                    var f_useravatar = document.querySelectorAll('.f-useravatar');
                    var chattinginput = document.querySelectorAll('.chattinginput');

                    for (let i = 0; i < res.fansList.length; i++) {

                        // ??????????????????       
                        let nowindex = faxiaoxibtn[i].getAttribute('index');
                        // console.log(ee.user.nickname);
                        let chatting = document.querySelectorAll('.chatting');
                        let chattingbackbtn = document.querySelectorAll('.chatting-backbtn');
                        // ?????????????????????
                        faxiaoxibtn[nowindex].addEventListener('click', function (e) {
                            e.stopPropagation();
                            chatting[nowindex].style.display = 'block';
                            console.log(nowindex);
                            console.log(chatting[nowindex]);
                            create.style.display = 'none';
                        })
                        // ??????????????????
                        chattingbackbtn[nowindex].addEventListener('click', function () {
                            chatting[nowindex].style.display = 'none';
                            create.style.display = 'block';
                        })
                        let charid = chatting_sent[i].getAttribute('charid');
                        // console.log(charid);
                        // ???????????????????????????
                        myajax({
                            method: 'GET',
                            data: {
                                userId: thesuerid,
                                receiverId: charid,
                                page: 1
                            },
                            url: 'http://175.178.193.182:8080/chat/getRecord',
                            success: function (res) {
                                var otherid = chatting_sent[i].getAttribute('charid');
                                for (let j = 0; j < res.newRecord.length; j++) {
                                    // console.log(f_useravatar[i].src);      ???????????????
                                    result1 = res.newRecord[j]
                                    if (result1.userId == otherid) {
                                        chat_main[i].innerHTML += '<div class="eachmessage"><div class="message_box"> <img src="' + f_useravatar[i].src + '" class="message_avatar" alt=""><span class="message_conten">' + result1.message + '</span></div></div>'
                                    } else {
                                        chat_main[i].innerHTML += '<div class="eachmessage"><div class="message_box"> <img src="' + nowavatar + '" class="message_avatar" alt=""style="float: right;"><span class="message_conten" style="float: right;">' + result1.message + '</span></div></div>'
                                    }
                                }
                            }
                        })
                        // nowavatar
                        //????????????
                        chatting_sent[i].addEventListener('click', function () {
                            if (chattinginput[i].value) {
                                myajax({
                                    method: 'POST',
                                    data: {
                                        userId: thesuerid,
                                        receiverId: charid,
                                        message: chattinginput[i].value
                                    },
                                    url: 'http://175.178.193.182:8080/chat/send',
                                    success: function (res) {
                                        console.log(res);
                                        chat_main[i].innerHTML += '<div class="eachmessage"><div class="message_box"> <img src="' + nowavatar + '" class="message_avatar" style="float: right;" alt=""><span class="message_conten" style="float: right;">' + chattinginput[i].value + '</span></div></div>'
                                        chattinginput[i].value = '';
                                        chat_main[i].scrollTop = chat_main.offsetHight + 70
                                    }
                                })
                            }
                            // ??????ws?????????????????????
                            function ontimerender(charid, message) {
                                myajax({
                                    method: 'GET',
                                    url: 'http://175.178.193.182:8080/user/baseInfo',
                                    data: {
                                        userId: charid,
                                    },
                                    success: function (res) {
                                        if (res.status === 200) {
                                            console.log(res);
                                        }
                                    }
                                })
                                chat_main[i].innerHTML += '<div class="eachmessage"><div class="message_box"> <img src="' + f_useravatar[i].src + '" class="message_avatar" alt=""><span class="message_conten">' + message + '</span></div></div>'
                                console.log(1);
                            }

                            let ws = io.connect("ws://175.178.193.182:8080/chat")
                            ws.on("connect", () => {
                                ws.emit("online", thesuerid)
                                ws.on("receive-message", (res) => {
                                    ontimerender(res.userId, res.message)
                                })
                            })
                            function wsChat() {
                                ws.emit("send-message", {
                                    userId: thesuerid + '',
                                    receiverId: charid + '',
                                    message: chattinginput[i].value
                                })
                            }
                            wsChat()
                        })

                    }

                } else {
                    chatterbox.innerHTML = '</br>???????????????';
                }
            }
        }
    })
    // ??????????????????
    myajax({
        method: 'GET',
        url: 'http://175.178.193.182:8080/user/fanList',
        data: {
            userId: thesuerid
        },
        success: function (res) {
            if (res.status === 200) {
                if (res.fansList[0]) {
                    for (let i = 0; i < res.fansList.length; i++) {
                        var result = res.fansList[i];
                        chatlist.innerHTML += '<div class="f-auser"><img src="' + result.avatar + ' " alt="" class="f-useravatar"><span class="f-username">' + result.nickname + '</span></div>'
                    }
                } else {
                    chatlist.innerHTML = '</br>???????????????';
                }
            }
        }
    })


})

