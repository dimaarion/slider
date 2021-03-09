const slider = {
  id: "slider",
  idUl: "ulImg",
  classLi: "liImg",
  liStyle: {
    listStyle: "none"
  },
  getId(e) {
    return document.getElementById(e);
  },
  getClass(e) {
    return Array.from(document.getElementsByClassName(e));
  },
  css(e, o = {}) {
    let t = "";
    let rezult = [];
    let ob = "";
    Object.values(o).map(function (x, i) {
      ob = Object.keys(o)[i].match(/[A-Z]/);
      if (ob) {
        t = "-" + Object.keys(o)[i].match(/[A-Z]/).join("").toLowerCase();
      } else {
        t = "";
      }

      return (rezult[i] =
        Object.keys(o)[i].replace(/[A-Z]+/, t) + ":" + x + ";");
    });

    return e.setAttribute("style", rezult.join(""));
  },
  imageArray() {
    return Array.from(this.getId(this.id).getElementsByTagName("img"));
  },
  countArray(n) {
    let a = [];
    for (let i = 0; i < n; i++) {
      a[i] = i;
    }
    return a;
  },
  createEl(e) {
    return document.body.appendChild(document.createElement(e));
  },
  createUl() {
    this.createEl("ul").setAttribute("id", this.idUl);
  },
  imgStyle() {
    this.imageArray().map((img) => this.css(img, { display: "none" }));
  },
  listStyle() {
    this.getClass(this.classLi).map((li) => this.css(li, this.liStyle));
  },
  createLi() {
    this.countArray(5).map((li) =>
      this.createEl("li").setAttribute("class", this.classLi)
    );
  },
  createList() {
    this.getClass(this.classLi).map((li, i) =>
      this.getId(this.idUl).appendChild(this.getClass(this.classLi)[i])
    );
  },
  display() {
    this.createUl();
    this.createLi();
    this.imgStyle();
    this.listStyle();
    this.createList();
  }
};
slider.display();
