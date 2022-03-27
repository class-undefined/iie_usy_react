/** 相对尺寸 */
export type RelativeUnit = "em" | "ex" | "%" | "ch" | "rem" | "vw" | "vh" | "vmin" | "vmax"

/** 绝对尺寸 */
export type AbsoluteUnit = "px" | "cm" | "mm" | "in" | "pt" | "pc"

/** 尺寸 */
export type CssUnit = RelativeUnit | AbsoluteUnit