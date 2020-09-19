let allElem = figma.currentPage.selection;

figma.createPage().name = 'Selection2Page';
let newPage = figma.root.children[figma.root.children.length - 1];

allElem.map((item) => {
  newPage.appendChild(item);
});

figma.currentPage = newPage;
figma.notify("😎 Done")
figma.closePlugin();