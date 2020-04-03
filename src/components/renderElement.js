export const renderElement = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};
