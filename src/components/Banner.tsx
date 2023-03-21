const Banner = () => {
  return (
    <div
      className="w-full h-screen bg-cover box-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1596733430284-f7437764b1a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')`,
      }}
    >
      <div className="text-center justify-start">
        <h2 className="text-5xl mb-5 font-bold text-orange-600 shadow-xl shadow-cyan-500/50">
          PAKAN TERNAK
        </h2>
        <button className="border bg-orange-500 font-semibold px-7 py-3">
          Lihat Produk
        </button>
      </div>
    </div>
  );
};

export default Banner;
