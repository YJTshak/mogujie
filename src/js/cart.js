
jQuery($=>{


    var params = decodeURI(location.search);
    console.log(params);
    params = params.slice(1);console.log(params.slice(1));
    var arr = params.split('&');console.log(arr);
    var obj = {};
    arr.forEach(item=>{
        var res = item.split('=');
        obj[res[0]] = res[1];
    })
    console.log(obj);
    $('.Imgs').attr({
        src:obj.imgurl
    });
    console.log($('.Img1'));
    $('.cart-tt').text(obj.name);
    $('.pricesr').text(obj.price);
    $('.salesl').text(obj.sale);
    $('.numli').text(obj.qty);
    console.log(obj.price.slice(1));
    var list = obj.price.slice(1) * obj.qty;
    $('.list').text('￥'+list);
    $('.removes').on('click',function(){
        $('.cart-tb').remove();
    })



    
})