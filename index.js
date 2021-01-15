var dimensiSatu = dimensi;
document.getElementById("textMatrix").innerHTML = "<p>Masukan nilai matrix 1</p>";
for (var r = 0; r < parseInt(dimensiSatu, 10); r++) {
    var x = document.getElementById('textMatrix').insertRow(r);
    var y = x.insertCell(c);
    y.innerHTML = "<input type='number' id='matrix1"+String(c)+String(r)+"'><input>"
}
