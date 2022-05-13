    window.onscroll = function () {
        var nav = document.querySelector('nav');
        if (document.documentElement.scrollTop >= 130) {          //滚动的高度
            topfixedv.style.position = 'fixed';
            topfixed.style.marginTop = '0px';
            topfixed.style.top = '-5px';
            topfixed.style.zIndex = '1000000';
        } else {
            // topfixed.style.marginTop = '30px';
            topfixed.style.position = 'static';
        }
    };