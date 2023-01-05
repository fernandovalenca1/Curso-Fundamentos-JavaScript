function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res= document.querySelector("div#res") 
    if (fano.value.length ==0 || Number(fano.value) > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
    var gênero =""
    var img = document.createElement("img")
    img.setAttribute("id", "foto")
    if (fsex[0].checked) {
        gênero = 'Homem'
        if (idade >=0 && idade < 10) {
            //Criança    
            img.setAttribute("src", "c:\Users\ASUS\Desktop\Curso em vídeo Exercícios completos\fotos exercicio site 2\bebemenino.png")        
        } else if (idade <21) {
            // Jovem 
            img.setAttribute("src", "c:\Users\ASUS\Desktop\Curso em vídeo Exercícios completos\fotos exercicio site 2\adolecentehomem.png c:\Users\ASUS\Desktop\Curso em vídeo Exercícios completos\fotos exercicio site 2\adolecentemulher.png c:\Users\ASUS\Desktop\Curso em vídeo Exercícios completos\fotos exercicio site 2\bebemenino.png")                     
        } else if (idade <50) {
            //Adulto  
            img.setAttribute("src", "c:\Users\ASUS\Desktop\Curso em vídeo Exercícios completos\fotos exercicio site 2\homemadulta.png")                  
         } else {
            //Idoso
            img.setAttribute("src", "c:\Users\ASUS\Desktop\Curso em vídeo Exercícios completos\fotos exercicio site 2\homemidoso.png") 
           
         }
    }  else if (fsex[1].checked) {
        gênero = 'Mulher'
        if (idade >=0 && idade < 10) {
            //Criança      
            img.setAttribute("src", "c:\Users\ASUS\Desktop\Curso em vídeo Exercícios completos\fotos exercicio site 2\pipinha.png")       
        } else if (idade <21) {
            // Jovem        
            img.setAttribute("src", "c:\Users\ASUS\Desktop\Curso em vídeo Exercícios completos\fotos exercicio site 2\adolecentemulher.png")               
        } else if (idade <50) {
            //Adulto      
            img.setAttribute("src", "c:\Users\ASUS\Desktop\Curso em vídeo Exercícios completos\fotos exercicio site 2\mulheradulta.png")              
         } else {
            //Idoso
            img.setAttribute("src", "c:\Users\ASUS\Desktop\Curso em vídeo Exercícios completos\fotos exercicio site 2\mulheridosa.png") 
           
         }
        
        
    }

    res.style.textAlign = "center"
    res.innerHTML= `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
}
    

}
    
    



      