function confirmOrder() {
    let name = document.getElementById("customerName").value;
    let phone = document.getElementById("customerPhone").value;
    let language = document.getElementById("language").value;
    let teacher = document.getElementById("teacher").value;
    let courseType = document.getElementById("courseType").value;
    let schedule = document.getElementById("schedule").value;
    let times = getSelectedTimes().join(", ");
    let price = document.getElementById("priceAmount").innerText;

    fetch("https://sheetdb.io/api/v1/07hox5ay7i4c5", { 
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            data: [{
                "Ad və Soyad": name,
                "Telefon": phone,
                "Dil": language,
                "Müəllim": teacher,
                "Kurs": courseType,
                "Cədvəl": schedule,
                "Vaxtlar": times,
                "Qiymət": price
            }]
        })
    }).then(response => {
        if(response.ok){
            alert("Sifariş uğurla göndərildi!");
            closeOrderModal();
        } else {
            alert("Xəta baş verdi. Zəhmət olmasa yenidən cəhd edin.");
        }
    });
}