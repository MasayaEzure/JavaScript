function a() {
  let b = "b";
  console.log(b);
}
a();

{
    let c = 1;
    const d = () => {
        console.log('d is called');
    }
    d();
    console.log(c);
}
// d();