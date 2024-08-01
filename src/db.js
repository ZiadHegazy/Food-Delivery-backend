const { default: mongoose } = require('mongoose');
const Category = require('./models/Category');
const Product = require('./models/Product');

mongoose.connect("mongodb+srv://ziad:ZAheg1234@cluster0.wrpt3lo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    
    var category1=new Category({name:"Burger"});
    category1.save();
    var category2=new Category({name:"Pizza"});
    category2.save();
    var category3=new Category({name:"Pasta"});
    category3.save();
    var category4=new Category({name:"Sandwich"});
    category4.save();
    var category5=new Category({name:"Dessert"});
    category5.save();
    
    var product1 = new Product({ name: "Cheeseburger", category: category1._id,price:10,image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bbcgoodfood.com%2Frecipes%2Fcollection%2Fburger&psig=AOvVaw3",description:"Cheeseburger is a hamburger topped with cheese. Traditionally, the slice of cheese is placed on top of the meat patty, but the burger can include many variations in structure, ingredients, and composition." });
    product1.save();
    var product2 = new Product({ name: "Pepperoni Pizza", category: category2._id, price: 12, image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bbcgoodfood.com%2Frecipes%2Fcollection%2Fpizza&psig=AOvVaw3", description: "Pepperoni pizza is a classic pizza topped with spicy pepperoni slices. It's a popular choice for pizza lovers." });
    product2.save();

    var product3 = new Product({ name: "Spaghetti Bolognese", category: category3._id, price: 15, image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bbcgoodfood.com%2Frecipes%2Fcollection%2Fpasta&psig=AOvVaw3", description: "Spaghetti Bolognese is a traditional Italian pasta dish made with ground meat, tomato sauce, and spices. It's a hearty and flavorful meal." });
    product3.save();

    var product4 = new Product({ name: "Chicken Sandwich", category: category4._id, price: 8, image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bbcgoodfood.com%2Frecipes%2Fcollection%2Fsandwich&psig=AOvVaw3", description: "Chicken sandwich is a popular sandwich made with grilled or fried chicken, lettuce, tomato, and mayonnaise. It's a delicious and satisfying option." });
    product4.save();

    var product5 = new Product({ name: "Chocolate Cake", category: category5._id, price: 6, image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bbcgoodfood.com%2Frecipes%2Fcollection%2Fdessert&psig=AOvVaw3", description: "Chocolate cake is a rich and decadent dessert made with chocolate, butter, sugar, and eggs. It's a classic treat for chocolate lovers." });
    product5.save();
    var product6 = new Product({ name: "Margherita Pizza", category: category2._id, price: 11, image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bbcgoodfood.com%2Frecipes%2Fcollection%2Fpizza&psig=AOvVaw3", description: "Margherita pizza is a classic pizza topped with fresh mozzarella cheese, tomatoes, and basil. It's a simple and delicious choice." });
    product6.save();

    var product7 = new Product({ name: "Lasagna", category: category3._id, price: 14, image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bbcgoodfood.com%2Frecipes%2Fcollection%2Fpasta&psig=AOvVaw3", description: "Lasagna is a layered pasta dish made with meat sauce, cheese, and pasta sheets. It's a comforting and satisfying meal." });
    product7.save();

    var product8 = new Product({ name: "Turkey Sandwich", category: category4._id, price: 9, image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bbcgoodfood.com%2Frecipes%2Fcollection%2Fsandwich&psig=AOvVaw3", description: "Turkey sandwich is a healthy sandwich made with sliced turkey, lettuce, tomato, and mustard. It's a nutritious and tasty option." });
    product8.save();

    var product9 = new Product({ name: "Vanilla Ice Cream", category: category5._id, price: 5, image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bbcgoodfood.com%2Frecipes%2Fcollection%2Fdessert&psig=AOvVaw3", description: "Vanilla ice cream is a classic frozen dessert made with vanilla flavoring, cream, and sugar. It's a timeless treat for ice cream lovers." });
    product9.save();
    category1.productList.push(product1._id);
    category2.productList.push(product2._id);
    category2.productList.push(product6._id);
    category3.productList.push(product3._id);
    category3.productList.push(product7._id);
    category4.productList.push(product4._id);
    category4.productList.push(product8._id);
    category5.productList.push(product5._id);
    category5.productList.push(product9._id);
    })

