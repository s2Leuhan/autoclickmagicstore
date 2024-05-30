// ==UserScript==
// @name         AutoClick
// @namespace    http://tampermonkey.net/
// @version      2024-05-28
// @description  try to take over the world!
// @author       You
// @match        https://magic.store/profile/validation-tasks
// @icon         https://www.google.com/s2/favicons?sz=64&domain=magic.store
// @grant        window.close
// @grant        unsafeWindow
// ==/UserScript==

(function() {
    'use strict';

    function clickButtonAndFocusMainTab() {
        setTimeout(() => {
            const button = document.querySelector("body > div.w-full.flex-auto.flex.flex-col.lg\\:pl-sidebar.max-lg\\:pb-navbar.pt-navbar.lg\\:pt-0 > div.lg\\:pl-profile-sidebar.flex.flex-col.flex-auto > main > div > div.flex-grow.flex.flex-col > ul > li:nth-child(1) > article > div.collapsible.collapsible-open > div > section > div > div.flex.flex-col.gap-4.w-full > button");
            if (button) {
                button.click();
                console.log('First button clicked.');
                setTimeout(() => {
                    const secondButton = document.querySelector("a.button.button-solid-secondary.button-lg");
                    if (secondButton) {
                        console.log('Second button clicked.');
                        secondButton.click();
                        setTimeout(() => {
                            const thirdButton = document.querySelector("div > label:nth-child(2) > div > label > div");
                            if (thirdButton) {
                                thirdButton.click();
                                console.log('Third button clicked.');
                                setTimeout(() => {
                                    const fourthButton = document.querySelector("button.button.button-solid-primary.button-lg.mt-4.w-full");
                                    if (fourthButton) {
                                        fourthButton.click();
                                        console.log('Fourth button clicked.');
                                        setTimeout(() => {
                                            const fifthButton = document.querySelector("div > button.button.button-solid-primary.button-lg.flex-grow");
                                            if (fifthButton) {
                                                fifthButton.click();
                                                console.log('Fifth button clicked.');
                                                // Check for the button every 10 seconds
                                                const intervalId = setInterval(() => {
                                                    const finalButton = document.querySelector("button.button.button-solid-primary.button-lg.w-full.flex-grow");
                                                    if (finalButton) {
                                                        finalButton.click();
                                                        console.log('Final button clicked.');
                                                        clearInterval(intervalId); // Stop checking once the button is clicked
                                                        setTimeout(() => {
                                                            location.reload();
                                                        }, 1500); // Reload the page after 1 second
                                                    } else {
                                                        console.log('Final button not found, retrying in 10 seconds...');
                                                    }
                                                }, 10000); // Check every 10 seconds
                                            } else {
                                                console.log('Fifth button not found.');
                                            }
                                        }, 1500); // Espera 2 segundos después de hacer clic en el cuarto botón
                                    } else {
                                        console.log('Fourth button not found.');
                                    }
                                }, 1500); // Espera 1 segundo después de hacer clic en el tercer botón
                            } else {
                                console.log('Third button not found.');
                            }
                        }, 15000); // Espera 15 segundos después de hacer clic en el segundo botón
                    } else {
                        console.log('Second button not found.');
                    }
                }, 2000);
            } else {
                console.log('First button not found.');
            }
        }, 5000); // Espera 5 segundos después de cargar la página
    }

    window.addEventListener('load', clickButtonAndFocusMainTab);
})();
