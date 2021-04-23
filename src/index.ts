/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

// You can write your WorkAdventure script here, if any.
// The "WA" global object is available from anywhere.

console.log('Script started successfully');
WA.onEnterZone('cards_against_humanity', () => {
    WA.openTab('https://picturecards.online/static/index.html');
});
WA.onEnterZone('Codenames', () => {
    WA.openTab('https://codenames.game/');
});
WA.onEnterZone('scribbl', () => {
    WA.openTab('https://skribbl.io/');
});
WA.onEnterZone('gartic', () => {
    WA.openTab('https://garticphone.com/de');
});