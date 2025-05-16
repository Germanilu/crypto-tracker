import { useCryptoStore } from "../store";

export default function CryptoSearchForm() {
  const cryptocurrencies = useCryptoStore((state) => state.cryptocurrencies)
  console.log(cryptocurrencies)
  return (
    <form className="form">
      <div className="field">
        <label htmlFor="currency">Moneda:</label>
        <select
          name="currency"
          id="currency"
        >
          <option value="">-- Seleccione --</option>
        </select>
      </div>

      <div className="field">
        <label htmlFor="cryptocurrency">Cryptomoneda:</label>
        <select
          name="cryptocurrency"
          id="cryptocurrency"
        >
          <option value="">-- Seleccione --</option>
          {cryptocurrencies.map(crypto => (
            <option 
            key={crypto.CoinInfo.Name}
            value={crypto.CoinInfo.Name}
            >{crypto.CoinInfo.FullName}</option>
          ))}
        </select>
      </div>

      <input type="submit" value='Cotizar' />
    </form>
  )
}
