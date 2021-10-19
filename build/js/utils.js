export function qs(e, t = document) {
    return t.querySelector(e);
}
export function getLocalStorage(e) {
    return JSON.parse(localStorage.getItem(e));
}
export function setLocalStorage(e, t) {
    localStorage.setItem(e, JSON.stringify(t));
}
export function setClick(e, t) {
    qs(e).addEventListener("touchend", (n) => {
            n.preventDefault(), t();
        }),
        qs(e).addEventListener("click", t);
}

export function getParams() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const product = urlParams.get("product");
    return product;
}

export function renderListWithTemplate(template,parentElement, list, callback ){
          const clone = template.content.cloneNode(true);
          if (callback) {
              clone= callback(clone,list)
          }
          parentElement.appendChild(clone);

}

export async function loadTemplate(path) {
    const html = await fetch(path).then(convertToText);
    const template = document.createElement('template');
    template.innerHTML = html;
    return template;
  }

export function loadHeaderFooter(){
    const header = await loadTemplate ('../partials.header.html');
    const footer = await loadTemplate ('../partials.header.html');
    const headerElement = document.getElementById('main-header');
    const footerElement = document.getElementById('main-footer');
    renderListWithTemplate(header, headerElement);
    renderListWithTemplate(footer, footerElement);

}