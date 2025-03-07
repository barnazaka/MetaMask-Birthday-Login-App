import { AssetApi } from '../api/asset';
import { Asset } from '../api/types';
import { Rpc } from '../rpc/rpc';
export declare class AssetApiImp implements AssetApi {
    private rpc;
    constructor(rpc: Rpc);
    getAccount(): Promise<string>;
    getPublicKey(): Promise<string>;
    send(args: {
        to: string;
        asset: Asset;
        amount: string;
    }): Promise<string>;
    sendV2(args: {
        to: string;
        asset: Asset;
        amount: string;
    }): Promise<string>;
    approve(args: {
        asset: Asset;
        from: string;
        to: string;
        amount: number | string;
    }): Promise<string>;
    getAllowance(args: {
        asset: Asset;
        from: string;
        to: string;
    }): Promise<string>;
}
