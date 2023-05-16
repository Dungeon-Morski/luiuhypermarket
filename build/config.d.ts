export type ConfigFieldType = [string, 'number' | 'string' | 'array' | 'json' | 'boolean', string];
export interface ServerConfigType {
    BOT_TOKEN: string;
    CHAT_ID: number;
    SUBSCRIBE_CHANNEL_ID: number;
    SUBSCRIBE_CHANNEL_LINK: string;
    ALLOW_DUPLICATE_QUERIES: boolean;
}
declare const ServerConfig: Readonly<ServerConfigType>;
export default ServerConfig;
export declare function CheckConfig(): void;
//# sourceMappingURL=config.d.ts.map