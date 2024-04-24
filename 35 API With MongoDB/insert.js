// "chalk": "^4.1.2",
//     "colors": "^1.4.0",
//     "ejs": "^3.1.6",
//     "express": "^4.17.1",
//     "mongodb": "^4.1.2",
//     "simple-node-logger": "^21.8.12"


const dbConnect = require('./mongodb');

const insertData = async () => {
    let data = await dbConnect();
    let result = await data.insertMany(
        [
            {
                name: 'Product 1',
                brand: 'OnePlus',
                price: 470,
                category: 'accessory'
            },
            { name: 'Product 2', brand: 'Apple', price: 892, category: 'laptop' },
            {
                name: 'Product 3',
                brand: 'Micromax',
                price: 195,
                category: 'laptop'
            },
            {
                name: 'Product 4',
                brand: 'Xiaomi',
                price: 778,
                category: 'accessory'
            },
            {
                name: 'Product 5',
                brand: 'Samsung',
                price: 375,
                category: 'laptop'
            },
            {
                name: 'Product 6',
                brand: 'OnePlus',
                price: 491,
                category: 'laptop'
            },
            {
                name: 'Product 7',
                brand: 'Micromax',
                price: 609,
                category: 'mobile'
            },
            {
                name: 'Product 8',
                brand: 'Samsung',
                price: 674,
                category: 'accessory'
            },
            {
                name: 'Product 9',
                brand: 'Xiaomi',
                price: 740,
                category: 'laptop'
            },
            {
                name: 'Product 10',
                brand: 'OnePlus',
                price: 137,
                category: 'tablet'
            },
            {
                name: 'Product 11',
                brand: 'Apple',
                price: 183,
                category: 'laptop'
            },
            {
                name: 'Product 12',
                brand: 'OnePlus',
                price: 141,
                category: 'accessory'
            },
            {
                name: 'Product 13',
                brand: 'OnePlus',
                price: 271,
                category: 'mobile'
            },
            {
                name: 'Product 14',
                brand: 'Samsung',
                price: 994,
                category: 'mobile'
            },
            {
                name: 'Product 15',
                brand: 'Samsung',
                price: 433,
                category: 'laptop'
            },
            {
                name: 'Product 16',
                brand: 'Apple',
                price: 383,
                category: 'accessory'
            },
            {
                name: 'Product 17',
                brand: 'Micromax',
                price: 332,
                category: 'mobile'
            },
            {
                name: 'Product 18',
                brand: 'Apple',
                price: 445,
                category: 'mobile'
            },
            {
                name: 'Product 19',
                brand: 'Samsung',
                price: 152,
                category: 'accessory'
            },
            {
                name: 'Product 20',
                brand: 'Samsung',
                price: 381,
                category: 'accessory'
            },
            {
                name: 'Product 21',
                brand: 'Micromax',
                price: 346,
                category: 'tablet'
            },
            {
                name: 'Product 22',
                brand: 'Micromax',
                price: 416,
                category: 'accessory'
            },
            {
                name: 'Product 23',
                brand: 'Apple',
                price: 534,
                category: 'tablet'
            },
            {
                name: 'Product 24',
                brand: 'Samsung',
                price: 493,
                category: 'laptop'
            },
            {
                name: 'Product 25',
                brand: 'OnePlus',
                price: 705,
                category: 'tablet'
            },
            {
                name: 'Product 26',
                brand: 'Samsung',
                price: 532,
                category: 'tablet'
            },
            {
                name: 'Product 27',
                brand: 'Samsung',
                price: 494,
                category: 'laptop'
            },
            {
                name: 'Product 28',
                brand: 'Samsung',
                price: 427,
                category: 'accessory'
            },
            {
                name: 'Product 29',
                brand: 'Xiaomi',
                price: 640,
                category: 'accessory'
            },
            {
                name: 'Product 30',
                brand: 'Samsung',
                price: 516,
                category: 'laptop'
            },
            {
                name: 'Product 31',
                brand: 'Apple',
                price: 996,
                category: 'laptop'
            },
            {
                name: 'Product 32',
                brand: 'Samsung',
                price: 144,
                category: 'tablet'
            },
            {
                name: 'Product 33',
                brand: 'Samsung',
                price: 691,
                category: 'accessory'
            },
            {
                name: 'Product 34',
                brand: 'Samsung',
                price: 203,
                category: 'mobile'
            },
            {
                name: 'Product 35',
                brand: 'Xiaomi',
                price: 104,
                category: 'mobile'
            },
            {
                name: 'Product 36',
                brand: 'Apple',
                price: 447,
                category: 'tablet'
            },
            {
                name: 'Product 37',
                brand: 'Micromax',
                price: 826,
                category: 'laptop'
            },
            {
                name: 'Product 38',
                brand: 'OnePlus',
                price: 499,
                category: 'laptop'
            },
            {
                name: 'Product 39',
                brand: 'Apple',
                price: 363,
                category: 'tablet'
            },
            {
                name: 'Product 40',
                brand: 'Apple',
                price: 586,
                category: 'laptop'
            },
            {
                name: 'Product 41',
                brand: 'Xiaomi',
                price: 828,
                category: 'accessory'
            },
            {
                name: 'Product 42',
                brand: 'Apple',
                price: 194,
                category: 'laptop'
            },
            {
                name: 'Product 43',
                brand: 'Apple',
                price: 228,
                category: 'tablet'
            },
            {
                name: 'Product 44',
                brand: 'OnePlus',
                price: 396,
                category: 'laptop'
            },
            {
                name: 'Product 45',
                brand: 'Micromax',
                price: 193,
                category: 'accessory'
            },
            {
                name: 'Product 46',
                brand: 'Apple',
                price: 471,
                category: 'tablet'
            },
            {
                name: 'Product 47',
                brand: 'Xiaomi',
                price: 187,
                category: 'laptop'
            },
            {
                name: 'Product 48',
                brand: 'OnePlus',
                price: 654,
                category: 'accessory'
            },
            {
                name: 'Product 49',
                brand: 'Xiaomi',
                price: 337,
                category: 'tablet'
            },
            {
                name: 'Product 50',
                brand: 'Apple',
                price: 415,
                category: 'tablet'
            },
            {
                name: 'Product 51',
                brand: 'Micromax',
                price: 578,
                category: 'laptop'
            },
            {
                name: 'Product 52',
                brand: 'Apple',
                price: 138,
                category: 'mobile'
            },
            {
                name: 'Product 53',
                brand: 'Xiaomi',
                price: 489,
                category: 'mobile'
            },
            {
                name: 'Product 54',
                brand: 'Xiaomi',
                price: 153,
                category: 'laptop'
            },
            {
                name: 'Product 55',
                brand: 'Xiaomi',
                price: 674,
                category: 'mobile'
            },
            {
                name: 'Product 56',
                brand: 'Apple',
                price: 323,
                category: 'tablet'
            },
            {
                name: 'Product 57',
                brand: 'Apple',
                price: 678,
                category: 'mobile'
            },
            {
                name: 'Product 58',
                brand: 'Micromax',
                price: 565,
                category: 'accessory'
            },
            {
                name: 'Product 59',
                brand: 'Apple',
                price: 910,
                category: 'tablet'
            },
            {
                name: 'Product 60',
                brand: 'Micromax',
                price: 842,
                category: 'tablet'
            },
            {

                name: 'Product 61',
                brand: 'Xiaomi',
                price: 674,
                category: 'laptop'
            },
            {
                name: 'Product 62',
                brand: 'OnePlus',
                price: 895,
                category: 'laptop'
            },
            {
                name: 'Product 63',
                brand: 'Micromax',
                price: 503,
                category: 'mobile'
            },
            {
                name: 'Product 64',
                brand: 'Apple',
                price: 578,
                category: 'accessory'
            },
            {
                name: 'Product 65',
                brand: 'Xiaomi',
                price: 823,
                category: 'accessory'
            },
            {
                name: 'Product 66',
                brand: 'OnePlus',
                price: 650,
                category: 'tablet'
            },
            {
                name: 'Product 67',
                brand: 'Xiaomi',
                price: 184,
                category: 'laptop'
            },
            {
                name: 'Product 68',
                brand: 'Apple',
                price: 822,
                category: 'accessory'
            },
            {
                name: 'Product 69',
                brand: 'Xiaomi',
                price: 438,
                category: 'accessory'
            },
            {
                name: 'Product 70',
                brand: 'Xiaomi',
                price: 175,
                category: 'mobile'
            },
            {
                name: 'Product 71',
                brand: 'Apple',
                price: 855,
                category: 'accessory'
            },
            {
                name: 'Product 72',
                brand: 'Apple',
                price: 675,
                category: 'laptop'
            },
            {
                name: 'Product 73',
                brand: 'OnePlus',
                price: 979,
                category: 'mobile'
            },
            {
                name: 'Product 74',
                brand: 'Samsung',
                price: 649,
                category: 'laptop'
            },
            {
                name: 'Product 75',
                brand: 'Samsung',
                price: 484,
                category: 'laptop'
            },
            {
                name: 'Product 76',
                brand: 'Xiaomi',
                price: 790,
                category: 'mobile'
            },
            {
                name: 'Product 77',
                brand: 'Micromax',
                price: 287,
                category: 'laptop'
            },
            {
                name: 'Product 78',
                brand: 'Samsung',
                price: 468,
                category: 'laptop'
            },
            {
                name: 'Product 79',
                brand: 'Xiaomi',
                price: 448,
                category: 'mobile'
            },
            {
                name: 'Product 80',
                brand: 'Samsung',
                price: 415,
                category: 'laptop'
            },
            {
                name: 'Product 81',
                brand: 'OnePlus',
                price: 753,
                category: 'laptop'
            },
            {
                name: 'Product 82',
                brand: 'Apple',
                price: 936,
                category: 'mobile'
            },
            {
                name: 'Product 83',
                brand: 'Micromax',
                price: 614,
                category: 'mobile'
            },
            {
                name: 'Product 84',
                brand: 'Apple',
                price: 218,
                category: 'tablet'
            },
            {
                name: 'Product 85',
                brand: 'Xiaomi',
                price: 989,
                category: 'mobile'
            },
            {
                name: 'Product 86',
                brand: 'Xiaomi',
                price: 270,
                category: 'laptop'
            },
            {
                name: 'Product 87',
                brand: 'Samsung',
                price: 275,
                category: 'tablet'
            },
            {
                name: 'Product 88',
                brand: 'Micromax',
                price: 294,
                category: 'accessory'
            },
            {
                name: 'Product 89',
                brand: 'Samsung',
                price: 633,
                category: 'accessory'
            },
            {
                name: 'Product 90',
                brand: 'OnePlus',
                price: 399,
                category: 'laptop'
            },
            {
                name: 'Product 91',
                brand: 'Samsung',
                price: 889,
                category: 'tablet'
            },
            {
                name: 'Product 92',
                brand: 'Xiaomi',
                price: 462,
                category: 'accessory'
            },
            {
                name: 'Product 93',
                brand: 'OnePlus',
                price: 653,
                category: 'accessory'
            },
            {
                name: 'Product 94',
                brand: 'Samsung',
                price: 828,
                category: 'laptop'
            },
            {
                name: 'Product 95',
                brand: 'Apple',
                price: 782,
                category: 'accessory'
            },
            {
                name: 'Product 96',
                brand: 'Apple',
                price: 326,
                category: 'laptop'
            },
            {
                name: 'Product 97',
                brand: 'Xiaomi',
                price: 467,
                category: 'accessory'
            },
            {
                name: 'Product 98',
                brand: 'OnePlus',
                price: 505,
                category: 'mobile'
            },
            {
                name: 'Product 99',
                brand: 'Micromax',
                price: 995,
                category: 'laptop'
            },
            {
                name: 'Product 100',
                brand: 'OnePlus',
                price: 567,
                category: 'tablet'
            }
        ]

    )
    if (result.acknowledged) {
        console.warn("data is inserted")
    }
}

insertData();