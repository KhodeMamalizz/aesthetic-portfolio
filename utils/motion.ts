export const slideInFromLeft = (delay: number) => {
    return {
        initial: { x: -100, opacity: 0 },
        enter: {
            x: 0,
            opacity: 1,
            transition: {
                delay: delay,
                duration: 500,
            },
        },
    };
}

export const slideInFromRight = (delay: number) => {
    return {
        initial: { x: 100, opacity: 0 },
        enter: {
            x: 0,
            opacity: 1,
            transition: {
                delay: delay,
                duration: 500,
            },
        },
    };
}

export const slideInFromTop = {
    initial: { y: -100, opacity: 0 },
    enter: {
        y: 0,
        opacity: 1,
        transition: {
            delay: 500,
            duration: 500,
        },
    },
};