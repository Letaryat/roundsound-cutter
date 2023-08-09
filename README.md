# roundsound-cutter
 Skrypt napisany w node.js ktory tworzy Roundsoundy dla serwerow spolecznosciowych CSGO. Domyslnie roundsound trwa 10 sekund. Dodaje Fade-in okolo 3 sekund oraz Fade-out okolo 3 sekund.

 Script in node.js that creates Roundsounds for CSGO community servers. By default roundsound lasts 10 seconds. It adds fade-in (about 3 seconds) and fade-out (about 3 seconds)

 
# PL
### Korzystanie:
Musisz posiadac zainstalowanego node.js aby korzystac ze skryptu.
```bash
npm i
node index.js 
```
### Przydatne informacje:
 - Automatycznie tworzy zawartosc do configu pluginu pMVPMusic.
 - W pliku **index.js** stworzylem kilka zmiennych ktore mozecie pozmieniac. (nazwe katalogu w ktorym maja pojawic sie .mp3, nazwe pliku z zawartoscia do configu, ile sekund ma trwac roundsound, czy w zawartosci do configu ma byc jakas okreslona flaga).
 - Polecam wyczyscic czasem plik z kodem do configu. (Za kazdym razem jak korzystasz ze skryptu to nie tworzy nowego pliku a nadpisuje wczesniejszy wiec bedzie tego sporo).

 - ~~Czasem potrafi wyskoczyc blad. Najprawdopodobniej spowodowany prawami autorskimi. Wtedy trzeba po prostu pominac piosenke i usunac url. Jest to ta piosenka na ktorej sie po prostu program zawiesil.~~ - Zmieniony pakiet, nie powinno miec to juz miejsca.
 - W pliku **muzyka.txt** dodajemy url oraz poczatek piosenki w takim formacie:
```bash
https://www.youtube.com/watch?v=dQw4w9WgXcQ 0:45
https://www.youtube.com/watch?v=dQw4w9WgXcQ 45
```

 Pamietajcie o spacji miedzy **url** a **czasem**. Piosenek moze byc kilka ale musza byc w nastepnej linii tak jak w przykladzie powyzej. Czas moze byc w samych sekundach lub w minutach.


# ENG

### Usage:
You need to have node.js installed on your pc to use this script.
```bash
npm i
node index.js 
```

### Useful informations:
 - Creates automatically contents for CSGO plugin pMVPMusic Config.
 - In **index.js** I created a few variables that you can change. (dir name where .mp3 will be, name of the file with .cfg content, how many seconds roundsound should be, if in plugin config roundsounds should be for a specific flag only.)
 - Remember to delete sometimes file which obtains contents to config for csgo plugin. Everytime you use this script contents doesn't delete themselves.

 - ~~Sometimes there can ocur an error that is connected probably connected with copyrights. You need to delete the url on which scripts showed error and just move on without this particular song.~~ - Changed package, It shouldn't happen anymore.
 - In file **muzyka.txt** we need to paste the url and also give the start of roundsound in this format:
```bash
https://www.youtube.com/watch?v=dQw4w9WgXcQ 0:45
https://www.youtube.com/watch?v=dQw4w9WgXcQ 45
```
 Remember about space between **url** and **time**. There can be multiple URL's in the "muzyka.txt" file but every URL must be in the next line like in the example above. Beginning of song can be in seconds or minutes.
