const currentTime = () => {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";

  if (hh == 0) {
    hh = 12;
  }
  if (hh > 12) {
    hh = hh - 12;
    session = "PM";
  }

  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;

  let time = hh + ":" + mm + ":" + ss + " " + session;

  document.getElementById("clock").innerText = time;
  let t = setTimeout(function () {
    currentTime();
  }, 1000);
};

currentTime();

const openModal = (btn, modal, i) => {
  let span = document.getElementsByClassName("close")[i];
  btn.onclick = () => {
    modal.style.display = "block";
  };
  span.onclick = () => {
    modal.style.display = "none";
  };
};

const ids = ["home", "about", "portfolio"];
for (let i = 0; i < ids.length; i++) {
  const btn = document.getElementById(ids[i]);
  const modal = document.getElementById(ids[i] + "Modal");
  openModal(btn, modal, i);
}
