window.addEventListener('load', function () {
    // 聊天机器人
    // var robot = document.querySelector('#robot');
    var robotavatar = document.querySelector('.robot-useravatar');
    var robot_chatting = document.querySelector('.robot-chatting');
    var robot_chatting_backbtn = document.querySelector('.robot-chatting-backbtn');
    var robot_chatting_main = document.querySelector('.robot-chatting-main');
    var robot_chattinginput = document.querySelector('.robot-chattinginput');
    var robot_chatting_sent = document.querySelector('.robot-chatting-sent');
    var allmymeassage = document.querySelector('.all-mymessage');
    var chatlist = document.querySelector('.chatlist');


    // 与聊天机器人聊天
    // 1.进入与推出
    console.log(robot);
    robotavatar.addEventListener('click', function () {
        alert('ni');
        robot_chatting.style.display = 'block';
        allmymeassage.style.display = 'none';
    })

})
