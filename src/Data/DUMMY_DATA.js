const DUMMY_DATA = [
    {
        'Electronics': [
            {
                id: 1,
                category: 'Electronics',
                sub_category: 'Laptops',
                product_name: 'HP Chromebook MediaTek Kompanio 500 - (4 GB/64 GB EMMC Storage/Chrome OS) 11A-NA0002MU Chromebook  (11.6 inch, Indigo Blue, 1.07 kg)',
                description: 'With the HP Chromebook MT8183, studying at home becomes easy, fast, and convenient for students. This personal device features Buttons to quickly access Google Search, Drive, apps, etc. Also, it has the Voice-enabled Google Assistant for fast response, and it is easy to start.',
                original_price: '25,451',
                discounted_price: '15,990',
                image: 'hp.webp',
                specifications: [
                    {'Processor Brand': 'MediaTek'},
                    {'Processor Name': 'MediaTek Kompanio 500'},
                    {'SSD': 'No'},
                    {'RAM': '4 GB'},
                    {'RAM Type': 'DDR4'}
                ]
            },
            {
                id: 2,
                category: 'Electronics',
                sub_category: 'Laptops',
                product_name: 'HP Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) 15s-fq5007TU Thin and Light Laptop  (15.6 Inch, Natural Silver, 1.69 kg, With MS Office)',
                description: 'With this HP laptop, which is packed with amazing capabilities, you can find delight in beautiful graphics and easily multitask. The processing capacity of this laptop works in conjunction with the raw strength of the Intel processor and graphics to offer a learning environment that is adaptable and user-friendly. You can finish your tasks with this laptop\'s USB ports and integrated 4G LTE setup. For those who put in long hours of work day and night, this laptop provides a dependable workstation. Enjoy 1920 x 1080 resolution as well for clear visuals and images that give all of your digital content a distinct dimension. With the power of 2 million pixels, you can experience digital content in a mesmerising fashion.',
                original_price: '56,261',
                discounted_price: '41,990',
                image: 'hp2.webp',
                specifications: [
                    {'Processor Brand': 'Intel'},
                    {'Processor Name': 'Core i3'},
                    {'SSD': 'Yes'},
                    {'RAM': '8 GB'},
                    {'RAM Type': 'DDR4'}
                ]
            },
            {
                id: 3,
                category: 'Electronics',
                sub_category: 'Laptops',
                product_name: 'ASUS Vivobook 15 Core i3 11th Gen 1115G4 - (8 GB/256 GB SSD/Windows 11 Home) X515EA-EJ312W Thin and Light Laptop  (15.6 Inch, Transparent Silver, 1.80 kg)',
                original_price: '44,990',
                discounted_price: '29,990',
                description: 'The outstanding Asus VivoBook 15 laptop, created to simplify your workday and improve performance, offers fantastic efficiency and stunning aesthetics. This laptop handles all of your multitasking requirements and gives you dynamic performance thanks to the Intel Core processor. Additionally, the dual-storage ASUS VivoBook 15 offers you the benefits of incredibly fast data speed and ample storage capacity. Moreover, its svelte and exquisite form makes you the centre of attention everywhere you go when donning it with you.',
                image: 'asus.webp',
                specifications: [
                    {'Processor Brand': 'Intel'},
                    {'Processor Name': 'Core i3'},
                    {'SSD': 'Yes'},
                    {'RAM': '8 GB'},
                    {'RAM Type': 'DDR4'}
                ]
            },
            {
                id: 4,
                category: 'Electronics',
                sub_category: 'Laptops',
                product_name: 'ASUS Vivobook Go 15 OLED (2023) Ryzen 5 Quad Core 7520U - (8 GB/512 GB SSD/Windows 11 Home) E1504FA-LK523WS Thin and Light Laptop  (15.6 Inch, Green Grey, 1.63 Kg, With MS Office)',
                description: 'The superb Asus Vivobook Go 15 OLED laptop delivers a seamless user experience, a gorgeous design, and tonnes of amazing capabilities. You can carry out all of your professional tasks on the AMD Ryzen 7000-U Series CPU, 5500 MHz quick LDDR5, and PCIe 3.0 SSD storage of the Vivobook Go 15 OLED laptop. Owing to the laptop\'s ASUS SonicMaster and DTS Audio Processor, which both provide incredibly loud, high-quality sound, you can dance to your favourite music. The laptop\'s 180-degree lay-flat hinge, which is excellently built, enables effective participation and information sharing.',
                original_price: '74,990',
                discounted_price: '43,990',
                image: 'vivobook.webp',
                specifications: [
                    {'Processor Brand': 'AMD'},
                    {'Processor Name': 'Ryzen 5 Quad Core'},
                    {'SSD': 'Yes'},
                    {'RAM': '8 GB'},
                    {'RAM Type': 'LPDDR5'}
                ]
            },
            {
                id: 5,
                category: 'Electronics',
                sub_category: 'Laptops',
                product_name: 'ASUS TUF Gaming F15 with 90WHr Battery Core i5 11th Gen 11400H - (16 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce RTX 3050/144 Hz/75 W) FX506HC-HN362W Gaming Laptop  (15.6 Inch, Graphite Black, 2.30 Kg)',
                description: 'Bristling with high-refresh rate displays and competitive GPUs, ultra-durable TUF Gaming laptops deliver a reliable portable gaming experience to a wide audience of gamers.',
                original_price: '89,990',
                discounted_price: '61,990',
                image: 'tuf.webp',
                specifications: [
                    {'Processor Brand': 'Intel'},
                    {'Processor Name': 'Core i5'},
                    {'SSD': 'Yes'},
                    {'RAM': '16 GB'},
                    {'RAM Type': 'DDR4'}
                ]
            },
        ],
    },
    { 
    'Smartphones': [
            {
                id: 6,
                category: 'Smartphones',
                sub_category: 'Smartphones',
                product_name: 'MOTOROLA G32 (Mineral Gray, 128 GB)  (8 GB RAM)',
                description: 'You can experience lag-free gaming, fluid multitasking, and stunning, stutter-free images with the Moto G32. With a mind-blowing 16.51 cm (6.5) FHD+ Ultra-wide display and a refresh rate of 90 Hz, this phone makes it possible to multitask while being entertained. Furthermore, with a Snapdragon 680 Octa-core processor and 8 GB of RAM, you can juggle brilliantly without the smartphone overheating while enjoying an amazing UI. Moreover, this phone has a 50 MP primary camera with an 8 MP ultra-wide lens, enabling you to capture breath-taking timeless beauty.',
                original_price: '18,999',
                discounted_price: '9,999',
                image: 'moto.webp',
                specifications: [
                    {'Internal Storage': '128 GB'},
                    {'RAM': '8 GB'},
                    {'Processor Type': 'Qualcomm Snapdragon 680'},
                    {'Processor Core': 'Octa Core'}
                ]
            }, {
                id: 7,
                category: 'Smartphones',
                sub_category: 'Smartphones',
                product_name: 'SAMSUNG Galaxy F04 (Opal Green, 64 GB)  (4 GB RAM)',
                description: 'With the stunning features of the Samsung Galaxy F04 smartphone, discover what it means to have a flawless user experience. This smartphone\'s astonishing 8 GB of RAM makes multitasking a snap. Additionally, the unique RAM Plus technology intelligently enhances your memory by using your storage as virtual memory, enabling you to conveniently play graphically demanding games. The MTK P35 CPU in this phone also makes it simple for you to switch between programmes and sustain productivity. On this phone\'s amazing 16.55cm (6.5) HD+ display, you can enjoy your favourite content with theater-like quality and experience the characters spring to life in every frame.',
                original_price: '11,499',
                discounted_price: '6,499',
                image: 'samsung.webp',
                specifications: [
                    {'Internal Storage': '64 GB'},
                    {'RAM': '4 GB'},
                    {'Processor Type': 'Mediatek Helio P35'}
                ]
            }, {
                id: 8,
                category: 'Smartphones',
                sub_category: 'Smartphones',
                product_name: 'OnePlus Nord CE 2 Lite 5G (Blue Tide, 128 GB)  (6 GB RAM)',
                description: 'AI scene enhancement, Dual-View Video, HDR, Night Portrait, Panorama Mode, Retouch Filters, 1080p video at 30 fps, SLO-MO: 720p video at 120 fps, TIME-LAPSE: 1080p video at 30 fps, Video editor, Face unlock, Screen flash, HDR, NIGHT, PORTRAIT, TIME-LAPSE, Retouch, Filters',
                original_price: '19,999',
                discounted_price: '17,009',
                image: 'oneplus.webp',
                specifications: [
                    {'Internal Storage': '128 GB'},
                    {'RAM': '6 GB'},
                    {'Processor Core': 'Octa Core'}
                ]
            }, {
                id: 9,
                category: 'Smartphones',
                sub_category: 'Smartphones',
                product_name: 'Infinix SMART 7 (Azure Blue, 64 GB)  (4 GB RAM)',
                description: 'You can take advantage of a wide range of outstanding features that complement your lifestyle with the amazing Infinix SMART 7 phone. You can show off your flair everywhere you go with this phone, which has a sizable 6000 mAh battery, up to 7 GB of RAM, and a 16.76 cm (6.6) HD+ Display that makes every image come to life. Also, you can enhance your online appearance with the SMART 7\'s 13 MP Dual Camera, which is crisp and clear. The powerful Dual Flash provides you with the optimal lighting to spotlight your subject while it is dark outside.',
                original_price: '9,999',
                discounted_price: '6,699',
                image: 'infinix.webp',
                specifications: [
                    {'Internal Storage': '64 GB'},
                    {'RAM': '4 GB'},
                    {'Processor Type': 'Unisoc Spreadtrum SC9863A1'},
                    {'Processor Core': 'Octa Core'}
                ]
            }, {
                id: 10,
                category: 'Smartphones',
                sub_category: 'Smartphones',
                product_name: 'MOTOROLA e13 (Aurora Green, 64 GB)  (4 GB RAM)',
                description: 'With the all-new moto e13, you can enjoy advanced capabilities with up to 4 GB of RAM and cruise through a hectic day with ease. Store everything you love and more with 64 GB of storage that’s expandable up to 1 TB. Equipped with a powerful UNISOC T606 Processor, you’ll get a performance like never before. Scroll, stream, search, and socialise with a 5000mAh battery that lets you watch videos for up to 23 hours, listen to music for up to 225 hours and browse your favourite social media platforms for up to 21 hours. Additionally, with a premium design and a sleek body, it’s sure to make some heads turn. Take your theatre to-go when you have a 16.5 cm (6.5) ultra-wide screen IPS LCD screen and Dolby Atmos that gives you unmatched entertainment.',
                original_price: '10,999',
                discounted_price: '6,499',
                image: 'moto2.webp',
                specifications: [
                    {'Internal Storage': '64 GB'},
                    {'RAM': '4 GB'},
                    {'Processor Type': 'Unisoc T606'},
                    {'Processor Core': 'Octa Core'}
                ]
            },
        ],
    },
    {
        'Home appliances': [
            {
                id: 11,
                category: 'Home appliances',
                sub_category: 'Home Appliances',
                product_name: 'Whirlpool 184 L Direct Cool Single Door 2 Star Refrigerator  (Sapphire, 205 WDE PRM 2S SAPPHIRE BLOOM-Z)',
                description: 'You can effortlessly keep your fruits, vegetables, and leftover food items fresh for a long period of time with the Whirlpool Refrigerator. The capillary, which transfers refrigerant from the compressor to the freezer, is enclosed in cold gas from all sides, owing to its Insulated Capillary technology. This way, this refrigerator ensures enhanced compressor performance, rapid chilling, and up to nine hours of cooling retention. Moreover, this refrigerator has a chiller with storage for milk packets and cans to preserve them at the right chilling temperature.',
                original_price: '17,000',
                discounted_price: '13,840',
                image: 'whirlpool.webp',
                specifications: [
                    {'Capacity': '184 L'},
                    {'Number Of Doors': '1'},
                    {'Toughened Glass': 'Yes'},
                    {'Built-in Stabilizer': 'Yes'}
                ]   
            }, {
                id: 12,
                category: 'Home appliances',
                sub_category: 'Home Appliances',
                product_name: 'MOTOROLA EnvisionX 165 cm (65 inch) QLED Ultra HD (4K) Smart Google TV QuantumGlow Technology, Dolby Vision & Dolby Atmos (2023 Range)  (65UHDGQMWS5Q)',
                description: 'You can enjoy crystal-clear and vibrant colours on this Motorola QLED TV. The QuantumGlow tech ensures you with bright and captivating visuals. The Dolby Vision and bezel-less design of this TV allow you to engage in your favourite entertainment, be it watching movies or playing games. With Dolby Atmos technology you can enjoy different audio modes at top-quality on its 20 W speakers. It has an in-built graphics unit that ensures you with fast and smooth processing to make multi-tasking more easy and effective. Thanks to the Android 11 featured in this Google TV, you can use your voice to command and access this TV to view your favourite content.',
                original_price: '70,290',
                discounted_price: '49,845',
                image: 'moto3.webp',
                specifications: [
                    {'Brightness': '350 nits'},
                    {'Picture Engine': 'MediaTek'},
                    {'View Angle': '178 degree'},
                    {'LED Display Type': 'LED'},
                    {'Refresh Rate': '60Hz'}
                ]
            }, {
                id: 13,
                category: 'Home appliances',
                sub_category: 'Home Appliances',
                product_name: 'MarQ by Flipkart 7 kg 5 Star rating Semi Automatic Top Load Washing Machine Blue, White  (MQSA70H5M)',
                description: 'You can quickly and conveniently wash your clothes with the help of the MarQ by Flipkart 7 kg MQSA70H5M Semi-automatic Top-loading Washing Machine. Built using high-quality ABS material, this washing machine ensures enduring performance. Powered by a robust motor that offers high speeds of up to 1350 RPM with pulsating cycles, this washing machine delivers optimal performance. Moreover, thanks to its sophisticated wash programmes, this washing machine enables you to effortlessly personalise your wash programmes based on the load sizes.',
                original_price: '10,990',
                discounted_price: '6,890',
                image: 'washingmachine.webp',
                specifications: [
                    {'Function Type': 'Semi Automatic Top Load'},
                    {'Energy Rating': '5'},
                    {'Washing Capacity': '7 kg'},
                    {'Washing Method': 'Pulsator'}
                ]
            }, {
                id: 14,
                category: 'Home appliances',
                sub_category: 'Home Appliances',
                product_name: 'Panasonic SC-HT550GW-K 150 W Bluetooth Home Theatre  (Black, 5.1 Channel)',
                description: 'Panasonic SC-HT550GW-K 150 W Bluetooth Home Theatre  (Black, 5.1 Channel)',
                original_price: '13,490',
                discounted_price: '10,990',
                image: 'panasonic.webp',
                specifications: [
                    {'Configuration': '5.1 Channel'},
                    {'Memory Card Supported': 'No'},
                    {'Compatible Devices': 'Mobile, Computer, Tablet'},
                    {'USB Ports': '1 USB Ports'}
                ]
            }, {
                id: 15,
                category: 'Home appliances',
                sub_category: 'Home Appliances',
                product_name: 'Voltas 2023 Model 1.5 Ton 3 Star Split Inverter AC - White  (183V Vectra Pride(4503445), Copper Condenser)',
                description: ' Variable speed compressor which adjusts power depending on heat load. Convertible / adjustable with 4 cooling modes through remote control to operate in different tonnages for different cooling needs (20% to 120% capacity)',
                original_price: '62,990',
                discounted_price: '33,490',
                image: 'voltas.webp',
                specifications: [
                    {'Color': 'White'},
                    {'Cooling Capacity': '4800 W'},
                    {'Compressor': 'High EER Rotary- BLDC'},
                    {'Dehumidification': 'Yes'}
                ]
            },
        ]
    }
];

export default DUMMY_DATA;