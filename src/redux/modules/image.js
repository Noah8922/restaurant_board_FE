import { createAction, handleActions } from "redux-actions";
import produce from "immer";



// actions
const UPLOADING = "UPLOADING";

const SET_PREVIEW = "SET_PREVIEW";

// action creators
const uploading = createAction(UPLOADING, (uploading) => ({ uploading }));
const setPreview = createAction(SET_PREVIEW, (preview) => ({ preview }));

// initial state
const initialState = {
  image_url: "http://via.placeholder.com/400x300",
  uploading: false,
  preview: null,
};

// reducer
export default handleActions(
  {
    [UPLOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.uploading = action.payload.uploading;
      }),
    [SET_PREVIEW]: (state, action) =>
      produce(state, (draft) => {
        draft.preview = action.payload.preview;
      }),
  },
  initialState
);

const actionCreators = {
  // uploadImage,
  //   uploadImageFB,
  setPreview,
};

export { actionCreators };