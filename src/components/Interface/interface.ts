export interface Stack {
    id: string;
    data: {
        text: string;
        module: Module[]
    };
}

export interface Module {
    text: string,
}

export interface ShowModal {
    show: boolean,
    handleHide: () => void;
}
