


    document.addEventListener('DOMContentLoaded',()=>{
            let username = document.querySelector('.username');
            let psw = document.querySelector('.psw');
            let btn = document.querySelector('#btnlog');

            let statusCode = [200,304];

            let xhr = new XMLHttpRequest();
            xhr.onload = function(){
                if(statusCode.indexOf(xhr.status)>=0){
                    console.log(xhr.responseText);
                    let res = xhr.responseText;

                    if(res == 'success'){
                        alert('登录成功');
                        location.href = '../index.html';
                    }else{
                        alert('用户名或密码错误');
                        
                    }
                }
            }
          

            btn.onclick = function(e){
                e.preventDefault();
                let _username = username.value;
                let _password = psw.value;
                console.log(_username,_password);

                xhr.open('get',`../api/login.php?username=${_username}&password=${_password}`,true);
                xhr.send();


                username.value = '';
                username.focus();
            }
        })



 jQuery($=>{
//     $('.btn').on('click',function(){
//         let user = $('.uaername').val();
//         let pas = $('.psw').val();
//         console.log(888)
//         $.ajax({
//             type:'post',
//             url:'../api/login.php',
//             async:true,
//             data:{
//                 username: _username,
//                 password: _password
//             },

//             succss:function(data){
//                 console.log(data);
//                 // if(data=='success'){
//                 //     alert('登陆成功');
//                 //     location.href="http://localhost:80/index.html";
//                 // }else if(data=='fail'){
//                 //     alert('用户名或密码不正确');
//                 // }
//             }
            
//         })
//         focus.user='';
//     })

    

    $('.registers').css('display','none');

    $('.code-l').on('click',function(){
        $('.register').css('display','none');
        $('.registers').css('display','block');
        $('.form-help').css('display','none');
        $('.mod-l').css('borderBottom','2px solid #ff4068');
    })

    $('.code-hidl').on('click',function(){
        $('.register').css('display','block');
        $('.registers').css('display','none');

    })

    $('.mod-l').on('click',function(){
        $('.mod-l').css('borderBottom','2px solid #ff4068');
        $('.mod-r').css('borderBottom','');
        $('.form-group').css('display','block');
        $('.form-help').css('display','none');

    })

    $('.mod-r').on('click',function(){
        $('.mod-r').css('borderBottom','2px solid #ff4068');
        $('.mod-l').css('borderBottom','');
        $('.form-group').css('display','none');
        $('.form-help').css('display','block');

    })
})