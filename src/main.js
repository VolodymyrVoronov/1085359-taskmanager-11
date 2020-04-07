import {createMenuTemplate} from "./components/menuTemplate.js";
import {createFilterTemplate} from "./components/filterTemplate.js";
import {createBoardTemplate} from "./components/boardTemplate.js";
import {createTaskEditTemplate} from "./components/taskEditTemplate.js";
import {createTaskTemplate} from "./components/taskTemplate.js";
import {createBtnLoadMore} from "./components/btnLoadMore.js";
import {renderElement} from "./components/renderElement.js";
// import {renderTasks} from "./components/renderTasks.js";

import {generateTasks} from "./mock/task.js";
import {generateFilters} from "./mock/filter.js";

const AMOUNT_OF_TASKS = 22;
const SHOWING_TASKS_COUNT_ON_START = 8;
const SHOWING_TASKS_COUNT_BY_BUTTON = 8;

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

const filters = generateFilters();
const tasks = generateTasks(AMOUNT_OF_TASKS);

renderElement(siteHeaderElement, createMenuTemplate());
renderElement(siteMainElement, createFilterTemplate(filters));
renderElement(siteMainElement, createBoardTemplate());

const taskListElement = siteMainElement.querySelector(`.board__tasks`);
const boardElement = siteMainElement.querySelector(`.board`);

renderElement(taskListElement, createTaskEditTemplate(tasks[0]));

let showingTasksCount = SHOWING_TASKS_COUNT_ON_START;

tasks.slice(1, showingTasksCount)
  .forEach((task) => renderElement(taskListElement, createTaskTemplate(task), `beforeend`));

renderElement(boardElement, createBtnLoadMore());

const loadMoreButton = boardElement.querySelector(`.load-more`);

loadMoreButton.addEventListener(`click`, () => {
  const prevTasksCount = showingTasksCount;
  showingTasksCount = showingTasksCount + SHOWING_TASKS_COUNT_BY_BUTTON;

  tasks.slice(prevTasksCount, showingTasksCount)
    .forEach((task) => renderElement(taskListElement, createTaskTemplate(task), `beforeend`));

  if (showingTasksCount >= tasks.length) {
    loadMoreButton.remove();
  }
});
