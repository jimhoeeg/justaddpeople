/*
 * Bygger index.html til GitHub Pages ud fra salonbyggeren.html.
 *
 * salonbyggeren.html er skrevet uden <!doctype>, <html>, <head> og <body>,
 * fordi Artifact-udgivelsen selv pakker filen ind. Et rigtigt website har
 * brug for den ramme — ikke mindst viewport-metaen, uden hvilken siden
 * bliver ulæselig på mobil. Kør: node build.js
 */
const fs = require('fs');

const kilde = fs.readFileSync('salonbyggeren.html', 'utf8');
const skil = kilde.indexOf('</style>') + '</style>'.length;
if (skil < 10) throw new Error('Fandt ikke </style> i salonbyggeren.html');

const hoved = kilde.slice(0, skil).replace(
  '<meta charset="utf-8">',
  '<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n' +
  '<meta name="robots" content="noindex, nofollow">\n' +
  '<meta name="description" content="Prototype: konfigurator hvor salonejeren former sin salon, ' +
  'får faglige indsigter undervejs og til sidst en samlet pakke, pris og rapport.">'
);
const krop = kilde.slice(skil);

fs.writeFileSync('index.html',
  '<!doctype html>\n<html lang="da">\n<head>\n' + hoved.trim() + '\n</head>\n<body>' + krop + '\n</body>\n</html>\n');

console.log('index.html bygget — ' + fs.statSync('index.html').size + ' bytes');
