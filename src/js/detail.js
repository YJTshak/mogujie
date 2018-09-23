jQuery($=>{
    function getQueryString(name){
        var result = window.location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
        if(result == null || result.length < 1){
            return "";
        }
        return result[1];
    }

    var str = getQuerstring("id");

    function goodslist(){
        $.ajax({
            type:"get",
            url:"../api/details.php",
            async:true,
            data:{
                "id":str
            },

            success:function(str){
                var dataList = JSON.parse(str);
                
            }
        })
    }
})