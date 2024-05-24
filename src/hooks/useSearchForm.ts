import { useState } from "react";

export const useSearchForm = () => {
  const [cityName, setCityName] = useState("");
  const [submitError, setSubmitError] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);

  return {
    cityName,
    setCityName,
    submitError,
    setSubmitError,
    isSearching,
    setIsSearching,
    searchError,
    setSearchError,
  };
};
