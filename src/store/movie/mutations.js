export default {
    getNowPlay (state,data) {
        state.nowplay = [...state.nowplay,...data]
    },
    comingMovie (state,data) {
        state.moremovie = [...state.moremovie,...data]
    }
}