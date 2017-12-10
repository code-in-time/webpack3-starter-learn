import { combineReducers } from 'redux';
import NoteDataReducer from '../reducers/noteDataReducer';
import SelectedNotesReducer from './selectedNotesReducer';

const rootReducer = combineReducers({
    noteData: NoteDataReducer,
    selectedNotes: SelectedNotesReducer
});

export default rootReducer;
