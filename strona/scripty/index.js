

// ---------------------------------------------
//                 GŁÓWNA
// ---------------------------------------------


let z1 = document.getElementById("prz")
let z2 = document.getElementById('prz2')
let z3 = document.getElementById('prz3')
let z4 = document.getElementById('prz4')
let z5 = document.getElementById("ikona")
let z6 = document.getElementById("ikona2")
let z7 = document.getElementById("ikona3")
let z8 = document.getElementById("ikona4")
let z9 = document.getElementById("tekst1")
let z10 = document.getElementById("tekst2")
let z11 = document.getElementById("tekst3")
let z12 = document.getElementById("tekst4")
let z13 = document.querySelector("#logo")
let te = document.querySelector(".przycisk4")
let licznikkoszyka = document.querySelector("#koszykcount")
let stopka = document.getElementById("stopka")
z13.addEventListener("click", przeniesienie1)
function przeniesienie1() {
    rzeczy.style.display = "flex"
    powerbank1.style.display = "none"
    powerbank2.style.display = "none"
    powerbank3.style.display = "none"
    powerbank4.style.display = "none"
    powerbank5.style.display = "none"
    powerbank6.style.display = "none"
    powerbank7.style.display = "none"
    powerbank8.style.display = "none"
    document.title = "Chargite"
    z34.value = ""
    z34.value = ""
    z30.value = ""
    z30.value = ""
    alert2.textContent = ""
    alert2.textContent = ""
    z37.value = ""
    z37.value = ""
    z41.value = ""
    z41.value = ""
    z42.value = ""
    z42.value = ""
    z44.textContent = ""
    z44.textContent = ""
    z37.type = "password"
    z37.type = "password"
    z38.style.visibility = "visible"
    z38.style.visibility = "visible"
    z39.style.visibility = "hidden"
    z39.style.visibility = "hidden"
    z30.type = "password"
    z30.type = "password"
    z31.style.visibility = "visible"
    z32.style.visibility = "hidden"
    z47.value = ""
    z49.value = ""
    z45.value = ""
    ma.value = ""
    z51.textContent = ""
    z48.textContent = 555
    tresc.style.display = "flex"
    stopka.style.display = "flex"
}
z1.addEventListener("mousemove", hov)
z1.addEventListener("mouseleave", hov2)
z2.addEventListener("mousemove", hov3)
z2.addEventListener("mouseleave", hov4)
z3.addEventListener("mousemove", hov5)
z3.addEventListener("mouseleave", hov6)
z4.addEventListener("mousemove", hov7)
z4.addEventListener("mouseleave", hov8)
function hov() {
    z1.style.width = "280px"
    z5.style.left = "-10px"
    z9.style.opacity = "1"
    z9.style.transitionDelay = "0.3s"
    z9.style.paddingLeft = "20px"
    z9.style.fontWeight = "bolder"
    licznikkoszyka.style.right = "565px"
    licznikkoszyka.style.transition = "ease-in-out 0.7s"
}
function hov2() {
    z1.style.width = "200px"
    z5.style.left = "-75px"
    z9.style.opacity = "0"
    z9.style.transitionDelay = "0s"
    z9.style.paddingLeft = "0"
    licznikkoszyka.style.right = "590px"
    licznikkoszyka.style.transition = "ease-in-out 0.7s"
}
function hov3() {
    z2.style.width = "280px"
    z6.style.left = "-20px"
    z10.style.opacity = "1"
    z10.style.transitionDelay = "0.3s"
    z10.style.paddingLeft = "12px"
    z10.style.fontWeight = "bolder"
    licznikkoszyka.style.right = "565px"
    licznikkoszyka.style.transition = "ease-in-out 0.7s"
}
function hov4() {
    z2.style.width = "200px"
    z6.style.left = "-70px"
    z10.style.opacity = "0"
    z10.style.transitionDelay = "0s"
    z10.style.paddingLeft = "0"
    licznikkoszyka.style.right = "590px"
    licznikkoszyka.style.transition = "ease-in-out 0.7s"
}
function hov5() {
    z3.style.width = "280px"
    z7.style.left = "-30px"
    z11.style.opacity = "1"
    z11.style.transitionDelay = "0.3s"
    z11.style.paddingLeft = "20px"
    z11.style.fontWeight = "bolder"
    licznikkoszyka.style.right = "535px"
    licznikkoszyka.style.transition = "ease-in-out 1s"
}
function hov6() {
    z3.style.width = "200px"
    z7.style.left = "-75px"
    z11.style.opacity = "0"
    z11.style.transitionDelay = "0s"
    z11.style.paddingLeft = "0"
    licznikkoszyka.style.right = "590px"
    licznikkoszyka.style.transition = "ease-in-out 1s"
}
function hov7() {
    z4.style.width = "280px"
    z8.style.left = "-10px"
    z12.style.opacity = "1"
    z12.style.transitionDelay = "0.3s"
    z12.style.paddingLeft = "20px"
    z12.style.fontWeight = "bolder"
    licznikkoszyka.style.right = "645px"
    licznikkoszyka.style.transition = "ease-in-out 0.7s"
}
function hov8() {
    z4.style.width = "200px"
    z8.style.left = "-65px"
    z12.style.opacity = "0"
    z12.style.transitionDelay = "0s"
    z12.style.paddingLeft = "0"
    licznikkoszyka.style.right = "590px"
    licznikkoszyka.style.transition = "ease-in-out 0.7s"
}
function hoverdlawylog() {
    z4.style.width = "200px"
    z8.style.left = "-80px"
    z12.style.opacity = "0"
    z12.style.transitionDelay = "0s"
    z12.style.paddingLeft = "0"
    licznikkoszyka.style.right = "590px"
    licznikkoszyka.style.transition = "ease-in-out 0.7s"
}










// ---------------------------------------------
//                 KOSZYK OPEN
// ---------------------------------------------









let shopping = document.getElementById("koszykk")
z3.addEventListener("click", link4)
function link4() {
    shopping.style.top = "0"
    tresc.style.display = "none"
}
let closecart = document.querySelector("#zamknij")
closecart.addEventListener("click", zniesieniekoszyka)
function zniesieniekoszyka() {
    shopping.style.top = "-100%"
    if(powerbank1.style.display == "flex" || powerbank2.style.display == "flex" || powerbank3.style.display == "flex" || powerbank4.style.display == "flex" || powerbank5.style.display == "flex" || powerbank6.style.display == "flex" || powerbank7.style.display == "flex" || powerbank8.style.display == "flex"){
        tresc.style.display = "none"
    }
    else{
        tresc.style.display = "flex"
    }
}










// ---------------------------------------------
//            KONIEC KOSZYKA OPEN
// ---------------------------------------------









z1.addEventListener("click", link2)
function link2() {
    rzeczy.style.display = "flex"
    powerbank1.style.display = "none"
    powerbank2.style.display = "none"
    powerbank3.style.display = "none"
    powerbank4.style.display = "none"
    powerbank5.style.display = "none"
    powerbank6.style.display = "none"
    powerbank7.style.display = "none"
    powerbank8.style.display = "none"
    z34.value = ""
    z34.value = ""
    z30.value = ""
    z30.value = ""
    alert2.textContent = ""
    alert2.textContent = ""
    z37.value = ""
    z37.value = ""
    z41.value = ""
    z41.value = ""
    z42.value = ""
    z42.value = ""
    z44.textContent = ""
    z44.textContent = ""
    z37.type = "password"
    z37.type = "password"
    z38.style.visibility = "visible"
    z38.style.visibility = "visible"
    z39.style.visibility = "hidden"
    z39.style.visibility = "hidden"
    z30.type = "password"
    z30.type = "password"
    z31.style.visibility = "visible"
    z32.style.visibility = "hidden"
    z47.value = ""
    z49.value = ""
    z45.value = ""
    ma.value = ""
    z51.textContent = ""
    z48.textContent = 555
    document.title = "Chargite"
    tresc.style.display = "flex"
    stopka.style.display = "flex"
}

