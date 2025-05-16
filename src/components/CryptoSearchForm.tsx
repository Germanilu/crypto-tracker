import { currencies } from "../data";

export default function CryptoSearchForm() {
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
          {currencies.map(currency => (
            <option
              value={currency.code}
              key={currency.code}
            >
              {currency.name}
            </option>
          ))}
        </select>
      </div>

      <input type="submit" value='Cotizar' />
    </form>
  )
}
