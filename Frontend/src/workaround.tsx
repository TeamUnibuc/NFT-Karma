import process from "process"
import { Buffer } from "buffer";
import EventEmitter from "events";
import { MetaMaskInpageProvider } from "@metamask/providers";

window.process = process;
window.Buffer = Buffer;
window.EventEmitter = EventEmitter;

declare global {
    interface Window {
        EventEmitter: typeof EventEmitter
        ethereum: MetaMaskInpageProvider
    }
}
