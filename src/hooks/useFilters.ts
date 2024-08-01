import { useLocation, useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { cleanEmptyParams } from "@/lib/cleanEmptyParams";

// Helper function to parse search params into an object
function useSearchParamsObject() {
  const { search } = useLocation();
  return useMemo(() => {
    const searchParams = new URLSearchParams(search);
    const params: Record<string, string> = {};
    searchParams.forEach((value, key) => {
      params[key] = value;
    });
    return params;
  }, [search]);
}

function objectToURLSearchParams(
  obj: Record<string, string | undefined>,
): URLSearchParams {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(obj)) {
    if (value !== undefined) {
      params.set(key, value);
    }
  }
  return params;
}

export function useFilters() {
  const navigate = useNavigate();
  const filters = useSearchParamsObject();
  console.log(filters);
  const setFilters = (partialFilters: Partial<typeof filters>) => {
    const newFilters = { ...filters, ...partialFilters };
    navigate({
      search: objectToURLSearchParams(cleanEmptyParams(newFilters)).toString(),
    });
  };

  const resetFilters = () => {
    navigate({
      search: "",
    });
  };
  return { filters, setFilters, resetFilters };
}
