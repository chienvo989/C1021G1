
function doiTien() {
    let tienT1 = document.getElementById("tienTe1").value
    let tienT2 = document.getElementById("tienTe2").value
    let nhapTien = parseInt(document.getElementById("abc").value);
    if (tienT1 === tienT2) {
        document.getElementById('ketQua').innerText = nhapTien;
    }
    if (tienT1 === "VND" && tienT2 === "USD") {
        document.getElementById('ketQua').innerText = nhapTien / 23000;
    }
    if (tienT1 === "VND" && tienT2 === "Yuan") {
        document.getElementById('ketQua').innerText = nhapTien / 35;
    }
    if (tienT1 === "USD" && tienT2 === "VND") {
        document.getElementById('ketQua').innerText = nhapTien * 23000;

    }
    if (tienT1 === "USD" && tienT2 === "Yuan") {
        document.getElementById('ketQua').innerText = nhapTien * 6405 ;
    }
    if (tienT1 === "Yuan" && tienT2 === "VND") {
        document.getElementById('ketQua').innerText = nhapTien * 3580;
    }
    if (tienT1 ==="Yuan" && tienT2 === "USD") {
        document.getElementById('ketQua').innerText = nhapTien * 0.1564;

    }

}