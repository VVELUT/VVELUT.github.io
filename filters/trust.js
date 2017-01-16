app.filter('trust', [
    '$sce',
    function($sce) {
        return function(text, type) {
            // Defaults to treating trusted text as `html`
            return $sce.trustAs(type || 'html', text);
        }
    }
]);