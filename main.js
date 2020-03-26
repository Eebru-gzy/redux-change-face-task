let face = document.getElementById('face');
let happyFace = document.getElementById('happy');
let sadFace = document.getElementById('sad');
let angryFace = document.getElementById('angry');
let confusedFace = document.getElementById('confused');


//actions
const happyAction = emoji => {
  return {
    type: 'HAPPY_FACE',
    payload: {
      face: emoji
    }
  }
}

const sadAction = emoji => {
 return {
  type: "SAD_FACE",
  payload: {
   face: emoji
  }
 };
};

const angryAction = emoji => {
 return {
  type: "ANGRY_FACE",
  payload: {
   face: emoji
  }
 };
};

const confusedAction = emoji => {
 return {
  type: "CONFUSED_FACE",
  payload: {
   face: emoji
  }
 };
};

//REDUCER

const reducer = (defaultFace = [], action) => {
  if (action.type === 'HAPPY_FACE') {
    return [...defaultFace, action.payload.face];
  } else if (action.type === "SAD_FACE") {
    return [...defaultFace, action.payload.face];
  } else if (action.type === "ANGRY_FACE") {
    return [...defaultFace, action.payload.face];
  } else if (action.type === "CONFUSED_FACE") {
    return [...defaultFace, action.payload.face];
  } return defaultFace;
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



store.subscribe(()=> (face.textContent = store.getState()))

// console.log(store.getState())

















// const sadReducer = (defaultFace = null, action) => {
//  if (action.type === "SAD_FACE") {
//   return defaultFace === action.payload.face;
//  }
// };

// const angryReducer = (defaultFace = null, action) => {
//  if (action.type === "ANGRY_FACE") {
//   return defaultFace === action.payload.face;
//  }
// };

// const confusedReducer = (defaultFace = null, action) => {
//  if (action.type === "CONFUSED_FACE") {
//   return defaultFace === action.payload.face;
//  }
// };