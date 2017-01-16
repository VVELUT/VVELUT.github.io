app.filter('cost',function(){
    return function(text){
        if(text) return text.replace(/%(\w*)%/g, '<span class="img $1"></span>');
    };
});