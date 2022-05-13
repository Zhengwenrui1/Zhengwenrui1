function resolvedata(data) {
    var arr = [];
    for (var k in data) {
        var str = k + '=' + data[k];
        arr.push(str);
    }
    return arr.join('&')
}

function myajax(options) {
    var xhr = new XMLHttpRequest()
    //把外界传过来的参数对象转换为查询字符串
    var qs=resolvedata(options.data)
    if (options.method.toUpperCase() === 'GET') {
        //发起get请求
        xhr.open(options.method, options.url + '?' + qs,false)
        xhr.send()
    } else if (options.method.toUpperCase() === 'POST') {
        //发起post请求
        xhr.open(options.method, options.url)
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        xhr.send(qs)
    }

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var result = JSON.parse(xhr.responseText)
            options.success(result)
        }
    }
}