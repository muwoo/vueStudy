/**
 * @author monkeywang
 * Date: 17/3/8
 */
var FootBall=function(){
    return {
        setWeight:'10kg',
        setPepole:12,
        setHistory:'足球起源于英国'
    }
}
var footBall=new FootBall();
footBall.getWeight=function(){
    console.log(footBall.setWeight);
};
footBall.getPepole=function(){
    console.log(footBall.setPepole);
};
footBall.getHistory=function(){
    console.log(footBall.setHistory);
};
footBall.getWeight();
footBall.getPepole();
footBall.getHistory();

var BasketBall=function(){
    return {
        setWeight:'12kg',
        setPepole:10,
        setHistory:'篮球很大'
    }
}
var basketBall =new BasketBall();
basketBall.getWeight=function(){
    console.log(basketBall.setWeight);
};
basketBall.getPepole=function(){
    console.log(basketBall.setPepole);
};
basketBall.getHistory=function(){
    console.log(basketBall.setHistory);
};
basketBall.getWeight();
basketBall.getPepole();
basketBall.getHistory();

var Sports=function(){
    return footBall;
}
var Sports1 = new Sports();
Sports1.getPepole=function(){
    console.log(Sports1.setPepole);
};
Sports1.getPepole();

var Sports=function(){
    return basketBall;
}
var Sports2 = new Sports();
Sports2.getPepole=function(){
    console.log(Sports2.setPepole);
};
Sports2.getPepole();