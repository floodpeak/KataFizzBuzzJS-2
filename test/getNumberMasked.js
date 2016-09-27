var exepect = require('chai').expect

var getNumberMasked = require('../getNumberMasked')

modules.exports = function(){
  describe('getNumberMasked',function(){
    it('should get 1 for 1'),function(){
      expect(getNumberMasked(1)).to.be.equal(1)
    }
  })
}
