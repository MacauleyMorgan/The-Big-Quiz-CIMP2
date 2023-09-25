let themeSwitcher = document.getElementById('theme-switcher');
let themeText = document.getElementById('alt-theme').innerText;

/** Gets CSS variables for theme switch */
window.getComputedStyle(document.documentElement).getPropertyValue('--primary-color');
window.getComputedStyle(document.documentElement).getPropertyValue('--secondary-color');
window.getComputedStyle(document.documentElement).getPropertyValue('--tertiary-color');

themeSwitcher.addEventListener('click', function () {
        /** Light mode active */
        if (themeText == 'LIGHT') {
                /** Changes root file variables */
                document.documentElement.style.setProperty('--primary-color', '#e9ecef');
                document.documentElement.style.setProperty('--secondary-color', '#4895ef');
                document.documentElement.style.setProperty('--tertiary-color', '#fff');
                /** Changes text color for contrast purposes */
                document.getElementById('theme-switcher').style.color = 'black';
                document.getElementById('title').style.color = 'black';
                document.getElementById('remaining-question-para').style.color = 'black';
                /** Changes text and current state of variable */
                themeText = 'DARK';
                document.getElementById('alt-theme').innerText = 'DARK';
                localStorage.setItem('theme-switcher', 'LIGHT');
        }
        /** Dark mode active */
        else if (themeText == 'DARK') { 
                /** Changes root file variables */
                document.documentElement.style.setProperty('--primary-color', '#000814');
                document.documentElement.style.setProperty('--secondary-color', '#264653');
                document.documentElement.style.setProperty('--tertiary-color', '#d9d9d9');
                /** Changes text color for contrast purposes */
                document.getElementById('theme-switcher').style.color = 'white';
                document.getElementById('title').style.color = 'white';
                document.getElementById('remaining-question-para').style.color = 'white';
                /** Changes text and current state of variable */
                themeText = 'LIGHT';
                document.getElementById('alt-theme').innerText = 'LIGHT';
                localStorage.setItem('theme-switcher', 'DARK');
        }
});