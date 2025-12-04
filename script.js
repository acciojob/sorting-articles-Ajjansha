//your JS code here. If required.
const bands = [
    'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil',
    'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State',
    'We Came as Romans', 'Counterparts', 'Oh, Sleeper',
    'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
];

// Function to remove 'a', 'an', 'the' at the beginning
function stripArticle(title) {
    return title.toLowerCase().replace(/^(a |an |the )/, '');
}

// Sort ignoring articles
const sortedBands = bands.sort((a, b) =>
    stripArticle(a) > stripArticle(b) ? 1 : -1
);

// Add to HTML
const list = document.getElementById('band');
sortedBands.forEach(band => {
    const li = document.createElement('li');
    li.textContent = band;
    list.appendChild(li);
});