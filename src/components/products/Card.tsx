const Card = () => {
  return (
    <div className="flex flex-col md:flex-row mt-5 flex-wrap gap-2 container">
      <div className="border flex-1 rounded-lg p-2">
        <div className="bg-gray-100 h-[200px] rounded-xl mb-2" />
        <h2 className="font-medium">Pakan bubuk</h2>
        <p className="text-sm">
          Pakan ini memiliki keunggulan super yang bisa berubah jadi spider man
        </p>
        <button className="bg-gray-300 w-full mt-2 rounded py-2">Lihat</button>
      </div>

      <div className="border flex-1 rounded-lg p-2">
        <div className="bg-gray-100 h-[200px] rounded-xl mb-2" />
        <h2 className="font-medium">Pakan bubuk</h2>
        <p className="text-sm">
          Pakan ini memiliki keunggulan super yang bisa berubah jadi spider man
        </p>
        <button className="bg-gray-300 w-full mt-2 rounded py-2">Lihat</button>
      </div>

      <div className="border flex-1 rounded-lg p-2">
        <div className="bg-gray-100 h-[200px] rounded-xl mb-2" />
        <h2 className="font-medium">Pakan bubuk</h2>
        <p className="text-sm">
          Pakan ini memiliki keunggulan super yang bisa berubah jadi spider man
        </p>
        <button className="bg-gray-300 w-full mt-2 rounded py-2">Lihat</button>
      </div>
    </div>
  );
};

export default Card;
