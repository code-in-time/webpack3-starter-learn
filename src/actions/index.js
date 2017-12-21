export const FETCH_NOTES = 'FETCH_NOTES';
export const SELECT_NOTE = 'SELECT_NOTE';

export function fetchNotes() {

    const data = {
        1: {id: 1, note: 'this is note 1'},
        2: {id: 2, note: 'this is note 2'},
        3: {id: 3, note: 'this is note 3'},
        4: {id: 4, note: 'this is note 4'},
        5: {id: 5, note: 'this is note 5'},
        6: {id: 6, note: 'this is note 6'},
        7: {id: 7, note: 'this is note 7'},
        8: {id: 8, note: 'this is note 8'},
        9: {id: 9, note: 'this is note 9'},
        10: {id: 10, note: 'this is note 10'},
        11: {id: 11, note: 'this is note 11'},
        12: {id: 12, note: 'this is note 12'}
    }

    return {
        type: FETCH_NOTES,
        payload: data
    };
}

export function selectNote(noteID) {

    return {
        type: SELECT_NOTE,
        payload: noteID
    };
}
