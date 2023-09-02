function get(title){
    this.title = title;
    console.log(this);
}

const g = new get('naren');

var a = 20;
console.log(this.a);

function working(){
    var b=30;
    console.log(b);
}

working();