(() => { let e = [{ country: "EG", arabicName: "القاهرة", name: "Al Qāhirah" }, { country: "SA", arabicName: "مكة", name: "Makkah al Mukarramah" }, { country: "SA", arabicName: "جازان", name: "Jāzān" }, { country: "US", arabicName: "امريكا", name: "TEXAS" }]; for (let a of e) { const e = `<option>${a.arabicName}</option>`; document.getElementById("cities-select").innerHTML += e } function a(e, a) { let n = { country: e, city: a }; axios.get("http://api.aladhan.com/v1/timingsByCity", { params: n }).then((function (e) { const a = e.data.data.timings, n = e.data.data.date.readable, i = e.data.data.date.hijri.weekday.ar; t("fajr-time", a.Fajr), t("sunrise-time", a.Sunrise), t("dhuhr-time", a.Dhuhr), t("asr-time", a.Asr), t("maghrib-time", a.Maghrib), t("isha-time", a.Isha), document.getElementById("today-date").innerHTML = `${i} ${n}` })).catch((function (e) { console.log(e) })) } function t(e, a) { document.getElementById(e).innerHTML = a } document.getElementById("cities-select").addEventListener("change", (function () { document.getElementById("city-name").innerHTML = this.value; let t = "", n = ""; for (let a of e) a.arabicName === this.value && (t = a.name, n = a.country); a(n, t), console.log(this.value), console.log(t), console.log(n) })), a("EG", "Al Qāhirah") })();