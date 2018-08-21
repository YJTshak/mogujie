
document.addEventListener('DOMContentLoaded',()=>{
    var Carousel = function(options){

        let banner = document.querySeletor('.banner');
        let ul = banner.children[0];

        let index = 0;

        ul.appendChild(ul.children[0].cloneNode(true));

        let len = ul.children.length;

        ul.style.width = banner.clientwidth * len + 'px';

        let page = document.createElement('div');
        page.className = 'page';
        for(let i=0;i<len-1;i++){
            let span = document.createElement('span');
            span.innerText = i+1;
            if(i===index){
                span.className = 'active';
            }
            page.appendChild(span);
        }
        banner.appendChild(page);

        banner.onmouseover = (e)=>{
            clearInterval(timer);
            if(e.target.parentNode.className === 'page'){
                index = e.target.innerText-1;
                show();
            }
            else if(e.target.className === 'btn-prev'){
                index--;
                show();
            }else if(e.target.className === 'btn-next'){
                index++;
                show();
            }
        }
        banner.onmouseout = ()=>{
            timer = setInterval(autoPlay,3000);
        }
        function autoPlay(){
            index++;
            show();
        }
        function show(){
            if(index>=len){
                ul.style.left = 0;
                index = 1;
            }else if(index<0){
                index = len-2;
            }
            animate(ul,{left:-index*banner.clientwidth});
            for(let i=0;i<len-1;i++){
                page.children[i].className = '';
            }
            if(index===len-1){
                page.children[0].className = 'active';
            }else{
                page.children[index].className = 'acitve';
            }
        }
    }
})