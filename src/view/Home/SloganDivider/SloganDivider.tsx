import {Divider, Icon, Zoom} from '@mui/material';
import './SloganDivider.scss'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment'; // 明方向
import BugReportIcon from '@mui/icons-material/BugReport'; // 厚基础
import MemoryIcon from '@mui/icons-material/Memory'; // 善工程
import FingerprintIcon from '@mui/icons-material/Fingerprint'; // 精实践
import GitHubIcon from '@mui/icons-material/GitHub'; // 泛IT
import {useKTooltip} from '../../../components/KTooltip/KTooltip';
import React from 'react';
import {ReactJSXElement} from '@emotion/react/types/jsx-namespace';
import {OverridableStringUnion} from '@mui/types';
import {IconPropsColorOverrides} from '@mui/material/Icon/Icon';

const size = 35
type Color = OverridableStringUnion<
    | 'inherit'
    | 'action'
    | 'disabled'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning',
    IconPropsColorOverrides
    >
const slogans: Array<{ Icon: ReactJSXElement, tip: string, color: Color | undefined}> = [{
    Icon: <LocalFireDepartmentIcon sx={{fontSize: size}}/>,
    tip: '明方向',
    color: 'error',
}, {
    Icon: <BugReportIcon sx={{fontSize: size}}/>,
    tip: '厚基础',
    color: 'action',
}, {
    Icon: <MemoryIcon sx={{fontSize: size}}/>,
    tip: '善工程',
    color: undefined,
}, {
    Icon: <FingerprintIcon sx={{fontSize: size}}/>,
    tip: '精实践',
    color: 'primary',
}, {
    Icon: <GitHubIcon sx={{fontSize: size}}/>,
    tip: '泛IT',
    color: undefined,
}]
export const SloganDivider = () => {
    const LightTooltip = useKTooltip('light')
    const Dot = () => {
        return (
            <div style={{display: 'inline-block', height: '100%',color: 'rgba(0, 0, 0, 0.62)', position: 'relative'}}>
                <div style={{position: 'absolute', top: '-50%'}}>·</div>
            </div>
        )
    }
    return (
        <Divider className={'divider'}>
            {
                slogans.map((slogan, index) => {
                    return (
                        <div style={{display: 'inline-block'}}>
                            <LightTooltip TransitionComponent={Zoom} title={slogan.tip} sx={{fontSize: '20px'}}>
                                <Icon color={slogan.color} fontSize={'large'}>
                                    {slogan.Icon}
                                </Icon>
                            </LightTooltip>
                            {index !== slogans.length - 1 ?
                                <Icon color={'info'}>
                                    <Dot/>
                                </Icon> : false
                            }
                        </div>
                    )
                })
            }
        </Divider>
    )
}
