export const renderTasks = (amountOfTasks, renderElementFunction, placeToRender, createTemplateFunction) => {
  for (let i = 0; i < amountOfTasks.length; i++) {
    renderElementFunction(placeToRender, createTemplateFunction());
  }
};
