const header = function(siteTitle) {
  const header = document.createElement('header');
  header.classList.add('header');

  const title = document.createElement('h2');
  title.textContent = siteTitle;
  title.classList.add('siteTitle');

  header.appendChild(title);
  return header;
};

export default header;