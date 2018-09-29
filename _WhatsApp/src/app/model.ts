export interface ChatGroup{
    readonly id: number;
    readonly name: string;
    readonly photo_url: string;
    readonly created_at?: { date: string};
    readonly updated_at?: { date: string};
}

export interface ChatMessage{
    type: string;
    content: string;
    user_id: string;
    user?: Promise<{name: string; photo_url: string}>;
    created_at: number;
}