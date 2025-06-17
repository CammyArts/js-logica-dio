let nomeHeroi = "Camila"
let experienciaXp = 10001

if (experienciaXp < 1000){
    //o '+' no console.log está a concatenar o conteudo do mesmo
    console.log('O Heroi de nome ' + nomeHeroi + ' está no nível de Ferro')
}else if (experienciaXp >= 1001 && experienciaXp <= 2000){
    console.log('O Heroi de nome ' + nomeHeroi + ' está no nível de Bronze')
}else if (experienciaXp >= 2001 && experienciaXp <= 5000){
    console.log('O Heroi de nome ' + nomeHeroi + ' está no nível de Prata')
}else if (experienciaXp >= 6001 && experienciaXp <= 7000){
    console.log('O Heroi de nome ' + nomeHeroi + ' está no nível de Ouro')
}else if (experienciaXp >= 7001 && experienciaXp <= 8000){
    console.log('O Heroi de nome ' + nomeHeroi + ' está no nível de Platina')
}else if (experienciaXp >= 8001 && experienciaXp <= 9000){
    console.log('O Heroi de nome ' + nomeHeroi + ' está no nível de Ascendente')
}else if (experienciaXp >= 9001 && experienciaXp <= 10000){
    console.log('O Heroi de nome ' + nomeHeroi + ' está no nível de Imortal')
}else{
    console.log('O Heroi de nome ' + nomeHeroi + ' está no nível de Radiante')
}

    