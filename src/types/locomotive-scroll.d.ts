declare module 'locomotive-scroll' {

    interface LocomotiveScrollInstance {
        scroll: {
            instance: {
                scroll: {
                    y: number;
                };
            };
        };
    }

    export default class LocomotiveScroll {
        constructor(options?: any);
        update(): void;
        destroy(): void;
        scrollTo(target: any, options?: any): void;
        on(event: string, callback: () => void): void;
        stop(): void;
        start(): void;
        scroll: LocomotiveScrollInstance['scroll'];
    }
}
