

function insert(num) {

  document.querySelector(".textview").value += num;


}

function equals() {
  try {
    const x = document.querySelector(".textview").value;
    const y = eval(x);
    document.querySelector(".textview").value = y;
  }
  catch {
    document.querySelector(".textview").value = "Enter valid number !"
  }

}

function clean() {
  document.querySelector(".textview").value = ""
}

function back() {
  let screen = document.querySelector(".textview").value;
  document.querySelector(".textview").value = document.querySelector(".textview").value.slice(0, -1);
}
//   console.log(digit);