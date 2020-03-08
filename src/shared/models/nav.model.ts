export interface NavItem {
    icon?: string;
    url: string;
    title: string;
    isIcon?: boolean;
    iconSrc?: string;
    iconDesc?: string;
}

export interface NavInitialState {
    data: {
        links: NavItem[];
        hasLeftNav: boolean;
        isAuthPage: boolean;
        activePage: string;
    }
}
