"use client";

import { updateContact } from "@/lib/action";
import { useActionState } from "react";
import { RedirectButton, SubmitButton } from "./buttons";
import type { Contact } from "@prisma/client";
import { formatDate } from "@/lib/utils";

const ReadForm = ({ contact }: { contact: Contact }) => {
  // const UpdateContactWithId = updateContact.bind(null, contact.id)
  // const [state, formAction] = useActionState(UpdateContactWithId, null);
  return (
    <div className="px-4">
      <form>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-900"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              disabled
              placeholder="Full Name...."
              className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              defaultValue={contact.name}
            />
            {/* <div id="name-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.name}</p>
          </div> */}
          </div>

          <div className="mb-5">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-900"
            >
              Phone
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              disabled
              placeholder="Phone Number...."
              className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              defaultValue={contact.phone}
            />
            {/* <div id="phone-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.phone}</p>
          </div> */}
          </div>

          <div className="mb-5">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-900"
            >
              NIM
            </label>
            <input
              type="text"
              name="nim"
              id="nim"
              disabled
              placeholder="NIM...."
              className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              defaultValue={contact.nim || ""}
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-900"
            >
              No VA
            </label>
            <input
              type="text"
              name="nomorVa"
              id="nomorVa"
              disabled
              placeholder="Nomor Virtual Account...."
              className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              defaultValue={contact.nomorVa || ""}
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-900"
            >
              Username / Panggilan
            </label>
            <input
              type="text"
              name="posisi"
              id="posisi"
              disabled
              placeholder="Your Position...."
              className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              defaultValue={contact.posisi || ""}
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-900"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              disabled
              placeholder="Your Title...."
              className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              defaultValue={contact.title || ""}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-900"
            >
              Creat At
            </label>
            <input
              type="text"
              name="title"
              id="title"
              disabled
              placeholder="Your Title...."
              className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              defaultValue={formatDate(contact.createdAt.toString())}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-900"
            >
              Update At
            </label>
            <input
              type="text"
              name="title"
              id="title"
              disabled
              placeholder="Your Title...."
              className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              defaultValue={formatDate(contact.updatedAt.toString())}
            />
          </div>
        </div>

        {/* <div id="message-error" aria-live="polite" aria-atomic="true">
          <p className="mt-2 text-sm text-red-500">{state?.message}</p>
        </div> */}
        {/* <SubmitButton label="update" /> */}
        <RedirectButton />
      </form>
    </div>
  );
};

export default ReadForm;
