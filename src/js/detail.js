jQuery($=>{

    $('.middle').lxzoom({width:400,height:400}).addClass('box');

			$('.small-l li').on('click','img',function(){
				$('.imgl').attr({
					'src':this.src,
					'data-big':this.dataset.big
				});
			})









    var params = decodeURI(location.search);
    params = params.slice(1);console.log(params.slice(1));
    var arr = params.split('&');console.log(arr);
    var obj = {};
    arr.forEach(item=>{
        var res = item.split('=');
        obj[res[0]] = res[1];
    })
    console.log(obj);
    $('.imgl').attr({
        src:obj.imgurl,
        'data-big':obj.imgurl
    });
    $('.img1').attr({
        src:obj.imgurl,
        'data-big':obj.imgurl
    });
    $('.goods-titles').text(obj.name);
    $('.price_l').text(obj.sale);
    $('.sale_l ').text(obj.price);


    $('.jia').on('click',function(){
        let qty = $('.nums').val()*1;
        qty += 1;
        $('.nums').val(qty);
    })

    $('.jian').on('click',function(){
        let qty = $('.nums').val()*1;
        if(qty==1){
            qty = 2;
        }
        qty -=1;
        $('.nums').val(qty);
    })

    

    $('.buy-r').on('click',function(){
        var qty = $('.nums').val();
        console.log(qty)
        location.href = 'cart.html?id=' + obj.id+'&imgurl='+obj.imgurl+'&name='+obj.name+'&price='+obj.price+'&sale='+obj.sale+'&qty='+qty;
    })
})