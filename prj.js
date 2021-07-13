var ask = window.prompt("რა თანხის დახურდავება გსურთ? თუ გსურთ დოლარის,ჩაწერეთ რიცხვი და დოლარის ნიშანი, მაგ: 20$. ასე გააკეთეთ სხვა ვალუტის შემთხვევაშიც. -- ამჟამად შეგიძლიათ მხოლოდ სამ ვალუტაზე გაცვლა: ₾არი; $ოლარი, €ურო");

var Canvas1 = document.getElementById("canvas1");
var Canvas2 = document.getElementById("canvas2");
var Canvas3 = document.getElementById("canvas3");
var Value = ask.valueOf();

if (Value.endsWith("$")) {
    newValue = Value.replace('$', '');
    Canvas1.innerHTML = newValue*3.14  + " ლარი";
    Canvas2.innerHTML = newValue + " დოლარი";
    Canvas3.innerHTML = newValue/0.85 + " ეურო";
}else if(Value.endsWith("₾")) {
    newValue2= Value.replace("₾", "");
    Canvas2.innerHTML = newValue2/3.14 + " დოლარი";
    Canvas3.innerHTML = newValue2/3.71 + " ეურო";
    Canvas1.innerHTML = newValue2 + " ლარი"
}else if(Value.endsWith("€")) {
    newValue3 = Value.replace("€", "");
    Canvas1.innerHTML = newValue3*3.71 + " ლარი";
    Canvas2.innerHTML = newValue3 * 1.18 + " დოლარი";
    Canvas3.innerHTML = newValue3 + " ეურო";
}else {
     document.getElementById('demo').innerHTML = "Undefiend Valut";
}