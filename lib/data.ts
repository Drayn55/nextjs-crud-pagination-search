import { prisma } from "@/lib/prisma";

const ITEMS_PER_PAGE = 8;

export const getContacts = async (query: string, currentPage: number) => {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  await new Promise((resolve) => setTimeout(resolve, 2000));

  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const contacts = await prisma.contact.findMany({
      skip: offset,
      take: ITEMS_PER_PAGE,
      where: {
        OR: [
          {
            name: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            phone: {
              contains: query,
              mode: "insensitive",
            },
          },
        ],
      },
    });

    return contacts;
  } catch (error) {
    throw new Error("Error fetching contacts");
  }
};


// export const getContacts = async() => {
//   try {
//     const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contacts`);
//       const data = await response.json();
//       console.log('Fetched contacts:', data); // Log the response data
//       // Process the data here
//   } catch (error) {
//       console.error('Error fetching contacts:', error);
//   }
// }

export const getContactsById = async (id: string) => {
  try {
    const contact = await prisma.contact.findUnique({
      where: { id },
    });
    return contact;
  } catch (error) {
    throw new Error("Error fetching contacts");
  }
};

export const getContactPages = async (query: string) => {
  try {
    const contacts = await prisma.contact.count({
      where: {
        OR: [
          {
            name: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            phone: {
              contains: query,
              mode: "insensitive",
            },
          },
        ],
      },
    });
    const totalPages = Math.ceil(Number(contacts) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    throw new Error("Error fetching contacts");
  }
};

export const getContactCount = async () => {
  try {
    const count = await prisma.contact.count();
    // console.log('Jumlah total kontak:', count);
    return count;
  } catch (error) {
    console.error('Error fetching contact count:', error);
    return 0; // Kembalikan 0 jika terjadi error
  }
};

// export const getFilteredContactCount = async (query: string) => {
//   try {
//     const count = await prisma.contact.count({
//       where: {
//         OR: [
//           {
//             name: {
//               contains: query,
//               mode: "insensitive",
//             },
//           },
//           {
//             phone: {
//               contains: query,
//               mode: "insensitive",
//             },
//           },
//         ],
//       },
//     });
//     console.log('Jumlah kontak yang sesuai dengan query:', count); // Menampilkan jumlah kontak yang sesuai
//     return count;
//   } catch (error) {
//     console.error('Error fetching filtered contact count:', error);
//     return 0; // Kembalikan 0 jika terjadi error
//   }
// };



// Panggil fungsi untuk menghitung jumlah semua kontak

// getContactCount().then(count => {
//   console.log('Jumlah total kontak:', count);
// }).catch(error => {
//   console.error('Error:', error);
// });

// // Panggil fungsi untuk menghitung jumlah kontak berdasarkan query
// const query = "John"; // Ganti dengan query yang Anda inginkan
// getFilteredContactCount(query).then(count => {
//   console.log('Jumlah kontak yang sesuai dengan query:', count);
// }).catch(error => {
//   console.error('Error:', error);
// });



