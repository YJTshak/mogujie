
//<=========================登录=======================>
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
        

        let _psw = psw.value;
        if(!/^[0-9]{6,20}$/.test(_psw)){
            help.innerHTML = '你输入的用户名或密码不合法';
            return false;
        }
    }
    pus.onclick = ()=>{
        help.innerHTML = '';
    }
    let status = [200,304];
    let isok = false;

    username.onblur = ()=>{
        let _username = username.value;
        let xhr = new XMLHttpRequest();
        
        xhr.onload = ()=>{
            if(status.indexOf(xhr.status)>=0){
                //let data = JSON.parse(xhr.responseText);
                console.log(xhr.responseText);
                let formGroup = username.parentNode;
                if(xhr.responseText === 'Yes'){
                    isok = true;
                    formGroup.classList.remove('has-error');
                    formGroup.classList.add('has-success');
                    username.nextElementSibling.innerText = '';
                }else if(xhr.responseText === 'No'){
                    isok = false;
                    formGroup.classList.add('has-success');
                    formGroup.classList.remove('has-error');
                    username.nextElementSibling.innerText = '用户名已存在';
                }
            }
        }
        xhr.open('get','../api/login.php?username='+_username);
        xhr.send();
    }
    
    let register = document.querySelector('.register');
    let codeL = document.querySelector('.code-l');
    let registers = document.querySelector('.registers');
    let codeHidl = document.querySelector('.code-hidl');
    let modL = document.querySelector('.mod-l');
    let modR = document.querySelector('.mod-r');
    let formHelp = document.querySelector('.form-help');
    let formGroup = document.querySelector('.form-group');

    registers.style.display = 'none';

    codeL.onclick = ()=>{
        register.style.display = 'none';
        registers.style.display = 'block';
        formHelp.style.display = 'none';
        modL.style.borderBottom = '2px solid #ff4068';
    }
    codeHidl.onclick = ()=>{
        register.style.display = 'block';
        registers.style.display = 'none';
    }
    modL.onclick = ()=>{
        modL.style.borderBottom = '2px solid #ff4068';
        modR.style.borderBottom = '';
        formGroup.style.display = 'block';
        formHelp.style.display = 'none';
    }
    modR.onclick = ()=>{
        modR.style.borderBottom = '2px solid #ff4068';
        modL.style.borderBottom = '';
        formGroup.style.display = 'none';
        formHelp.style.display = 'block';
    }

})