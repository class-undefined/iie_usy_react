import {run} from './exec';
import {useEffect} from 'react';

export const Win = () => {
    useEffect(() => {
        run()
    },[])
    return <div>
        <canvas style={{width: '100%', height: '100%', aspectRatio: 'unset'}} id={'webgl'}/>
    </div>
}
