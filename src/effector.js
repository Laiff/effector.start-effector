import { createEffect, createEvent, createStore } from "effector";
import { wait } from "./components/helpers/wait";

export const setModalVisibility = createEvent();
export const getDataFx = createEffect((number = 3) => {
  return fetch(
    `https://jsonplaceholder.typicode.com/todos?_start=0&_limit=${number}`
  ).then((response) => wait(3000, response.json()));
});

export const $modalVisibility = createStore(false)
  .on(setModalVisibility, (_, isVisivle) => isVisivle)
  .reset(getDataFx.done);

export const $todos = createStore([]).on(getDataFx.doneData, (_, data) => data);
