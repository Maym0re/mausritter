declare module '@3d-dice/dice-box' {
  interface DiceBoxOptions {
    assetPath?: string;
    scale?: number;
    gravity?: number;
    friction?: number;
    mass?: number;
    shadowQuality?: number;
    theme?: string;
    offscreen?: boolean;
    lightIntensity?: number;
    throwForce?: number;
    [key: string]: unknown; // fallback
  }

  interface DiceRollDetail {
    type: string; // e.g. d6
    value: number;
  }

  interface DiceRollResult {
    rolls: DiceRollDetail[];
    groups?: unknown;
    total: number;
    type?: string;
    notation?: string;
    error?: string;
  }

  export default class DiceBox {
    constructor(selector: string, options?: DiceBoxOptions);
    init(): Promise<void>;
    roll(notation: string, data?: Record<string, unknown>): Promise<DiceRollResult>;
    clear(): void;
    destroy(): void;
  }
}
