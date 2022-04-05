export type IDate = number | string

export interface Teacher {
    name: string,
    sex: 0 | 1,
    level: string,
    tag: string[],
    profession: string[],
    describe: string,
}