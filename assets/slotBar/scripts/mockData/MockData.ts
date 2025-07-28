import { _decorator, Component } from 'cc';
import { SymbolData } from '../types/SymbolData';
const { ccclass, property } = _decorator;

@ccclass('getMockSymData')
export class MockData extends Component {
    // mock 資料函式
    static getMockSymbolData(): SymbolData[] {
        return [
            {
                type: 'apple',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg',
            },
            {
                type: 'banana',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg',
            },
            {
                type: 'cherry',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Cherry_Stella444.jpg',
            },
            {
                type: 'grape',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Green_grape_fruit.jpg/640px-Green_grape_fruit.jpg',
            },
            {
                type: 'lemon',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Citrus_limon_extracted_1.png/640px-Citrus_limon_extracted_1.png',
            },
        ];
    }

    static getMockSlotBar(): string[] {
        const symbolTypes = ['apple', 'banana', 'cherry', 'grape', 'lemon'];
        const results: string[] = [];

        for (let i = 0; i < 3; i++) {
            const randomIndex = Math.floor(Math.random() * symbolTypes.length);
            results.push(symbolTypes[randomIndex]);
        }
        return results;
    }
}