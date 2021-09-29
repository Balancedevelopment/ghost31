module.exports = {
        name: "yardım",
  aliases:["help"],
        code: ` $author[$usertag;$authorAvatar]
        $description[
        **》?partner-bul**
        \`Sunucu ID lerini gösterir.\`
        
        **》?partner**
        \`Partner sorumlusu, text v.b. şeyleri ayarlamanızı sağlar.\`
        
        **》?ayarlar**
        \`Sunucu ayarlarını gösterir.\`
        
        **》?sunucu-bilgi**
        \`Kendi sunucunuz ya da ID sini yazdığınız sunucunun bilgisinisi gösterir.\`
        
        **》?onayla**
        \`Partner onaylarsınız.\`
        
        **》?reddet**
        \`Partner reddedersiniz.\`
        
        **》?eval**
        \`Sahib komutudur.\`
        
        **》?ping**
        \`Botun pingini gösterir.\`
        ]
        $footer[$username[$clientID];$userAvatar[$clientID]]
        $addTimestamp
        $color[BLUE]
        `
}