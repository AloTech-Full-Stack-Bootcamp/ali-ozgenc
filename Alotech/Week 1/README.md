<h1>WEEK 1</h1>

- Express ile static serve
- Express ile path e göre serve heroku deployu ile
- Application Server olarak Express ile path e göre serve digitalocean üzerinde deploy ettim, web server olarak nginx kullanıp ıp için domain name satın aldım certbot ile ssl sertifikası uyguladım nginx konfigürasyonuyla servera bağlanmak için ssh bağlantısı kullandım güvenlik amaçlı best practiceler olabildiğince yaptım root access kapatmak unattended-update yapmak nmap kullanmak gibi tek bir tcp connection kullanan http/2 yi kullandım birden fazla dosya için isteğinde bulununca yüklenme süresini arttırmak için ayrıca sunulan http sayfalarında google font ve bootstrap kullandım basitçe
- Koa ile static serve ayrıca deploy heroku üzerinde
- 2 farklı branch te abort ve stream örneği
- Crud işlemleri
- npmjs üzerinde paylaşılmış cli crud için alternatif bir proje npx creact-app yazarak bash kullanan terminalde denenebilir(npm ve node güncel olmalı)
- Repl işlemini terminal üzerinde gerçekleştirdim
- Mongodb den veri çeken bir Express server kurdum template engine olarak react kullandım html dosyaları dinamik olarak veritabanında veri çekerek cevaplanıyor( .env içerisiden bağlantı linki alınıdığından çalışmayacaktır onu çıkardım isteğe göre gösterebilirim)

<h1>Deploy Linkleri</h1>

[koa-static serve-deploy](https://koadeploy.herokuapp.com/)

[express-path-deploy](https://express-deploy-patika.herokuapp.com/)

[digitalocean-nginx-https-domain name-deploy](https://ozgencdev.me/)
