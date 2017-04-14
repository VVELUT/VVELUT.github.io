app.controller('navController',function($location,$anchorScroll){
    this.tab = 1;

    this.scroll = function(tab,hash,$event){
        $event.stopPropagation();
        if(tab == 2) $anchorScroll.yOffset = 45;
        else $anchorScroll.yOffset = 25;
        this.tab = tab;
        $location.hash(hash);
        $anchorScroll();
    }

    this.isSet = function(checkTab) {
        return this.tab === checkTab;
    };

    this.setTab = function(activeTab) {
        this.tab = activeTab;
    };
});
