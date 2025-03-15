

function sinhVienReducer(state = [],action) {
  switch (action.type) {
    case 'SET':
        return [...action.payload];
    case 'ADD':
        return [...state,action.payload];
    case 'TOGGLE':
        return state.map((sinhVien)=>{
            return sinhVien.id === action.payload ? {...sinhVien, completed: !sinhVien.completed} : sinhVien;
        });
    case 'DELETE':
        return state.filter(sinhVien => sinhVien.id !== action.payload);
    default:
        return state;
  }
}

export default sinhVienReducer