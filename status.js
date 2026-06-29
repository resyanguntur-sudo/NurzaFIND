function ubahStatus() {

    let status = document.getElementById("pilihStatus").value;

    let area = document.getElementById("statusArea");

    if (status == "pending") {

        area.innerHTML = `

<div class="status-card pending">

<h2>🟡 Sedang Diverifikasi</h2>

<p>
Petugas Takmir sedang mencocokkan identitas pemilik dengan barang temuan.
</p>

<p>
Estimasi proses maksimal 1 x 24 jam.
</p>

</div>

`;

    }

    if (status == "approved") {

        area.innerHTML = `

<div class="status-card approved">

<h2>🟢 Verifikasi Berhasil</h2>

<p>
Data Anda telah sesuai.
</p>

<p>
Silakan mengambil barang di Pos Barang Temuan Masjid Nuruzzaman.
</p>

<p>
<b>Kode Pengambilan :</b> NZF-2026-001
</p>

</div>

`;

    }

    if (status == "rejected") {

        area.innerHTML = `

<div class="status-card rejected">

<h2>🔴 Verifikasi Ditolak</h2>

<p>
Data yang Anda berikan belum sesuai.
</p>

<p>
Silakan ajukan klaim kembali dengan informasi yang lebih lengkap.
</p>

</div>

`;

    }

}

ubahStatus();
