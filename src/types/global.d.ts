declare module '*.scss' {
    const content: Record<string | number | symbol, string>;
    export default content;
}

declare module '*.png' {
    const content: string;
    export default content;
}

declare module '*.svg' {
    const content: any;
    export default content;
}