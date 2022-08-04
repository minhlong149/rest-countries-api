import { DetailInfo } from "./DetailInfo";
import { BorderList } from "./BorderList";

export function Detail({ country, borderCountries, updateCountry }) {
  return (
    <article className="grid grid-cols-1 xl:grid-cols-2 items-center gap-x-12 gap-y-6 mt-8">
      <img
        className="rounded-md"
        src={country.flags.svg}
        alt={country.name.common + " flag"}
      />

      <article>
        <h1 className="text-2xl font-bold">{country.name.common}</h1>
        <DetailInfo country={country} />
        <BorderList countries={borderCountries} updateCountry={updateCountry} />
      </article>
    </article>
  );
}
