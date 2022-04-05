import Typography from "@mui/material/Typography/Typography"
import { Teacher } from "../../../type"
import { Divider } from "../../Divider/Divider"
import "./module.scss"



interface PersonDescProps {
    className?: string,
    teacher: Teacher,
}


export const PersonDesc = (props: PersonDescProps) => {
    const { teacher } = props
    const { name, sex, tag, profession, describe, level } = teacher
    return (
        <div>
            <div>
                <Typography align={"left"} variant="h5" mt={2}>
                    {name}
                </Typography>
                <Divider height={2} width={"2em"} color={"#000"} />
            </div>
        </div>
    )
}