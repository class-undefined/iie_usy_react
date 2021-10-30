import {OptionsObject, useSnackbar, VariantType, WithSnackbarProps} from 'notistack'
import React from 'react'

/** 封装 `notistack`，使其可以像`dom`中的`alert`api一样，方便调用
 * from: https://github.com/iamhosseindhv/notistack/issues/30
 */
let useSnackbarRef: WithSnackbarProps
export const SnackbarUtilsConfigurator: React.FC = () => {
    useSnackbarRef = useSnackbar()
    return null
}

class Notify {
    /* 默认配置 */
    private defaultOptions: OptionsObject = {
        /* 展示时间: 默认3s */
        autoHideDuration: 3000,
        /* 显示位置: 默认顶部水平居中 */
        anchorOrigin: {vertical: 'top', horizontal: 'center'},
    }

    /* 成功提示 */
    public success(message: string, options?: OptionsObject) {
        this.toast(message, 'success', options)
    }

    /* 警告提示 */
    public warning(message: string, options?: OptionsObject) {
        this.toast(message, 'warning', options)
    }

    /* 信息提示 */
    public info(message: string, options?: OptionsObject) {
        this.toast(message, 'info', options)
    }

    /* 错误提示 */
    public error(message: string, options?: OptionsObject) {
        this.toast(message, 'error', options)
    }

    /* 自定义提示 */
    public toast(message: string, variant: VariantType = 'default', options?: OptionsObject) {
        useSnackbarRef.enqueueSnackbar(message, {
            variant, ...this.defaultOptions, ...options,
        })
    }

    /* 配置自定义提示，返回定制的提示函数 */
    public diyToast(diyOptions: OptionsObject) {
        return (message: string, variant: VariantType = 'default', options?: OptionsObject) => {
            this.toast(message, variant, {...diyOptions, ...options})
        }
    }
}

export default new Notify()
