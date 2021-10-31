import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        addClass?: string;
        type?: "button" | "submit";
        disabled?: boolean;
        onhold?: boolean;
        base?: boolean;
        primary?: boolean;
        success?: boolean;
        warning?: boolean;
        danger?: boolean;
        info?: boolean;
        link?: boolean;
        outlined?: boolean;
        light?: boolean;
        dark?: boolean;
        ghost?: boolean;
        xs?: boolean;
        sm?: boolean;
        md?: boolean;
        lg?: boolean;
        xl?: boolean;
        block?: boolean;
    };
    events: {
        click: MouseEvent;
        focus: FocusEvent;
        mouseover: MouseEvent;
        mouseenter: MouseEvent;
        mouseleave: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type IndexProps = typeof __propDef.props;
export declare type IndexEvents = typeof __propDef.events;
export declare type IndexSlots = typeof __propDef.slots;
export default class Index extends SvelteComponentTyped<IndexProps, IndexEvents, IndexSlots> {
}
export {};
