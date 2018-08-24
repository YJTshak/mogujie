
<=========================登录=======================>
document.addEventListener('DOMContentLoaded',()=>{
    let username = document.querySelector('.username');
    let psw = document.querySelector('.psw');
    let btn = document.querySelector('.btn');
    let help = document.querySelector('.help-block');
    let pus = document.querySelector('.pus');

    btn.onclick = ()=>{

        let _username = username.value;
        if(!/^[a-z][\w\-]{5,19}/.test(_username)){
            help.innerHTML = '你输入的用户名或密码不合法';
            return false;
        }
        if(!/^1[3-9]\d{9}$/.test(_username)){
            help.innerHTML = '你输入的用户名或密码不合法';
            return false;
        }
        if(!/^[a-z0-9][\w\-\.]{2,29}@[a-z0-9\-]{2,67}(\.[a-z\u2E80-\u9FFF]{2,6})+$/.test(_username)){
            help.innerHTML = '你输入的用户名或密码不合法';
            return false;
        }

        let _psw = psw.value;
        if(!/^[a-zA-Z0-9]{6,20}$/.test(_psw)){
            help.innerHTML = '你输入的用户名或密码不合法';
            return false;
        }
    }
    pus.onclick = ()=>{
        help.innerHTML = '';
    }


    let xhr = new XMLHttpRequest();

    

})