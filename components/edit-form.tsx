"use client";

import { updateContact } from "@/lib/action";
import { useActionState } from "react";
import { RedirectButton, SubmitButton } from "./buttons";
import type { Contact } from "@prisma/client";

const UpdateForm = ({ contact }: { contact: Contact }) => {
  const UpdateContactWithId = updateContact.bind(null, contact.id);
  const [state, formAction] = useActionState(UpdateContactWithId, null);
  return (
    <div className="px-4">
      <form action={formAction}>
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
              placeholder="Full Name...."
              className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              defaultValue={contact.name}
            />
            <div id="name-error" aria-live="polite" aria-atomic="true">
              <p className="mt-2 text-sm text-red-500">{state?.Error?.name}</p>
            </div>
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
              placeholder="Phone Number...."
              className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              defaultValue={contact.phone}
            />
            <div id="phone-error" aria-live="polite" aria-atomic="true">
              <p className="mt-2 text-sm text-red-500">{state?.Error?.phone}</p>
            </div>
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
              placeholder="NIM...."
              className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              defaultValue={contact.nim || ""}
            />
            <div id="nim-error" aria-live="polite" aria-atomic="true">
              <p className="mt-2 text-sm text-red-500">{state?.Error?.nim}</p>
            </div>
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
              placeholder="Nomor Virtual Account...."
              className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              defaultValue={contact.nomorVa || ""}
            />
            <div id="nomorVa-error" aria-live="polite" aria-atomic="true">
              <p className="mt-2 text-sm text-red-500">
                {state?.Error?.nomorVa}
              </p>
            </div>
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
              placeholder="Your Username...."
              className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              defaultValue={contact.posisi || ""}
            />
            <div id="posisi-error" aria-live="polite" aria-atomic="true">
              <p className="mt-2 text-sm text-red-500">
                {state?.Error?.posisi}
              </p>
            </div>
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
              placeholder="Your Title...."
              className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              defaultValue={contact.title || ""}
            />
            <div id="title-error" aria-live="polite" aria-atomic="true">
              <p className="mt-2 text-sm text-red-500">{state?.Error?.title}</p>
            </div>
          </div>


        </div>
        <div id="message-error" aria-live="polite" aria-atomic="true">
          <p className="mt-2 text-sm text-red-500">{state?.message}</p>
        </div>

        <SubmitButton label="update" />
        <RedirectButton />
      </form>
    </div>
  );
};

export default UpdateForm;
