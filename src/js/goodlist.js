


// let pageNo = 1;
// let qty = 2;
// function getajax () {
//     $.ajax({
//         url: '../api/godslist.php',
//         data: {
//             pageNo: pageNo,
//             qty: qty
//         },
//         type: 'get',
//         success: function (data) {
//             console.log(data);
//             var total = JSON.parse(data).total;
//             var data = JSON.parse(data).data;
//             $('#output')[0].innerHTML = data.map(function (item, idx) {
//                 return `<li class='li' data-id="${item.id}">
//                             <img src="${item.imgurl}" />
//                             <p>${item.name}</p>
//                             <p><span>${item.price}</span></p>
//                             <p><span >${item.sale}</span></p>
//                         </li>`
//             }).join('');

           
//         },
//     })
// }
// getajax();
// //点击分页高亮
// $('#output').on('click', 'li', function () {
//     var sp = $(this).attr('data-id');
//     location.href = './detail.html?id=' + sp;
// })



document.addEventListener('DOMContentLoaded',()=>{
                var output = document.querySelector('#output');
                
                
                let status = [200,304];
                let xhr = new XMLHttpRequest();
                xhr.onload = ()=>{
                    if(status.indexOf(xhr.status)>=0){
                        
                        let data = JSON.parse(xhr.responseText);
                        
                        
                        output.innerHTML = data.map(item=>{
                            return `<li data-guid="${item.id}">
                                    <a href="javascript:">找相似</a>
                                    <a href="javascript:">
                                        <img src="${item.imgurl}">
                                    </a>
                                    <a href="javascript:">
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

                

                output.onclick = function(e){
                    // e.preventDefault();
                    console.log(e.target.parentNode.parentNode.tagName.toLowerCase());
                    if(e.target.parentNode.parentNode.tagName.toLowerCase() == 'li'){
                        console.log(666)
                        var id = e.target.parentNode.parentNode.getAttribute('data-guid');
                        console.log(id);
                        location.href="../html.detail.html?id=" + id;
                    }
                }
                // let desc = false;
                // toobar.onclick = e=>{
                //     if(e.target.className === 'sort-price'){
                //         desc = !desc;
                //         xhr.open('get','../api/goodslist.php?sort=price'+(desc ? '&desc' : ''),true);
                //         xhr.send();
                //     }
                // }

            })
