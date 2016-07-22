Array.prototype.removeValue = function(name, value) {
    var array = $.map(this, function(v, i) {
        return v[name] === value ? null : v;
    });
    this.length = 0; //clear original array
    this.push.apply(this, array); //push all elements except the one we want to delete
    return this;
}


Array.prototype.getObjectKey = function(name, value) {

    var Obj = $.map(this, function(v, i) {
        return v[name] === value ? v : null;
    });

    return Obj[0];
}
