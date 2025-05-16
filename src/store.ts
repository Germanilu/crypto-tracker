import { create } from 'zustand'
import type { CryptoCurrency, CryptoPrice, Pair } from './types';
import {devtools} from 'zustand/middleware'
import { getCryptos, fetchCurrentCryptoPrice } from './services/CryptoService';

//TYPE
type CryptoStore = {
    cryptocurrencies: CryptoCurrency[]
    result: CryptoPrice
    loading: Boolean
    fetchCryptos: () => Promise<void>
    fetchData: (pair: Pair) => Promise<void>
}

//STORE
export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({

    cryptocurrencies: [],
    result:{} as CryptoPrice,
    loading: false,

    //ACTIONS
    fetchCryptos : async () => {
        const cryptocurrencies = await getCryptos()
        set(() => ({
            cryptocurrencies
        }))
    },

    fetchData : async(pair) => {
         set(() => ({
            loading: true
        }))
        const result = await fetchCurrentCryptoPrice(pair)
        set(() => ({
            result,
            loading: false
        }))
    }
})));