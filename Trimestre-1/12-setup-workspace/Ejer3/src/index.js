const youShouldNeverUseVar = 'This is my very long line that eslint'
  + ' should check as an error ......................................'
  + '......';

function myFunction(used) {
  if (used) {
    console.log(used);
    console.log(youShouldNeverUseVar);
  }
}

myFunction('yes');
