let face = document.getElementById('face');
let happyFace = document.getElementById('happy');
let sadFace = document.getElementById('sad');
let angryFace = document.getElementById('angry');
let confusedFace = document.getElementById('confused');


//actions
const happyAction = emoji => {
  return {
    type: 'HAPPY_FACE',
    face: emoji
  }
}

const sadAction = emoji => {
 return {
  type: "SAD_FACE",
  face: emoji
 };
};

const angryAction = emoji => {
 return {
  type: "ANGRY_FACE",
  face: emoji
 };
};

const confusedAction = emoji => {
 return {
  type: "CONFUSED_FACE",
  face: emoji
 };
};

//REDUCER

const initialState = {
  face: '(__)'
};

const reducer = (state = initialState, action) => {
  if (action.type === 'HAPPY_FACE') {
    return { ...state, face: action.face };
  } else if (action.type === "SAD_FACE") {
    return { ...state, face: action.face };
  } else if (action.type === "ANGRY_FACE") {
    return { ...state, face: action.face };
  } else if (action.type === "CONFUSED_FACE") {
    return { ...state, face: action.face };
  } return state;
}


const { createStore } = Redux;

const store = createStore(reducer);



//eventlisteners functions
function happyFn() {
  return  store.dispatch(happyAction("¯_(ツ)_/¯"))
}
function sadFn() {
  return store.dispatch(sadAction("《〠_〠》"));
}
function angryFn() {
  return store.dispatch(angryAction("(◡‿◡✿)"));
}
function confusedFn() {
  return store.dispatch(confusedAction("(｡:hearts:‿:hearts:｡)"));
}

//event listener
happyFace.addEventListener('click', happyFn);
sadFace.addEventListener('click', sadFn);
angryFace.addEventListener('click', angryFn);
confusedFace.addEventListener('click', confusedFn);


store.subscribe(() => (face.innerHTML = store.getState().face));
