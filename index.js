const fs = require('fs');
const ytdl = require('ytdl-core');
const ffmpegStatic = require('ffmpeg-static');
const ffmpegfluent = require('fluent-ffmpeg'); //nie wiem czy to jest ostatecznie potrzebne, pewnie nie.
const ffmpeg = require('fluent-ffmpeg');
const prompt = require('prompt-sync')();
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
}

rd.on('line', function(line){
    const array = [line];
    array.forEach(element =>{
    const txt = element.split(' ');
    const url = txt[0];
    const poczatek = txt[1];
    //ytdl:
    let videoID = ytdl.getURLVideoID(url);
    ytdl.getInfo(videoID).then(console.log("Sprawdzanko")).then(info => {
        var nazwa = info.videoDetails.title;
        let stream = ytdl(url,{
            quality: "highestaudio",
        });
        var content = `
        "${nazwa}"
        {
            "Path"          "${katalog}/${nazwa}.mp3"
            "Flags"         "${flaga}"
        } `
        fs.appendFile(`${tekstowy}`, content, err =>{
           if(err) console.error(err);
        })
        stream.pipe(fs.createWriteStream(`${nazwa}.mp4`));
        console.log("Nazwa: " + info.videoDetails.title + ` Adres URL: ${url}`);
        stream.on("finish", () =>{
        //ffmpeg:
            console.log("Ukonczono Pobieranie pliku .mp4");
            ffmpeg()
            .input(`${nazwa}.mp4`)
            .audioFilters([
                {
                  filter: 'afade',
                  options: 't=in:st=0:d=5'
                },
                {
                  filter: 'afade',
                  options: 't=out:st=5:d=5'
                }
              ])
            .setStartTime(poczatek)
            .duration(koniec)
            .audioBitrate(128)
            .saveToFile(`${katalog}/${nazwa}.mp3`)
            .on('progress', (progress) => {
                if (progress.percent){
                    console.log(`Processing...`);
                }
            })
            .on('end', () => {
                console.log('Ukonczono konwertowanie na .mp3');
            //Usuwanie pliku .mp4
                try {
                    fs.unlinkSync(`${nazwa}.mp4`);
                    console.log("Usunieto plik .mp4 \n************************************\ndi ent.");
                  } catch (error) {
                    console.log(error);
                  }
            //Koniec usuwania pliku .mp4
            })
            .on('error', (error) =>{
                console.error(error);

            });
        });
        stream.on('error', (error) =>{
            console.error(error);
        })
    })

    })
})
rd.on('close', function(){
 //to w sumie tak jest bo jest 
 //internet mowil ze powinno byc
 //no to jest
 //ale to nic nie daje
 //chyba ze dupy
})
