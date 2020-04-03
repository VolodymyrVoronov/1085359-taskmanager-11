import {createMenuTemplate} from "./components/menuTemplate.js";
import {createFilterTemplate} from "./components/filterTemplate.js";
import {createBoardTemplate} from "./components/boardTemplate.js";
import {createTaskEditTemplate} from "./components/taskEditTemplate.js";
import {createTaskTemplate} from "./components/taskTemplate.js";
import {createBtnLoadMore} from "./components/btnLoadMore.js";
import {renderElement} from "./components/renderElement.js";
import {renderTasks} from "./components/renderTasks.js";

const AMOUNT_OF_TASKS = 3;

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

renderElement(siteHeaderElement, createMenuTemplate());
renderElement(siteMainElement, createFilterTemplate());
renderElement(siteMainElement, createBoardTemplate());

const taskListElemet = siteMainElement.querySelector(`.board__tasks`);
const boardElement = siteMainElement.querySelector(`.board`);

renderElement(taskListElemet, createTaskEditTemplate());
renderTasks(AMOUNT_OF_TASKS, renderElement, taskListElemet, createTaskTemplate);
renderElement(boardElement, createBtnLoadMore());
