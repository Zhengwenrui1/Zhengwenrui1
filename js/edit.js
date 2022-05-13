window.addEventListener('load', function () {
    var thesuerid = localStorage.getItem('userId');
    var avatarvalue=localStorage.getItem('avatarvalue');
    var changename = document.querySelector('.change-name');
    var editnameinput = document.querySelector('.editnameinput');
    var namevalue = document.querySelector('.name-value');
    var changenamebtn = document.querySelector('.changename-btn');
    var mynickname=document.querySelector('.p-username');

    var editSexinput = document.querySelector('.editSexinput');
    var changeSexbtn = document.querySelector('.changeSex-btn');
    var changeSex = document.querySelector('.change-Sex');
    var Sexvalue = document.querySelector('.Sex-value');

    var editbirthinput = document.querySelector('.editbirthinput');
    var changebirthbtn = document.querySelector('.changebirth-btn');
    var changebirth = document.querySelector('.change-birth');
    var birthvalue = document.querySelector('.birth-value');

    var editprofessioninput = document.querySelector('.editprofessioninput');
    var changeprofessionbtn = document.querySelector('.changeprofession-btn');
    var changeprofession = document.querySelector('.change-profession');
    var professionvalue = document.querySelector('.profession-value');


    var editregioninput = document.querySelector('.editregioninput');
    var changeregionbtn = document.querySelector('.changeregion-btn');
    var changeregion = document.querySelector('.change-region');
    var regionvalue = document.querySelector('.region-value');

    var editBriefinput = document.querySelector('.editBriefinput');
    var changeBriefbtn = document.querySelector('.changBrief-btn');
    var changeBrief = document.querySelector('.change-Brief');
    var Briefvalue = document.querySelector('.Brief-value');

    var allsubmitbtn = document.querySelector('.all-submitbtn');
    var avatarimg = document.querySelector('#avatar');
    var editavatar = document.querySelector('.edit-avatar');
    var editbgcimg=document.querySelector('.edit-bgcimg');

    // console.log(avatarvalue);
    // 编辑名称
    changename.addEventListener('click', function () {
        editnameinput.style.display = 'block';
        changenamebtn.style.display = 'block';
        namevalue.style.display = 'none';
        changename.style.display = 'none';
    })
    // 确定编辑名称
    changenamebtn.addEventListener('click', function () {
        mynickname.innerHTML = editnameinput.value;
        namevalue.innerHTML = editnameinput.value;
        localStorage.setItem('namevalue', namevalue.innerHTML);
        changenamebtn.style.display = 'none';
        editnameinput.style.display = 'none';
        changename.style.display = 'block';
        changename.style.display = 'block';
        namevalue.style.display = 'block';
    })

    // 编辑性别
    changeSex.addEventListener('click', function () {
        editSexinput.style.display = 'block';
        changeSexbtn.style.display = 'block';
        Sexvalue.style.display = 'none';
        changeSex.style.display = 'none';
    })
    // 确定编辑性别
    changeSexbtn.addEventListener('click', function () {
        Sexvalue.innerHTML = editSexinput.value;
        localStorage.setItem('Sexvalue', Sexvalue.innerHTML);
        changeSexbtn.style.display = 'none';
        editSexinput.style.display = 'none';
        changeSex.style.display = 'block';
        changeSex.style.display = 'block';
        Sexvalue.style.display = 'block';
    })

    // 编辑生日
    changebirth.addEventListener('click', function () {
        editbirthinput.style.display = 'block';
        changebirthbtn.style.display = 'block';
        birthvalue.style.display = 'none';
        changebirth.style.display = 'none';
    })
    // 确定编辑生日
    changebirthbtn.addEventListener('click', function () {
        birthvalue.innerHTML = editbirthinput.value;
        localStorage.setItem('birthvalue', birthvalue.innerHTML);
        changebirthbtn.style.display = 'none';
        editbirthinput.style.display = 'none';
        changebirth.style.display = 'block';
        changebirth.style.display = 'block';
        birthvalue.style.display = 'block';
    })

    // 编辑职业
    changeprofession.addEventListener('click', function () {
        editprofessioninput.style.display = 'block';
        changeprofessionbtn.style.display = 'block';
        professionvalue.style.display = 'none';
        changeprofession.style.display = 'none';
    })
    // 确定编辑职业
    changeprofessionbtn.addEventListener('click', function () {
        professionvalue.innerHTML = editprofessioninput.value;
        localStorage.setItem('professionvalue', professionvalue.innerHTML);
        changeprofessionbtn.style.display = 'none';
        editprofessioninput.style.display = 'none';
        changeprofession.style.display = 'block';
        changeprofession.style.display = 'block';
        professionvalue.style.display = 'block';
    })

    // 编辑地区
    changeregion.addEventListener('click', function () {
        editregioninput.style.display = 'block';
        changeregionbtn.style.display = 'block';
        regionvalue.style.display = 'none';
        changeregion.style.display = 'none';
    })
    // 确定编辑地区
    changeregionbtn.addEventListener('click', function () {
        regionvalue.innerHTML = editregioninput.value;
        localStorage.setItem('regionvalue', regionvalue.innerHTML);
        changeregionbtn.style.display = 'none';
        editregioninput.style.display = 'none';
        changeregion.style.display = 'block';
        changeregion.style.display = 'block';
        regionvalue.style.display = 'block';
    })


    // 编辑简介
    changeBrief.addEventListener('click', function () {
        editBriefinput.style.display = 'block';
        changeBriefbtn.style.display = 'block';
        Briefvalue.style.display = 'none';
        changeBrief.style.display = 'none';
    })
    // 确定编辑简介
    changeBriefbtn.addEventListener('click', function () {
        Briefvalue.innerHTML = editBriefinput.value;
        localStorage.setItem('Briefvalue', Briefvalue.innerHTML);
        changeBriefbtn.style.display = 'none';
        editBriefinput.style.display = 'none';
        changeBrief.style.display = 'block';
        changeBrief.style.display = 'block';
        Briefvalue.style.display = 'block';
    })




    // 上传资料
    allsubmitbtn.addEventListener('click', function () {
        if ((namevalue.innerHTML !== '') && (Sexvalue.innerHTML !== '') && (birthvalue.innerHTML !== '') && (editprofessioninput.value !== '') && (regionvalue.innerHTML !== '') && (Briefvalue.innerHTML !== '')) {
            var userIId = localStorage.getItem('userId')
            myajax({
                method: 'POST',
                url: 'http://175.178.193.182:8080/user/edit',
                data: {
                    userId: userIId,
                    nickname: namevalue.innerHTML,
                    gender: Sexvalue.innerHTML,
                    birthday: birthvalue.innerHTML,
                    profession: professionvalue.innerHTML,
                    area: regionvalue.innerHTML,
                    description: Briefvalue.innerHTML
                },
                success: function (res) {
                    // alert(res.msg);
                    console.log(res);
                    // localStorage.getItem('localname',data.userId);
                    // localStorage.getItem('localnickname',data.nickname);
                    // localStorage.getItem('localgender',data.gender);
                    // localStorage.getItem('localbirthday',data.birthday);
                    // localStorage.getItem('localprofession',data.profession);
                    // localStorage.getItem('localarea',data.area);
                    // localStorage.getItem('localdescription',data.description);
                }
            })
        } else {
            alert('请填写完整个人资料')
        }
    })

    

    // 查看登录状态
    myajax({
        method: 'GET',
        url: 'http://175.178.193.182:8080/getLoginStatus',
        data: {
            userId: thesuerid
        },
        success: function (res) {
            if (res.status === 200) {
                console.log(res);
                var namevalue1 = localStorage.getItem('namevalue');
                var Sexvalue1 = localStorage.getItem('Sexvalue');
                var birthvalue1 = localStorage.getItem('birthvalue');
                var professionvalue1 = localStorage.getItem('professionvalue');
                var regionvalue1 = localStorage.getItem('regionvalue');
                var Briefvalue1 = localStorage.getItem('Briefvalue');
                // var avatar1 = localStorage.getItem('imgsrc');
                namevalue.innerHTML = namevalue1;
                Sexvalue.innerHTML = Sexvalue1;
                birthvalue.innerHTML = birthvalue1;
                professionvalue.innerHTML = professionvalue1;
                regionvalue.innerHTML = regionvalue1;
                Briefvalue.innerHTML = Briefvalue1;
                avatarimg.src = avatarvalue;
                editavatar.src = avatarvalue;
                editbgcimg.src=avatarvalue;

            }
        }
    })


})