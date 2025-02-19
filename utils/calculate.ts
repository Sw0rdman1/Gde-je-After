const TEXT_MIN_WIDTH = 80;

export const calculateTextWidth = (text: string, fontSize: number) => {
    const averageCharWidth = fontSize * 0.6;
    const textLength = text.length;
    const width = textLength * averageCharWidth;
    return Math.max(width + 10, TEXT_MIN_WIDTH);
};