import {Divider, Icon} from '@mui/material';
import './SloganDivider.scss'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
export const SloganDivider = () => {
    return (
        <Divider className={'divider'}>
            <Icon color={'error'} fontSize={'large'}>
                <LocalFireDepartmentIcon/>
            </Icon>
        </Divider>
    )
}
