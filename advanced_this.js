const zoo = {
    time : 2000,
    pets : ['pies', 'kot', 'koń'],

    print : function() {
        setTimeout(function() {
            this.pets.forEach(function(el) {
                console.log(el.toUpperCase());
            })
        }.bind(this), this.time);
    }
}

zoo.print();
