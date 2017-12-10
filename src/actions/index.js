export const FETCH_NOTES = 'FETCH_NOTES';
export const SELECT_NOTE = 'SELECT_NOTE';

export function fetchNotes() {

    const data = {
        1: {id: 1, note: 'this is not1'},
        2: {id: 2, note: 'this is not2'},
        3: {id: 3, note: 'this is not3'},
        4: {id: 4, note: 'this is not4'},
        5: {id: 5, note: 'this is not5'},
        6: {id: 6, note: 'this is not6'},
        7: {id: 7, note: 'this is not7'},
        8: {id: 8, note: 'this is not8'},
        9: {id: 9, note: 'this is not9'},
        10: {id: 10, note: 'this is not10'},
        11: {id: 11, note: 'this is not11'},
        12: {id: 12, note: 'this is not12'}
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
