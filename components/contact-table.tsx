import { getContacts } from "@/lib/data";
// import { formatDate } from "@/lib/utils";
import { DeleteButton, EditButton, ReadButton } from "./buttons";

const ContactTable = async ({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) => {
  const contacts = await getContacts(query, currentPage);

  

  return (
    
    <table className="divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th
            scope="col"
            className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
          >
            <div className="flex items-center gap-x-3">
              <span>No</span>
            </div>
          </th>
          <th
            scope="col"
            className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
          >
            <div className="flex items-center gap-x-3">
              <span>Name</span>
            </div>
          </th>
          <th
            scope="col"
            className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
          >
            <button className="flex items-center gap-x-2">
              <span>Status</span>
              <svg
                className="h-3"
                viewBox="0 0 10 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="0.1"
                />
                <path
                  d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="0.1"
                />
                <path
                  d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C ```typescript
7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="0.3"
                />
              </svg>
            </button>
          </th>

          <th
            scope="col"
            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
          >
            NIM
          </th>
          {/* <th
            scope="col"
            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
          >
            <button className="flex items-center gap-x-2">
              <span>Nomor Virtual Account</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                />
              </svg>
            </button>
          </th> */}

          <th
            scope="col"
            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
          >
            No Phone
          </th>
          <th
            scope="col"
            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
          >
            Title
          </th>

          {/* <th
            scope="col"
            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
          >
            Created At
          </th> */}

          <th
            scope="col"
            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
          >
            Action
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200 ">
        {contacts.map((contact, index) => (
          <tr key={contact.id}>
            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
              <div className="inline-flex items-center gap-x-3">
                <div className="flex items-center gap-x-2">
                  <div>
                    <h2 className="font-medium text-gray-800 ">{index + 1}</h2>
                  </div>
                </div>
              </div>
            </td>

            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
              <div className="inline-flex items-center gap-x-3">
                <div className="flex items-center gap-x-2">
                  <div>
                    <h2 className="font-medium text-gray-800 ">
                      {contact.name}
                    </h2>
                    <p className="text-sm font-normal text-gray-600">
                      {contact.posisi}
                    </p>
                  </div>
                </div>
              </div>
            </td>

            <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
              <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                <h2 className="text-sm font-normal text-emerald-500">Active</h2>
              </div>
            </td>
            <td className="px-4 py-4 text-sm text-gray-500">{contact.nim}</td>

            {/* <td className="px-4 py-4 text-sm text-gray-500">
              {contact.nomorVa}
            </td> */}

            <td className="px-4 py-4 text-sm text-gray-500">{contact.phone}</td>
            <td className="px-3 py-4 text-sm text-gray-500">
              {contact.name === `Dika Arya Prasetia` ? (
                <p className="px-3 py-1 text-xs text-red-500 rounded-full bg-red-100/60">
                  Developer
                </p>
              ) : (
                <p className="px-3 py-1 text-xs text-indigo-500 rounded-full bg-indigo-100/60">
                  Anggota
                </p>
              )}
            </td>
            {/* 
            <td className="px-4 py-4 text-sm text-gray-500">
              {formatDate(contact.createdAt.toString())}
            </td> */}
            <td className="px-4 py-4 text-sm whitespace-nowrap">
              <div className="flex items-center gap-x-1">
                <DeleteButton id={contact.id} />
                <EditButton id={contact.id} />
                <ReadButton id={contact.id} />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContactTable;
