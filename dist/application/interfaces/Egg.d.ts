export interface EggConfig {
    files: any;
    startup: any;
    stop: string;
    logs: any;
    file_denylist: string[];
    extends: null | any;
}
export interface EggScript {
    privileged: boolean;
    install: string;
    entry: string;
    container: string;
    extends: null | any;
}
export default interface Egg {
    id: number;
    uuid: string;
    name: string;
    nest: number;
    author: string;
    description: string;
    docker_image: string;
    docker_images: string[];
    config: EggConfig;
    startup: string;
    script: EggScript;
    created_at: '2021-01-27T13:46:16+00:00';
    updated_at: '2021-01-27T13:46:16+00:00';
}
//# sourceMappingURL=Egg.d.ts.map