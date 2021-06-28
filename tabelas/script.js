function getSum() {
    var sumVal = 0;
    var elem1 = parseInt(document.getElementById('elem1').innerHTML.replace('$', ''));
    var elem2 = parseInt(document.getElementById('elem2').innerHTML.replace('$', ''));
    var elem3 = parseInt(document.getElementById('elem3').innerHTML.replace('$', ''));
    var elem4 = parseInt(document.getElementById('elem4').innerHTML.replace('$', ''));

    sumVal = (elem1 + elem2 + elem3 + elem4);
    document.getElementById('total').innerHTML = '$ ' + sumVal;
}