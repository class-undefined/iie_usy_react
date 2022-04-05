import Typography from "@mui/material/Typography/Typography"
import { makeStyles } from "@mui/styles"
import { useRef, useEffect, useState } from "react"
const useStyles = makeStyles({
    root: {
        position: "relative",
        width: "100%",
        height: "100%"
    },
    container: {
        position: "absolute",
        margin: "auto",
        width: "100%",
        height: "100%",
        top: "calc(30%)",
        bottom: "0",
        filter: "url(#threshold) blur(0.6px)",
    },
    text: {
        position: "absolute",
        width: "100%",
        display: "inline-block",
        fontFamily: "'Raleway', sans-serif",
        fontSize: "40pt",
        textAlign: "center",
        userSelect: "none",
    }
})

interface ScrollTextProps {
    className?: string,
    texts: string[]
}
// const texts = [
//     "欢迎",
//     "来到",
//     "信息与智能工程",
//     "学院",
//     "Welcome to",
//     "Sanya University",
//     "Information and Intelligence Engineering"
// ]

export const ScrollText = (props: ScrollTextProps) => {
    const { texts } = props
    const styles = useStyles()
    const text1 = useRef<null | HTMLParagraphElement>(null)
    const text2 = useRef<null | HTMLParagraphElement>(null)
    const [content1, setCentent1] = useState("")
    const [content2, setCentent2] = useState("")
    const render = (text1: HTMLParagraphElement, text2: HTMLParagraphElement) => {
        const elts = {
            text1,
            text2,
        };
        // The strings to morph between. You can change these to anything you want!

        // Controls the speed of morphing.
        const morphTime = 1;
        const cooldownTime = 0.25;
        let textIndex = texts.length - 1;
        let time = new Date();
        let morph = 0;
        let cooldown = cooldownTime;
        elts.text1.textContent = texts[textIndex % texts.length];
        elts.text2.textContent = texts[(textIndex + 1) % texts.length];
        function doMorph() {
            morph -= cooldown;
            cooldown = 0;
            let fraction = morph / morphTime;
            if (fraction > 1) {
                cooldown = cooldownTime;
                fraction = 1;
            }
            setMorph(fraction);
        }
        // A lot of the magic happens here, this is what applies the blur filter to the text.
        function setMorph(fraction: number) {
            // fraction = Math.cos(fraction * Math.PI) / -2 + .5;
            elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
            elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
            fraction = 1 - fraction;
            elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
            elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
            elts.text1.textContent = texts[textIndex % texts.length];
            elts.text2.textContent = texts[(textIndex + 1) % texts.length];
        }
        function doCooldown() {
            morph = 0;
            elts.text2.style.filter = "";
            elts.text2.style.opacity = "100%";
            elts.text1.style.filter = "";
            elts.text1.style.opacity = "0%";
        }

        // Animation loop, which is called every frame.
        function animate() {
            requestAnimationFrame(animate);
            let newTime = new Date();
            let shouldIncrementIndex = cooldown > 0;
            let dt = ((newTime as unknown) as number - ((time as unknown) as number)) / 1000;
            time = newTime;
            cooldown -= dt;
            if (cooldown <= 0) {
                if (shouldIncrementIndex) {
                    textIndex++;
                }
                doMorph();
            } else {
                doCooldown();
            }
        }

        // Start the animation.
        animate();
    }
    useEffect(() => {
        if (!text1.current || !text2.current) return;
        render(text1.current as HTMLParagraphElement, text2.current as HTMLParagraphElement)
    }, [])
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <Typography className={styles.text} ref={text1}>{content1}</Typography>
                <Typography className={styles.text} ref={text2}>{content2}</Typography>
            </div>
            <svg id="filters">
                <defs>
                    <filter id="threshold">
                        <feColorMatrix in="SourceGraphic"
                            type="matrix"
                            values="1 0 0 0 0
									0 1 0 0 0
									0 0 1 0 0
									0 0 0 255 -140" />
                    </filter>
                </defs>
            </svg>
        </div>
    )
}

