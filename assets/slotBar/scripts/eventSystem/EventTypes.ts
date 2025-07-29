// GameEvent.ts
export enum soltEventTypes {
    InitReel = 'InitReel', // 初始化滾輪
    SpinStart = 'SpinStart',// 拉下拉霸
    FetchResult = 'FetchResult',// 獲取結果
    AllReelsFinished = 'AllReelsFinished', // 所有滾輪完成旋轉
    ShowResult = 'ShowResult', // 顯示結果
    Jackpot = 'Jackpot', // 中大獎(之後在加畫面)
}
