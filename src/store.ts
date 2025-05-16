import { create } from 'zustand'
import type { CryptoCurrency, Pair } from './types';
import {devtools} from 'zustand/middleware'
import { getCryptos, fetchCurrentCryptoPrice } from './services/CryptoService';

//TYPE
type CryptoStore = {
    cryptocurrencies: CryptoCurrency[]
    fetchCryptos: () => Promise<void>
    fetchData: (pair: Pair) => Promise<void>
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
    },

    fetchData : async(pair) => {
        await fetchCurrentCryptoPrice(pair)
    }
})));