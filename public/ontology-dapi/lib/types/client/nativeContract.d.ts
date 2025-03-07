import { NativeContractApi } from '../api/nativeContract';
import { Response, NativeContractApiParams } from '../api/types';
import { Rpc } from '../rpc/rpc';
export declare class NativeContractApiImp implements NativeContractApi {
    private rpc;
    constructor(rpc: Rpc);
    invokeBuildRegisterOntid(args: NativeContractApiParams): Promise<Response>;
}
