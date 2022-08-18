let x = 10;
function a() {
  function b() {
    console.log(x);
  }
  b();
}

a();

// If the x not found in local space JS tries to find that in lexical parant & continues to find that until it reaches to Global Scope.
