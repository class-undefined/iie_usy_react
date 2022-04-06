import Button from "@mui/material/Button/Button"
import Chip from "@mui/material/Chip/Chip"
import Dialog from "@mui/material/Dialog/Dialog"
import DialogTitle from "@mui/material/DialogTitle/DialogTitle"
import Typography from "@mui/material/Typography/Typography"
import { makeStyles } from "@mui/styles"
import { style } from "@mui/system"
import { useEffect, useRef, useState } from "react"
import { Teacher } from "../../../type"
import { Divider } from "../../Divider/Divider"
interface DetailsProps {
    open: boolean,
    teacher: Teacher,
    onClose: () => void,
}
const useDetailStyle = makeStyles({
    root: {

    },
    title: {
        paddingBottom: "10px"
    },
    textBox: {
        fontSize: "15px",
        padding: "0 20px 20px"
    }
})
const Details = (props: DetailsProps) => {
    const { open, onClose, teacher } = props
    const { name, describe } = teacher
    const style = useDetailStyle()
    return (
        <Dialog className={style.root} open={open} onClose={onClose}>
            <DialogTitle className={style.title}>{`${name} - 荣誉经历`}</DialogTitle>
            <div className={style.textBox}>
                <Typography align={"left"} variant="body2" >
                    {describe}
                </Typography>
            </div>
        </Dialog>
    )
}


interface PersonDescProps {
    className?: string,
    teacher: Teacher,
}

const useStyles = makeStyles({
    root: {
        height: "100%"
    },
    tag: {
        textAlign: "left",
        paddingTop: "10px"
    },
    tagItem: {
        display: "inline-block",
        minWidth: "auto",
        cursor: "pointer",
        marginRight: "5px",
        marginBottom: "5px",
        fontSize: "10px"
    },
    describeRoot: {
        // height: "100px",
        overflow: "hidden",
    },
    describe: {
        display: "-webkit-box",
        overflow: "hidden",
        "-webkit-line-clamp": 4,
        "-webkit-box-orient": "vertical",
        cursor: "pointer",
        userSelect: "none",
        transition: "color 0.4s cubic-bezier(.56,.26,.61,1.25)",
        "&:active": {
            color: "#1565c0",
            fontWight: "bold"
        }
    },

})


export const PersonDesc = (props: PersonDescProps) => {
    const { teacher } = props
    const { name, sex, tag, profession, describe, level } = teacher
    const styles = useStyles()
    const descTextBoxRef = useRef<null | HTMLDivElement>(null)
    const descTextRef = useRef<null | HTMLParagraphElement>(null)
    const [open, setOpen] = useState(false)
    return (
        <div className={styles.root}>
            <div className={`person-desc-name`}>
                <Typography align={"left"} variant="h5" mt={2}>
                    {name}
                </Typography>
            </div>
            <Divider height={2} width={"4em"} color={"#000"} />
            <div className="person-desc-level">
                <Typography align={"left"} variant="body1" mt={2}>
                    {level}
                </Typography>
            </div>
            {/* <Divider height={1} width={"6em"} color={"#000"} /> */}
            <div className={styles.tag}>
                {[...tag, ...profession].map(name => <Button key={name} size="small" className={styles.tagItem} variant="outlined" color="info">{name}</Button>)}
            </div>
            <div className={styles.describeRoot} ref={descTextBoxRef}>
                <Typography onClick={() => setOpen(n => !n)} className={styles.describe} ref={descTextRef} align={"left"} variant="body2" mt={2}>
                    {describe}
                </Typography>
            </div>
            <Details open={open} teacher={teacher} onClose={() => setOpen(n => !n)} />
        </div>
    )
}