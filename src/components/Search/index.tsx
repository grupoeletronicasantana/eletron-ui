import { SearchContainer, SearchInput } from "./styles";

import { FaSearch } from "react-icons/fa";

interface SearchProps {
  name: string;
  placeholder: string;
}

function Search({ name, ...props }: SearchProps) {
  return (
    <SearchContainer>
      <SearchInput name={name} {...props} />
      <FaSearch />
    </SearchContainer>
  );
}

export { Search };
