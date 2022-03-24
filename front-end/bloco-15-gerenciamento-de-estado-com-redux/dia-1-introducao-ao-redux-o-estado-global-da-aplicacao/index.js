const colorTxt = document.querySelector('#value');
const container = document.querySelector('#container');
const btnNext = document.getElementById("next");
const btnPrev = document.getElementById("previous");


const actionNext = () => {
  store.dispatch({ type: "NEXT" });
  console.log('oi')
};

const actionPrevious = () => {
  store.dispatch({ type: "PREVIOUS" })
};

const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};


const reducer = (state = ESTADO_INICIAL, action) => {
  if (action.type === 'NEXT') {
    if (state.index === state.colors.length - 1) return {...state, index: 0};
    return {...state, index: state.index + 1}
  };
  if (action.type === 'PREVIOUS') {
    if (state.index === 0) return {...state, index: state.index.length - 1}
    return {...state, index: state.index - 1}
  }
  return state;
};

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
  const { colors, index } = store.getState();
  console.log(colors)
  const newColor = colors[index];
  colorTxt.innerHTML = newColor;
  container.style.backgroundColor = newColor;
})

btnNext.addEventListener("click", actionNext);
btnPrev.addEventListener("click", actionPrevious);