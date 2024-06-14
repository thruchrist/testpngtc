// scriptToc.js
document.addEventListener('DOMContentLoaded', function () {
  const tocList = document.createElement('div');
  tocList.id = 'table-of-contents';
  const tocHeading = document.createElement('h3');
  tocHeading.textContent = 'CONTENTS';
  const tocUL = document.createElement('ul');
  tocList.appendChild(tocHeading);

  const headings = document.querySelectorAll('h1, h2, h3');

  headings.forEach((heading) => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    const headingText = heading.textContent;

    link.textContent = headingText;
    link.href = `#${heading.id}`;
    listItem.appendChild(link);
    tocUL.appendChild(listItem);
  });

  tocList.appendChild(tocUL);

  const main = document.querySelector('main');
  main.insertBefore(tocList, main.firstChild);
});