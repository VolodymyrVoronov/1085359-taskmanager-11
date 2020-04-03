export const renderTasks = (amountOfTasks, renderElementFunction, placeToRender, createTemplateFunction) => {
  for (let i = 0; i < amountOfTasks; i++) {
    renderElementFunction(placeToRender, createTemplateFunction());
  }
};
