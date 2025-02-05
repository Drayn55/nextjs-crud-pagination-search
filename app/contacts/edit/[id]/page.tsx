// import UpdateForm from "@/components/edit-form"
// import { getContactsById } from "@/lib/data";
// import { notFound } from "next/navigation";


// const UpdateContactPage = async ({params}:{params:{id:string}}) => {
//     const id = params.id;
//     const contact = await getContactsById(id);

//     if (!contact) {
//         notFound()
//     }
    
//   return (
//       <div className="max-w-md mx-auto mt-5">
//           <h1 className="text-3xl text-center mb-2">Update Contact</h1>
//           <UpdateForm contact={contact} />
//     </div>
//   )
// }

// export default UpdateContactPage

import UpdateForm from "@/components/edit-form";
import { getContactsById } from "@/lib/data";
import { notFound } from "next/navigation";

const UpdateContactPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params; // Tunggu params untuk mendapatkan id
  const contact = await getContactsById(id);

  if (!contact) {
      notFound();
  }

  return (
      <div className="max-w-md mx-auto mt-5">
          <h1 className="text-3xl text-center mb-2">Update Data Mahasiswa</h1>
          <UpdateForm contact={contact} />
      </div>
  );
};

export default UpdateContactPage;