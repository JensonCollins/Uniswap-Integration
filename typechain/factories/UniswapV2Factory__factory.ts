/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  UniswapV2Factory,
  UniswapV2FactoryInterface,
} from "../UniswapV2Factory";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenA",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenB",
        type: "address",
      },
    ],
    name: "getPair",
    outputs: [
      {
        internalType: "address",
        name: "pair",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class UniswapV2Factory__factory {
  static readonly abi = _abi;
  static createInterface(): UniswapV2FactoryInterface {
    return new utils.Interface(_abi) as UniswapV2FactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UniswapV2Factory {
    return new Contract(address, _abi, signerOrProvider) as UniswapV2Factory;
  }
}