let z14 = document.getElementById("logo1")
let z15 = document.getElementById("obraz1")
z15.addEventListener("mousemove", hoveritema)
z15.addEventListener("mouseleave", hoveritema2)
function hoveritema() {
    z14.style.width = "280px"
    z14.style.height = "300px"
    z15.style.top = "-300px"
    z14.style.top = "-30px"
}
function hoveritema2() {
    z14.style.width = "220px"
    z14.style.height = "240px"
    z15.style.top = "-230px"
    z14.style.top = "0px"
}
let rzeczy = document.querySelector(".main1")
let powerbank1 = document.querySelector(".powerbank1")
z15.addEventListener("click", przeniesienie)
function przeniesienie() {
    rzeczy.style.display = "none"
    powerbank1.style.display = "flex"
    powerbank2.style.display = "none"
    powerbank3.style.display = "none"
    powerbank4.style.display = "none"
    powerbank5.style.display = "none"
    powerbank6.style.display = "none"
    powerbank7.style.display = "none"
    powerbank8.style.display = "none"
    tresc.style.display = "none"
    document.title = "Chargite -> Baseus Powerbank 30000mAh 20W"
    z56.style.border = "2px solid #5acf4a"
    z57.style.border = "2px solid white"
    z58.style.border = "2px solid white"
    z59.style.border = "2px solid white"
    z60.style.top = "35px"
    z60.src = z56.src
    stopka.style.display = "none"
}
let z16 = document.getElementById("logo2")
let z17 = document.getElementById("obraz2")
z17.addEventListener("mousemove", hoveritema3)
z17.addEventListener("mouseleave", hoveritema4)
function hoveritema3() {
    z16.style.width = "280px"
    z16.style.height = "300px"
    z17.style.top = "-300px"
    z16.style.top = "-30px"
}
function hoveritema4() {
    z16.style.width = "220px"
    z16.style.height = "240px"
    z17.style.top = "-230px"
    z16.style.top = "0px"
}
let powerbank2 = document.querySelector(".powerbank2")
z17.addEventListener("click", przeniesienie2)
function przeniesienie2() {
    rzeczy.style.display = "none"
    powerbank2.style.display = "flex"
    powerbank1.style.display = "none"
    powerbank3.style.display = "none"
    powerbank4.style.display = "none"
    powerbank5.style.display = "none"
    powerbank6.style.display = "none"
    powerbank7.style.display = "none"
    powerbank8.style.display = "none"
    tresc.style.display = "none"
    document.title = "Chargite -> FIXED MagZen black"
    z65.style.border = "2px solid #5acf4a"
    z66.style.border = "2px solid white"
    z67.style.border = "2px solid white"
    z68.style.border = "2px solid white"
    z69.style.top = "35px"
    z69.src = z65.src
    stopka.style.display = "none"
}
let z18 = document.getElementById("logo3")
let z19 = document.getElementById("obraz3")
z19.addEventListener("mousemove", hoveritema5)
z19.addEventListener("mouseleave", hoveritema6)
function hoveritema5() {
    z18.style.width = "280px"
    z18.style.height = "300px"
    z19.style.top = "-300px"
    z18.style.top = "-30px"
}
function hoveritema6() {
    z18.style.width = "220px"
    z18.style.height = "240px"
    z19.style.top = "-230px"
    z18.style.top = "0px"
}
let powerbank3 = document.querySelector(".powerbank3")
z19.addEventListener("click", przeniesienie3)
function przeniesienie3() {
    rzeczy.style.display = "none"
    powerbank1.style.display = "none"
    powerbank2.style.display = "none"
    powerbank3.style.display = "flex"
    powerbank4.style.display = "none"
    powerbank5.style.display = "none"
    powerbank6.style.display = "none"
    powerbank7.style.display = "none"
    powerbank8.style.display = "none"
    tresc.style.display = "none"
    document.title = "Chargite -> Baseus Adaman2 10000mAh (30W, USB-C)"
    z73.style.border = "2px solid #5acf4a"
    z74.style.border = "2px solid white"
    z75.style.border = "2px solid white"
    z76.style.border = "2px solid white"
    z77.style.top = "35px"
    z77.src = z73.src
    stopka.style.display = "none"
}
let z20 = document.getElementById("logo4")
let z21 = document.getElementById("obraz4")
z21.addEventListener("mousemove", hoveritema7)
z21.addEventListener("mouseleave", hoveritema8)
function hoveritema7() {
    z20.style.width = "280px"
    z20.style.height = "300px"
    z21.style.top = "-300px"
    z20.style.top = "-30px"
}
function hoveritema8() {
    z20.style.width = "220px"
    z20.style.height = "240px"
    z21.style.top = "-230px"
    z20.style.top = "0px"
}
let powerbank4 = document.querySelector(".powerbank4")
z21.addEventListener("click", przeniesienie4)
function przeniesienie4() {
    rzeczy.style.display = "none"
    powerbank1.style.display = "none"
    powerbank2.style.display = "none"
    powerbank3.style.display = "none"
    powerbank4.style.display = "flex"
    powerbank5.style.display = "none"
    powerbank6.style.display = "none"
    powerbank7.style.display = "none"
    powerbank8.style.display = "none"
    tresc.style.display = "none"
    document.title = "Chargite -> Baseus Powerbank Bipower Pro 10000mAh"
    z81.style.border = "2px solid #5acf4a"
    z82.style.border = "2px solid white"
    z83.style.border = "2px solid white"
    z84.style.border = "2px solid white"
    z85.style.top = "35px"
    z85.src = z81.src
    stopka.style.display = "none"
}
let z22 = document.getElementById("logo5")
let z23 = document.getElementById("obraz5")
z23.addEventListener("mousemove", hoveritema9)
z23.addEventListener("mouseleave", hoveritema10)
function hoveritema9() {
    z22.style.width = "280px"
    z22.style.height = "300px"
    z23.style.top = "-280px"
    z22.style.top = "-30px"
}
function hoveritema10() {
    z22.style.width = "220px"
    z22.style.height = "240px"
    z23.style.top = "-210px"
    z22.style.top = "0px"
}
let powerbank5 = document.querySelector(".powerbank5")
z23.addEventListener("click", przeniesienie5)
function przeniesienie5() {
    rzeczy.style.display = "none"
    powerbank1.style.display = "none"
    powerbank2.style.display = "none"
    powerbank3.style.display = "none"
    powerbank4.style.display = "none"
    powerbank5.style.display = "flex"
    powerbank6.style.display = "none"
    powerbank7.style.display = "none"
    powerbank8.style.display = "none"
    tresc.style.display = "none"
    document.title = "Chargite -> Green Cell PowerPlay20 20000mAh"
    z89.style.border = "2px solid #5acf4a"
    z90.style.border = "2px solid white"
    z91.style.border = "2px solid white"
    z92.style.border = "2px solid white"
    z93.style.top = "115px"
    z93.src = z89.src
    stopka.style.display = "none"
}
let z24 = document.getElementById("logo6")
let z25 = document.getElementById("obraz6")
z25.addEventListener("mousemove", hoveritema11)
z25.addEventListener("mouseleave", hoveritema12)
function hoveritema11() {
    z24.style.width = "280px"
    z24.style.height = "300px"
    z25.style.top = "-300px"
    z24.style.top = "-30px"
}
function hoveritema12() {
    z24.style.width = "220px"
    z24.style.height = "240px"
    z25.style.top = "-230px"
    z24.style.top = "0px"
}
let powerbank6 = document.querySelector(".powerbank6")
z25.addEventListener("click", przeniesienie6)
function przeniesienie6() {
    rzeczy.style.display = "none"
    powerbank1.style.display = "none"
    powerbank2.style.display = "none"
    powerbank3.style.display = "none"
    powerbank4.style.display = "none"
    powerbank5.style.display = "none"
    powerbank6.style.display = "flex"
    powerbank7.style.display = "none"
    powerbank8.style.display = "none"
    tresc.style.display = "none"
    document.title = "Chargite -> Baseus Powerbank Magnetic 10000mAh 20W"
    z97.style.border = "2px solid #5acf4a"
    z98.style.border = "2px solid white"
    z99.style.border = "2px solid white"
    z100.style.border = "2px solid white"
    z101.style.top = "75px"
    z101.src = z97.src
    stopka.style.display = "none"
}
let z26 = document.getElementById("logo7")
let z27 = document.getElementById("obraz7")
z27.addEventListener("mousemove", hoveritema13)
z27.addEventListener("mouseleave", hoveritema14)
function hoveritema13() {
    z26.style.width = "280px"
    z26.style.height = "300px"
    z27.style.top = "-300px"
    z26.style.top = "-30px"
}
function hoveritema14() {
    z26.style.width = "220px"
    z26.style.height = "240px"
    z27.style.top = "-230px"
    z26.style.top = "0px"
}
let powerbank7 = document.querySelector(".powerbank7")
z27.addEventListener("click", przeniesienie7)
function przeniesienie7() {
    rzeczy.style.display = "none"
    powerbank1.style.display = "none"
    powerbank2.style.display = "none"
    powerbank3.style.display = "none"
    powerbank4.style.display = "none"
    powerbank5.style.display = "none"
    powerbank6.style.display = "none"
    powerbank7.style.display = "flex"
    powerbank8.style.display = "none"
    tresc.style.display = "none"
    document.title = "Chargite -> JoyRoom 20000mAh Dazzling Series 22.5W"
    z105.style.border = "2px solid #5acf4a"
    z106.style.border = "2px solid white"
    z107.style.border = "2px solid white"
    z108.style.border = "2px solid white"
    z109.style.top = "75px"
    z109.src = z105.src
    stopka.style.display = "none"
}
let z28 = document.getElementById("logo8")
let z29 = document.getElementById("obraz8")
z29.addEventListener("mousemove", hoveritema15)
z29.addEventListener("mouseleave", hoveritema16)
function hoveritema15() {
    z28.style.width = "280px"
    z28.style.height = "300px"
    z29.style.top = "-300px"
    z28.style.top = "-30px"
}
function hoveritema16() {
    z28.style.width = "220px"
    z28.style.height = "240px"
    z29.style.top = "-220px"
    z28.style.top = "0px"
}
let powerbank8 = document.querySelector(".powerbank8")
z29.addEventListener("click", przeniesienie8)
function przeniesienie8() {
    rzeczy.style.display = "none"
    powerbank1.style.display = "none"
    powerbank2.style.display = "none"
    powerbank3.style.display = "none"
    powerbank4.style.display = "none"
    powerbank5.style.display = "none"
    powerbank6.style.display = "none"
    powerbank7.style.display = "none"
    powerbank8.style.display = "flex"
    tresc.style.display = "none"
    document.title = "Chargite -> ExtraLink EPB-069 30000MAH FAST CHARGING"
    z113.style.border = "2px solid #5acf4a"
    z114.style.border = "2px solid white"
    z115.style.border = "2px solid white"
    z116.style.border = "2px solid white"
    z117.style.top = "75px"
    z117.src = z113.src
    stopka.style.display = "none"
}
let rejestracja1 = document.querySelector(".calarejestracja")
z4.addEventListener("click", link)
function link() {
    rejestracja1.style.display = "block"
    z37.value = ""
    z41.value = ""
    z42.value = ""
    z44.textContent = ""
    document.title = "Chargite -> Rejestracja"
    powerbank1.style.display = "none"
    powerbank2.style.display = "none"
    powerbank3.style.display = "none"
    powerbank4.style.display = "none"
    powerbank5.style.display = "none"
    powerbank6.style.display = "none"
    powerbank7.style.display = "none"
    powerbank8.style.display = "none"
    alert1.textContent = ""
    z34.value = ""
    z30.value = ""
    alert2.textContent = ""
    z37.value = ""
    z41.value = ""
    z42.value = ""
    z44.textContent = ""
    z37.type = "password"
    z38.style.visibility = "visible"
    z39.style.visibility = "hidden"
    z30.type = "password"
    z31.style.visibility = "visible"
    z32.style.visibility = "hidden"
    z47.value = ""
    z49.value = ""
    z45.value = ""
    ma.value = ""
    z51.textContent = ""
    z48.textContent = 555
    tresc.style.display = "none"
    stopka.style.display = "none"
}
let pro = document.querySelector(".calyproblem")
z2.addEventListener("click", link3)
function link3() {
    pro.style.display = "block"
    z47.value = ""
    z49.value = ""
    z45.value = ""
    z51.textContent = ""
    z48.textContent = 555
    document.title = "Chargite -> Zgłoś problem"
    powerbank1.style.display = "none"
    powerbank2.style.display = "none"
    powerbank3.style.display = "none"
    powerbank4.style.display = "none"
    powerbank5.style.display = "none"
    powerbank6.style.display = "none"
    powerbank7.style.display = "none"
    powerbank8.style.display = "none"
    alert1.textContent = ""
    z34.value = ""
    z30.value = ""
    alert2.textContent = ""
    z37.value = ""
    z41.value = ""
    z42.value = ""
    z44.textContent = ""
    z37.type = "password"
    z38.style.visibility = "visible"
    z39.style.visibility = "hidden"
    z30.type = "password"
    z31.style.visibility = "visible"
    z32.style.visibility = "hidden"
    z47.value = ""
    z49.value = ""
    z45.value = ""
    ma.value = ""
    z51.textContent = ""
    z48.textContent = 555
    tresc.style.display = "none"
    stopka.style.display = "none"
}
let licznik = 0
function liczenie() {
    licznik += 1
    licznikkoszyka.innerHTML = licznik
}
function liczenie2() {

    licznik -= 1
    licznikkoszyka.innerHTML = licznik
}
let strzalka1 = document.querySelector(".left-arrow")
strzalka1.addEventListener("click", function strzal() {
    rejestracja1.style.display = "none"
    document.title = "Chargite"
    rzeczy.style.display = "flex"
    powerbank1.style.display = "none"
    powerbank2.style.display = "none"
    powerbank3.style.display = "none"
    powerbank4.style.display = "none"
    powerbank5.style.display = "none"
    powerbank6.style.display = "none"
    powerbank7.style.display = "none"
    powerbank8.style.display = "none"
    alert1.textContent = ""
    z34.value = ""
    z30.value = ""
    alert2.textContent = ""
    z37.value = ""
    z41.value = ""
    z42.value = ""
    z44.textContent = ""
    z37.type = "password"
    z38.style.visibility = "visible"
    z39.style.visibility = "hidden"
    z30.type = "password"
    z31.style.visibility = "visible"
    z32.style.visibility = "hidden"
    z47.value = ""
    z49.value = ""
    z45.value = ""
    ma.value = ""
    z51.textContent = ""
    z48.textContent = 555
    tresc.style.display = "flex"
    stopka.style.display = "flex"
})
let log = document.querySelector(".calelogowanie")
let zalog = document.getElementById("zalog")
let strzalka2 = document.querySelector(".left-arrow1")
strzalka2.addEventListener("click", function strzal2() {
    log.style.display = "none"
    document.title = "Chargite"
    rzeczy.style.display = "flex"
    powerbank1.style.display = "none"
    powerbank2.style.display = "none"
    powerbank3.style.display = "none"
    powerbank4.style.display = "none"
    powerbank5.style.display = "none"
    powerbank6.style.display = "none"
    powerbank7.style.display = "none"
    powerbank8.style.display = "none"
    alert1.textContent = ""
    z34.value = ""
    z30.value = ""
    alert2.textContent = ""
    z37.value = ""
    z41.value = ""
    z42.value = ""
    z44.textContent = ""
    z37.type = "password"
    z38.style.visibility = "visible"
    z39.style.visibility = "hidden"
    z30.type = "password"
    z31.style.visibility = "visible"
    z32.style.visibility = "hidden"
    z47.value = ""
    z49.value = ""
    z45.value = ""
    ma.value = ""
    z51.textContent = ""
    z48.textContent = 555
    tresc.style.display = "flex"
    stopka.style.display = "flex"
})
let strzalka3 = document.querySelector(".left-arrow2")
strzalka3.addEventListener("click", function strzal3() {
    pro.style.display = "none"
    document.title = "Chargite"
    rzeczy.style.display = "flex"
    powerbank1.style.display = "none"
    powerbank2.style.display = "none"
    powerbank3.style.display = "none"
    powerbank4.style.display = "none"
    powerbank5.style.display = "none"
    powerbank6.style.display = "none"
    powerbank7.style.display = "none"
    powerbank8.style.display = "none"
    alert1.textContent = ""
    z34.value = ""
    z30.value = ""
    alert2.textContent = ""
    z37.value = ""
    z41.value = ""
    z42.value = ""
    z44.textContent = ""
    z37.type = "password"
    z38.style.visibility = "visible"
    z39.style.visibility = "hidden"
    z30.type = "password"
    z31.style.visibility = "visible"
    z32.style.visibility = "hidden"
    z47.value = ""
    z49.value = ""
    z45.value = ""
    ma.value = ""
    z51.textContent = ""
    z48.textContent = 555 
    tresc.style.display = "flex"
    stopka.style.display = "flex"
})
let ma = document.getElementById("mai2")
zalog.addEventListener("click", function klik() {
    document.title = "Chargite -> Logowanie"
    log.style.display = "block"
    rejestracja1.style.display = "none"
    alert1.textContent = ""
    z34.value = ""
    z30.value = ""
    alert2.textContent = ""
    z37.value = ""
    z41.value = ""
    z42.value = ""
    z44.textContent = ""
    z37.type = "password"
    z38.style.visibility = "visible"
    z39.style.visibility = "hidden"
    z30.type = "password"
    z31.style.visibility = "visible"
    z32.style.visibility = "hidden"
    z47.value = ""
    z49.value = ""
    z45.value = ""
    ma.value = ""
    z51.textContent = ""
    z48.textContent = 555
    tresc.style.display = "none"
    stopka.style.display = "none"
}
)

let reje = document.getElementById("reje")
reje.addEventListener("click", function klik() {
    document.title = "Chargite -> Rejestracja"
    log.style.display = "none"
    rejestracja1.style.display = "block"
    alert1.textContent = ""
    z34.value = ""
    z30.value = ""
    alert2.textContent = ""
    z37.value = ""
    z41.value = ""
    z42.value = ""
    z44.textContent = ""
    z37.type = "password"
    z38.style.visibility = "visible"
    z39.style.visibility = "hidden"
    z30.type = "password"
    z31.style.visibility = "visible"
    z32.style.visibility = "hidden"
    z47.value = ""
    z49.value = ""
    z45.value = ""
    ma.value = ""
    z51.textContent = ""
    z48.textContent = 555
    
}
)





// ---------------------------------------------
//                 LOGOWANIE
// ---------------------------------------------






let z30 = document.getElementById("hasloo")
let z31 = document.getElementById("okozam1")
let z32 = document.getElementById("okoot1")
function zmiana1() {
    z30.type = "text"
    z31.style.visibility = "hidden"
    z32.style.visibility = "visible"
};
function zmiana3() {
    z30.type = "password"
    z31.style.visibility = "visible"
    z32.style.visibility = "hidden"
}
z31.addEventListener("click", zmiana1)
z32.addEventListener("click", zmiana3)
let z33 = document.getElementById("sign-up1")
let z34 = document.getElementById("nazwa1")

function hov9() {
    z33.style.boxShadow = "0 0 200px 0 #4acfb9"
}
function hov10() {
    z33.style.boxShadow = "0 0 100px 0 #0182cc"
}
function hov11() {
    z30.style.background = "#5bffe4"
    z30.style.border = "1px #5bffe4 solid"
    z30.style.boxShadow = "0 0 20px 0 rgba(0, 0, 0, 0.404)"
}
function hov12() {
    z30.style.background = "none"
    z30.style.border = "1px #4acfb9 solid"
    z30.style.boxShadow = "none"
}
function hov13() {
    z34.style.background = "#5bffe4"
    z34.style.border = "1px #5bffe4 solid"
    z34.style.boxShadow = "0 0 20px 0 rgba(0, 0, 0, 0.404)"
}
function hov14() {
    z34.style.background = "none"
    z34.style.border = "1px #4acfb9 solid"
    z34.style.boxShadow = "none"
}
function hoverdlamai1() {
    ma.style.background = "#5bffe4"
    ma.style.border = "1px #5bffe4 solid"
    ma.style.boxShadow = "0 0 20px 0 rgba(0, 0, 0, 0.404)"
}
function hoverdlamai2() {
    ma.style.background = "none"
    ma.style.border = "1px #4acfb9 solid"
    ma.style.boxShadow = "none"
}
z34.addEventListener("mousemove", hov9)
z34.addEventListener("mouseleave", hov10)
z34.addEventListener("focusin", hov9)
z34.addEventListener("focusout", hov10)

z30.addEventListener("mousemove", hov9)
z30.addEventListener("mouseleave", hov10)
z30.addEventListener("focusin", hov9)
z30.addEventListener("focusout", hov10)

