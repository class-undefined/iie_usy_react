export enum OS  {
    iphoneX,
    mobile,
    pad,
    pc
}
/**
 * 根据屏幕宽度获取设备
 * @param width
 */
export const getMedia = (width: number) => {
    if (width <= 375) return OS.iphoneX
    else if (width <= 768) return OS.mobile
    else if(width < 1024) return OS.pad
    else return OS.pc
}
