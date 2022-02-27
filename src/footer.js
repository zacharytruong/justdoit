const footer = function(author) {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const para = document.createElement('p');
  para.textContent = `© by ${author}`;
  para.classList.add('copyright');

  footer.appendChild(para);
  return footer;
};

export default footer;