ma.addEventListener("mousemove", hov9)
ma.addEventListener("mouseleave", hov10)
ma.addEventListener("focusin", hov9)
ma.addEventListener("focusout", hov10)


ma.addEventListener("mousemove", hoverdlamai1)
ma.addEventListener("mouseleave", hoverdlamai2)
ma.addEventListener("focusin", hoverdlamai1)
ma.addEventListener("focusout", hoverdlamai2)

z34.addEventListener("mousemove", hov13)
z34.addEventListener("mouseleave", hov14)
z34.addEventListener("focusin", hov13)
z34.addEventListener("focusout", hov14)

z30.addEventListener("mousemove", hov11)
z30.addEventListener("mouseleave", hov12)
z30.addEventListener("focusin", hov11)
z30.addEventListener("focusout", hov12)

let z35 = document.getElementById("przyc1")
z35.addEventListener("click", rejestracja)
let z36 = document.getElementById("alert1")

function rejestracja() {

    if (z34.value.length == 0) {
        z36.textContent = "Nazwa musi być uzupełniona."
    }
    else if (ma.value.length == 0) {
        z36.textContent = "Mail musi być uzupełniony."
    }
    else if (z30.value.length == 0) {
        z36.textContent = "Hasło musi być uzupełnione."
    }
    else if (z30.value.length > 0 && z34.value.length > 0 && ma.value.length > 0) {

        if (z34.value == localStorage.getItem("nazwa") && z30.value == localStorage.getItem("haslo") && ma.value == localStorage.getItem("mail")) {
            log.style.display = "none"
            z12.textContent = "WYLOGUJ"
            z4.addEventListener("click", wyloguj)
            z4.removeEventListener("click", link)
            z8.style.left = "-80px"
            z4.removeEventListener("mouseleave", hov8)
            z4.addEventListener("mouseleave", hoverdlawylog)
            document.title = "Chargite"
            alert1.textContent = ""
            z34.value = ""
            z30.value = ""
            alert2.textContent = ""
            z37.value = ""
            z41.value = ""
            z42.value = ""
            z44.textContent = ""
            z37.type = "password"
            z38.style.visibility = "visible"
            z39.style.visibility = "hidden"
            z30.type = "password"
            z31.style.visibility = "visible"
            z32.style.visibility = "hidden"
            z47.value = ""
            z49.value = ""
            z45.value = ""
            ma.value = ""
            z51.textContent = ""
            z48.textContent = 555
            tresc.style.display = "flex"
            stopka.style.display = "flex"
        }
        else {
            z36.textContent = "Nie ma takiego konta"
        }
    }
}
function wyloguj() {
    z12.textContent = "KONTO"
    z4.addEventListener("mouseleave", hov8)
    z4.addEventListener("click", link)
    z8.id = "ikona4"
    z8.style.left = "-65px"
}






// ---------------------------------------------
//                 REJESTRACJA
// ---------------------------------------------





let z37 = document.getElementById("haslo")
let z38 = document.getElementById("okozam")
let z39 = document.getElementById("okoot")
function zmiana() {
    z37.type = "text"
    z38.style.visibility = "hidden"
    z39.style.visibility = "visible"
};

function zmiana2() {
    z37.type = "password"
    z38.style.visibility = "visible"
    z39.style.visibility = "hidden"
}
z38.addEventListener("click", zmiana)
z39.addEventListener("click", zmiana2)
let z40 = document.getElementById("sign-up")
let z41 = document.getElementById("nazwa")
let z42 = document.getElementById("mai")

function hov15() {
    z40.style.boxShadow = "0 0 200px 0 #6fff5c"
}
function hov16() {
    z40.style.boxShadow = "0 0 100px 0 #01cc8f"
}
function hov17() {
    z37.style.background = "#6fff5c"
    z37.style.border = "1px #6fff5c solid"
    z37.style.boxShadow = "0 0 20px 0 rgba(0, 0, 0, 0.404)"
}
function hov18() {
    z37.style.background = "none"
    z37.style.border = "1px #83f441 solid"
    z37.style.boxShadow = "none"
}
function hov19() {
    z41.style.background = "#6fff5c"
    z41.style.border = "1px #6fff5c solid"
    z41.style.boxShadow = "0 0 20px 0 rgba(0, 0, 0, 0.404)"
}
function hov20() {
    z41.style.background = "none"
    z41.style.border = "1px #83f441 solid"
    z41.style.boxShadow = "none"
}
function hov21() {
    z42.style.background = "#6fff5c"
    z42.style.border = "1px #6fff5c solid"
    z42.style.boxShadow = "0 0 20px 0 rgba(0, 0, 0, 0.404)"
}
function hov22() {
    z42.style.background = "none"
    z42.style.border = "1px #83f441 solid"
    z42.style.boxShadow = "none"
}
z41.addEventListener("mousemove", hov15)
z41.addEventListener("mouseleave", hov16)
z41.addEventListener("focusin", hov15)
z41.addEventListener("focusout", hov16)

z42.addEventListener("mousemove", hov15)
z42.addEventListener("mouseleave", hov16)
z42.addEventListener("focusin", hov15)
z42.addEventListener("focusout", hov16)

z37.addEventListener("mousemove", hov15)
z37.addEventListener("mouseleave", hov16)
z37.addEventListener("focusin", hov15)
z37.addEventListener("focusout", hov16)

z37.addEventListener("mousemove", hov17)
z37.addEventListener("mouseleave", hov18)
z37.addEventListener("focusin", hov17)
z37.addEventListener("focusout", hov18)

z41.addEventListener("mousemove", hov19)
z41.addEventListener("mouseleave", hov20)
z41.addEventListener("focusin", hov19)
z41.addEventListener("focusout", hov20)

z42.addEventListener("mousemove", hov21)
z42.addEventListener("mouseleave", hov22)
z42.addEventListener("focusin", hov21)
z42.addEventListener("focusout", hov22)

let z43 = document.getElementById("przyc")
z43.addEventListener("click", rejestracja2)
let z44 = document.getElementById("alert2")
let googlebtn = document.querySelector(".google-btn")
googlebtn.addEventListener("click", function zalogowanie() {
    rejestracja1.style.display = "none"
    z12.textContent = "WYLOGUJ"
    z4.addEventListener("click", wyloguj)
    z4.removeEventListener("click", link)
    z8.style.left = "-80px"
    z4.removeEventListener("mouseleave", hov8)
    z4.addEventListener("mouseleave", hoverdlawylog)
    document.title = "Chargite"
    tresc.style.display = "flex"
    stopka.style.display = "flex"
})
const znaki = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
const znaki2 = /[@]/;
const znaki3 = /[.]/;
let u
let p
let m

function rejestracja2() {
    if (z41.value.length <= 0) {
        z44.textContent = "Nazwa musi być uzupełniona."
    }
    else if (z41.value.length < 3 && z41.value.length > 0) {
        z44.textContent = "Nazwa jest za krótka."
    }
    else if (z41.value == localStorage.getItem("nazwa")) {
        z44.textContent = "Nazwa już istnieje."
    }
    else if (z42.value.length <= 0) {
        z44.textContent = "Mail musi być uzupełniony."
    }
    else if (znaki2.test(z42.value) == false) {
        z44.textContent = "Mail powinien zawierać znak '@'."
    }
    else if (znaki3.test(z42.value) == false) {
        z44.textContent = "Mail powinien zawierać znak '.'."
    }
    else if (z42.value == localStorage.getItem("mail")) {
        z44.textContent = "Mail już istnieje."
    }
    else if (z37.value.length < 6) {
        z44.textContent = "Hasło jest za krótkie. Hasło powinno mieć przynajmniej 6 znaków."
    }
    else if (znaki.test(z37.value) == false) {
        z44.textContent = "Hasło musi zawierać znaki specjalne."
    }
    else if (z37.value.length > 20) {
        z44.textContent = "Hasło jest za długie. Hasło powinno mieć max 20 znaków."
    }
    else if (z37.value == localStorage.getItem("haslo")) {
        z44.textContent = "Hasło już istnieje."
    }
    else if (z37.value.length <= 20 && z37.value.length >= 6 && znaki.test(z37.value) == true && znaki2.test(z42.value) == true && znaki3.test(z42.value) == true && z41.value.length >= 3 && z41.value !== localStorage.getItem("nazwa") && z42.value !== localStorage.getItem("mail") && z37.value !== localStorage.getItem("haslo")) {
        
        log.style.display = "block"
        rejestracja1.style.display = "none"
        document.title = "Chargite -> Logowanie"
        ma.textContent = ""
        z41.textContent = ""
        z37.textContent = ""
        let uzytkownik = z41.value
        let haselko = z37.value
        let mailik = z42.value
        localStorage.setItem("nazwa", uzytkownik)
        localStorage.setItem("haslo", haselko)
        localStorage.setItem("mail", mailik)
        alert1.textContent = ""
        z34.value = ""
        z34.value = ""
        z30.value = ""
        z30.value = ""
        alert2.textContent = ""
        alert2.textContent = ""
        z37.value = ""
        z37.value = ""
        z41.value = ""
        z41.value = ""
        z42.value = ""
        z42.value = ""
        z44.textContent = ""
        z44.textContent = ""
        z37.type = "password"
        z37.type = "password"
        z38.style.visibility = "visible"
        z38.style.visibility = "visible"
        z39.style.visibility = "hidden"
        z39.style.visibility = "hidden"
        z30.type = "password"
        z30.type = "password"
        z31.style.visibility = "visible"
        z32.style.visibility = "hidden"
        z47.value = ""
        z49.value = ""
        z45.value = ""
        ma.value = ""
        z51.textContent = ""
        z48.textContent = 555
    }
}





// ---------------------------------------------
//                 PROBLEM
// ---------------------------------------------





let z45 = document.getElementById("rodzaj")
let z46 = document.getElementById("warning-up1")
let z47 = document.getElementById("tytul")
let z48 = document.getElementById("iloscznakow")
let z49 = document.querySelector("textarea")
function hov23() {
    z46.style.boxShadow = "0 0 200px 0 #ff6034"
}
function hov24() {
    z46.style.boxShadow = "0 0 100px 0 #ff1100"
}
function hov25() {
    z45.style.background = "#ff6034"
    z45.style.border = "1px #ff6034 solid"
    z45.style.boxShadow = "0 0 20px 0 rgba(0, 0, 0, 0.404)"
}
function hov26() {
    z45.style.background = "none"
    z45.style.border = "1px #ff1100 solid"
    z45.style.boxShadow = "none"
}
function hov27() {
    z47.style.background = "#ff6034"
    z47.style.border = "1px #ff6034 solid"
    z47.style.boxShadow = "0 0 20px 0 rgba(0, 0, 0, 0.404)"
}
function hov28() {
    z47.style.background = "none"
    z47.style.border = "1px #ff1100 solid"
    z47.style.boxShadow = "none"
}
function hov29() {
    z49.style.background = "#ff6034"
    z49.style.border = "1px #ff6034 solid"
    z49.style.boxShadow = "0 0 20px 0 rgba(0, 0, 0, 0.404)"
}
function hov30() {
    z49.style.background = "none"
    z49.style.border = "1px #ff1100 solid"
    z49.style.boxShadow = "none"
}
z47.addEventListener("mousemove", hov23)
z47.addEventListener("mouseleave", hov24)
z47.addEventListener("focusin", hov23)
z47.addEventListener("focusout", hov24)

z45.addEventListener("mousemove", hov23)
z45.addEventListener("mouseleave", hov24)
z45.addEventListener("focusin", hov23)
z45.addEventListener("focusout", hov24)

z47.addEventListener("mousemove", hov27)
z47.addEventListener("mouseleave", hov28)
z47.addEventListener("focusin", hov27)
z47.addEventListener("focusout", hov28)

z45.addEventListener("mousemove", hov25)
z45.addEventListener("mouseleave", hov26)
z45.addEventListener("focusin", hov25)
z45.addEventListener("focusout", hov26)

z49.addEventListener("mousemove", hov23)
z49.addEventListener("mouseleave", hov24)
z49.addEventListener("focusin", hov23)
z49.addEventListener("focusout", hov24)
z49.addEventListener("mousemove", hov29)
z49.addEventListener("mouseleave", hov30)
z49.addEventListener("focusin", hov29)
z49.addEventListener("focusout", hov30)

z49.addEventListener("keyup", znaki4)
let tekst
let ilosc
function znaki4() {
    tekst = z49.value.length
    z48.textContent = 555 - tekst
}
let z50 = document.getElementById("przyc2")
z50.addEventListener("click", rejestracja3)
let z51 = document.getElementById("alert3")
let z52 = document.getElementById("alercik")
let z53 = document.getElementById("czas")
let z54 = document.getElementById("okbtn")
z54.addEventListener("click", klikniecie2)
function klikniecie2() {
    z52.style.top = "-100%"
    z52.style.opacity = "0"
    z47.value = ""
    z49.value = ""
    z45.value = ""
    z51.textContent = ""
    z48.textContent = 555
}
function rejestracja3() {

    if (z47.value.length == 0) {
        z51.textContent = "Tytuł musi być uzupełniony."
    }
    else if (z45.value.length == 0) {
        z51.textContent = "Rodzaj musi być uzupełniony."
    }
    else if (z49.value.length == 0) {
        z51.textContent = "Opis musi być uzupełniony."
    }
    else if (z47.value.length > 0 && z45.value.length > 0 && z49.value.length > 0) {
        z52.style.opacity = "1"
        z52.style.top = "350px"
        let jeden = Math.floor(Math.random(0, 7) * 10)
        z53.textContent = jeden + " dni "
    }
}






// ---------------------------------------------
//                 POWERBANK1
// ---------------------------------------------






let z62 = document.getElementById("right")
let z55 = document.getElementById("left")
let z56 = document.getElementById("scdbank1")
let z57 = document.getElementById("scdbank2")
let z58 = document.getElementById("scdbank3")
let z59 = document.getElementById("scdbank4")
let z60 = document.getElementById("bankmain")

