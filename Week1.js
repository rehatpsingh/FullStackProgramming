const server = require('http');

const fs = require('fs')

const HomePage = fs.readFileSync('Home.html')
const ProductPage = fs.readFileSync('Product.html')
const CartPage = fs.readFileSync('Cart.html')

const myServer = server.createServer((req, res)=>{
  if(req.url === '/Home'){
    res.end(HomePage);
  }
  else if (req.url === '/Product') {
    res.end(ProductPage);
  }
  else if (req.url === '/Cart'){
    res.end(CartPage);
  }else {
    res.end('Page Not Found');
  }
})

myServer.listen(4000);