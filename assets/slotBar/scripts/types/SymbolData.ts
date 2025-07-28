import { SpriteFrame } from "cc";

export type SymbolData = {
  type: string;
  imageUrl: string;
  spriteFrame?: SpriteFrame; // 載入後緩存
};