z62.addEventListener("click", slider)
z55.addEventListener("click", slider2)
function slider() {
    if ((z60.src) == z56.src) {
        z60.src = z57.src
        z60.style.top = "65px"
        z57.style.border = "2px solid #5acf4a"
        z56.style.border = "2px solid white"
    }
    else if ((z60.src) == z57.src) {
        z60.src = z58.src
        z60.style.top = "65px"
        z57.style.border = "2px solid white"
        z58.style.border = "2px solid #5acf4a"
    }
    else if ((z60.src) == z58.src) {
        z60.src = z59.src
        z60.style.top = "115px"
        z58.style.border = "2px solid white"
        z59.style.border = "2px solid #5acf4a"
    }
    else if ((z60.src) == z59.src) {
        z60.src = z56.src
        z60.style.top = "35px"
        z59.style.border = "2px solid white"
        z56.style.border = "2px solid #5acf4a"
    }
}
function slider2() {
    if ((z60.src) == z59.src) {
        z60.src = z58.src
        z60.style.top = "65px"
        z59.style.border = "2px solid white"
        z58.style.border = "2px solid #5acf4a"
    }
    else if ((z60.src) == z58.src) {
        z60.src = z57.src
        z60.style.top = "65px"
        z58.style.border = "2px solid white"
        z57.style.border = "2px solid #5acf4a"
    }
    else if ((z60.src) == z57.src) {
        z60.src = z56.src
        z60.style.top = "35px"
        z57.style.border = "2px solid white"
        z56.style.border = "2px solid #5acf4a"
    }
    else if ((z60.src) == z56.src) {
        z60.src = z59.src
        z60.style.top = "115px"
        z56.style.border = "2px solid white"
        z59.style.border = "2px solid #5acf4a"
    }
}
z56.addEventListener("click", zmianka)
function zmianka() {
    z60.src = z56.src
    z60.style.top = "35px"
    z57.style.border = "2px solid white"
    z58.style.border = "2px solid white"
    z59.style.border = "2px solid white"
    z56.style.border = "2px solid #5acf4a"
}
z57.addEventListener("click", zmianka2)
function zmianka2() {
    z60.src = z57.src
    z60.style.top = "65px"
    z56.style.border = "2px solid white"
    z58.style.border = "2px solid white"
    z59.style.border = "2px solid white"
    z57.style.border = "2px solid #5acf4a"
}
z58.addEventListener("click", zmianka3)
function zmianka3() {
    z60.src = z58.src
    z60.style.top = "65px"
    z57.style.border = "2px solid white"
    z56.style.border = "2px solid white"
    z59.style.border = "2px solid white"
    z58.style.border = "2px solid #5acf4a"
}
z59.addEventListener("click", zmianka4)
function zmianka4() {
    z60.src = z59.src
    z60.style.top = "115px"
    z57.style.border = "2px solid white"
    z58.style.border = "2px solid white"
    z56.style.border = "2px solid white"
    z59.style.border = "2px solid #5acf4a"
}
let z61 = document.getElementById("koszyk")
z61.addEventListener("mousemove", hovkoszyka)
z61.addEventListener("mouseleave", hovkoszyka2)
z61.addEventListener("click", clickkoszyka)
z61.addEventListener("click", liczenie)
function hovkoszyka() {
    z61.style.boxShadow = "0 0 25px white"
    z61.style.border = "3px solid white"
    z61.style.letterSpacing = "2px"
    z61.style.color = "white"
}
function hovkoszyka2() {
    z61.style.boxShadow = "none"
    z61.style.background = "none"
    z61.style.border = "3px solid white"
    z61.style.letterSpacing = "0"
    z61.style.color = "white"
}
let section = document.createElement("section")
let paragraf = document.createElement("p")
let paragraf2 = document.createElement("p")
let i = document.createElement("i")
let img = document.createElement("img")
let button = document.createElement("button")
let button2 = document.createElement("button")
let paragraf3 = document.createElement("p")
let i2 = document.createElement("i")
let i3 = document.createElement("i")
let p2 = document.createElement("p")
let tekstdokoszyka
let cenadokoszyka
let iloscdoprzedmiotu
let kontener = document.querySelector(".kontener")
let county = 1
let count
let lacznacena = document.getElementById("lacznacena")
let cena1 = 149
function clickkoszyka() {

    if (section.id !== "powerbankwkoszyku1") {
        tekstdokoszyka = document.createTextNode("Baseus Powerbank 30000mAh 20W")
        cenadokoszyka = document.createTextNode("149.00 ZŁ")
        iloscdoprzedmiotu = document.createTextNode("1")
        paragraf.appendChild(tekstdokoszyka)
        paragraf2.appendChild(cenadokoszyka)
        img.src = "obrazy/powerbank1_1.png"
        i.classList.add("fa-solid", "fa-trash")
        i2.classList.add("fa-solid", "fa-sort-up")
        i3.classList.add("fa-solid", "fa-caret-down")
        p2.appendChild(i)
        button.id = "zwieksz"
        button2.id = "zmniejsz"
        img.classList.add("obrazwkoszyku")
        paragraf3.id = "liczbaprzedmiotow"
        paragraf3.appendChild(iloscdoprzedmiotu)
        button.appendChild(i2)
        button2.appendChild(i3)
        section.appendChild(img)
        section.appendChild(paragraf)
        section.appendChild(paragraf2)
        section.appendChild(button)
        section.appendChild(paragraf3)
        section.appendChild(button2)
        section.appendChild(p2)
        section.classList.add("przedmiotwkoszyku")
        section.id = "powerbankwkoszyku1"
        p2.id = "trash"
        kontener.appendChild(section)
        pustykoszyk()
        lacznacena.innerHTML = parseInt(lacznacena.innerHTML) + 149
        let trash = document.getElementById("trash")
        trash.addEventListener("click", liczenie2)
        trash.addEventListener("click", function smiec() {
            section.style.display = "none"
            z61.removeEventListener("click", clickkoszyka)
            z61.addEventListener("click", pojawienie)
            licznikkoszyka.innerHTML = (parseInt(licznikkoszyka.innerHTML) - parseInt(count.innerHTML)) + 1
            county = 0
            licznik = (licznik - parseInt(count.innerHTML)) + 1
            lacznacena.innerHTML = parseInt(lacznacena.innerHTML) - cena1
            cena1 = 0
            pustykoszyk()
        })
        count = document.getElementById("liczbaprzedmiotow")
        let countupbtn = document.getElementById("zwieksz")
        countupbtn.addEventListener("click", liczenie)
        countupbtn.addEventListener("click", function countup() {
            cena1 = cena1 + 149
            lacznacena.innerHTML = parseInt(lacznacena.innerHTML) + 149
            county += 1
            count.innerHTML = county
            pustykoszyk()
        })
        let countdownbtn = document.getElementById("zmniejsz")
        countdownbtn.addEventListener("click", liczenie2)
        countdownbtn.addEventListener("click", function countdown() {
            if (count.innerHTML == 1) {
                section.style.display = "none"
                z61.removeEventListener("click", clickkoszyka)
                z61.addEventListener("click", pojawienie)
                county = 0
                cena1 -= 149
                lacznacena.innerHTML = parseInt(lacznacena.innerHTML) - 149
                pustykoszyk()
            }
            else {
                cena1 -= 149
                lacznacena.innerHTML = parseInt(lacznacena.innerHTML) - 149
                county -= 1
                count.innerHTML = county
                pustykoszyk()
            }
        })
    }
    else {
        cena1 += 149
        lacznacena.innerHTML = parseInt(lacznacena.innerHTML) + 149
        county += 1
        count.innerHTML = county
        pustykoszyk()
    }

}
function pojawienie() {
    section.style.display = "flex"
    county += 1
    count.innerHTML = county
    cena1 += 149
    lacznacena.innerHTML = parseInt(lacznacena.innerHTML) + 149
    pustykoszyk()
}




// ---------------------------------------------
//                 POWERBANK2
// ---------------------------------------------






let z63 = document.getElementById("right2")
let z64 = document.getElementById("left2")
let z65 = document.getElementById("scdbank5")
let z66 = document.getElementById("scdbank6")
let z67 = document.getElementById("scdbank7")
let z68 = document.getElementById("scdbank8")
let z69 = document.getElementById("bankmain2")
z63.addEventListener("click", slider3)
z64.addEventListener("click", slider4)
function slider3() {
    if ((z69.src) == z65.src) {
        z69.src = z66.src
        z69.style.top = "40px"
        z66.style.border = "2px solid #5acf4a"
        z65.style.border = "2px solid white"
    }
    else if ((z69.src) == z66.src) {
        z69.src = z67.src
        z69.style.top = "125px"
        z66.style.border = "2px solid white"
        z67.style.border = "2px solid #5acf4a"
    }
    else if ((z69.src) == z67.src) {
        z69.src = z68.src
        z69.style.top = "115px"
        z67.style.border = "2px solid white"
        z68.style.border = "2px solid #5acf4a"
    }
    else if ((z69.src) == z68.src) {
        z69.src = z65.src
        z69.style.top = "35px"
        z68.style.border = "2px solid white"
        z65.style.border = "2px solid #5acf4a"
    }
}
function slider4() {
    if ((z69.src) == z68.src) {
        z69.src = z67.src
        z69.style.top = "125px"
        z68.style.border = "2px solid white"
        z67.style.border = "2px solid #5acf4a"
    }
    else if ((z69.src) == z67.src) {
        z69.src = z66.src
        z69.style.top = "40px"
        z67.style.border = "2px solid white"
        z66.style.border = "2px solid #5acf4a"
    }
    else if ((z69.src) == z66.src) {
        z69.src = z65.src
        z69.style.top = "35px"
        z66.style.border = "2px solid white"
        z65.style.border = "2px solid #5acf4a"
    }
    else if ((z69.src) == z65.src) {
        z69.src = z68.src
        z69.style.top = "115px"
        z65.style.border = "2px solid white"
        z68.style.border = "2px solid #5acf4a"
    }
}
z65.addEventListener("click", zmianka5)
function zmianka5() {
    z69.src = z65.src
    z69.style.top = "35px"
    z66.style.border = "2px solid white"
    z67.style.border = "2px solid white"
    z68.style.border = "2px solid white"
    z65.style.border = "2px solid #5acf4a"
}
z66.addEventListener("click", zmianka6)
function zmianka6() {
    z69.src = z66.src
    z69.style.top = "40px"
    z65.style.border = "2px solid white"
    z67.style.border = "2px solid white"
    z68.style.border = "2px solid white"
    z66.style.border = "2px solid #5acf4a"
}
z67.addEventListener("click", zmianka7)
function zmianka7() {
    z69.src = z67.src
    z69.style.top = "125px"
    z66.style.border = "2px solid white"
    z65.style.border = "2px solid white"
    z68.style.border = "2px solid white"
    z67.style.border = "2px solid #5acf4a"
}
z68.addEventListener("click", zmianka8)
function zmianka8() {
    z69.src = z68.src
    z69.style.top = "115px"
    z66.style.border = "2px solid white"
    z67.style.border = "2px solid white"
    z65.style.border = "2px solid white"
    z68.style.border = "2px solid #5acf4a"
}
let z70 = document.getElementById("koszyk2")
z70.addEventListener("mousemove", hovkoszyka3)
z70.addEventListener("mouseleave", hovkoszyka4)
z70.addEventListener("click", clickkoszyka2)
z70.addEventListener("click", liczenie)
function hovkoszyka3() {
    z70.style.boxShadow = "0 0 25px white"
    z70.style.border = "3px solid white"

    z70.style.letterSpacing = "2px"
}
function hovkoszyka4() {
    z70.style.boxShadow = "none"
    z70.style.background = "none"
    z70.style.border = "3px solid white"
    z70.style.letterSpacing = "0"
}
let paragraf4 = document.createElement("p")
let paragraf5 = document.createElement("p")
let i4 = document.createElement("i")
let img2 = document.createElement("img")
let button3 = document.createElement("button")
let button4 = document.createElement("button")
let paragraf6 = document.createElement("p")
let i5 = document.createElement("i")
let i6 = document.createElement("i")
let p3 = document.createElement("p")
let tekstdokoszyka2
let cenadokoszyka2
let iloscdoprzedmiotu2
let county2 = 1
let count2
let section2 = document.createElement("section")
let cena2 = 159
function clickkoszyka2() {
    if (section2.id !== "powerbankwkoszyku2") {
        tekstdokoszyka2 = document.createTextNode("FIXED MagZen black")
        cenadokoszyka2 = document.createTextNode("159.00 ZŁ")
        iloscdoprzedmiotu2 = document.createTextNode("1")
        paragraf4.appendChild(tekstdokoszyka2)
        paragraf5.appendChild(cenadokoszyka2)
        img2.src = "obrazy/powerbank2_1.png"
        i4.classList.add("fa-solid", "fa-trash")
        i5.classList.add("fa-solid", "fa-sort-up")
        i6.classList.add("fa-solid", "fa-caret-down")
        p3.appendChild(i4)
        button3.id = "zwieksz2"
        button4.id = "zmniejsz2"
        img2.classList.add("obrazwkoszyku")
        paragraf6.id = "liczbaprzedmiotow2"
        paragraf6.appendChild(iloscdoprzedmiotu2)
        button3.appendChild(i5)
        button4.appendChild(i6)
        section2.appendChild(img2)
        section2.appendChild(paragraf4)
        section2.appendChild(paragraf5)
        section2.appendChild(button3)
        section2.appendChild(paragraf6)
        section2.appendChild(button4)
        section2.appendChild(p3)
        section2.classList.add("przedmiotwkoszyku")
        section2.id = "powerbankwkoszyku2"
        p3.id = "trash2"
        kontener.appendChild(section2)
        pustykoszyk()
        lacznacena.innerHTML = parseInt(lacznacena.innerHTML) + 159
        let trash2 = document.getElementById("trash2")
        trash2.addEventListener("click", liczenie2)
        trash2.addEventListener("click", function smiec2() {
            section2.style.display = "none"
            z70.removeEventListener("click", clickkoszyka2)
            z70.addEventListener("click", pojawienie2)
            licznikkoszyka.innerHTML = (parseInt(licznikkoszyka.innerHTML) - parseInt(count2.innerHTML)) + 1
            county2 = 0
            licznik = (licznik - parseInt(count2.innerHTML)) + 1
            lacznacena.innerHTML = parseInt(lacznacena.innerHTML) - cena2
            cena2 = 0
            pustykoszyk()
        })
        count2 = document.getElementById("liczbaprzedmiotow2")
        let countupbtn2 = document.getElementById("zwieksz2")
        countupbtn2.addEventListener("click", liczenie)
        countupbtn2.addEventListener("click", function countup2() {
            cena2 = cena2 + 159
            lacznacena.innerHTML = parseInt(lacznacena.innerHTML) + 159
            county2 += 1
            count2.innerHTML = county2
            pustykoszyk()
        })
        let countdownbtn2 = document.getElementById("zmniejsz2")
        countdownbtn2.addEventListener("click", liczenie2)
        countdownbtn2.addEventListener("click", function countdown2() {
            if (count2.innerHTML == 1) {
                section2.style.display = "none"
                z70.removeEventListener("click", clickkoszyka2)
                z70.addEventListener("click", pojawienie2)
                county2 = 0
                cena2 -= 159
                lacznacena.innerHTML = parseInt(lacznacena.innerHTML) - 159
                pustykoszyk()
            }
            else {
                county2 -= 1
                count2.innerHTML = county2
                cena2 -= 159
                lacznacena.innerHTML = parseInt(lacznacena.innerHTML) - 159
                pustykoszyk()
            }
        })
    }

    else {
        cena2 += 159
        lacznacena.innerHTML = parseInt(lacznacena.innerHTML) + 159
        county2 += 1
        count2.innerHTML = county2
        pustykoszyk()
    }
}
function pojawienie2() {
    section2.style.display = "flex"
    county2 += 1
    count2.innerHTML = county2
    cena2 += 159
    lacznacena.innerHTML = parseInt(lacznacena.innerHTML) + 159
    pustykoszyk()
}






