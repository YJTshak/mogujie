




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
            btnNext.className = 'mslide_next_btn mslide_toggle_btn';
            btnNext.innerHTML = '&gt;';

            let btnPrev = document.createElement('span');
            btnPrev.className = 'mslide_prev_btn mslide_toggle_btn';
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
                console.log(66)
                // 上一张，下一张
                if(e.target.className === 'mslide_prev_btn'){console.log(88)
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
            btnNextl.className = 'mslide_nextl_btn mslide_toggles_btn';
            btnNextl.innerHTML = '&gt;';

            let btnPrevl = document.createElement('a');
            btnPrevl.className = 'mslide_prevl_btn mslide_toggles_btn';
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
        })
            
    