import { EMPTY_ARRAY } from "@/constants";
import { useCustomQuery } from "@/hooks";

export interface Plan {
  id: string;
  name: string;
  description: string;
  planType: string;
  price: number;
  code: string | null;
  currency: string;
  interval: string;
  summary: string[];
  features: {
    name: string;
    description: string;
    limitType: string;
    limit: number;
  }[];
}

type PlanFilterValue = string | number | boolean | null | undefined;
type PlanFilter = Record<string, PlanFilterValue>;

const planQueryOptions = (filter: PlanFilter = {}) => {
  const searchParams = new URLSearchParams();

  for (const [key, value] of Object.entries(filter)) {
    if (value !== undefined && value !== null && value !== "") {
      searchParams.append(key, String(value));
    }
  }

  const queryParams = searchParams.toString();

  return {
    queryKey: ["plans", queryParams],
    url: `/plans${queryParams ? `?${queryParams}` : ""}`,
  };
};

export const usePlans = (filter: PlanFilter = {}) => {
  const {
    data,
    isLoading: isLoadingPlans,
    isRefetching: isRefetchingPlans,
    refetch,
  } = useCustomQuery<Plan[]>(planQueryOptions(filter));

  return {
    plans: data ?? EMPTY_ARRAY,
    isLoadingPlans,
    isRefetchingPlans,
    refetchPlans: refetch,
  };
};