// ---------------------------------------------
//                 POWERBANK3
// ---------------------------------------------






let z71 = document.getElementById("right3")
let z72 = document.getElementById("left3")
let z73 = document.getElementById("scdbank9")
let z74 = document.getElementById("scdbank10")
let z75 = document.getElementById("scdbank11")
let z76 = document.getElementById("scdbank12")
let z77 = document.getElementById("bankmain3")
z71.addEventListener("click", slider5)
z72.addEventListener("click", slider6)
function slider5() {
    if ((z77.src) == z73.src) {
        z77.src = z74.src
        z77.style.top = "45px"
        z74.style.border = "2px solid #5acf4a"
        z73.style.border = "2px solid white"
    }
    else if ((z77.src) == z74.src) {
        z77.src = z75.src
        z77.style.top = "45px"
        z74.style.border = "2px solid white"
        z75.style.border = "2px solid #5acf4a"
    }
    else if ((z77.src) == z75.src) {
        z77.src = z76.src
        z77.style.top = "115px"
        z75.style.border = "2px solid white"
        z76.style.border = "2px solid #5acf4a"
    }
    else if ((z77.src) == z76.src) {
        z77.src = z73.src
        z77.style.top = "35px"
        z76.style.border = "2px solid white"
        z73.style.border = "2px solid #5acf4a"
    }
}
function slider6() {
    if ((z77.src) == z76.src) {
        z77.src = z75.src
        z77.style.top = "45px"
        z76.style.border = "2px solid white"
        z75.style.border = "2px solid #5acf4a"
    }
    else if ((z77.src) == z75.src) {
        z77.src = z74.src
        z77.style.top = "45px"
        z75.style.border = "2px solid white"
        z74.style.border = "2px solid #5acf4a"
    }
    else if ((z77.src) == z74.src) {
        z77.src = z73.src
        z77.style.top = "35px"
        z74.style.border = "2px solid white"
        z73.style.border = "2px solid #5acf4a"
    }
    else if ((z77.src) == z73.src) {
        z77.src = z76.src
        z77.style.top = "115px"
        z73.style.border = "2px solid white"
        z76.style.border = "2px solid #5acf4a"
    }
}
z73.addEventListener("click", zmianka9)
function zmianka9() {
    z77.src = z73.src
    z77.style.top = "35px"
    z74.style.border = "2px solid white"
    z75.style.border = "2px solid white"
    z76.style.border = "2px solid white"
    z73.style.border = "2px solid #5acf4a"
}
z74.addEventListener("click", zmianka10)
function zmianka10() {
    z77.src = z74.src
    z77.style.top = "45px"
    z73.style.border = "2px solid white"
    z75.style.border = "2px solid white"
    z76.style.border = "2px solid white"
    z74.style.border = "2px solid #5acf4a"
}
z75.addEventListener("click", zmianka11)
function zmianka11() {
    z77.src = z75.src
    z77.style.top = "45px"
    z74.style.border = "2px solid white"
    z73.style.border = "2px solid white"
    z76.style.border = "2px solid white"
    z75.style.border = "2px solid #5acf4a"
}
z76.addEventListener("click", zmianka12)
function zmianka12() {
    z77.src = z76.src
    z77.style.top = "115px"
    z74.style.border = "2px solid white"
    z75.style.border = "2px solid white"
    z73.style.border = "2px solid white"
    z76.style.border = "2px solid #5acf4a"
}
let z78 = document.getElementById("koszyk3")
z78.addEventListener("mousemove", hovkoszyka5)
z78.addEventListener("mouseleave", hovkoszyka6)
z78.addEventListener("click", clickkoszyka3)
z78.addEventListener("click", liczenie)
function hovkoszyka5() {
    z78.style.boxShadow = "0 0 25px white"
    z78.style.border = "3px solid white"
    z78.style.letterSpacing = "2px"
}
function hovkoszyka6() {
    z78.style.boxShadow = "none"
    z78.style.background = "none"
    z78.style.border = "3px solid white"
    z78.style.letterSpacing = "0"
}
let paragraf7 = document.createElement("p")
let paragraf8 = document.createElement("p")
let i7 = document.createElement("i")
let img3 = document.createElement("img")
let button5 = document.createElement("button")
let button6 = document.createElement("button")
let paragraf9 = document.createElement("p")
let i8 = document.createElement("i")
let i9 = document.createElement("i")
let p4 = document.createElement("p")
let tekstdokoszyka3
let cenadokoszyka3
let iloscdoprzedmiotu3
let county3 = 1
let count3
let section3 = document.createElement("section")
let cena3 = 129
function clickkoszyka3() {
    if (section3.id !== "powerbankwkoszyku3") {
        tekstdokoszyka3 = document.createTextNode("Baseus Adaman2 10000mAh (30W, USB-C)")
        cenadokoszyka3 = document.createTextNode("129.00 ZŁ")
        iloscdoprzedmiotu3 = document.createTextNode("1")
        paragraf7.appendChild(tekstdokoszyka3)
        paragraf8.appendChild(cenadokoszyka3)
        img3.src = "obrazy/powerbank3_1.png"
        i7.classList.add("fa-solid", "fa-trash")
        i8.classList.add("fa-solid", "fa-sort-up")
        i9.classList.add("fa-solid", "fa-caret-down")
        p4.appendChild(i7)
        button5.id = "zwieksz3"
        button6.id = "zmniejsz3"
        img3.classList.add("obrazwkoszyku")
        paragraf9.id = "liczbaprzedmiotow3"
        paragraf9.appendChild(iloscdoprzedmiotu3)
        button5.appendChild(i8)
        button6.appendChild(i9)
        section3.appendChild(img3)
        section3.appendChild(paragraf7)
        section3.appendChild(paragraf8)
        section3.appendChild(button5)
        section3.appendChild(paragraf9)
        section3.appendChild(button6)
        section3.appendChild(p4)
        section3.classList.add("przedmiotwkoszyku")
        section3.id = "powerbankwkoszyku3"
        p4.id = "trash3"
        kontener.appendChild(section3)
        pustykoszyk()
        lacznacena.innerHTML = parseInt(lacznacena.innerHTML) + 129
        let trash3 = document.getElementById("trash3")
        trash3.addEventListener("click", liczenie2)
        trash3.addEventListener("click", function smiec3() {
            section3.style.display = "none"
            z78.removeEventListener("click", clickkoszyka3)
            z78.addEventListener("click", pojawienie3)
            licznikkoszyka.innerHTML = (parseInt(licznikkoszyka.innerHTML) - parseInt(count3.innerHTML)) + 1
            county3 = 0
            licznik = (licznik - parseInt(count3.innerHTML)) + 1
            lacznacena.innerHTML = parseInt(lacznacena.innerHTML) - cena3
            cena3 = 0
            pustykoszyk()
        })
        count3 = document.getElementById("liczbaprzedmiotow3")
        let countupbtn3 = document.getElementById("zwieksz3")
        countupbtn3.addEventListener("click", liczenie)
        countupbtn3.addEventListener("click", function countup3() {
            cena3 = cena3 + 129
            lacznacena.innerHTML = parseInt(lacznacena.innerHTML) + 129
            county3 += 1
            count3.innerHTML = county3
            pustykoszyk()
        })
        let countdownbtn3 = document.getElementById("zmniejsz3")
        countdownbtn3.addEventListener("click", liczenie2)
        countdownbtn3.addEventListener("click", function countdown3() {
            if (count3.innerHTML == 1) {
                section3.style.display = "none"
                z78.removeEventListener("click", clickkoszyka3)
                z78.addEventListener("click", pojawienie3)
                county3 = 0
                cena3 -= 129
                lacznacena.innerHTML = parseInt(lacznacena.innerHTML) - 129
                pustykoszyk()
            }
            else {
                county3 -= 1
                count3.innerHTML = county3
                cena3 -= 129
                lacznacena.innerHTML = parseInt(lacznacena.innerHTML) - 129
                pustykoszyk()
            }
        })
    }

    else {
        county3 += 1
        count3.innerHTML = county3
        cena3 += 129
        lacznacena.innerHTML = parseInt(lacznacena.innerHTML) + 129
        pustykoszyk()
    }
}
function pojawienie3() {
    section3.style.display = "flex"
    county3 += 1
    count3.innerHTML = county3
    cena3 += 129
    lacznacena.innerHTML = parseInt(lacznacena.innerHTML) + 129
    pustykoszyk()
}






// ---------------------------------------------
//                 POWERBANK4
// ---------------------------------------------






let z79 = document.getElementById("right4")
let z80 = document.getElementById("left4")
let z81 = document.getElementById("scdbank13")
let z82 = document.getElementById("scdbank14")
let z83 = document.getElementById("scdbank15")
let z84 = document.getElementById("scdbank16")
let z85 = document.getElementById("bankmain4")
z79.addEventListener("click", slider7)
z80.addEventListener("click", slider8)
function slider7() {
    if ((z85.src) == z81.src) {
        z85.src = z82.src
        z85.style.top = "45px"
        z82.style.border = "2px solid #5acf4a"
        z81.style.border = "2px solid white"
    }
    else if ((z85.src) == z82.src) {
        z85.src = z83.src
        z85.style.top = "45px"
        z82.style.border = "2px solid white"
        z83.style.border = "2px solid #5acf4a"
    }
    else if ((z85.src) == z83.src) {
        z85.src = z84.src
        z85.style.top = "115px"
        z83.style.border = "2px solid white"
        z84.style.border = "2px solid #5acf4a"
    }
    else if ((z85.src) == z84.src) {
        z85.src = z81.src
        z85.style.top = "35px"
        z84.style.border = "2px solid white"
        z81.style.border = "2px solid #5acf4a"
    }
}
function slider8() {
    if ((z85.src) == z84.src) {
        z85.src = z83.src
        z85.style.top = "45px"
        z84.style.border = "2px solid white"
        z83.style.border = "2px solid #5acf4a"
    }
    else if ((z85.src) == z83.src) {
        z85.src = z82.src
        z85.style.top = "45px"
        z83.style.border = "2px solid white"
        z82.style.border = "2px solid #5acf4a"
    }
    else if ((z85.src) == z82.src) {
        z85.src = z81.src
        z85.style.top = "35px"
        z82.style.border = "2px solid white"
        z81.style.border = "2px solid #5acf4a"
    }
    else if ((z85.src) == z81.src) {
        z85.src = z84.src
        z85.style.top = "115px"
        z81.style.border = "2px solid white"
        z84.style.border = "2px solid #5acf4a"
    }
}
z81.addEventListener("click", zmianka13)
function zmianka13() {
    z85.src = z81.src
    z85.style.top = "35px"
    z82.style.border = "2px solid white"
    z83.style.border = "2px solid white"
    z84.style.border = "2px solid white"
    z81.style.border = "2px solid #5acf4a"
}
z82.addEventListener("click", zmianka14)
function zmianka14() {
    z85.src = z82.src
    z85.style.top = "45px"
    z81.style.border = "2px solid white"
    z83.style.border = "2px solid white"
    z84.style.border = "2px solid white"
    z82.style.border = "2px solid #5acf4a"
}
z83.addEventListener("click", zmianka15)
function zmianka15() {
    z85.src = z83.src
    z85.style.top = "45px"
    z82.style.border = "2px solid white"
    z81.style.border = "2px solid white"
    z84.style.border = "2px solid white"
    z83.style.border = "2px solid #5acf4a"
}
z84.addEventListener("click", zmianka16)
function zmianka16() {
    z85.src = z84.src
    z85.style.top = "115px"
    z82.style.border = "2px solid white"
    z83.style.border = "2px solid white"
    z81.style.border = "2px solid white"
    z84.style.border = "2px solid #5acf4a"
}
let z86 = document.getElementById("koszyk4")
z86.addEventListener("mousemove", hovkoszyka7)
z86.addEventListener("mouseleave", hovkoszyka8)
z86.addEventListener("click", clickkoszyka4)
z86.addEventListener("click", liczenie)
function hovkoszyka7() {
    z86.style.boxShadow = "0 0 25px white"
    z86.style.border = "3px solid white"
    z86.style.letterSpacing = "2px"
}
function hovkoszyka8() {
    z86.style.boxShadow = "none"
    z86.style.background = "none"
    z86.style.border = "3px solid white"
    z86.style.letterSpacing = "0"
}
let paragraf10 = document.createElement("p")
let paragraf11 = document.createElement("p")
let i10 = document.createElement("i")
let img4 = document.createElement("img")
let button7 = document.createElement("button")
let button8 = document.createElement("button")
let paragraf12 = document.createElement("p")
let i11 = document.createElement("i")
let i12 = document.createElement("i")
let p5 = document.createElement("p")
let tekstdokoszyka4
let cenadokoszyka4
let iloscdoprzedmiotu4
let county4 = 1
let count4
let section4 = document.createElement("section")
let cena4 = 119
function clickkoszyka4() {
    if (section4.id !== "powerbankwkoszyku4") {
        tekstdokoszyka4 = document.createTextNode("Baseus Powerbank Bipower Pro 10000mAh")
        cenadokoszyka4 = document.createTextNode("119.00 ZŁ")
        iloscdoprzedmiotu4 = document.createTextNode("1")
        paragraf10.appendChild(tekstdokoszyka4)
        paragraf11.appendChild(cenadokoszyka4)
        img4.src = "obrazy/powerbank4_1.png"
        i10.classList.add("fa-solid", "fa-trash")
        i11.classList.add("fa-solid", "fa-sort-up")
        i12.classList.add("fa-solid", "fa-caret-down")
        p5.appendChild(i10)
        button7.id = "zwieksz4"
        button8.id = "zmniejsz4"
        img4.classList.add("obrazwkoszyku")
        paragraf12.id = "liczbaprzedmiotow4"
        paragraf12.appendChild(iloscdoprzedmiotu4)
        button7.appendChild(i11)
        button8.appendChild(i12)
        section4.appendChild(img4)
        section4.appendChild(paragraf10)
        section4.appendChild(paragraf11)
        section4.appendChild(button7)
        section4.appendChild(paragraf12)
        section4.appendChild(button8)
        section4.appendChild(p5)
        section4.classList.add("przedmiotwkoszyku")
        section4.id = "powerbankwkoszyku4"
        p5.id = "trash4"
        kontener.appendChild(section4)
        pustykoszyk()
        lacznacena.innerHTML = parseInt(lacznacena.innerHTML) + 119
        let trash4 = document.getElementById("trash4")
        trash4.addEventListener("click", liczenie2)
        trash4.addEventListener("click", function smiec4() {
            section4.style.display = "none"
            z86.removeEventListener("click", clickkoszyka4)
            z86.addEventListener("click", pojawienie4)
            licznikkoszyka.innerHTML = (parseInt(licznikkoszyka.innerHTML) - parseInt(count4.innerHTML)) + 1
            county4 = 0
            licznik = (licznik - parseInt(count4.innerHTML)) + 1
            lacznacena.innerHTML = parseInt(lacznacena.innerHTML) - cena4
            cena4 = 0
            pustykoszyk()
        })
        count4 = document.getElementById("liczbaprzedmiotow4")
        let countupbtn4 = document.getElementById("zwieksz4")
        countupbtn4.addEventListener("click", liczenie)
        countupbtn4.addEventListener("click", function countup4() {
            cena4 = cena4 + 119
            lacznacena.innerHTML = parseInt(lacznacena.innerHTML) + 119
            county4 += 1
            count4.innerHTML = county4
            pustykoszyk()
        })
        let countdownbtn4 = document.getElementById("zmniejsz4")
        countdownbtn4.addEventListener("click", liczenie2)
        countdownbtn4.addEventListener("click", function countdown4() {
            if (count4.innerHTML == 1) {
                section4.style.display = "none"
                z86.removeEventListener("click", clickkoszyka4)
                z86.addEventListener("click", pojawienie4)
                county4 = 0
                cena4 -= 119
                lacznacena.innerHTML = parseInt(lacznacena.innerHTML) - 119
                pustykoszyk()
            }
            else {
                county4 -= 1
                count4.innerHTML = county4
                cena4 -= 119
                lacznacena.innerHTML = parseInt(lacznacena.innerHTML) - 119
                pustykoszyk()
            }
        })
    }

    else {
        county4 += 1
        count4.innerHTML = county4
        cena4 += 119
        lacznacena.innerHTML = parseInt(lacznacena.innerHTML) + 119
        pustykoszyk()
    }
}
function pojawienie4() {
    section4.style.display = "flex"
    county4 += 1
    count4.innerHTML = county4
    cena4 += 119
    lacznacena.innerHTML = parseInt(lacznacena.innerHTML) + 119
    pustykoszyk()
}






