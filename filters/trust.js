app.filter('trust', [
    '$sce',
    function($sce) {
        return function(text, type) {
            // Defaults to treating trusted text as `html`
            if(typeof(text) == "number") text = text.toString();
            return $sce.trustAs(type || 'html', text);
        }
    }
]);
