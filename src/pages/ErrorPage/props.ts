export interface ErrorPageProps {
  errorStatusCode?: number;
  reason?: string;
  isFetching?: boolean;
  refetch?: () => Promise<any>;
}
