# Codierung und Geheimhaltung

- Euer Unternehmen ist in einem Geheimdienst tätig und sorgt für die sichere Codierung wichtiger Nachrichten. Dafür schreibt ihr ein Programm, welches einen Input, ein bereits verschlüsselter Code, nach verschiedenen Mustern weiter verändert, um die Sicherheitsstufe zu erhöhen. Die wichtigsten und geheimsten Nachrichten der Welt sollen dann mit eurer Software codiert werden, alles hängt davon ab!
- Ihr arbeitet im Team, wobei jeder seinem eigenen Spezialgebiet nachgeht und eine eigene Funktion nach gewissen Regeln aufstellt. Gute Zusammenarbeit ist dennoch gefragt, denn am Ende werden die einzelnen Funktionen für das Programm zusammengefügt.
- Sprecht euch vorher ab, wann ihr die einzelnen Programm-Parts/ Funktionen fertiggestellt haben wollt. Plant genug Zeit ein, um die einzelnen Funktionen zu importieren und das ganze Programm funktionstüchtig zusammenzusetzen.

  ![image](https://github.com/WD23-D05/PB-WS-D01/assets/132473559/57e6e9f7-6b53-46fb-8bd0-b45dc8078c1e)


======================================================================

**Teil 1**

## PROGRAMM-PART A: Bereinigung codierter Nachrichten

`const input = "s?§$f5wa&$=6eb8Ad1hs12z1,89i4w&/ajkhuyPs5§irf95kfoguh6(&opg%fh"`

- HINWEIS: Du kannst alle folgenden Teilaufgaben des Programm-Parts A in einer function programmieren!
- Entferne aus dem gegebenen Input String alle Sonderzeichen und Zahlen
  - dazu zählen also alle Zeichen die kein Buchstabe sind!
- Entferne doppelte Buchstaben aus dem String (Beispiel: aus 'erster' wird dann 'erst', da das 2. e und das 2. r entfernt wurden)
- Kehre die Reihenfolge des Strings um.
- Der String soll für den nächsten Teil - der von einem anderen Teammitglied gemacht wird - so vobereitet werden, dass er zum Schluss nicht kürzer als 20 Zeichen ist. Wenn du bis hier her alles richtig gemacht hast, sollte der veränderte Input auch nicht kürzer sein. Bessere bei Bedarf noch einmal nach. 
- Programmiere dennoch eine Prüfung und stelle sicher, dass kein von dir herausgegebener Output weitergegeben wird, der kürzer als 20 Zeichen ist. 
- Dein Output sollte wie folgt lauten => `pgorPyukjizhdAbeawfs`

======================================================================

**Teil 2**

## PROGRAMM-PART B: Buchstaben verschieben

`const inputAusTeil1 = "pgorPyukjizhdAbeawfs"`

- HINWEIS: Du kannst alle folgenden Teilaufgaben des Programm-Parts B in einer function programmieren! Du kannst vorerst mit dem Beispiel `inputAusTeil1` arbeiten. Ihr solltet später beim zusammenfügen eurer Teile den Input entsprechend anpassen.
- Verschiebe alle Buchstaben im Input String um eine bestimmte Anzahl im Alphabet.
  - Verschiebe alle "b", "d", "e", "v", "w" um eine Stelle. Beispiele: `b => c` oder `E => F`
  - Verschiebe alle anderen Buchstaben um 2 Stellen. Beispiele: `g => i` oder `M => O`
- Entferne eventuell entstandene Sonderzeichen und Zahlen
  - dazu zählen alle Zeichen die keine Buchstaben sind!
- Kehre die Reihenfolge des Strings um.
- Dein Output sollte wie folgt lauten => `uhxcfcCejklmwRtqir`

======================================================================

**Teil 3**

## PROGRAMM-PART C: Ziffern-Codierung

`const inputAusTeil2 = "uhxcfcCejklmwRtqir"`

- HINWEIS: Du kannst alle folgenden Teilaufgaben des Programm-Parts C in einer function programmieren! Du kannst vorerst mit dem Beispiel `inputAusTeil2` arbeiten. Ihr solltet später beim zusammenfügen eurer Teile den Input entsprechend anpassen.
- Falls in dem String Großbuchstaben enthalten sind, setze den ganzen String in lowercase.
- Wandle jeden Buchstaben in eine Zahl um und speichere sie in einem Array. Gehe dabei wie folgt vor: `a => 0`, `b => 1`, `c => 2`, `d => 3` ... `z => 25`
- Wenn eine Zahl aus 2 Ziffern besteht (z.B. weil ein L gegen eine 11 getauscht wurde), ersetzt ihr die Zahl mit der Quersumme.
- Kehre die Reihenfolge des Arrays um.
- Dein Output Array sollte wie folgt lauten => `[8, 8, 7, 10, 8, 4, 3, 2, 1, 9, 4, 2, 2, 5, 2, 5, 7, 2]`

======================================================================

**Teil 4**

## PROGRAMM-PART D: Schlüssel-Codierung

`const inputAusTeil3 = [8, 8, 7, 10, 8, 4, 3, 2, 1, 9, 4, 2, 2, 5, 2, 5, 7, 2]`

- HINWEIS: Du kannst alle folgenden Teilaufgaben des Programm-Parts D in einer function programmieren! Du kannst vorerst mit dem Beispiel `inputAusTeil3` arbeiten. Ihr solltet später beim zusammenfügen eurer Teile den Input entsprechend anpassen.
- Die Software überprüft den Wert jedes Datensatzes und die Werte einiger seiner Nachbarn. Der Datensatz wird um 10 erhöht, wenn er kleiner oder gleich dem Wert eines dieser Nachbarn ist.
- Für jede Zahl wird das folgende Muster als Codier-Schlüssel abgeglichen, wobei die Position "A" mit der Position "V" verglichen wird:

![image](https://github.com/WD23-D05/PB-WS-D01-02/assets/132473559/43d806b9-ad54-4ce0-8471-1f2e73801a9e)

  `[V, _, A, _, V]`
  
- '_' stehen für die Nachbarwerte, die ignoriert werden. 
- Positionen jenseits der 'V's, ganz links oder ganz rechts, werden ebenfalls ignoriert.
- Befindet sich die "A"-Position in der Nähe des linken oder rechten Randes und hat keine "V"-Position als Nachbarn, wird nur eine Seite berücksichtigt.

- Wenn die Werte in einer Datensatzdatei zum Beispiel wie folgt lauten
  `[14, 5, 2, 89, 3, 24, 19, 84, 79, 79, 79]`
- Die erwarteten Werte nach der Ausführung des Schadprogramms wären:
  `[14, 15, 12, 89, 13, 34, 29, 84, 89, 89, 89]`

![image](https://github.com/WD23-D05/PB-WS-D01-02/assets/132473559/f0e63d0c-126d-46a2-a5ac-e5c27a49ae77)

Implementieren Sie die Simulationsfunktion so, dass das Verhalten der Malware für weitere Untersuchungen repliziert wird.

Solltet ihr alles richtig gemacht haben, sollte euer Output nach diesem Schritt wie folgt lauten: `[8, 18, 17, 10,  8, 14, 13, 12, 11, 9,  4, 12, 12, 15, 12, 15,  7, 12]`

