/**
 * 跳转到指定锚点
 */
export const scrollToAnchor = (anchorName: string) => {
    if (anchorName) {
        let anchorElement = document.getElementById(anchorName)
        if (anchorElement) { anchorElement.scrollIntoView({ behavior: "smooth" }) }
    }
}