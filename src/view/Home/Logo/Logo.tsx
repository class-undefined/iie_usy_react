import { Box, Typography } from "@mui/material"
import "./logo.scss"
export const Logo = () => {
    return (
        <div>
            <div className={"logo-card"}>
                <Typography variant="h6" component="div" gutterBottom>
                    信息与智能工程学院
                </Typography>
            </div>
        </div>
    )
}