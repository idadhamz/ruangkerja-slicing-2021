var items = [
    {
        img: 'assets/img/coworking/coworking-1.png',
        alt: 'coworking-1',
        name: 'Conclave, Wijaya',
        address: 'Jalan Wijaya I No.5C, Jakarta Selatan',
        price: '100.000'
    },
    {
        img: 'assets/img/coworking/coworking-2.png',
        alt: 'coworking-2',
        name: 'Uptown Serviced Office, Kuningan',
        address: 'Jalan DR. Ide Anak Agung Gde Agung, RT.5/RW.2, Kuningan',
        price: '100.000'
    },
    {
        img: 'assets/img/coworking/coworking-3.png',
        alt: 'coworking-3',
        name: 'CoHive, Senopati',
        address: 'Jalan Tulodong Atas No.28, Senopati, Jakarta Selatan',
        price: '50.000'
    },
    {
        img: 'assets/img/coworking/coworking-4.png',
        alt: 'coworking-4',
        name: 'Wellspaces Equity Tower, SCBD',
        address: 'SCBD Lot 9 Jalan Jendral Sudirman Kav.52-53, Jakarta Selatan',
        price: '120.000'
    },
    {
        img: 'assets/img/coworking/coworking-5.png',
        alt: 'coworking-5',
        name: 'Go Work - Coworking and Office Space, Thamrin',
        address: 'Chubb Square, Jalan M.H. Thamrin No.10, Jakarta Pusat',
        price: '125.000'
    },
    {
        img: 'assets/img/coworking/coworking-6.png',
        alt: 'coworking-6',
        name: 'WU Hub Coworking Space, Kuningan',
        address: 'Jalan H. R. Rasuna Said Kav. C No. 5, Karet Kuningan, Setiabudi',
        price: '50.000'
    }
];

var content_sekitarmu = document.getElementById('content-sekitarmu');

var div = '';

items.forEach((item) => {
    div += `
    <div class="ruang-kerja">
        <img src=${item.img} alt=${item.alt}>
        <div>
            <a>
                <h1>${item.name}</h1>
            </a>
            <p class="address">
                ${item.address}
            </p>
            <p class="price">
                Rp ${item.price} <span>/ hari</span>
            </p>
        </div>
    </div>
    `
})

console.log(div)

content_sekitarmu.innerHTML = div

console.log(content_sekitarmu)