




        document.addEventListener('DOMContentLoaded',()=>{
            
            
            let banners = document.getElementsByClassName('banners')[0];
            let ul = banners.children[0];

            // 初始化
            let index = 0;

            // 无缝滚动关键1：把第一张复制到最后
            ul.appendChild(ul.children[0].cloneNode(true));

            let len = ul.children.length;

            // 设置ul宽度，实现水平排列效果
            ul.style.width = banners.clientWidth * len + 'px';

            
            // 添加上一张、下一张按钮
            let btnNext = document.createElement('span');
            btnNext.className = 'mslide_next_btn';
            btnNext.innerHTML = '&gt;';

            let btnPrev = document.createElement('span');
            btnPrev.className = 'mslide_prev_btn';
            btnPrev.innerHTML = '&lt;';

            banners.appendChild(btnPrev);
            banners.appendChild(btnNext);


            let timer = setInterval(autoPlay,3000);


            // 鼠标移入移除
            banners.onmouseover = ()=>{
                clearInterval(timer);
            }

            banners.onmouseout = ()=>{
                timer = setInterval(autoPlay,3000);

            }

            banners.onclick = function(e){
                
                // 上一张，下一张
                if(e.target.className === 'mslide_prev_btn'){
                    index--;
                    show();
                }else if(e.target.className === 'mslide_next_btn'){
                    index++;
                    show();
                }
            }


            function autoPlay(){
                index++;

                show();
            }


            function show(){
                if(index>=len){
                    // 无缝滚动
                    ul.style.left = 0;
                    index = 1;
                }else if(index<0){
                    index = len-2;
                }

                animate(ul,{left:-index*banners.clientWidth});

                
            }



            let bannerr = document.getElementsByClassName('bannerr')[0];
            let uli = bannerr.children[0];

            // 初始化
            let indexs = 0;

            // 无缝滚动关键1：把第一张复制到最后
            uli.appendChild(uli.children[0].cloneNode(true));

            let lens = uli.children.length;

            // 设置uli宽度，实现水平排列效果
            uli.style.width = bannerr.clientWidth * lens + 'px';

            
            // 添加上一张、下一张按钮
            let btnNextl = document.createElement('a');
            btnNextl.className = 'mslide_nextl_btn';
            btnNextl.innerHTML = '&gt;';

            let btnPrevl = document.createElement('a');
            btnPrevl.className = 'mslide_prevl_btn';
            btnPrevl.innerHTML = '&lt;';

            bannerr.appendChild(btnPrevl);
            bannerr.appendChild(btnNextl);


            let timers = setInterval(autoPlays,3000);


            // 鼠标移入移除
            bannerr.onmouseover = ()=>{
                clearInterval(timers);
            }

            bannerr.onmouseout = ()=>{
                timers = setInterval(autoPlays,3000);

            }

            bannerr.onclick = e=>{
                // // 点击分页切换
                // if(e.target.parentNode.className === 'page'){
                //     // 修改indexs值为当前分页数字-1
                //     indexs = e.target.innerText-1;

                //     shows();
                // }

                // 上一张，下一张
                if(e.target.className === 'mslide_prevl_btn'){
                    indexs--;
                    shows();
                }else if(e.target.className === 'mslide_nextl_btn'){
                    indexs++;
                    shows();
                }
            }


            function autoPlays(){
                indexs++;

                shows();
            }


            function shows(){
                if(indexs>=lens){
                    // 无缝滚动
                    uli.style.left = 0;
                    indexs = 1;
                }else if(indexs<0){
                    indexs = lens-2;
                }

                animate(uli,{left:-indexs*bannerr.clientWidth});

                
            }


            let banner2 = document.querySelector('#banner2');
            let ul2 = banner2.children[0];

            // 初始化
            let index2 = 0;

            // 无缝滚动关键1：把第一张复制到最后
            ul2.appendChild(ul2.children[0].cloneNode(true));

            let len2 = ul2.children.length;

            // 设置ul1宽度，实现水平排列效果
            ul2.style.width = banner2.clientWidth * len2 + 'px';

            
            // 添加上一张、下一张按钮
            // let btnNext1 = document.createElement('span');
            // btnNext1.className = 'mslide_next_btn';
            // btnNext1.innerHTML = '&gt;';

            // let btnPrev1 = document.createElement('span');
            // btnPrev1.className = 'mslide_prev_btn';
            // btnPrev1.innerHTML = '&lt;';

            // banner1.appendChild(btnPrev1);
            // banner1.appendChild(btnNext1);


            let timer2 = setInterval(autoPlay2,5000);


            // 鼠标移入移除
            banner2.onmouseover = ()=>{
                clearInterval(timer2);
            }

            banner2.onmouseout = ()=>{
                timer2 = setInterval(autoPlay2,5000);

            }

            banner2.onclick = function(e){
                
                // 上一张，下一张
                if(e.target.className === 'mslide_prev_btn'){
                    index2--;
                    show2();
                }else if(e.target.className === 'mslide_next_btn'){
                    index2++;
                    show2();
                }
            }


            function autoPlay2(){
                index2++;

                show2();
            }


            function show2(){
                if(index2>=len2){
                    // 无缝滚动
                    ul2.style.left = 0;
                    index2 = 1;
                }else if(index2<0){
                    index2 = len2-2;
                }

                animate(ul2,{left:-index2*banner2.clientWidth});

                
            }

            let banner1 = document.getElementsByClassName('banner1')[0];
            let ul1 = banner1.children[0];

            // 初始化
            let index1 = 0;

            // 无缝滚动关键1：把第一张复制到最后
            ul1.appendChild(ul1.children[0].cloneNode(true));

            let len1 = ul1.children.length;

            // 设置ul1宽度，实现水平排列效果
            ul1.style.width = banner1.clientWidth * len1 + 'px';

            
            // 添加上一张、下一张按钮
            // let btnNext1 = document.createElement('span');
            // btnNext1.className = 'mslide_next_btn';
            // btnNext1.innerHTML = '&gt;';

            // let btnPrev1 = document.createElement('span');
            // btnPrev1.className = 'mslide_prev_btn';
            // btnPrev1.innerHTML = '&lt;';

            // banner1.appendChild(btnPrev1);
            // banner1.appendChild(btnNext1);


            let timer1 = setInterval(autoPlay1,5000);


            // 鼠标移入移除
            banner1.onmouseover = ()=>{
                clearInterval(timer1);
            }

            banner1.onmouseout = ()=>{
                timer1 = setInterval(autoPlay1,5000);

            }

            banner1.onclick = function(e){
                
                // 上一张，下一张
                if(e.target.className === 'mslide_prev_btn'){
                    index1--;
                    show1();
                }else if(e.target.className === 'mslide_next_btn'){
                    index1++;
                    show1();
                }
            }


            function autoPlay1(){
                index1++;

                show1();
            }


            function show1(){
                if(index1>=len1){
                    // 无缝滚动
                    ul1.style.left = 0;
                    index1 = 1;
                }else if(index1<0){
                    index1 = len1-2;
                }

                animate(ul1,{left:-index1*banner1.clientWidth});

                
            }

            

            let banner3 = document.querySelector('#banner3');
            let ul3 = banner3.children[0];

            // 初始化
            let index3 = 0;

            // 无缝滚动关键1：把第一张复制到最后
            ul3.appendChild(ul3.children[0].cloneNode(true));

            let len3 = ul3.children.length;

            // 设置ul1宽度，实现水平排列效果
            ul3.style.width = banner3.clientWidth * len3 + 'px';

            
            // 添加上一张、下一张按钮
            // let btnNext1 = document.createElement('span');
            // btnNext1.className = 'mslide_next_btn';
            // btnNext1.innerHTML = '&gt;';

            // let btnPrev1 = document.createElement('span');
            // btnPrev1.className = 'mslide_prev_btn';
            // btnPrev1.innerHTML = '&lt;';

            // banner1.appendChild(btnPrev1);
            // banner1.appendChild(btnNext1);


            let timer3 = setInterval(autoPlay3,5000);


            // 鼠标移入移除
            banner3.onmouseover = ()=>{
                clearInterval(timer3);
            }

            banner3.onmouseout = ()=>{
                timer3 = setInterval(autoPlay3,5000);

            }

            banner3.onclick = function(e){
                
                // 上一张，下一张
                if(e.target.className === 'mslide_prev_btn'){
                    index3--;
                    show3();
                }else if(e.target.className === 'mslide_next_btn'){
                    index3++;
                    show3();
                }
            }


            function autoPlay3(){
                index3++;

                show3();
            }


            function show3(){
                if(index3>=len3){
                    // 无缝滚动
                    ul3.style.left = 0;
                    index3 = 1;
                }else if(index3<0){
                    index3 = len3-2;
                }

                animate(ul3,{left:-index3*banner3.clientWidth});

                
            }




            let banner4 = document.querySelector('#banner4');
            let ul4 = banner4.children[0];

            // 初始化
            let index4 = 0;

            // 无缝滚动关键1：把第一张复制到最后
            ul4.appendChild(ul4.children[0].cloneNode(true));

            let len4 = ul4.children.length;

            // 设置ul1宽度，实现水平排列效果
            ul4.style.width = banner4.clientWidth * len4 + 'px';

            
            // 添加上一张、下一张按钮
            // let btnNext1 = document.createElement('span');
            // btnNext1.className = 'mslide_next_btn';
            // btnNext1.innerHTML = '&gt;';

            // let btnPrev1 = document.createElement('span');
            // btnPrev1.className = 'mslide_prev_btn';
            // btnPrev1.innerHTML = '&lt;';

            // banner1.appendChild(btnPrev1);
            // banner1.appendChild(btnNext1);


            let timer4 = setInterval(autoPlay4,5000);


            // 鼠标移入移除
            banner4.onmouseover = ()=>{
                clearInterval(timer4);
            }

            banner4.onmouseout = ()=>{
                timer4 = setInterval(autoPlay4,5000);

            }

            banner4.onclick = function(e){
                
                // 上一张，下一张
                if(e.target.className === 'mslide_prev_btn'){
                    index4--;
                    show4();
                }else if(e.target.className === 'mslide_next_btn'){
                    index4++;
                    show4();
                }
            }


            function autoPlay4(){
                index4++;

                show4();
            }


            function show4(){
                if(index4>=len4){
                    // 无缝滚动
                    ul4.style.left = 0;
                    index4 = 1;
                }else if(index4<0){
                    index4 = len4-2;
                }

                animate(ul4,{left:-index4*banner4.clientWidth});

                
            }




            var output = document.querySelector('#output');
                
                
                let status = [200,304];
                let xhr = new XMLHttpRequest();
                xhr.onload = ()=>{
                    if(status.indexOf(xhr.status)>=0){
                        
                        let data = JSON.parse(xhr.responseText);
                        
                        
                        output.innerHTML = data.map(item=>{
                            return `<li data-guid="${item.id}">
                                    <a href="#">找相似</a>
                                    <a href="./html/goodslist.html">
                                        <img src="${item.imgurl}">
                                    </a>
                                    <a href="#">
                                        <p class="describe">${item.name}</p>
                                        <div class="goods-info">
                                            <b class="price">￥${item.price}</b>
                                            <span class="sale">￥<del>${item.sale}</del></span>
                                            <span class="like fr"><img src="//s18.mogucdn.com/p2/160908/upload_27g4f1ch6akie83hacb676j622b9l_32x30.png" alt="" />452</span>
                                        </div>
                                    </a>
                            </li>`
                        }).join('');
                        
                    }
                }
                xhr.open('get','../api/goodslist.php');
                xhr.send();


            

        })
            
    