// ---------------------------------------------
//                 POWERBANK5
// ---------------------------------------------






let z87 = document.getElementById("right5")
let z88 = document.getElementById("left5")
let z89 = document.getElementById("scdbank17")
let z90 = document.getElementById("scdbank18")
let z91 = document.getElementById("scdbank19")
let z92 = document.getElementById("scdbank20")
let z93 = document.getElementById("bankmain5")
z87.addEventListener("click", slider9)
z88.addEventListener("click", slider10)
function slider9() {
    if ((z93.src) == z89.src) {
        z93.src = z90.src
        z93.style.top = "115px"
        z90.style.border = "2px solid #5acf4a"
        z89.style.border = "2px solid white"
    }
    else if ((z93.src) == z90.src) {
        z93.src = z91.src
        z93.style.top = "115px"
        z90.style.border = "2px solid white"
        z91.style.border = "2px solid #5acf4a"
    }
    else if ((z93.src) == z91.src) {
        z93.src = z92.src
        z93.style.top = "115px"
        z91.style.border = "2px solid white"
        z92.style.border = "2px solid #5acf4a"
    }
    else if ((z93.src) == z92.src) {
        z93.src = z89.src
        z93.style.top = "115px"
        z92.style.border = "2px solid white"
        z89.style.border = "2px solid #5acf4a"
    }
}
function slider10() {
    if ((z93.src) == z92.src) {
        z93.src = z91.src
        z93.style.top = "115px"
        z92.style.border = "2px solid white"
        z91.style.border = "2px solid #5acf4a"
    }
    else if ((z93.src) == z91.src) {
        z93.src = z90.src
        z93.style.top = "115px"
        z91.style.border = "2px solid white"
        z90.style.border = "2px solid #5acf4a"
    }
    else if ((z93.src) == z90.src) {
        z93.src = z89.src
        z93.style.top = "115px"
        z90.style.border = "2px solid white"
        z89.style.border = "2px solid #5acf4a"
    }
    else if ((z93.src) == z89.src) {
        z93.src = z92.src
        z93.style.top = "115px"
        z89.style.border = "2px solid white"
        z92.style.border = "2px solid #5acf4a"
    }
}
z89.addEventListener("click", zmianka17)
function zmianka17() {
    z93.src = z89.src
    z93.style.top = "115px"
    z90.style.border = "2px solid white"
    z91.style.border = "2px solid white"
    z92.style.border = "2px solid white"
    z89.style.border = "2px solid #5acf4a"
}
z90.addEventListener("click", zmianka18)
function zmianka18() {
    z93.src = z90.src
    z93.style.top = "115px"
    z89.style.border = "2px solid white"
    z91.style.border = "2px solid white"
    z92.style.border = "2px solid white"
    z90.style.border = "2px solid #5acf4a"
}
z91.addEventListener("click", zmianka19)
function zmianka19() {
    z93.src = z91.src
    z93.style.top = "115px"
    z90.style.border = "2px solid white"
    z89.style.border = "2px solid white"
    z92.style.border = "2px solid white"
    z91.style.border = "2px solid #5acf4a"
}
z92.addEventListener("click", zmianka20)
function zmianka20() {
    z93.src = z92.src
    z93.style.top = "115px"
    z90.style.border = "2px solid white"
    z91.style.border = "2px solid white"
    z89.style.border = "2px solid white"
    z92.style.border = "2px solid #5acf4a"
}
let z94 = document.getElementById("koszyk5")
z94.addEventListener("mousemove", hovkoszyka9)
z94.addEventListener("mouseleave", hovkoszyka10)
z94.addEventListener("click", clickkoszyka5)
z94.addEventListener("click", liczenie)
function hovkoszyka9() {
    z94.style.boxShadow = "0 0 25px white"
    z94.style.border = "3px solid white"
    z94.style.letterSpacing = "2px"
}
function hovkoszyka10() {
    z94.style.background = "none"
    z94.style.boxShadow = "none"
    z94.style.border = "3px solid white"
    z94.style.letterSpacing = "0"
}
let paragraf13 = document.createElement("p")
let paragraf14 = document.createElement("p")
let i13 = document.createElement("i")
let img5 = document.createElement("img")
let button9 = document.createElement("button")
let button10 = document.createElement("button")
let paragraf15 = document.createElement("p")
let i14 = document.createElement("i")
let i15 = document.createElement("i")
let p6 = document.createElement("p")
let tekstdokoszyka5
let cenadokoszyka5
let iloscdoprzedmiotu5
let county5 = 1
let count5
let section5 = document.createElement("section")
let cena5 = 119
function clickkoszyka5() {
    if (section5.id !== "powerbankwkoszyku5") {
        tekstdokoszyka5 = document.createTextNode("Green Cell PowerPlay20 20000mAh")
        cenadokoszyka5 = document.createTextNode("119.00 ZŁ")
        iloscdoprzedmiotu5 = document.createTextNode("1")
        paragraf13.appendChild(tekstdokoszyka5)
        paragraf14.appendChild(cenadokoszyka5)
        img5.src = "obrazy/powerbank5_1.png"
        i13.classList.add("fa-solid", "fa-trash")
        i14.classList.add("fa-solid", "fa-sort-up")
        i15.classList.add("fa-solid", "fa-caret-down")
        p6.appendChild(i13)
        button9.id = "zwieksz5"
        button10.id = "zmniejsz5"
        img5.classList.add("obrazwkoszyku")
        paragraf15.id = "liczbaprzedmiotow5"
        paragraf15.appendChild(iloscdoprzedmiotu5)
        button9.appendChild(i14)
        button10.appendChild(i15)
        section5.appendChild(img5)
        section5.appendChild(paragraf13)
        section5.appendChild(paragraf14)
        section5.appendChild(button9)
        section5.appendChild(paragraf15)
        section5.appendChild(button10)
        section5.appendChild(p6)
        section5.classList.add("przedmiotwkoszyku")
        section5.id = "powerbankwkoszyku5"
        p6.id = "trash5"
        kontener.appendChild(section5)
        pustykoszyk()
        lacznacena.innerHTML = parseInt(lacznacena.innerHTML) + 119
        let trash5 = document.getElementById("trash5")
        trash5.addEventListener("click", liczenie2)
        trash5.addEventListener("click", function smiec5() {
            section5.style.display = "none"
            z94.removeEventListener("click", clickkoszyka5)
            z94.addEventListener("click", pojawienie5)
            licznikkoszyka.innerHTML = (parseInt(licznikkoszyka.innerHTML) - parseInt(count5.innerHTML)) + 1
            county5 = 0
            licznik = (licznik - parseInt(count5.innerHTML)) + 1
            lacznacena.innerHTML = parseInt(lacznacena.innerHTML) - cena5
            cena5 = 0
            pustykoszyk()
        })
        count5 = document.getElementById("liczbaprzedmiotow5")
        let countupbtn5 = document.getElementById("zwieksz5")
        countupbtn5.addEventListener("click", liczenie)
        countupbtn5.addEventListener("click", function countup5() {
            cena5 = cena5 + 119
            lacznacena.innerHTML = parseInt(lacznacena.innerHTML) + 119
            county5 += 1
            count5.innerHTML = county5
            pustykoszyk()
        })
        let countdownbtn5 = document.getElementById("zmniejsz5")
        countdownbtn5.addEventListener("click", liczenie2)
        countdownbtn5.addEventListener("click", function countdown5() {
            if (count5.innerHTML == 1) {
                section5.style.display = "none"
                z94.removeEventListener("click", clickkoszyka5)
                z94.addEventListener("click", pojawienie5)
                county5 = 0
                cena5 -= 119
                lacznacena.innerHTML = parseInt(lacznacena.innerHTML) - 119
                pustykoszyk()
            }
            else {
                county5 -= 1
                count5.innerHTML = county5
                cena5 -= 119
                lacznacena.innerHTML = parseInt(lacznacena.innerHTML) - 119
                pustykoszyk()
            }
        })
    }

    else {
        county5 += 1
        count5.innerHTML = county5
        cena5 += 119
        lacznacena.innerHTML = parseInt(lacznacena.innerHTML) + 119
        pustykoszyk()
    }
}
function pojawienie5() {
    section5.style.display = "flex"
    county5 += 1
    count5.innerHTML = county5
    cena5 += 119
    lacznacena.innerHTML = parseInt(lacznacena.innerHTML) + 119
    pustykoszyk()
}







// ---------------------------------------------
//                 POWERBANK6
// ---------------------------------------------






