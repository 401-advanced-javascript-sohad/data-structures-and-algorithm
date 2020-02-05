const multiBracketValidation = require('../multi-bracket-validation');

describe('validation multi bracket ', ()=> {

  it('return true for single bracket ', ()=> {
    const val1 = 'name [ sohad ]';
    const val2 = 'name { sohad }';
    const val3 = 'name ( sohad )';

    expect(multiBracketValidation(val1)).toBe(true);

    expect(multiBracketValidation(val2)).toBe(true);
    
    expect(multiBracketValidation(val3)).toBe(true);
    
  });
  
  ////////////////////////////////////////////////////////////////////////////////////////////////////////


  it('return true for multi bracket set', ()=> {
    const val1 = 'name [ sohad ] with []';

    const val2 = 'name { sohad } with {}';
    
    const val3 = 'name ( sohad ) with ()';
    
    const val4 = 'name [ sohad ] and ( has { with } and )';

    expect(multiBracketValidation(val1)).toBe(true);
    
    expect(multiBracketValidation(val2)).toBe(true);
    
    expect(multiBracketValidation(val3)).toBe(true);
    
    expect(multiBracketValidation(val4)).toBe(true);
  });
  
  
  ////////////////////////////////////////////////////////////////////////////////////////////////////////


  it('return false for aopen bracket after close bracket   ', ()=> {

    const val1 = 'sohad* ) return false ( even with (sohad*)';
    
    const val2 = 'sohad* } return false { even with {sohad*}';
    
    const val3 = 'sohad* ] return false [ even with [sohad*]';
    
    const val4 = 'sohad* ( ) also ) return false ()';

    expect(multiBracketValidation(val1)).toBe(false);
   
    expect(multiBracketValidation(val2)).toBe(false);
   
    expect(multiBracketValidation(val3)).toBe(false);
   
    expect(multiBracketValidation(val4)).toBe(false);
  });

    ////////////////////////////////////////////////////////////////////////////////////////////////////////



  
  it('return false for unequal brackets', () => {
    const val1 = '(sohad* return ( false)';

    const val2 = '{sohad* return { false}';
    
    const val3 = '[sohad* return [ false]';
    
    const val4 = '[sohad* return] false]';
    
    const val5 = '{sohad* return} false}';
    
    const val6 = '(sohad* return)  false)';
    
    const val7 = '(sohad* [ also ] return false }';
    
    const val8 = '[sohad*{ () ] return} false ()';

    expect(multiBracketValidation(val1)).toBe(false);
    expect(multiBracketValidation(val2)).toBe(false);
    expect(multiBracketValidation(val3)).toBe(false);
    expect(multiBracketValidation(val4)).toBe(false);
    expect(multiBracketValidation(val5)).toBe(false);
    expect(multiBracketValidation(val6)).toBe(false);
    expect(multiBracketValidation(val7)).toBe(false);
    expect(multiBracketValidation(val8)).toBe(false);
  });

});