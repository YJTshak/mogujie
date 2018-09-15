


let pageNo = 1;
let qty = 2;
function getajax () {
    $.ajax({
        url: '../api/godslist.php',
        data: {
            pageNo: pageNo,
            qty: qty
        },
        type: 'get',
        success: function (data) {
            var total = JSON.parse(data).total;
            var data = JSON.parse(data).data;
            $('#output')[0].innerHTML = data.map(function (item, idx) {
                return `<li class='li' data-id="${item.id}">
                            <img src="${item.imgurl}" />
                            <p>${item.name}</p>
                            <p><span>${item.price}</span></p>
                            <p><span >${item.sale}</span></p>
                        </li>`
            }).join('');

           
        },
    })
}
getajax();
//点击分页高亮
$('#output').on('click', 'li', function () {
    var sp = $(this).attr('data-id');
    location.href = './detail.html?id=' + sp;
})