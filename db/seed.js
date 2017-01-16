const db = require('APP/db')
const seedUsers = () => db.Promise.map([
  {
    userName: "ZurkBeast",
    firstName: "Zurk",
    lastName: "Beast",
    email: "Zurk@Beast.com",
    password: "1234"
  }, {
    userName: "Deadpool",
    firstName: "Ryan",
    lastName: "Reynolds",
    email: "itscrazyIhavekids@gmail.com",
    password: "1234"
  }, {
    userName: "theJanitor",
    firstName: "The",
    lastName: "Janitor",
    email: "janitor@scrubs.com",
    password: "1234"
  }, {
    userName: "Superman",
    firstName: "Clark",
    lastName: "Kent",
    email: "clarkkentisNOTsuperman@gmail.com",
    password: "1234"
  }, {
      userName: "IMBATMAN",
      firstName:
      "Batman",
      lastName: "Batman",
      email: "batman@batman.com",
      password: "1234"
    }
], user => db.model('users').create(user))
const seedOrders = () => db.Promise.map([
  {status: 'purchased', datePurchased: '2017-1-1', dateDelivered: '2017-1-3', user_id: 1},
  {status: 'purchased', datePurchased: '2017-1-2', dateDelivered: '2017-1-4', user_id: 1},
  {status: 'purchased', datePurchased: '2017-1-3', dateDelivered: '2017-1-5', user_id: 5},
  {status: 'purchased', datePurchased: '2017-1-4', user_id: 3},
  {status: 'cart', user_id: 2},
  {status: 'cart', user_id: 1}
  ], order => db.model('orders').create(order))
const seedLineItems = () => db.Promise.map([
  {order_id: 1, product_id: 1, count: 3},
  {order_id: 2, product_id: 27, count: 2},
  {order_id: 3, product_id: 1, count: 1},
  {order_id: 3, product_id: 19, count: 10},
  {order_id: 4, product_id: 25, count: 6},
  {order_id: 4, product_id: 24, count: 2},
  {order_id: 4, product_id: 19, count: 3},
  {order_id: 5, product_id: 5, count: 4},
  {order_id: 5, product_id: 25, count: 6},
  {order_id: 5, product_id: 23, count: 6},
  {order_id: 5, product_id: 27, count: 3},
  {order_id: 5, product_id: 22, count: 4}
  ], lineItem => db.model('lineItem').create(lineItem))
