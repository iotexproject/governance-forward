/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface GovernaceForwardInterface extends ethers.utils.Interface {
  functions: {
    "cancel()": FunctionFragment;
    "forwardTo(address)": FunctionFragment;
    "getVoterByAddress(address)": FunctionFragment;
    "getVotesByRange(uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "cancel", values?: undefined): string;
  encodeFunctionData(functionFragment: "forwardTo", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getVoterByAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getVotesByRange",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "cancel", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "forwardTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getVoterByAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVotesByRange",
    data: BytesLike
  ): Result;

  events: {
    "Cancel(address)": EventFragment;
    "ForwardTo(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Cancel"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ForwardTo"): EventFragment;
}

export class GovernaceForward extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: GovernaceForwardInterface;

  functions: {
    cancel(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    forwardTo(
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getVoterByAddress(
      _addr: string,
      overrides?: CallOverrides
    ): Promise<[string] & { result: string }>;

    getVotesByRange(
      start: BigNumberish,
      count: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string[], string[]] & { fromAddrs: string[]; toAddrs: string[] }
    >;
  };

  cancel(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  forwardTo(
    to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getVoterByAddress(_addr: string, overrides?: CallOverrides): Promise<string>;

  getVotesByRange(
    start: BigNumberish,
    count: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string[], string[]] & { fromAddrs: string[]; toAddrs: string[] }>;

  callStatic: {
    cancel(overrides?: CallOverrides): Promise<void>;

    forwardTo(to: string, overrides?: CallOverrides): Promise<void>;

    getVoterByAddress(
      _addr: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getVotesByRange(
      start: BigNumberish,
      count: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string[], string[]] & { fromAddrs: string[]; toAddrs: string[] }
    >;
  };

  filters: {
    Cancel(from?: string | null): TypedEventFilter<[string], { from: string }>;

    ForwardTo(
      from?: string | null,
      to?: string | null
    ): TypedEventFilter<[string, string], { from: string; to: string }>;
  };

  estimateGas: {
    cancel(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    forwardTo(
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getVoterByAddress(
      _addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getVotesByRange(
      start: BigNumberish,
      count: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    cancel(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    forwardTo(
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getVoterByAddress(
      _addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getVotesByRange(
      start: BigNumberish,
      count: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
