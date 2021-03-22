export function renderData(data) {
    const resultsContainer = document.getElementById('results-container');
    if (!resultsContainer) {
        return;
    }
    resultsContainer.innerHTML = '';
    const ul = document.createElement('UL');
    ul.className = 'list-group mx-auto mb-5 shadow-sm';
    ul.style.maxWidth = '400px';
    data.forEach((item) => {
        const li = document.createElement('LI');
        li.className = 'd-flex list-group-item text-secondary';
        for (let key in item) {
            if (item.hasOwnProperty(key)) {
                const span = document.createElement('SPAN');
                span.className = 'flex-1';
                span.textContent = key + ': ' + item[key];
                li.appendChild(span);
            }
        }
        ul.appendChild(li);
    });
    resultsContainer.appendChild(ul);
}
