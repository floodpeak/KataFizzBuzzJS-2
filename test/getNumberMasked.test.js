var expect = require('chai').expect

var getNumberMasked = require('../getNumberMasked')

describe('getNumberMasked',function(){
  it('should get 1 for 1',function(){
    expect(getNumberMasked(1)).to.be.equal(1)
  })
  it('should get 2 for 2',function(){
    expect(getNumberMasked(2)).to.be.equal(2)
  })
})
