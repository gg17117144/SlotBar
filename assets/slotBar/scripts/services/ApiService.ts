// assets/scripts/services/ApiService.ts
import { SymbolData } from '../types/SymbolData';

export class ApiService {
  static async fetchSymbolData(): Promise<SymbolData[]> {
    const url = 'https://yourapi.com/api/symbols'; // 改成你的 API 地址或 mock URL
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const json = await response.json();
    return json.symbols as SymbolData[];
  }
}
