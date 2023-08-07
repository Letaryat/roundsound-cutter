# roundsound-cutter
 Script in node.js that creates Roundsounds for CSGO community servers
 Skrypt napisany w node.js ktory tworzy Roundsoundy dla serwerow spolecznosciowych CSGO.
 
# PL
### Korzystanie:
Musisz posiadac zainstalowanego node.js aby korzystac ze skryptu.
> npm i
> node index.js

### Przydatne informacje:
 [^1]Polecam wyczyscic czasem plik z kodem do configu. (Za kazdym razem jak korzystasz ze skryptu to nie tworzy nowego pliku a nadpisuje wczesniejszy wiec bedzie tego sporo).
 [^2]Czasem potrafi wyskoczyc blad. Najprawdopodobniej spowodowany prawami autorskimi. Wtedy trzeba po prostu pominac piosenke i usunac url. Jest to ta piosenka na ktorej sie po prostu program zawiesil.
 [^3]W pliku **muzyka.txt** dodajemy url oraz poczatek piosenki w takim formacie:
 * *https://www.youtube.com/watch?v=dQw4w9WgXcQ 0:45* * lub:  * *https://www.youtube.com/watch?v=dQw4w9WgXcQ 45* * 
 Pamietajcie o spacji miedzy **url** a **czasem**.
 [^4]W pliku **index.js** stworzylem kilka zmiennych ktore mozecie pozmieniac. (nazwe katalogu w ktorym maja pojawic sie .mp3, nazwe pliku z zawartoscia do configu, ile sekund ma trwac roundsound, czy w zawartosci do configu ma byc jakas okreslona flaga).


# ENG

### Usage:
You need to have node.js installed on your pc to use this script.
> npm i 
> node index.js

### Useful informations:
 [^1]Remember to delete sometimes file which obtains contents to config for csgo plugin. Everytime you use this script contents doesn't delete itself.
 [^2]Sometimes there can ocur an error that is connected probably connected with copyrights. You need to delete the url on which scripts showed error and just move on without this particular song. 
 [^3]In file **muzyka.txt** we need to paste the url and also give the start of roundsound in this format:
 * *https://www.youtube.com/watch?v=dQw4w9WgXcQ 0:45* * lub:  * *https://www.youtube.com/watch?v=dQw4w9WgXcQ 45* * 
 Remember about space between **url** and **time**
 [^4]In **index.js** I created a few variables that you can change. (dir name where .mp3 will be, name of the file with .cfg content, how many seconds roundsound should be, if in plugin config roundsounds should be for a specific flag only.)