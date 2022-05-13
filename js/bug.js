        var xhr = new XMLHttpRequest()
        xhr.open('POST', 'http://175.178.193.182:8080/user/upload')
        xhr.send(fd1);
        xhr.onreadystatechange = function (e) {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var data = JSON.parse(xhr.responseText);
                if (data.status === 200) {
                    console.log(data.avatar);
                    avatarimg.src = data.avatar;
                    editavatar.src = data.avatar;
                    localStorage.setItem('theavatar', data.avatar)//储存当前头像                   
                    // console.log(data.avatar);
                }
            }
        }