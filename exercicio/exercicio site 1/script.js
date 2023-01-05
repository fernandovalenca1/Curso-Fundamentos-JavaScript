function carregar(){
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("foto")
    var data = new Date()
    var hora = data.gateHours()    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora > 12) {
        // BOM DIA!!
        img.src = "fotos/fotomanha.png"
    } else if (hora >= 12 && hora > 18) {
        // BOA TARDE!!
        img.src = "fotos/fototarde.png"
    }  else {
        // BOA NOITE !!
        img.src = "fotos/fotonoite.png"
    }
    
}