const seedReviews = () => db.Promise.map([
  {
    title: 'IM BATMAN',
    status: 'closed',
    content: 'I AM THE DARK KNIGHT GOTHAM DESERVES, BUT NOT THE PAINT IT NEEDS. IM BATMAN.',
    numStars: '5',
    product_id: 19,
    user_id: 5
  }, {
    title: 'Decent',
    status: 'closed',
    content: 'Decent Brushes. Not really worth the price though.',
    numStars: '2',
    product_id: 1,
    user_id: 1
  }, {
    title: "Don't Buy!",
    status: 'closed',
    content: "Why do these tear at the slightest tug? I don't know, but I'm sure not going to buy them again to find out.",
    numStars: '1',
    product_id: 1,
    user_id: 5
  }, {
    title: 'Why did I buy these?',
    status: 'closed',
    content: "Good gloves. I just don't clean so I don’t really need them.",
    numStars: '2',
    product_id: 1,
    user_id: 1
  }
], review => db.model('reviews').create(review))
const seedProducts = () => db.Promise.map([
{title: 'Disposable Nitrile Glvoes (100-Count', brand: 'HDX', category: 'accessories', description: '100-Count Pack of Nitrile Gloves', size: '', unitPrice: 15.98, SKU: '2910/100', inventoryQuantity: 5, photoUrl: 'http://www.homedepot.com/catalog/productImages/1000/89/894b9ec9-6891-42a3-9416-fc3ef931e1ae_1000.jpg', accessoryType: 'safety'},
{title: 'Woodworking and Sanding Painted Surfaces Respirator (10-Pack)', brand: '3M', category: 'accessories', description: '10-Pack of Masks', size: '', unitPrice: 22.4, SKU: '202077815', inventoryQuantity: 5, photoUrl: 'http://www.homedepot.com/catalog/productImages/1000/a8/a8af3fc8-9da2-4bfc-92ca-680b55ec0cbf_1000.jpg', accessoryType: 'safety'},
{title: 'Polyethylene Sheeting', brand: 'Husky', category: 'accessories', description: '1 Pallet of 20 ft. x 100 ft. Clear 6 mil Polyethylene Sheeting (20 Rolls/Pallet)', size: '', unitPrice: 1568, SKU: '202205816', inventoryQuantity: 5, photoUrl: 'http://www.homedepot.com/catalog/productImages/1000/ee/ee74219c-9bda-4e0e-8697-0c0648775030_1000.jpg', accessoryType: 'prep'},
{title: 'Paint Remover', brand: 'Insta Lift', category: 'accessories', description: '12 oz. Adhesive, Paint, Graffiti, Marker Remover and Cleaner (6-Pack)', size: '', unitPrice: 56.97, SKU: '205914119', inventoryQuantity: 5, photoUrl: 'http://www.homedepot.com/catalog/productImages/1000/70/70a365f9-a4b8-41aa-9f54-85320c99f4d6_1000.jpg', accessoryType: 'cleanup'},
{title: 'Williamsburg Wythe Blue', brand: 'Benjamin Moore', category: 'paint', description: 'A classic that never goes out of style, this beautiful hybrid blue pairs a hint of Prussian blue with a gray base paint.', size: '1 pint', unitPrice: 6.99, SKU: 'CW-590', inventoryQuantity: 21, photoUrl: 'https://media.benjaminmoore.com/WebServices/prod/dollops/360x360/CW-590.png', paintColor: 'blue', paintType: 'flat', paintLoc: 'interior', },
{title: 'Palace Pearl', brand: 'Benjamin Moore', category: 'paint', description: 'Called "pearl" in 18th century painting manuals, this pale blue is created by mixing white, black and Prussian blue pigments.', size: '1 pint', unitPrice: 6.99, SKU: 'CW-650', inventoryQuantity: 24, photoUrl: 'https://media.benjaminmoore.com/WebServices/prod/dollops/360x360/CW-650.png', paintColor: 'silver', paintType: 'flat', paintLoc: 'interior', },
{title: 'Claret', brand: 'Benjamin Moore', category: 'paint', description: 'This warm, deep pink captures the 18th century practice of mixing white and red iron oxide pigments to create shades of pink and salmon.', size: '1 pint', unitPrice: 6.99, SKU: 'CW-305', inventoryQuantity: 49, photoUrl: 'https://media.benjaminmoore.com/WebServices/prod/dollops/360x360/CW-305.png', paintColor: 'red', paintType: 'flat', paintLoc: 'interior', },
{title: 'Lampblack', brand: 'Benjamin Moore', category: 'paint', description: 'Striking paired with glossy white trim, this luxurious lighter shade of lampblack is sharp and stylish. It was used in 18th century and early 19th century wallpapers.', size: '1 pint', unitPrice: 6.99, SKU: 'CW-695', inventoryQuantity: 12, photoUrl: 'https://media.benjaminmoore.com/WebServices/prod/dollops/360x360/CW-695.png', paintColor: 'grey', paintType: 'flat', paintLoc: 'interior', },
{title: 'Ewing Blue', brand: 'Benjamin Moore', category: 'paint', description: 'Created by mixing a touch of Prussian blue into white paint, this very delicate shade of blue captures a feeling of age-old innocence.', size: '1 pint', unitPrice: 6.99, SKU: 'CW-585', inventoryQuantity: 57, photoUrl: 'https://media.benjaminmoore.com/WebServices/prod/dollops/360x360/CW-585.png', paintColor: 'blue', paintType: 'flat', paintLoc: 'interior', },
{title: 'Green Umber', brand: 'Benjamin Moore', category: 'paint', description: 'A light and breezy shade of spring green, this color captures the shade of a naturally occurring green pigment.', size: '1 pint', unitPrice: 6.99, SKU: 'CW-460', inventoryQuantity: 0, photoUrl: 'https://media.benjaminmoore.com/WebServices/prod/dollops/360x360/CW-460.png', paintColor: 'green', paintType: 'flat', paintLoc: 'interior', },
{title: 'Silver City', brand: 'Behr', category: 'paint', description: 'Behr Marquee: One-Coat Hide Eggshell Enamel w/ Greenguard', size: '1 gallon', unitPrice: 42.98, SKU: 'MQ2-59', inventoryQuantity: 37, photoUrl: 'http://www.homedepot.com/catalog/productImages/1000/88/880a971c-75cf-4244-b950-5d88b0002582_1000.jpg', paintColor: 'grey', paintType: 'eggshell', paintLoc: 'interior', },
{title: 'Twinbery', brand: 'Behr', category: 'paint', description: 'Behr Marquee: One-Coat Hide Semi-gloss Enamel Interior Paint', size: '1 gallon', unitPrice: 44.98, SKU: 'MQ1-14', inventoryQuantity: 89, photoUrl: 'http://www.homedepot.com/catalog/productImages/1000/30/30386ce6-57dc-4e7e-90ae-f84d0b1f5537_1000.jpg', paintColor: 'purple', paintType: 'semi-gloss', paintLoc: 'interior', },
{title: 'Urban Green', brand: 'Glidden', category: 'paint', description: 'Interior/Exterior Oil Paint', size: '1 quart', unitPrice: 19.97, SKU: 'GL 311 04', inventoryQuantity: 107, photoUrl: 'http://www.homedepot.com/catalog/productImages/1000/05/05982ebf-7c9d-44df-919d-5bfca2dd0f33_1000.jpg', paintColor: 'green', paintType: 'gloss', paintLoc: 'interior', },
{title: 'Blue Edge', brand: 'Behr', category: 'paint', description: 'Behr Marquee: Semi-Gloss Enamel Exterior Paint', size: '1 gallon', unitPrice: 49.98, SKU: 'MQ5-62', inventoryQuantity: 241, photoUrl: 'http://www.homedepot.com/catalog/productImages/1000/90/9091fc0d-17cc-49b2-a8aa-c0869307881d_1000.jpg', paintColor: 'blue', paintType: 'semi-gloss', paintLoc: 'exterior', },
{title: 'Gulf Waters', brand: 'Behr', category: 'paint', description: 'Behr Marquee: Flat Exterior', size: '1 gallon', unitPrice: 46.98, SKU: 'MQ4-52', inventoryQuantity: 21, photoUrl: 'http://www.homedepot.com/catalog/productImages/1000/cf/cf790390-9d9e-4278-aabd-1f40a0477d29_1000.jpg', paintColor: 'blue', paintType: 'flat', paintLoc: 'exterior', },
{title: 'Gladiator Gray', brand: 'Behr', category: 'paint', description: 'Behr Premium Plus: Satin Enamel Exterior Paint', size: '1 gallon', unitPrice: 29.97, SKU: 'N370-6', inventoryQuantity: 3, photoUrl: 'http://www.homedepot.com/catalog/productImages/1000/62/62da9654-f7df-4f50-9ca7-9103e2ef8f86_1000.jpg', paintColor: 'brown', paintType: 'eggshell', paintLoc: 'exterior', },
{title: 'Gladiator Gray', brand: 'Behr', category: 'paint', description: 'Behr Premium Plus: Satin Enamel Exterior Paint', size: '5 gallon', unitPrice: 133, SKU: 'N370-6', inventoryQuantity: 3, photoUrl: 'http://www.homedepot.com/catalog/productImages/1000/62/62da9654-f7df-4f50-9ca7-9103e2ef8f86_1000.jpg', paintColor: 'brown', paintType: 'eggshell', paintLoc: 'exterior', },
{title: 'Perma-White', brand: 'Zinsser', category: 'paint', description: 'Mold & Mildew Proof', size: '5 gallon', unitPrice: 151.56, SKU: '3130', inventoryQuantity: 2, photoUrl: 'http://www.homedepot.com/catalog/productImages/1000/26/2628174e-67a6-4927-bb53-93aba4cb9bf9_1000.jpg', paintColor: 'white', paintType: 'semi-gloss', paintLoc: 'exterior', },
{title: 'Dark Night', brand: 'Behr', category: 'paint', description: 'Flat Exterior Paint', size: '5 gallon', unitPrice: 130, SKU: '204909539', inventoryQuantity: 21, photoUrl: 'http://www.homedepot.com/catalog/productImages/1000/2a/2a8bd9b5-6f74-4486-9e64-151e2ef3383d_1000.jpg', paintColor: 'blue', paintType: 'flat', paintLoc: 'exterior', },
{title: 'Homer Bucket', brand: 'United Solutions', category: 'tools', description: 'An Orange Bucket', size: '', unitPrice: 3.48, SKU: 'PN0110', inventoryQuantity: 5, photoUrl: 'http://www.homedepot.com/catalog/productImages/1000/23/234cf50a-71f8-4361-8da8-3432aad29036_1000.jpg', toolType: 'other'},
{title: 'Roller Tray Set', brand: 'Better', category: 'tools', description: '8-Piece set', size: '', unitPrice: 11.97, SKU: 'RS 701 SP', inventoryQuantity: 5, photoUrl: 'http://www.homedepot.com/catalog/productImages/1000/15/157b50a2-6577-4a28-bf08-1bd56788f3da_1000.jpg', toolType: 'painting'},
{title: 'Paint Tray Set', brand: 'Best', category: 'tools', description: '8-Piece set', size: '', unitPrice: 16.46, SKU: 'RS 808', inventoryQuantity: 5, photoUrl: 'http://www.homedepot.com/catalog/productImages/1000/c2/c2d5c2a4-f7ba-473f-a15f-2eb3b1f36b28_1000.jpg', toolType: 'painting'},
{title: 'Plastic Roller Tray', brand: 'Home Depot', category: 'tools', description: '3-9 inch Orange Paint Trays', size: '', unitPrice: 5.46, SKU: 'HOMEDO-PK197544', inventoryQuantity: 5, photoUrl: 'http://www.homedepot.com/catalog/productImages/1000/e4/e4c6f6e4-27ff-49b7-9132-11059847e421_1000.jpg', toolType: 'painting'},
{title: 'Plastic Tray Liner', brand: 'Home Depot', category: 'tools', description: '1-9 inch Tray Liner (white)', size: '', unitPrice: 0.98, SKU: 'HD RM 911', inventoryQuantity: 5, photoUrl: 'http://www.homedepot.com/catalog/productImages/1000/d5/d5914c38-3b81-48f0-b0dd-c9fb0017f2aa_1000.jpg', toolType: 'painting'},
{title: "14-in-1 Painter's Tool", brand: 'Husky', category: 'tools', description: 'For all your painting needs', size: '', unitPrice: 6.57, SKU: 'DSX-G14', inventoryQuantity: 5, photoUrl: 'http://www.homedepot.com/catalog/productImages/1000/88/8845546b-d14a-4aaa-b2c1-93b29fa18383_1000.jpg', toolType: 'other'},
{title: '5 gallon Homer Leakproof Lid', brand: 'HDX', category: 'tools', description: 'Lid', size: '', unitPrice: 1.93, SKU: 'PN0114', inventoryQuantity: 5, photoUrl: 'http://www.homedepot.com/catalog/productImages/1000/b9/b99278b0-a0cd-4c8f-a527-4f12ad9e3605_1000.jpg' , toolType: 'other'},
{title: 'Sash Brush', brand: 'Wooster', category: 'tools', description: '2 inch Polyester Angle Sash Brush', size: '', unitPrice: 6.07, SKU: '0Q32110020', inventoryQuantity: 5, photoUrl: 'http://www.homedepot.com/p/Wooster-2-in-Polyester-Angle-Sash-Brush-0Q32110020/100357411', toolType: 'painting'}
], paint => db.model('products').create(paint))
db.didSync.then(() => db.sync({force: true})).then(seedUsers).then(seedProducts).then(seedReviews).then(seedOrders).then(seedLineItems).then(products => console.log(`Seeded ${products.length} Products OK`)).catch(error => console.error(error)). finally(() => db.close())
