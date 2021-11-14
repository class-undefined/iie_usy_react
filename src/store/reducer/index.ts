export const reducer = <T>(state: T, action: any) => {
    switch (action.type) {
        case 123:
            console.log('已接收', state, action)
            return Object.assign({}, state, action)
        default:
            return state
    }
}
