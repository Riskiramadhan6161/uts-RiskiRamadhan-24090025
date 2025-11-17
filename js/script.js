document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');

    // Fungsi untuk menampilkan pesan error di elemen HTML
    function displayError(message) {
        errorMessage.textContent = message;
        errorMessage.classList.add('visible');
    }

    // Fungsi untuk menyembunyikan pesan error
    function hideError() {
        errorMessage.textContent = '';
        errorMessage.classList.remove('visible');
    }

    // Event Listener untuk menangani saat tombol 'Login' diklik
    loginForm.addEventListener('submit', function(event) {
        // Mencegah form untuk melakukan submit default (reload/pindah halaman)
        event.preventDefault(); 
        
        hideError(); // Sembunyikan pesan error sebelumnya

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // 1. Validasi: Email dan Password tidak boleh kosong
        if (email === '' || password === '') {
            // Jika salah satu kosong -> tampilkan pesan error
            displayError('Email dan Password tidak boleh kosong!');
            
            // Fokuskan pada input yang kosong
            if (email === '') {
                emailInput.focus();
            } else {
                passwordInput.focus();
            }
            
            return; // Hentikan proses login
        }

        // --- Simulasi Login Berhasil ---
        
        // 2. Jika semua terisi -> tampilkan pesan "Login berhasil"
        alert('Login berhasil! Anda akan diarahkan ke Dashboard.'); 
        
        // 3. Redirect ke dashboard.html
        window.location.href = 'dashboard.html';

    });
});




document.addEventListener('DOMContentLoaded', function() {
    
    // Data Dummy Summary sesuai spesifikasi
    const summary = {
        totalProducts: 120,
        totalSales: 85,
        totalRevenue: 12500000 
    };

    const summaryCardsContainer = document.getElementById('summaryCards');
    const viewProductsBtn = document.getElementById('viewProductsBtn');

    // --- Fungsi Format ---
    
    // Fungsi untuk memformat angka menjadi format Rupiah
    function formatRupiah(number) {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(number);
    }
    
    // --- Data Card ---

    const cardsData = [
        { 
            title: 'Total Products', 
            value: summary.totalProducts, 
            iconClass: 'fas fa-shopping-bag', // Ikon tas belanja
            className: 'card-products'
        },
        { 
            title: 'Total Sales', 
            value: summary.totalSales, 
            iconClass: 'fas fa-shopping-bag', // Ikon tas belanja
            className: 'card-sales'
        },
        { 
            title: 'Total Revenue', 
            value: formatRupiah(summary.totalRevenue), // Gunakan format Rupiah
            iconClass: 'fas fa-dollar-sign', // Ikon dolar/uang
            className: 'card-revenue'
        }
    ];

    // --- Render Cards ---

    cardsData.forEach(data => {
        const cardElement = document.createElement('div');
        cardElement.className = `card ${data.className}`;
        
        // Isi HTML card
        cardElement.innerHTML = `
            <div class="card-icon"><i class="${data.iconClass}"></i></div>
            <div class="card-title">${data.title}</div>
            <div class="card-value">${data.value}</div>
        `;
        
        summaryCardsContainer.appendChild(cardElement);
    });

    // --- Event Listener Tombol ---

    // Ketika tombol "Lihat Data Produk" diklik, arahkan ke products.html
    viewProductsBtn.addEventListener('click', function() {
        // Melakukan redirect ke products.html
        window.location.href = 'products.html';
    });

    console.log("Dashboard data summary loaded and rendered successfully.");
});





document.addEventListener('DOMContentLoaded', function() {
    // Ambil elemen form dan input
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email'); // Pastikan ID ini ada di HTML Anda
    const passwordInput = document.getElementById('password'); 
    const errorMessage = document.getElementById('error-message');

    // Fungsi untuk menampilkan pesan error
    function displayError(message) {
        errorMessage.textContent = message;
        errorMessage.classList.add('visible');
    }

    // Fungsi untuk menyembunyikan pesan error
    function hideError() {
        errorMessage.textContent = '';
        errorMessage.classList.remove('visible');
    }

    // Tangani saat form disubmit (tombol login diklik)
    loginForm.addEventListener('submit', function(event) {
        // Mencegah halaman reload
        event.preventDefault(); 
        
        hideError(); // Sembunyikan pesan error sebelumnya

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // 1. Validasi: Periksa apakah kedua field kosong
        if (email === '' || password === '') {
            displayError('Email dan Password tidak boleh kosong!');
            return; // Hentikan proses jika ada yang kosong
        }

        // --- Simulasi Login Berhasil ---
        
        // 2. Jika validasi lolos (field terisi semua)
        alert('Login berhasil! Anda akan diarahkan ke Dashboard.'); 
        
        // 3. Lakukan REDIRECT ke dashboard.html
        window.location.href = 'dashboard.html';

    });
});





