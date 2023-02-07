//  menghitung volume balok

function HitunglahVolumeDanLuasPermukaanBalok(panjang, lebar, tinggi) {
    let volume = panjang + lebar + tinggi
    return volume
}

let HasilVolume = (HitunglahVolumeDanLuasPermukaanBalok(10, 10, 5))
document.write ('<br>' +'Volume : ' + HasilVolume + '<br>');


// menghitung luas permukaan balok

function HitunglahVolumeDanLuasPermukaanBalok(panjang, lebar, tinggi) {
    let luas = (panjang * lebar) + (panjang * tinggi) +(lebar * tinggi)
    return luas
}

let hasilluas = (HitunglahVolumeDanLuasPermukaanBalok(10, 10, 5) * 2)
document.write ('Luas Permukaan : ' + hasilluas);

