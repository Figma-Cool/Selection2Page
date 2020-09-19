if (figma.currentPage.selection.length != 0) {
  let allElem = figma.currentPage.selection;
  figma.createPage().name = 'Selection2Page';
  let newPage = figma.root.children[figma.root.children.length - 1];

  allElem.map((item) => {
    newPage.appendChild(item);
  });

  figma.currentPage = newPage;
  figma.notify('😎 Done');
} else {
  figma.notify('👾 Select some elements first');
}

figma.closePlugin();
