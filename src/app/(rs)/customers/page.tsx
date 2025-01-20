import { getCustomerSearchResults } from "@/lib/queries/getCustomerSearchResults";
import CustomerSearch from "./CustomerSearch";

export const metadata = {
  title: "Customer Search",
};

export default async function Customer({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { searchText } = await searchParams;
  if (!searchText) return <CustomerSearch />;

  const results = await getCustomerSearchResults(searchText);

  return (
    <>
      <CustomerSearch />
      <p>{JSON.stringify(results)}</p>
    </>
  );
}
