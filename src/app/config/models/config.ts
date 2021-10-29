export interface Config {
    
    env: {
        name: string;
    };

    apiServer: {
        url: string;
    };

    localization: {
        uf_id: number;
        mun_id: number;
    }
}