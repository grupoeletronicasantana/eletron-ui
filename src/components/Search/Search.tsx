import React from "react";
import { SearchContainer, SearchInput } from "./styles";

import { FaSearch } from "react-icons/fa";

interface SearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  placeholder: string;
}

const Search = React.forwardRef<HTMLInputElement, SearchProps>(function Search(
  { ...props },
  ref
) {
  return (
    <SearchContainer>
      <SearchInput ref={ref} type="search" {...props} />
      <FaSearch />
    </SearchContainer>
  );
});

export { Search };
