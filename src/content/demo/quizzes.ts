// Legacy prototype content only. Not an approved curriculum or source database.
export interface DemoQuestion {
  q: string;
  a: string[];
  correct: number;
  why: string;
  notes: number[];
}

export const quizzes: DemoQuestion[][] = [[
{q:'Ile półtonów ma tercja wielka?',a:['2 półtony','3 półtony','4 półtony','5 półtonów'],correct:2,why:'Tercja wielka obejmuje cztery półtony, na przykład C–E.',notes:[60,64]},
{q:'Który interwał słyszysz?',a:['Sekunda wielka','Tercja mała','Kwarta czysta','Kwinta czysta'],correct:3,why:'C–G to kwinta czysta: siedem półtonów.',notes:[60,67]},
{q:'Który interwał słyszysz teraz?',a:['Tercja mała','Tercja wielka','Seksta wielka','Oktawa'],correct:0,why:'C–Es to tercja mała: trzy półtony.',notes:[60,63]}],
[{q:'Które dźwięki tworzą trójdźwięk C-dur?',a:['C–Es–G','C–E–G','C–E–Gis','C–D–G'],correct:1,why:'Trójdźwięk durowy składa się z tercji wielkiej i tercji małej.',notes:[60,64,67]},{q:'Ile znaków przykluczowych ma G-dur?',a:['Jeden krzyżyk','Jeden bemol','Dwa krzyżyki','Żadnego'],correct:0,why:'W G-dur podwyższamy F do Fis.',notes:[67,69,71]}],
[{q:'Do której grupy należy klarnet?',a:['Smyczkowe','Dęte drewniane','Dęte blaszane','Perkusyjne'],correct:1,why:'Klarnet jest instrumentem dętym drewnianym z pojedynczym stroikiem.',notes:[]},{q:'Który kompozytor reprezentuje barok?',a:['Fryderyk Chopin','Claude Debussy','Johann Sebastian Bach','Witold Lutosławski'],correct:2,why:'Bach jest jednym z najważniejszych kompozytorów epoki baroku.',notes:[]}]];
