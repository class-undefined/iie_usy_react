import {spliceRoutePath} from '../../layout/NavBar/config';
import {ArrayEqual} from '../../utils';
const test1 = () => {
    const param = '/abc/'
    const target = ['/abc']
    const source = spliceRoutePath(param)
    console.assert(ArrayEqual(source, target), 'routeExample1')
}
export const routeExample = () => {
    console.log('routeExample')
    test1()
}
