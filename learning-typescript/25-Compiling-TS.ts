// Browseri samo razumiju JavaScript i neznaju koji kurac su typovi i sve to
// Instalirali smo onaj paket i sada mozemo porenuti tsc -init
// On nam napravi tsconfig ovaj dole i postavi nam sve
// u targetu postavimo u koji ce nam js prevesti - jer on prevada u javascript

// kompajliramo sa tsc .\index.ts

// Ako imamo vise datoteka, pokretanjem komande tsc on ce sve prevesti
// Inace zelimo da nam sve u jedan, to radimo u tsconfig pod types objektu - to sve ima u dokumentaciji pa se moze vidit i namjestit

// includamo isto sa tim naredbama - na kraju ispadne ko u tailwind configu kad se includa - sta sve zelimo da se includa i onda nam on automatski generira js svih typescripta

// outdir se govori di ce se output generirati

// Ako instaliramo neki library - npr. axoius. Importamo ga i ctrl + click i otvori nam se vec definirani tipovi za taj library index.d.ts i tu su nam sve definicije tipova podataka
