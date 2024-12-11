import { getContactCount } from "@/lib/data";

const Header = async () => {
  try {
    const count = await getContactCount();
    // console.log('Jumlah total kontak: di client', count);

    return (
      <div className="flex items-center gap-x-3 pb-5">
        <h2 className="text-lg font-medium text-gray-800">Data Mahasiswa</h2>

        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:text-blue-400">
        {count !== 0 ? `${count} users` : 'Loading...'}
        </span>
      </div>
    );
  } catch (error) {
    console.error('Error:', error);
  }
};

export default Header;