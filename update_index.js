const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. TABS TITLES
html = html.replace('<small class="text-body">Popular</small>', '<small class="text-body">Menu</small>');
html = html.replace('<h6 class="mt-n1 mb-0">Breakfast</h6>', '<h6 class="mt-n1 mb-0">Nasi Bakar</h6>');
html = html.replace('<small class="text-body">Special</small>', '<small class="text-body">Menu</small>');
html = html.replace('<h6 class="mt-n1 mb-0">Launch</h6>', '<h6 class="mt-n1 mb-0">Pelengkap</h6>');
html = html.replace('<small class="text-body">Lovely</small>', '<small class="text-body">Menu</small>');
html = html.replace('<h6 class="mt-n1 mb-0">Dinner</h6>', '<h6 class="mt-n1 mb-0">Minuman</h6>');

// 2. TAB CONTENT
function createMenuItem(name, price, desc, img) {
    return `
                                <div class="col-lg-6">
                                    <div class="d-flex align-items-center">
                                        <img class="flex-shrink-0 img-fluid rounded" src="img/${img}" alt="" style="width: 80px; height: 80px; object-fit: cover;">
                                        <div class="w-100 d-flex flex-column text-start ps-4">
                                            <h5 class="d-flex justify-content-between border-bottom pb-2">
                                                <span>${name}</span>
                                                <span class="text-primary">${price}</span>
                                            </h5>
                                            <small class="fst-italic">${desc}</small>
                                        </div>
                                    </div>
                                </div>`;
}

const tab1Items = [
    createMenuItem('Nasi Bakar Ayam', '15.000', 'Nasi bakar gurih dengan isian ayam suwir pedas nikmat', 'menu-1.jpg'),
    createMenuItem('Nasi Bakar Sapi', '18.000', 'Nasi bakar dengan isian daging sapi bumbu rempah pilihan', 'menu-2.jpg'),
    createMenuItem('Nasi Bakar Ati', '15.000', 'Nasi bakar sedap dengan isian ati ampela bumbu khas', 'menu-3.jpg'),
    createMenuItem('Kulit', '10.000', 'Kulit ayam goreng yang gurih meresap', 'menu-4.jpg'),
    createMenuItem('Ceker Mbeledos', '15.000', 'Ceker pedas nampol, tersedia Level 1 sampai 5!', 'menu-5.jpg')
].join('');

const tab2Items = [
    createMenuItem('Tempe Bacem', '3.000', 'Tempe manis gurih khas bumbu bacem', 'menu-6.jpg'),
    createMenuItem('Tahu Bacem', '3.000', 'Tahu lembut dengan bumbu bacem meresap', 'menu-7.jpg'),
    createMenuItem('Sate Ati', '4.000', 'Sate ati ampela bumbu manis gurih', 'menu-8.jpg'),
    createMenuItem('Sate Kulit', '3.000', 'Sate kulit ayam kenyal dan lezat', 'menu-1.jpg'),
    createMenuItem('Sate Tahu Tempe', '3.000', 'Sate paduan tahu dan tempe bumbu spesial', 'menu-2.jpg'),
    createMenuItem('Krupuk', '2.000', 'Krupuk renyah pelengkap makan', 'menu-3.jpg'),
    createMenuItem('Agar-agar', '4.000', 'Dessert manis penutup hidangan', 'menu-4.jpg')
].join('');

const tab3Items = [
    createMenuItem('Es Teh', '4.000', 'Teh manis segar yang melegakan dahaga', 'menu-5.jpg'),
    createMenuItem('Jus Jeruk', '8.000', 'Perasan jeruk asli yang kaya vitamin C', 'menu-6.jpg'),
    createMenuItem('Air Putih', '3.000', 'Air mineral menyegarkan', 'menu-7.jpg')
].join('');

// Replace the contents of the tabs
html = html.replace(/<div id="tab-1" class="tab-pane fade show p-0 active">[\s\S]*?<\/div>\s*<div id="tab-2"/, `<div id="tab-1" class="tab-pane fade show p-0 active">\n<div class="row g-4">\n${tab1Items}\n</div>\n</div>\n<div id="tab-2"`);
html = html.replace(/<div id="tab-2" class="tab-pane fade show p-0">[\s\S]*?<\/div>\s*<div id="tab-3"/, `<div id="tab-2" class="tab-pane fade show p-0">\n<div class="row g-4">\n${tab2Items}\n</div>\n</div>\n<div id="tab-3"`);
html = html.replace(/<div id="tab-3" class="tab-pane fade show p-0">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/, `<div id="tab-3" class="tab-pane fade show p-0">\n<div class="row g-4">\n${tab3Items}\n</div>\n</div>\n</div>\n</div>`);


