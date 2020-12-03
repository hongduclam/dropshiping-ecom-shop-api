import chai from 'chai';
import chatHttp from 'chai-http';
import 'chai/register-should';
import app from '../src/app';

chai.use(chatHttp);
const { expect } = chai;

const productApiPath = '/api/v1/product';

describe('Testing the product endpoints:', () => {
  it('It should create a product', (done) => {
    const product = {
      name: 'product test',
      description: 'newProduct.description',
      productTypeId: 1,
      sku: 'newProduct.sku',
      barcode: 'newProduct.barcode',
      isSellingWhenOutOfStock: false,
      price: 99.99,
      comparePrice: 88.88,
      cost: 11.11,
      status: 1
    };
    chai.request(app)
      .post(productApiPath)
      .set('Accept', 'application/json')
      .send(product)
      .end((err, res) => {
        expect(res.status).to.equal(201);
        expect(res.body).to.include({
          id: 1,
          ...product
        });
        done();
      });
  });

  it('It should not create a product with incomplete parameters', (done) => {
    const product = {
    };
    chai.request(app)
      .post(productApiPath)
      .set('Accept', 'application/json')
      .send(product)
      .end((err, res) => {
        expect(res.status).to.equal(400);
        done();
      });
  });

  it('It should search all products', (done) => {
    chai.request(app)
      .get(`${productApiPath}/?name=test&offset=10&limit=1`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.count).to.equal(1);
        res.body.rows[0].should.have.property('id');
        done();
      });
  });

  it('It should get a particular product', (done) => {
    const productId = 1;
    chai.request(app)
      .get(`${productApiPath}/${productId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        res.body.should.have.property('id');
        done();
      });
  });

  it('It should not get a particular product with invalid id', (done) => {
    const productId = 8888;
    chai.request(app)
      .get(`${productApiPath}/${productId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(400);
        done();
      });
  });

  it('It should update a product', (done) => {
    const productId = 1;
    const updatedProduct = {
      name: 'product test update',
      description: 'newProduct.description update',
      productTypeId: 2,
      sku: 'newProduct.sku update',
      barcode: 'newProduct.barcode update',
      isSellingWhenOutOfStock: 'true',
      price: 99.00,
      comparePrice: 88.00,
      cost: 11.00,
      status: 2
    };
    chai.request(app)
      .put(`${productApiPath}/${productId}`)
      .set('Accept', 'application/json')
      .send(updatedProduct)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.id).equal(productId);
        expect(res.body.name).equal(updatedProduct.name);
        done();
      });
  });

  it('It should not update a product with invalid id', (done) => {
    const productId = 999;
    const updatedProduct = {
      name: 'product test update',
      description: 'newProduct.description update',
      productTypeId: 2,
      sku: 'newProduct.sku update',
      barcode: 'newProduct.barcode update',
      isSellingWhenOutOfStock: 'true',
      price: 99.00,
      comparePrice: 88.00,
      cost: 11.00,
      status: 2
    };
    chai.request(app)
      .put(`${productApiPath}/${productId}`)
      .set('Accept', 'application/json')
      .send(updatedProduct)
      .end((err, res) => {
        expect(res.status).to.equal(400);
        done();
      });
  });

  it('It should delete a product', (done) => {
    const productId = 1;
    chai.request(app)
      .delete(`${productApiPath}/${productId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.equal(productId);
        done();
      });
  });

  it('It should not delete a product with invalid id', (done) => {
    const productId = 777;
    chai.request(app)
      .delete(`${productApiPath}/${productId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(400);
        done();
      });
  });
});
