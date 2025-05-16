import { create } from 'zustand'
import type { CryptoCurrency } from './types';
import {devtools} from 'zustand/middleware'
import { getCryptos } from './services/CryptoService';

//TYPE
type CryptoStore = {
    cryptocurrencies: CryptoCurrency[]
    fetchCryptos: () => Promise<void>
}

//STORE
export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({

    cryptocurrencies: [],

    //ACTIONS
    fetchCryptos : async () => {
        const cryptocurrencies = await getCryptos()
        set(() => ({
            cryptocurrencies
        }))
    }
})));