import { clearSpace } from "../../utils/StringUtils";
const clearSpaceTest = () => {
    const test1 = () => {
        const md = `
        1   54  1321 54 6521 32 13 13 21
    4 5 43 12 1 sad dd asd  dsad  sad s 

        `
        const result = clearSpace(md)
        console.log(result)
    }
    test1()
}
export const StringTest = () => {
    clearSpaceTest()
}