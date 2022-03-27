import Box from "@mui/material/Box/Box";
import Skeleton from "@mui/material/Skeleton/Skeleton";
import { CssUnit } from "../../type/css";
import { getCssUnit } from "../../utils/StringUtils";
interface ImageLoadingProps {
    width: string | number,
    height: string | number
}
const defaultProps = {
    width: "100%" as string | number,
    height: "100%" as string | number
}

export const ImageLoading = (props: ImageLoadingProps) => {
    const width = props.width || defaultProps.width
    const height = props.height || defaultProps.width
    let unit: { value: number, unit: CssUnit } | null = null
    if (typeof width === "string") {
        if (typeof width === "string") unit = getCssUnit(width)
        if (unit) unit.value *= 0.8
    }
    const fixWidth = unit ? unit.value + unit.unit : width as number * 0.8
    return (
        <Box>
            <Skeleton animation="wave" width={width} height={height} />
            <Skeleton animation="wave" width={fixWidth} style={{ marginBottom: 6 }} height={15} />
            <Skeleton animation="wave" width={fixWidth} style={{ marginBottom: 6 }} height={15} />
        </Box>
    )
}