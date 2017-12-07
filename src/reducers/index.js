import { combineReducers } from 'redux';
// import PostsReducer from './reducer_posts';
// import ActiveBlockReducer from './active_block';
import NoteDataReducer from '../reducers/noteDataReducer';

const rootReducer = combineReducers({
    noteData: NoteDataReducer
});

export default rootReducer;
