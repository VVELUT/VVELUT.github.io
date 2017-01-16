var app = angular.module('app', []);

app.directive('onReadFile', function($parse) {
    return {
        restrict: 'A',
        scope: false,
        link: function(scope, element, attrs) {
            var fn = $parse(attrs.onReadFile);

            element.on('change', function(onChangeEvent) {
                var reader = new FileReader();

                reader.onload = function(onLoadEvent) {
                    scope.$apply(function() {
                        fn(scope, {$fileContent:onLoadEvent.target.result});
                    });
                };

                reader.readAsText((onChangeEvent.srcElement || onChangeEvent.target).files[0]);
            });
        }
    };
});

function locationOf(element, array, start, end) {
    if (array.length === 0)
        return -1;

    start = start || 0;
    end = end || array.length;
    var pivot = (start + end) >> 1;

    var c = element < array[pivot] ? -1 : (element > array[pivot] ?1 : 0);
    if (end - start <= 1) return c == -1 ? pivot - 1 : pivot;

    switch (c) {
        case -1: return locationOf(element, array, start, pivot);
        case 0: return pivot;
        case 1: return locationOf(element, array, pivot, end);
    };
};

function pushSort(element, array){
    array.splice(locationOf(element, array) + 1, 0, element);
    return array;
}

function findById(arr, id){
    id = parseInt(id);
    return $.grep(arr,function(e){return e.id === id})[0];
};

function maxId(arr){
    var max = 0;
    if(arr.length == 0) return 0;
    arr.forEach(function(elt){
        if(elt.id > max) max = elt.id;
    });
    return max;
}

function arrayContains(arr1, arr2){
    if(arr2.length < arr1.length) return false;
    var i = 0, j = 0;
    while( i < arr1.length && j < arr2.length){
        if(parseInt(arr1[i]) == parseInt(arr2[j])){
            i++;j++;
        } else if (parseInt(arr1[i]) < parseInt(arr2[j])) {
            return false;
        } else {
            j++;
        }
    }
    return i == arr1.length;
}

var wipDeck = {
    id: 0,
    name: "",
    pB: null,
    cards: {},
    dice: {},
    firstFive: [],
}