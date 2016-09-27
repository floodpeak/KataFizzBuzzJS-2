var expect = require('chai').expect

var getNumberMasked = require('../getNumberMasked')

describe('getNumberMasked',function(){
  it('should get 1 for 1',function(){
    expect(getNumberMasked(1)).to.be.equal(1)
  })
  it('should get 2 for 2',function(){
    expect(getNumberMasked(2)).to.be.equal(2)
  })
  it('should get Fizz for 3',function(){
    expect(getNumberMasked(3)).to.be.equal('Fizz')
  })
  it('should get Buzz for 5',function(){
    expect(getNumberMasked(5)).to.be.equal('Buzz')
  })
})
