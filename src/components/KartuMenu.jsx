import { useState } from "react";
import LabelHarga from "./LabelHarga";

function KartuMenu({ nama, harga, kategori = "Makanan" }) {
  const [jumlah, setJumlah] = useState(0);
  const [catatan, setCatatan] = useState("");

  function tambah() {
    setJumlah(jumlah + 1);
  }

  return (
    <div className="kartu-menu">
      <h3>{nama}</h3>
      <LabelHarga nilai={harga} />
      <p>Kategori: {kategori}</p>

      <button
        disabled={jumlah === 0}
        onClick={() => setJumlah(jumlah - 1)}
      >
        -
      </button>

      <span> {jumlah} </span>

      <button onClick={tambah}>+</button>

      <p>
        {jumlah === 0
          ? "Belum dipesan"
          : "Subtotal: Rp " + harga * jumlah}
      </p>

      {jumlah >= 5 && <p>Pesanan banyak</p>}

      <input
        placeholder="Catatan pesanan"
        value={catatan}
        onChange={(e) => setCatatan(e.target.value)}
      />

      {catatan && <p>Catatan: {catatan}</p>}
    </div>
  );
}

export default KartuMenu;