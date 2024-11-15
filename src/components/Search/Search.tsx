import { SearchContainer, SearchInput } from "./styles";

import { FaSearch } from "react-icons/fa";

interface SearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  placeholder: string;
}

function Search({ ...props }: SearchProps) {
  return (
    <SearchContainer>
      <SearchInput type="search" {...props} />
      <FaSearch />
    </SearchContainer>
  );
}

export { Search };