let z95 = document.getElementById("right6")
let z96 = document.getElementById("left6")
let z97 = document.getElementById("scdbank21")
let z98 = document.getElementById("scdbank22")
let z99 = document.getElementById("scdbank23")
let z100 = document.getElementById("scdbank24")
let z101 = document.getElementById("bankmain6")
z95.addEventListener("click", slider11)
z96.addEventListener("click", slider12)
function slider11() {
    if ((z101.src) == z97.src) {
        z101.src = z98.src
        z101.style.top = "75px"
        z98.style.border = "2px solid #5acf4a"
        z97.style.border = "2px solid white"
    }
    else if ((z101.src) == z98.src) {
        z101.src = z99.src
        z101.style.top = "75px"
        z98.style.border = "2px solid white"
        z99.style.border = "2px solid #5acf4a"
    }
    else if ((z101.src) == z99.src) {
        z101.src = z100.src
        z101.style.top = "75px"
        z99.style.border = "2px solid white"
        z100.style.border = "2px solid #5acf4a"
    }
    else if ((z101.src) == z100.src) {
        z101.src = z97.src
        z101.style.top = "75px"
        z100.style.border = "2px solid white"
        z97.style.border = "2px solid #5acf4a"
    }
}
function slider12() {
    if ((z101.src) == z100.src) {
        z101.src = z99.src
        z101.style.top = "75px"
        z100.style.border = "2px solid white"
        z99.style.border = "2px solid #5acf4a"
    }
    else if ((z101.src) == z99.src) {
        z101.src = z98.src
        z101.style.top = "75px"
        z99.style.border = "2px solid white"
        z98.style.border = "2px solid #5acf4a"
    }
    else if ((z101.src) == z98.src) {
        z101.src = z97.src
        z101.style.top = "75px"
        z98.style.border = "2px solid white"
        z97.style.border = "2px solid #5acf4a"
    }
    else if ((z101.src) == z97.src) {
        z101.src = z100.src
        z101.style.top = "75px"
        z97.style.border = "2px solid white"
        z100.style.border = "2px solid #5acf4a"
    }
}
z97.addEventListener("click", zmianka21)
function zmianka21() {
    z101.src = z97.src
    z101.style.top = "75px"
    z98.style.border = "2px solid white"
    z99.style.border = "2px solid white"
    z100.style.border = "2px solid white"
    z97.style.border = "2px solid #5acf4a"
}
z98.addEventListener("click", zmianka22)
function zmianka22() {
    z101.src = z98.src
    z101.style.top = "75px"
    z97.style.border = "2px solid white"
    z99.style.border = "2px solid white"
    z100.style.border = "2px solid white"
    z98.style.border = "2px solid #5acf4a"
}
z99.addEventListener("click", zmianka23)
function zmianka23() {
    z101.src = z99.src
    z101.style.top = "75px"
    z98.style.border = "2px solid white"
    z97.style.border = "2px solid white"
    z100.style.border = "2px solid white"
    z99.style.border = "2px solid #5acf4a"
}
z100.addEventListener("click", zmianka24)
function zmianka24() {
    z101.src = z100.src
    z101.style.top = "75px"
    z98.style.border = "2px solid white"
    z99.style.border = "2px solid white"
    z97.style.border = "2px solid white"
    z100.style.border = "2px solid #5acf4a"
}
let z102 = document.getElementById("koszyk6")
z102.addEventListener("mousemove", hovkoszyka11)
z102.addEventListener("mouseleave", hovkoszyka12)
z102.addEventListener("click", clickkoszyka6)
z102.addEventListener("click", liczenie)
function hovkoszyka11() {
    z102.style.boxShadow = "0 0 25px white"
    z102.style.border = "3px solid white"
    z102.style.letterSpacing = "2px"
}
function hovkoszyka12() {
    z102.style.boxShadow = "none"
    z102.style.background = "none"
    z102.style.border = "3px solid white"
    z102.style.letterSpacing = "0"
}
let paragraf16 = document.createElement("p")
let paragraf17 = document.createElement("p")
let i16 = document.createElement("i")
let img6 = document.createElement("img")
let button11 = document.createElement("button")
let button12 = document.createElement("button")
let paragraf18 = document.createElement("p")
let i17 = document.createElement("i")
let i18 = document.createElement("i")
let p7 = document.createElement("p")
let tekstdokoszyka6
let cenadokoszyka6
let iloscdoprzedmiotu6
let county6 = 1
let count6
let section6 = document.createElement("section")
let cena6 = 119
function clickkoszyka6() {
    if (section6.id !== "powerbankwkoszyku6") {
        tekstdokoszyka6 = document.createTextNode("Baseus Powerbank Magnetic 10000mAh 20W")
        cenadokoszyka6 = document.createTextNode("119.00 ZŁ")
        iloscdoprzedmiotu6 = document.createTextNode("1")
        paragraf16.appendChild(tekstdokoszyka6)
        paragraf17.appendChild(cenadokoszyka6)
        img6.src = "obrazy/powerbank6_1.png"
        i16.classList.add("fa-solid", "fa-trash")
        i17.classList.add("fa-solid", "fa-sort-up")
        i18.classList.add("fa-solid", "fa-caret-down")
        p7.appendChild(i16)
        button11.id = "zwieksz6"
        button12.id = "zmniejsz6"
        img6.classList.add("obrazwkoszyku")
        paragraf18.id = "liczbaprzedmiotow6"
        paragraf18.appendChild(iloscdoprzedmiotu6)
        button11.appendChild(i17)
        button12.appendChild(i18)
        section6.appendChild(img6)
        section6.appendChild(paragraf16)
        section6.appendChild(paragraf17)
        section6.appendChild(button11)
        section6.appendChild(paragraf18)
        section6.appendChild(button12)
        section6.appendChild(p7)
        section6.classList.add("przedmiotwkoszyku")
        section6.id = "powerbankwkoszyku6"
        p7.id = "trash6"
        kontener.appendChild(section6)
        pustykoszyk()
        lacznacena.innerHTML = parseInt(lacznacena.innerHTML) + 119
        let trash6 = document.getElementById("trash6")
        trash6.addEventListener("click", liczenie2)
        trash6.addEventListener("click", function smiec6() {
            section6.style.display = "none"
            z102.removeEventListener("click", clickkoszyka6)
            z102.addEventListener("click", pojawienie6)
            licznikkoszyka.innerHTML = (parseInt(licznikkoszyka.innerHTML) - parseInt(count6.innerHTML)) + 1
            county6 = 0
            licznik = (licznik - parseInt(count6.innerHTML)) + 1
            lacznacena.innerHTML = parseInt(lacznacena.innerHTML) - cena6
            cena6 = 0
            pustykoszyk()
        })
        count6 = document.getElementById("liczbaprzedmiotow6")
        let countupbtn6 = document.getElementById("zwieksz6")
        countupbtn6.addEventListener("click", liczenie)
        countupbtn6.addEventListener("click", function countup6() {
            cena6 = cena6 + 119
            lacznacena.innerHTML = parseInt(lacznacena.innerHTML) + 119
            county6 += 1
            count6.innerHTML = county6
            pustykoszyk()
        })
        let countdownbtn6 = document.getElementById("zmniejsz6")
        countdownbtn6.addEventListener("click", liczenie2)
        countdownbtn6.addEventListener("click", function countdown6() {
            if (count6.innerHTML == 1) {
                section6.style.display = "none"
                z102.removeEventListener("click", clickkoszyka6)
                z102.addEventListener("click", pojawienie6)
                county6 = 0
                cena6 -= 119
                lacznacena.innerHTML = parseInt(lacznacena.innerHTML) - 119
                pustykoszyk()
            }
            else {
                county6 -= 1
                count6.innerHTML = county6
                cena1 -= 119
                lacznacena.innerHTML = parseInt(lacznacena.innerHTML) - 119
                pustykoszyk()
            }
        })
    }

    else {
        county6 += 1
        count6.innerHTML = county6
        cena6 += 119
        lacznacena.innerHTML = parseInt(lacznacena.innerHTML) + 119
        pustykoszyk()
    }
}
function pojawienie6() {
    section6.style.display = "flex"
    county6 += 1
    count6.innerHTML = county6
    cena6 += 119
    lacznacena.innerHTML = parseInt(lacznacena.innerHTML) + 119
    pustykoszyk()
}






// ---------------------------------------------
//                 POWERBANK7
// ---------------------------------------------







let z103 = document.getElementById("right7")
let z104 = document.getElementById("left7")
let z105 = document.getElementById("scdbank25")
let z106 = document.getElementById("scdbank26")
let z107 = document.getElementById("scdbank27")
let z108 = document.getElementById("scdbank28")
let z109 = document.getElementById("bankmain7")
z103.addEventListener("click", slider13)
z104.addEventListener("click", slider14)
function slider13() {
    if ((z109.src) == z105.src) {
        z109.src = z106.src
        z109.style.top = "75px"
        z106.style.border = "2px solid #5acf4a"
        z105.style.border = "2px solid white"
    }
    else if ((z109.src) == z106.src) {
        z109.src = z107.src
        z109.style.top = "75px"
        z106.style.border = "2px solid white"
        z107.style.border = "2px solid #5acf4a"
    }
    else if ((z109.src) == z107.src) {
        z109.src = z108.src
        z109.style.top = "75px"
        z107.style.border = "2px solid white"
        z108.style.border = "2px solid #5acf4a"
    }
    else if ((z109.src) == z108.src) {
        z109.src = z105.src
        z109.style.top = "75px"
        z108.style.border = "2px solid white"
        z105.style.border = "2px solid #5acf4a"
    }
}
function slider14() {
    if ((z109.src) == z108.src) {
        z109.src = z107.src
        z109.style.top = "75px"
        z108.style.border = "2px solid white"
        z107.style.border = "2px solid #5acf4a"
    }
    else if ((z109.src) == z107.src) {
        z109.src = z106.src
        z109.style.top = "75px"
        z107.style.border = "2px solid white"
        z106.style.border = "2px solid #5acf4a"
    }
    else if ((z109.src) == z106.src) {
        z109.src = z105.src
        z109.style.top = "75px"
        z106.style.border = "2px solid white"
        z105.style.border = "2px solid #5acf4a"
    }
    else if ((z109.src) == z105.src) {
        z109.src = z108.src
        z109.style.top = "75px"
        z105.style.border = "2px solid white"
        z108.style.border = "2px solid #5acf4a"
    }
}
z105.addEventListener("click", zmianka25)
function zmianka25() {
    z109.src = z105.src
    z109.style.top = "75px"
    z106.style.border = "2px solid white"
    z107.style.border = "2px solid white"
    z108.style.border = "2px solid white"
    z105.style.border = "2px solid #5acf4a"
}
z106.addEventListener("click", zmianka26)
function zmianka26() {
    z109.src = z106.src
    z109.style.top = "75px"
    z105.style.border = "2px solid white"
    z107.style.border = "2px solid white"
    z108.style.border = "2px solid white"
    z106.style.border = "2px solid #5acf4a"
}
z107.addEventListener("click", zmianka27)
function zmianka27() {
    z109.src = z107.src
    z109.style.top = "75px"
    z106.style.border = "2px solid white"
    z105.style.border = "2px solid white"
    z108.style.border = "2px solid white"
    z107.style.border = "2px solid #5acf4a"
}
z108.addEventListener("click", zmianka28)
function zmianka28() {
    z109.src = z108.src
    z109.style.top = "75px"
    z106.style.border = "2px solid white"
    z107.style.border = "2px solid white"
    z105.style.border = "2px solid white"
    z108.style.border = "2px solid #5acf4a"
}
let z110 = document.getElementById("koszyk7")
z110.addEventListener("mousemove", hovkoszyka13)
z110.addEventListener("mouseleave", hovkoszyka14)
z110.addEventListener("click", clickkoszyka7)
z110.addEventListener("click", liczenie)
function hovkoszyka13() {
    z110.style.boxShadow = "0 0 25px white"
    z110.style.border = "3px solid white"
    z110.style.letterSpacing = "2px"
}
function hovkoszyka14() {
    z110.style.boxShadow = "none"
    z110.style.background = "none"
    z110.style.border = "3px solid white"
    z110.style.letterSpacing = "0"
}
let paragraf19 = document.createElement("p")
let paragraf20 = document.createElement("p")
let i19 = document.createElement("i")
let img7 = document.createElement("img")
let button13 = document.createElement("button")
let button14 = document.createElement("button")
let paragraf21 = document.createElement("p")
let i20 = document.createElement("i")
let i21 = document.createElement("i")
let p8 = document.createElement("p")
let tekstdokoszyka7
let cenadokoszyka7
let iloscdoprzedmiotu7
let county7 = 1
let count7
let cena7 = 129
let section7 = document.createElement("section")
function clickkoszyka7() {
    if (section7.id !== "powerbankwkoszyku7") {
        tekstdokoszyka7 = document.createTextNode("JoyRoom 20000mAh Dazzling Series 22.5W")
        cenadokoszyka7 = document.createTextNode("129.00 ZŁ")
        iloscdoprzedmiotu7 = document.createTextNode("1")
        paragraf19.appendChild(tekstdokoszyka7)
        paragraf20.appendChild(cenadokoszyka7)
        img7.src = "obrazy/powerbank7_1.png"
        i19.classList.add("fa-solid", "fa-trash")
        i20.classList.add("fa-solid", "fa-sort-up")
        i21.classList.add("fa-solid", "fa-caret-down")
        p8.appendChild(i19)
        button13.id = "zwieksz7"
        button14.id = "zmniejsz7"
        img7.classList.add("obrazwkoszyku")
        paragraf21.id = "liczbaprzedmiotow7"
        paragraf21.appendChild(iloscdoprzedmiotu7)
        button13.appendChild(i20)
        button14.appendChild(i21)
        section7.appendChild(img7)
        section7.appendChild(paragraf19)
        section7.appendChild(paragraf20)
        section7.appendChild(button13)
        section7.appendChild(paragraf21)
        section7.appendChild(button14)
        section7.appendChild(p8)
        section7.classList.add("przedmiotwkoszyku")
        section7.id = "powerbankwkoszyku7"
        p8.id = "trash7"
        kontener.appendChild(section7)
        pustykoszyk()
        lacznacena.innerHTML = parseInt(lacznacena.innerHTML) + 129
        let trash7 = document.getElementById("trash7")
        trash7.addEventListener("click", liczenie2)
        trash7.addEventListener("click", function smiec7() {
            section7.style.display = "none"
            z110.removeEventListener("click", clickkoszyka7)
            z110.addEventListener("click", pojawienie7)
            licznikkoszyka.innerHTML = (parseInt(licznikkoszyka.innerHTML) - parseInt(count7.innerHTML)) + 1
            county7 = 0
            licznik = (licznik - parseInt(count7.innerHTML)) + 1
            lacznacena.innerHTML = parseInt(lacznacena.innerHTML) - cena7
            cena7 = 0
            pustykoszyk()
        })
        count7 = document.getElementById("liczbaprzedmiotow7")
        let countupbtn7 = document.getElementById("zwieksz7")
        countupbtn7.addEventListener("click", liczenie)
        countupbtn7.addEventListener("click", function countup7() {
            cena7 = cena7 + 129
            lacznacena.innerHTML = parseInt(lacznacena.innerHTML) + 129
            county7 += 1
            count7.innerHTML = county7
            pustykoszyk()
        })
        let countdownbtn7 = document.getElementById("zmniejsz7")
        countdownbtn7.addEventListener("click", liczenie2)
        countdownbtn7.addEventListener("click", function countdown7() {
            if (count7.innerHTML == 1) {
                section7.style.display = "none"
                z110.removeEventListener("click", clickkoszyka7)
                z110.addEventListener("click", pojawienie7)
                county7 = 0
                cena7 -= 129
                lacznacena.innerHTML = parseInt(lacznacena.innerHTML) - 129
                pustykoszyk()
            }
            else {
                cena7 -= 129
                lacznacena.innerHTML = parseInt(lacznacena.innerHTML) - 129
                county7 -= 1
                count7.innerHTML = county7
                pustykoszyk()
            }
        })
    }

    else {
        county7 += 1
        count7.innerHTML = county7
        cena7 += 129
        lacznacena.innerHTML = parseInt(lacznacena.innerHTML) + 129
        pustykoszyk()
    }
}
function pojawienie7() {
    section7.style.display = "flex"
    county7 += 1
    count7.innerHTML = county7
    cena7 += 129
    lacznacena.innerHTML = parseInt(lacznacena.innerHTML) + 129
    pustykoszyk()
}






// ---------------------------------------------
//                 POWERBANK8
// ---------------------------------------------







