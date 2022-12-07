import { TOWNS } from "./towns";
import React, { useMemo } from "react";
import { useState } from "react";
import { Combobox } from "@headlessui/react";

export interface ISearchTownProps {
  setTown: (townName: string) => void;
  town: string;
}

export const SearchTowns: React.FC<ISearchTownProps> = (props) => {
  const [query, setQuery] = useState("");
  let filteredTowns = useMemo(
    () =>
      TOWNS.filter(([ru_name, en_name]) =>
        ru_name.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 10),
    [query]
  );
  return (
    <Combobox value={props.town} onChange={props.setTown}>
      <Combobox.Input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <Combobox.Options>
        {filteredTowns.map(([ru_name, en_name]) => (
          <Combobox.Option
            key={ru_name}
            value={en_name
              .toLowerCase()
              .slice(0, en_name.indexOf(","))
              .trim()}
          >
            {ru_name}
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </Combobox>
  );
};