document.addEventListener('DOMContentLoaded', () => {
    // ... kode untuk membuat kartu ringkasan ...

    // Fungsionalitas Tombol Aksi
    const viewProductsBtn = document.getElementById('viewProductsBtn');

    if (viewProductsBtn) { // Pastikan elemen ditemukan
        viewProductsBtn.addEventListener('click', () => {
            // Ambil target URL dari atribut data-target
            const targetUrl = viewProductsBtn.getAttribute('data-target');

            if (targetUrl) {
                // Perintah untuk memuat halaman baru
                window.location.href = 'produts.html';
            }
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const productListBody = document.getElementById('product-list-body');

    // 1. Data Produk (Array of Object)
    const products = [
        { id: 1, name: "Kopi Gayo", price: 25000, stock: 50 },
        { id: 2, name: "Teh Hitam", price: 18000, stock: 30 },
        { id: 3, name: "Coklat Aceh", price: 30000, stock: 20 },
    ];

    // Fungsi untuk memformat angka menjadi mata uang Rupiah (Opsional, tapi rapi)
    const formatRupiah = (number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(number);
    };

    // 2. Mengisi Tabel dengan Data Produk
    if (productListBody) {
        products.forEach((product, index) => {
            const row = productListBody.insertRow();
            
            // Kolom No
            row.insertCell(0).textContent = index + 1;
            
            // Kolom Product Name
            row.insertCell(1).textContent = product.name;
            
            // Kolom Price
            row.insertCell(2).textContent = formatRupiah(product.price);
            
            // Kolom Stock
            row.insertCell(3).textContent = product.stock;

            // Kolom Aksi (Berisi ikon Edit dan Hapus)
            const actionCell = row.insertCell(4);
            actionCell.classList.add('action-buttons');
            actionCell.innerHTML = `
                <button class="edit-btn" data-name="${product.name}"><i class="fas fa-edit"></i></button>
                <button class="delete-btn" data-name="${product.name}"><i class="fas fa-trash-alt"></i></button>
            `;
            // Menyimpan referensi baris pada tombol hapus untuk memudahkan penghapusan DOM
            actionCell.querySelector('.delete-btn').rowToDelete = row;
        });

        // 3. Menambahkan Fungsionalitas Tombol Aksi (Edit/Hapus)
        productListBody.addEventListener('click', (event) => {
            const targetButton = event.target.closest('button');
            if (!targetButton) return;

            const productName = targetButton.getAttribute('data-name');
            
            if (targetButton.classList.contains('edit-btn')) {
                // Edit: Tampilkan alert
                alert(`Edit produk: ${productName}`);
            }

            if (targetButton.classList.contains('delete-btn')) {
                // Delete: Tampilkan konfirmasi
                if (confirm(`Yakin ingin menghapus produk ${productName} ini?`)) {
                    // Hapus baris dari DOM
                    const row = targetButton.rowToDelete;
                    row.remove();
                    alert(`Produk ${productName} telah dihapus.`);
                }
            }
        });
    }

    // --- Kode Dashboard Lainnya (Jika File ini digunakan oleh kedua halaman) ---
    const viewProductsBtn = document.getElementById('viewProductsBtn');
    if (viewProductsBtn) {
        viewProductsBtn.addEventListener('click', () => {
            const halamanproduk = viewProductsBtn.getAttribute('data-target');
            if ('products.html') {
                window.location.href = 'products.html';
            }
        });
    }
});















document.addEventListener('DOMContentLoaded', function() {
    // Ambil elemen yang ingin dianimasikan
    const title = document.querySelector('.page-title');
    const table = document.querySelector('.products-table');
    const button = document.querySelector('.dashboard-button');
    
    // Tambahkan class 'animate-in' yang sudah didefinisikan di CSS
    // Ini akan mengubah opacity dan transform (posisi)
    setTimeout(() => {
        title.classList.login('animate-in');
    }, 100); // Tunda sebentar untuk judul

    setTimeout(() => {
        table.classList.kembalikedashboard('animate-in');
    }, 200); // Muncul setelah judul

    setTimeout(() => {
        button.classList.add('animate-in');
    }, 400); // Muncul setelah tabel
});