// 3. RESERVATION
html = html.replace('Reservation</h5>', 'Pre-Order</h5>');
html = html.replace('Book A Table Online</h1>', 'Pesan Sekarang</h1>');
html = html.replace(/placeholder="Your Name"/g, 'placeholder="Nama Anda"');
html = html.replace(/<label for="name">Your Name<\/label>/, '<label for="name">Nama Anda</label>');
html = html.replace(/placeholder="Your Email"/g, 'placeholder="Email Anda"');
html = html.replace(/<label for="email">Your Email<\/label>/, '<label for="email">Email Anda</label>');
html = html.replace(/placeholder="Date & Time"/g, 'placeholder="Hari & Jam Pesanan"');
html = html.replace(/<label for="datetime">Date & Time<\/label>/, '<label for="datetime">Hari & Jam Pesanan</label>');
html = html.replace(/<option value="1">People 1<\/option>/g, '<option value="1">1 Porsi</option>');
html = html.replace(/<option value="2">People 2<\/option>/g, '<option value="2">2 Porsi</option>');
html = html.replace(/<option value="3">People 3<\/option>/g, '<option value="3">3 Porsi</option>');
html = html.replace(/<label for="select1">No Of People<\/label>/, '<label for="select1">Jumlah Pesanan</label>');
html = html.replace(/placeholder="Special Request"/g, 'placeholder="Catatan \/ Permintaan Khusus"');
html = html.replace(/<label for="message">Special Request<\/label>/, '<label for="message">Catatan \/ Permintaan Khusus</label>');
html = html.replace('Book Now</button>', 'Pesan Sekarang</button>');

// 4. MASTER CHEFS (Keep 2, delete last 2)
html = html.replace('Our Master Chefs</h1>', 'Koki Andalan Kami</h1>');
// Replace the team section items directly, there are 4 col-lg-3 items, we want 2 col-lg-6 items
const teamItem = (img, name, title, delay) => `<div class="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="${delay}s">
                        <div class="team-item text-center rounded overflow-hidden">
                            <div class="rounded-circle overflow-hidden m-4">
                                <img class="img-fluid" src="img/${img}" alt="">
                            </div>
                            <h5 class="mb-0">${name}</h5>
                            <small>${title}</small>
                            <div class="d-flex justify-content-center mt-3">
                                <a class="btn btn-square btn-primary mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-square btn-primary mx-1" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-square btn-primary mx-1" href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>`;

html = html.replace(/<div class="row g-4">\s*<div class="col-lg-3[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<!-- Team End -->/, 
`<div class="row g-4 justify-content-center">
                    ${teamItem('team-1.jpg', 'Utami', 'Master Chef', '0.1')}
                    ${teamItem('team-2.jpg', 'Monik', 'Master Chef', '0.3')}
                </div>
            </div>
        </div>
        <!-- Team End -->`);

// 5. TESTIMONIALS
html = html.replace('Our Clients Say!!!</h1>', 'Apa Kata Pelanggan!!!</h1>');
html = html.replace('Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam', 'Makanannya enak banget, bumbu nasi bakarnya meresap sempurna. Pasti bakal balik lagi pesen di sini!');
html = html.replace('Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam', 'Ceker mbeledosnya juara! Pedesnya nampol tapi bikin nagih. Recommended banget buat pecinta pedas.');
html = html.replace('Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam', 'Porsinya pas, harganya terjangkau banget. Sate ati dan tempe bacemnya juga sangat enak.');
html = html.replace('Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam', 'Pelayanan cepat dan ramah, order pre-order juga selalu tepat waktu. Sukses terus Utami Food!');
html = html.replace(/<h5 class="mb-1">Client Name<\/h5>/g, '<h5 class="mb-1">Pelanggan Setia</h5>');
html = html.replace(/<small>Profession<\/small>/g, '<small>Pecinta Kuliner</small>');

fs.writeFileSync('index.html', html);
console.log('Done generating index.html');
