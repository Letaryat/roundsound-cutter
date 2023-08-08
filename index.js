const fs = require('fs');
const yt = require("yt-converter");
const ffmpegStatic = require('ffmpeg-static');
const ffmpegfluent = require('fluent-ffmpeg'); //nie wiem czy to jest ostatecznie potrzebne pewnie nie
const ffmpeg = require('fluent-ffmpeg');
const readline = require('readline');
ffmpeg.setFfmpegPath(ffmpegStatic);

/*
EDYTUJ TO NIZEJ CO NIE ZIELONE OCZYWISCIE. TUTAJ SOBIE MOZESZ POZMIENIAC NAZWY:
- KATALOGU - STWORZY KATALOG O TAKIEJ NAZWIE I SCIEZKE DO CONFIGU PLUGINU pMVPMusic
- PLIKU TEKSTOWEGO - W KTORYM TEN CONFIG BEDZIE SIE ZNAJDOWAC
- KONIEC - CZYLI ILE SEKUND PIOSENKA MA TRWAC
- FLAGA - Tak jak przy korzystaniu z pluginu.
*/
var katalog = "pioseneczki";
var tekstowy = "output.txt";
var koniec = 10
var flaga = '';

//KONIEC. NIZEJ TEGO CO JEST NIE ZMIENIAJ BO NIE WARTO CHYBA ZE WIESZ CO I JAK BO JA NP SAM NIE WIEM CO TU SIE DZIEJE ALE DZIALA

var rd = readline.createInterface({
    input: fs.createReadStream('muzyka.txt')
})

var dir = `./${katalog}`;
if(!fs.existsSync(dir)){
    fs.mkdirSync(dir);
};
if(!fs.existsSync(`./temp`)){
  fs.mkdirSync(`./temp`);
};

rd.on('line', function(line){
    const array = [line];
    array.forEach(element =>{
    const txt = element.split(' ');
    const url = txt[0];
    const poczatek = txt[1];
    //yt:
    yt.getInfo(`${url}`).then(info => {
        const test = info['title'];
        const nazwa = test.replace('/', '');
        const onData = console.log('Robionko');
        var content = `
        "${nazwa}"
        {
            "Path"          "${katalog}/${nazwa}.mp3"
            "Flags"         "${flaga}"
        } `
        fs.appendFile(`${tekstowy}`, content, err =>{
           if(err) console.error(err);
        })
        function onClose(){
            ffmpeg()
            .input(`./temp/${nazwa}.mp3`)
            .setStartTime(poczatek)
            .duration(koniec)
          /*Tutaj jest Fade in i fade-out w piosenkach. Mozna usunac zaczynajac z tego miejsca */
          //st = punkt rozpoczecia | d = duration / czas trwania (wszystko w sekundach)
            .audioFilters([
                {
                  filter: 'afade',
                  options: 't=in:st=0:d=3'
                },
                {
                  filter: 'afade',
                  options: 't=out:st=7:d=3'
                }
              ])
            /*Konczac tu*/
            .saveToFile(`${katalog}/${nazwa}.mp3`)
            .on('progress', (progress) => {
                if (progress.percent){
                   console.log(`Processing...`);
                }
                })
                .on('end', () => {
                 console.log('Ukonczono konwertowanie na .mp3');
                 try {
                    fs.unlinkSync(`./temp/${nazwa}.mp3`);
                    console.log("Usunieto plik temp \n************************************\ndi ent.");
                  } catch (error) {
                    console.log(error);
                  }
                })
        }
        yt.convertAudio({
            url: `${url}`,
            itag: 140,
            directoryDownload: `./temp`
        }, onData, onClose)
    })
});
})
rd.on('close', function(){
 //to w sumie tak jest bo jest 
 //internet mowil ze powinno byc
 //no to jest
 //ale to nic nie daje
 //chyba ze dupy
})