let z111 = document.getElementById("right8")
let z112 = document.getElementById("left8")
let z113 = document.getElementById("scdbank29")
let z114 = document.getElementById("scdbank30")
let z115 = document.getElementById("scdbank31")
let z116 = document.getElementById("scdbank32")
let z117 = document.getElementById("bankmain8")
z111.addEventListener("click", slider15)
z112.addEventListener("click", slider16)
function slider15() {
    if ((z117.src) == z113.src) {
        z117.src = z114.src
        z117.style.top = "75px"
        z114.style.border = "2px solid #5acf4a"
        z113.style.border = "2px solid white"
    }
    else if ((z117.src) == z114.src) {
        z117.src = z115.src
        z117.style.top = "75px"
        z114.style.border = "2px solid white"
        z115.style.border = "2px solid #5acf4a"
    }
    else if ((z117.src) == z115.src) {
        z117.src = z116.src
        z117.style.top = "75px"
        z115.style.border = "2px solid white"
        z116.style.border = "2px solid #5acf4a"
    }
    else if ((z117.src) == z116.src) {
        z117.src = z113.src
        z117.style.top = "75px"
        z116.style.border = "2px solid white"
        z113.style.border = "2px solid #5acf4a"
    }
}
function slider16() {
    if ((z117.src) == z116.src) {
        z117.src = z115.src
        z117.style.top = "75px"
        z116.style.border = "2px solid white"
        z115.style.border = "2px solid #5acf4a"
    }
    else if ((z117.src) == z115.src) {
        z117.src = z114.src
        z117.style.top = "75px"
        z115.style.border = "2px solid white"
        z114.style.border = "2px solid #5acf4a"
    }
    else if ((z117.src) == z114.src) {
        z117.src = z113.src
        z117.style.top = "75px"
        z114.style.border = "2px solid white"
        z113.style.border = "2px solid #5acf4a"
    }
    else if ((z117.src) == z113.src) {
        z117.src = z116.src
        z117.style.top = "75px"
        z113.style.border = "2px solid white"
        z116.style.border = "2px solid #5acf4a"
    }
}
z113.addEventListener("click", zmianka29)
function zmianka29() {
    z117.src = z113.src
    z117.style.top = "75px"
    z114.style.border = "2px solid white"
    z115.style.border = "2px solid white"
    z116.style.border = "2px solid white"
    z113.style.border = "2px solid #5acf4a"
}
z114.addEventListener("click", zmianka30)
function zmianka30() {
    z117.src = z114.src
    z117.style.top = "75px"
    z113.style.border = "2px solid white"
    z115.style.border = "2px solid white"
    z116.style.border = "2px solid white"
    z114.style.border = "2px solid #5acf4a"
}
z115.addEventListener("click", zmianka31)
function zmianka31() {
    z117.src = z115.src
    z117.style.top = "75px"
    z114.style.border = "2px solid white"
    z113.style.border = "2px solid white"
    z116.style.border = "2px solid white"
    z115.style.border = "2px solid #5acf4a"
}
z116.addEventListener("click", zmianka32)
function zmianka32() {
    z117.src = z116.src
    z117.style.top = "75px"
    z114.style.border = "2px solid white"
    z115.style.border = "2px solid white"
    z113.style.border = "2px solid white"
    z116.style.border = "2px solid #5acf4a"
}
let z118 = document.getElementById("koszyk8")
z118.addEventListener("mousemove", hovkoszyka15)
z118.addEventListener("mouseleave", hovkoszyka16)
z118.addEventListener("click", clickkoszyka8)
z118.addEventListener("click", liczenie)
function hovkoszyka15() {
    z118.style.boxShadow = "0 0 25px white"
    z118.style.border = "3px solid white"
    z118.style.letterSpacing = "2px"
}
function hovkoszyka16() {
    z118.style.boxShadow = "none"
    z118.style.background = "none"
    z118.style.border = "3px solid white"
    z118.style.letterSpacing = "0"
}
let paragraf22 = document.createElement("p")
let paragraf23 = document.createElement("p")
let i22 = document.createElement("i")
let img8 = document.createElement("img")
let button15 = document.createElement("button")
let button16 = document.createElement("button")
let paragraf24 = document.createElement("p")
let i23 = document.createElement("i")
let i24 = document.createElement("i")
let p9 = document.createElement("p")
let tekstdokoszyka8
let cenadokoszyka8
let iloscdoprzedmiotu8
let county8 = 1
let count8
let cena8 = 149
let section8 = document.createElement("section")
function clickkoszyka8() {
    if (section8.id !== "powerbankwkoszyku8") {
        tekstdokoszyka8 = document.createTextNode("ExtraLink EPB-069 30000MAH FAST CHARGING")
        cenadokoszyka8 = document.createTextNode("149.00 ZŁ")
        iloscdoprzedmiotu8 = document.createTextNode("1")
        paragraf22.appendChild(tekstdokoszyka8)
        paragraf23.appendChild(cenadokoszyka8)
        img8.src = "obrazy/powerbank8_1.png"
        i22.classList.add("fa-solid", "fa-trash")
        i23.classList.add("fa-solid", "fa-sort-up")
        i24.classList.add("fa-solid", "fa-caret-down")
        p9.appendChild(i22)
        button15.id = "zwieksz8"
        button16.id = "zmniejsz8"
        img8.classList.add("obrazwkoszyku")
        paragraf24.id = "liczbaprzedmiotow8"
        paragraf24.appendChild(iloscdoprzedmiotu8)
        button15.appendChild(i23)
        button16.appendChild(i24)
        section8.appendChild(img8)
        section8.appendChild(paragraf22)
        section8.appendChild(paragraf23)
        section8.appendChild(button15)
        section8.appendChild(paragraf24)
        section8.appendChild(button16)
        section8.appendChild(p9)
        section8.classList.add("przedmiotwkoszyku")
        section8.id = "powerbankwkoszyku8"
        p9.id = "trash8"
        kontener.appendChild(section8)
        pustykoszyk()
        lacznacena.innerHTML = parseInt(lacznacena.innerHTML) + 149
        let trash8 = document.getElementById("trash8")
        trash8.addEventListener("click", liczenie2)
        trash8.addEventListener("click", function smiec8() {
            section8.style.display = "none"
            z118.removeEventListener("click", clickkoszyka8)
            z118.addEventListener("click", pojawienie8)
            licznikkoszyka.innerHTML = (parseInt(licznikkoszyka.innerHTML) - parseInt(count8.innerHTML)) + 1
            county8 = 0
            licznik = (licznik - parseInt(count8.innerHTML)) + 1
            lacznacena.innerHTML = parseInt(lacznacena.innerHTML) - cena8
            cena8 = 0
            pustykoszyk()
        })
        count8 = document.getElementById("liczbaprzedmiotow8")
        let countupbtn8 = document.getElementById("zwieksz8")
        countupbtn8.addEventListener("click", liczenie)
        countupbtn8.addEventListener("click", function countup8() {
            cena8 = cena8 + 149
            lacznacena.innerHTML = parseInt(lacznacena.innerHTML) + 149
            county8 += 1
            count8.innerHTML = county8
            pustykoszyk()
        })
        let countdownbtn8 = document.getElementById("zmniejsz8")
        countdownbtn8.addEventListener("click", liczenie2)
        countdownbtn8.addEventListener("click", function countdown8() {
            if (count8.innerHTML == 1) {
                section8.style.display = "none"
                z118.removeEventListener("click", clickkoszyka8)
                z118.addEventListener("click", pojawienie8)
                county8 = 0
                cena8 -= 149
                lacznacena.innerHTML = parseInt(lacznacena.innerHTML) - 149
                pustykoszyk()
            }
            else {
                county8 -= 1
                count8.innerHTML = county8
                cena8 -= 149
                lacznacena.innerHTML = parseInt(lacznacena.innerHTML) - 149
                pustykoszyk()
            }
        })
    }

    else {
        county8 += 1
        count8.innerHTML = county8
        cena8 += 149
        lacznacena.innerHTML = parseInt(lacznacena.innerHTML) + 149
        pustykoszyk()
    }
}
function pojawienie8() {
    section8.style.display = "flex"
    county8 += 1
    count8.innerHTML = county8
    cena8 += 149
    lacznacena.innerHTML = parseInt(lacznacena.innerHTML) + 149
    pustykoszyk()
}












// ---------------------------------------------
//                 ALERT KOSZYKA
// ---------------------------------------------











let alertzakupu = document.querySelector(".alertzakupu")
let zakuptekst = document.getElementById("zakupalert")
let zaplac = document.getElementById("kup")
let okbtn2 = document.getElementById("okbtn2")
zaplac.addEventListener("click", function kupno() {
    if (lacznacena.innerHTML == 0) {
        alertzakupu.style.top = "45%"
        zakuptekst.innerHTML = "KOSZYK JEST PUSTY."
        okbtn2.addEventListener("click", ok)

    }
    else if (z12.textContent !== "WYLOGUJ") {
        log.style.display = "block"
        alert1.textContent = ""
        z34.value = ""
        z30.value = ""
        z37.value = ""
        z41.value = ""
        z42.value = ""
        z44.textContent = ""
        z37.type = "password"
        z38.style.visibility = "visible"
        z39.style.visibility = "hidden"
        z30.type = "password"
        z31.style.visibility = "visible"
        z32.style.visibility = "hidden"
        z47.value = ""
        z49.value = ""
        z45.value = ""
        ma.value = ""
        z51.textContent = ""
        z48.textContent = 555
        tresc.style.display = "none"
    }

    else {
        alertzakupu.style.top = "45%"
        zakuptekst.innerHTML = "DZIĘKUJEMY ZA ZAKUP."
        okbtn2.addEventListener("click", ok)
        
    }
})
function ok() {
    alertzakupu.style.top = "-50%"
}
let empty = document.getElementById("emptytrash")
function pustykoszyk() {
    if((section.id !== "powerbankwkoszyku1" || section.style.display == "none") && (section2.id !== "powerbankwkoszyku2" || section2.style.display == "none") && (section3.id !== "powerbankwkoszyku3" || section3.style.display == "none") && (section4.id !== "powerbankwkoszyku4" || section4.style.display == "none") && (section5.id !== "powerbankwkoszyku5" || section5.style.display == "none") && (section6.id !== "powerbankwkoszyku6" || section6.style.display == "none") && (section7.id !== "powerbankwkoszyku7" || section7.style.display == "none") && (section8.id !== "powerbankwkoszyku8" || section8.style.display == "none")){
        empty.style.visibility = "visible"
    }
    else{
        empty.style.visibility = "hidden"
    }
}






// ---------------------------------------------
//                 OPISY
// ---------------------------------------------





let tresc = document.querySelector(".tresc")
let opis1 = document.getElementById("info1")
let opis2 = document.getElementById("info2")
let opis3 = document.getElementById("info3")
let icon1 = document.getElementById("icon1")
let icon2 = document.getElementById("icon2")
let icon3 = document.getElementById("icon3")
let txt1 = document.getElementById("txt1")
let txt2 = document.getElementById("txt2")
let txt3 = document.getElementById("txt3")
opis1.addEventListener("mousemove",hovopisu)
opis1.addEventListener("mouseleave",hovopisu2)
function hovopisu(){
    icon1.style.transitionDelay - "0s"
    icon1.style.color = "#01cc8f"
    icon1.style.top = "50px"
    txt1.style.bottom = "0"
    txt1.style.opacity = "1"
    txt1.style.transitionDelay = "0.4s"
    opis1.style.boxShadow = "0 0 50px rgba(255, 255, 255, 0.8)"
    txt1.style.background = "#01cc8f"
    opis1.style.background = "rgba(255, 255, 255, 0.12)"
    txt1.style.boxShadow = "0 0 50px rgba(0, 0, 0)"
}
function hovopisu2(){
    icon1.style.transitionDelay = "0.2s"
    icon1.style.color = "white"
    icon1.style.top = "calc(50% - 60px)"
    txt1.style.bottom = "60px"
    txt1.style.opacity = "0"
    txt1.style.transitionDelay = "0s"
    opis1.style.boxShadow = "none"
    txt1.style.background = "none"
    txt1.style.borderRadius = "none"
    txt1.style.boxShadow = "none"
    opis1.style.background = "rgba(255, 255, 255, 0.055)"
}
opis2.addEventListener("mousemove",hovopisu3)
opis2.addEventListener("mouseleave",hovopisu4)
function hovopisu3(){
    icon2.style.transitionDelay - "0s"
    icon2.style.color = "#01cc8f"
    icon2.style.top = "50px"
    txt2.style.bottom = "0"
    txt2.style.opacity = "1"
    txt2.style.transitionDelay = "0.4s"
    opis2.style.boxShadow = "0 0 50px rgba(255, 255, 255, 0.8)"
    txt2.style.background = "#01cc8f"
    opis2.style.background = "rgba(255, 255, 255, 0.12)"
    txt2.style.boxShadow = "0 0 50px rgba(0, 0, 0)"
}
function hovopisu4(){
    icon2.style.transitionDelay = "0.2s"
    icon2.style.color = "white"
    icon2.style.top = "calc(50% - 60px)"
    txt2.style.bottom = "60px"
    txt2.style.opacity = "0"
    txt2.style.transitionDelay = "0s"
    opis2.style.boxShadow = "none"
    txt2.style.background = "none"
    txt2.style.borderRadius = "none"
    txt2.style.boxShadow = "none"
    opis2.style.background = "rgba(255, 255, 255, 0.055)"
}
opis3.addEventListener("mousemove",hovopisu5)
opis3.addEventListener("mouseleave",hovopisu6)
function hovopisu5(){
    icon3.style.transitionDelay - "0s"
    icon3.style.color = "#01cc8f"
    icon3.style.top = "50px"
    txt3.style.bottom = "0"
    txt3.style.opacity = "1"
    txt3.style.transitionDelay = "0.4s"
    opis3.style.boxShadow = "0 0 50px rgba(255, 255, 255, 0.8)"
    txt3.style.background = "#01cc8f"
    opis3.style.background = "rgba(255, 255, 255, 0.12)"
    txt3.style.boxShadow = "0 0 50px rgba(0, 0, 0)"
}
function hovopisu6(){
    icon3.style.transitionDelay = "0.2s"
    icon3.style.color = "white"
    icon3.style.top = "calc(50% - 60px)"
    txt3.style.bottom = "60px"
    txt3.style.opacity = "0"
    txt3.style.transitionDelay = "0s"
    opis3.style.boxShadow = "none"
    txt3.style.background = "none"
    txt3.style.borderRadius = "none"
    txt3.style.boxShadow = "none"
    opis3.style.background = "rgba(255, 255, 255, 0.055)"
}