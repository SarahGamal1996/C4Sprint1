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
  updatedAt: Date

},
{collection: 'Products'}
);

mongoose.model('Product', productSchema);
