app.filter('localeCompareString',function(){
    return function (items) {
        items.sort(function (a, b) {
            if(a.name){
                return a.name.localeCompare(b.name);
            } else {
                return a.card.name.localeCompare(b.card.name);
            }
        });
        return items;
    };
});
