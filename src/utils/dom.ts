import { elementScrollIntoView } from "seamless-scroll-polyfill";
/**
 * 跳转到指定锚点
 */
export const scrollToAnchor = (anchorName: string) => {
    if (anchorName) {
        let anchorElement = document.getElementById(anchorName)
        if (anchorElement) { elementScrollIntoView(anchorElement, { behavior: "smooth" }) }
    }
}