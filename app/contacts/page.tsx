import { CreateButton } from "@/components/buttons";
import ContactTable from "@/components/contact-table";
import Header from "@/components/header";
import Pagination from "@/components/pagination";
import Search from "@/components/search";
import { TableSkeleton } from "@/components/skeleton";
import { getContactPages } from "@/lib/data";
import { Suspense } from "react";

const Contacts = async ({
  searchParams,
}: {
  searchParams: Promise<{
    query?: string;
    page?: number;
  }>;
}) => {
  const params = await searchParams;

  const query = params?.query || "";
  const currentPage = Number(params?.page) || 1;

  // const totalPages = await getContactPages(query);

  return (
    <>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Data Mhs</title>
        </head>
        <body>
            <h1>ok</h1>
          <section className="max-w-screen-lg mx-auto mt-5 px-4">
            <Header />
            <div className="flex items-center justify-between gap-1 mb-5">
              {/* <Search /> */}
              {/* <CreateButton /> */}
            </div>
            <div className="overflow-auto">
              {/* <Suspense key={query + currentPage} fallback={<TableSkeleton />}> */}
                <ContactTable query={query} currentPage={currentPage} />
              {/* </Suspense> */}
            </div>

            <div className="flex justify-center mt-4">
              {/* <Pagination totalPages={totalPages} /> */}
            </div>
          </section>
        </body>
      </html>
    </>
  );
};

export default Contacts;
