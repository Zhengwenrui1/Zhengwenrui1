window.addEventListener('load', function () {

    var backbtn = document.querySelector('.backbtn');
    var homepart = document.querySelector('.homepart');
    var picbox = document.querySelector('.pic-box');
    var picfile = document.querySelector('#pic-file');
    var addpic = document.querySelector('.add-pic');
    var imgs = document.querySelectorAll('preview-box');
    var addtit = document.querySelector('.add-tit');
    var addmain = document.querySelector('#add-main')
    var thesuerid = localStorage.getItem('userId');
    var sendnote = document.querySelector('.send-note')
    var todelete = document.querySelector('.todelete');

    var allguanbi = document.querySelector('.guanbi-topic');
    var gototopic = document.querySelector('.tag-topic');
    var gotouser = document.querySelector('.tag-user');
    var topicpart = document.querySelector('.topicpart');
    var userpart = document.querySelector('.userpart');
    var btn_newtag = document.querySelector('.addtopic');
    var newtag = '<div class="eachtopicbox"><span class="jinhao">#</span><input type="text" id="topic"class="atag" value=""></div>';

    var j = 0;
    // 接收图片
    var acceptdata = new Array();
    var topicarray = new Array();
    function inite() {
        var todelete = document.querySelector('.todelete');
    }
    // 储存图片路径的数组
    var allpicarray = new Array();
    // 点击返回按钮回到首页
    var allwrite = document.querySelector('.all-write');
    backbtn.addEventListener('click', function () {
        allwrite.style.display = 'none';
        homepart.style.display = 'block';
    })
    // 再次获取元素
    updatenote = function () {
        var imgs = document.querySelectorAll('.preview-box');
        var deletes = document.querySelectorAll('.delete');
        var allguanbi = document.querySelectorAll('.guanbi-topic');
        var eachtopicbox = document.querySelectorAll('.eachtopicbox');
    }

    // 点击tag去到相应的输入框
    gototopic.addEventListener('click', function () {
        topicpart.style.display = 'block';
        userpart.style.display = 'none';
    })
    gotouser.addEventListener('click', function () {
        topicpart.style.display = 'none';
        userpart.style.display = 'block';
    })

    //上传图片后可在页面中预览
    picbox.addEventListener('click', function () {
        picfile.click();
    });
    //添加图片
    // addimg = function () {

    // }
    picfile.addEventListener('change', function () {
        //3.获取到用户选择文件列表
        var files = picfile.files//文件数组
        if (files.length <= 0) {
            return alert('请选择要上传的文件')
        }
        var fd = new FormData()
        // 将用户选择的文件添加到FormData中
        fd.append('image', files[0])
        var xhr = new XMLHttpRequest()
        xhr.open('POST', 'http://175.178.193.182:8080/upload/image')
        xhr.send(fd)
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var data = JSON.parse(xhr.responseText);
                // console.log(data);
                if (data.status === 200) {
                    console.log(data);
                    acceptdata.push(data);
                    var aimg = '<div class="preview-box"><img src="" class="pic-preview" alt=""><span class="delete">x</span></div>';
                    todelete.insertAdjacentHTML('beforeend', aimg);
                    var picviews = document.querySelectorAll('.pic-preview');
                    picviews[j].src = acceptdata[j].url;
                    allpicarray[j] = acceptdata[j].url;
                    picviews[j].index = j;
                    j++;
                } else {
                    console.log('图片上传失败' + data.massage);
                }
            }
        }
    })
    removepic = function () {
        var deletes = document.querySelectorAll('.delete');
        var previewboxs = document.querySelectorAll('.preview-box');
        console.log('111');
        for (var i = 0; i < j; i++) {
            deletes[i].addEventListener('click', function () {
                console.log('1');
                previewboxs[i].removeNode(true);
            })
        }
    }

    // 上传笔记
    sendnote.addEventListener('click', function () {
        var topic1 = document.querySelectorAll('#topic');
        for (var i = 0; i < topic1.length; i++) {
            topicarray.push(topic1[i].value);
        }
        myajax({
            method: 'POST',
            url: 'http://175.178.193.182:8080/article',
            data: {
                userId: thesuerid,
                title: addtit.value,
                content: addmain.value,
                images: allpicarray,
                tags: topicarray
            },
            success: function (res) {
                //判断是否成功发表文章
                if (res.status === 200) {
                    console.log(allpicarray);
                    console.log(topicarray);
                    alert('发表成功');
                    addtit.value = '';
                    addmain.value = '';
                    allpicarray = [];
                    inite();
                    while (todelete.firstChild) {
                        todelete.removeChild(todelete.firstChild)
                    }
                    topicarray = [];
                    while (topicpart.firstChild) {
                        topicpart.removeChild(topicpart.firstChild)
                    }
                    console.log(res);

                }
            }
        })
    })
    // 添加和删除标签
    btn_newtag.addEventListener('click', function (e) {
        e.stopPropagation();
        topicpart.insertAdjacentHTML('beforeend', newtag);

    })
    // 删除新标签
    allguanbi.addEventListener('click', function (a) {
        a.stopPropagation();
        if (topicpart.firstChild) {
            topicpart.removeChild(topicpart.firstChild);
        }
    })

})