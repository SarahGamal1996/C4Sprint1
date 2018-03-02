var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  //seller_name: {
    //type: String,
    //required: false,
    //trim: true
 // },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: Date,
  sellerName: {
    type: String,
    required: true,
    trim: true
  }

},
{collection: 'Products'}
);

mongoose.model('Product', productSchema);
var Product = mongoose.model('Product');

Product.create({name: 'Balls', price:'100', sellerName:'Ebram Yowakem'});
Product.create({name: 'Car', price:'40000', sellerName:'Ebram Yowakem'});
Product.create({name: 'Chair', price:'500', sellerName:'Ebram Yowakem'});

