const slider = {
  id: "slider",
  idUl: "ulImg",
  classLi: "liImg",
  liStyle: {
    listStyle: "none"
  },
  ulStyle: {
    margin: "0px",
    pading: "0px"
  },
  col: 30,
  width: 80,
  heightDiv: 3,
  imgSt: {},
  speed: 50,
  countSpeed: 1,
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
  tegElArray(t) {
    return Array.from(this.getId(this.id).getElementsByTagName(t));
  },
  classArray(c) {
    return Array.from(document.getElementsByClassName(c));
  },
  countArray(n) {
    let a = [];
    for (let i = 0; i < n; i++) {
      a[i] = i;
    }
    return a;
  },
  createEl(e, o = {}) {
    let el = document.body.appendChild(document.createElement(e));
    for (const key in o) {
      if (o.hasOwnProperty(key)) {
        el.setAttribute(key, o[key]);
      }
    }

    return el;
  },
  createUl() {
    this.createEl("ul").setAttribute("id", this.idUl);
  },
  imgStyle() {
    this.imageArray().map((img) => this.css(img, this.imgSt));
  },
  listStyle() {
    this.getClass(this.classLi).map((li) => this.css(li, this.liStyle));
    this.css(this.getId(this.idUl), this.ulStyle);
  },
  blockStyle() {
    this.css(this.getId(this.id), {
      height: document.body.clientWidth / slider.heightDiv + "px",
      overflow: "hidden",
      zIndex: 10000,
      position: "relative",
      margin: "auto",
      width: this.width + "%"
    });

    this.classArray("divWid").map(function (bl, i) {
      return (
        (bl.style.zIndex = slider.classArray("divWid").length - i),
        bl.setAttribute("data-id", i)
      );
    });
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
  countBlock(n) {
    let win = document.body.clientWidth;
    let countCol = Math.round(win / n);
    return countCol - 2;
  },
  bacgImage() {
    this.getId(this.id).appendChild(
      this.createEl("div", {
        id: "bacgImg",
        style:
          "width:100%;height:" +
          document.body.clientWidth / this.heightDiv +
          "px;;background-image:url(" +
          this.tegElArray("img")[0].src +
          ");z-index:0;background-repeat: no-repeat;background-size:" +
          document.body.clientWidth +
          "px;position: absolute;"
      })
    );
  },
  blockSlider(n) {
    this.countArray(this.col).map((div, i) =>
      this.createEl("div", {
        class: "divWid",
        dataId: i,
        style:
          "width:" +
          this.countBlock(this.col) +
          "px;height:" +
          document.body.clientWidth / this.heightDiv +
          "px;overflow: hidden;background-image: url(" +
          this.tegElArray("img")[n].src +
          ");float:left;background-position-x:" +
          -this.countBlock(this.col) * div +
          "px;position:absolute;margin-left:" +
          this.countBlock(this.col) * div +
          "px;background-repeat: no-repeat;background-size:" +
          document.body.clientWidth +
          "px;z-index:1000;"
      })
    );

    this.classArray("divWid").map((div) =>
      this.getId(this.id).appendChild(div)
    );
  },
  forImages() {
    this.tegElArray("img").map((img, i) => this.blockSlider(i));
  },
  animationStyle(step, invers) {
    if (slider.classArray("divWid")[step] !== undefined) {
      if (invers === 0) {
        slider.classArray("divWid")[step].style.transition = 1 + "s";
        slider.classArray("divWid")[step].style.marginTop =
          document.body.clientWidth / slider.heightDiv + "px";
      } else {
        if (
          slider.classArray("divWid")[
            slider.classArray("divWid").length - 1 - step
          ] !== undefined
        ) {
          slider.classArray("divWid")[
            slider.classArray("divWid").length - 1 - step
          ].style.transition = 1 + "s";
          slider.classArray("divWid")[
            slider.classArray("divWid").length - 1 - step
          ].style.marginTop = 0 + "px";
        }
      }
    }
  },
  draw() {
    let count = 0;
    let step = -1;
    let globalCount = 0;
    let invers = 0;
    let interval = setInterval(function () {
      globalCount = globalCount + 1;

      if (globalCount > slider.col * 4) {
        globalCount = 0;
      }

      if (globalCount > slider.col * 2) {
        count = count + 1;

        if (count > slider.countSpeed) {
          count = 0;
          step = step + 1;
        }

        if (step > slider.classArray("divWid").length - 1) {
          step = 0;
          invers = invers + 1;
        }
        if (invers > 1) {
          invers = 0;
        }
      }

      slider.animationStyle(step, invers);
    }, this.speed);
  },
  display() {
    this.bacgImage();
    this.forImages();
    this.tegElArray("img").map((img) => this.css(img, { display: "none" }));
    this.blockStyle();
    this.draw();
    function f(e) {
      slider.getId(slider.id).style.height =
        document.body.clientWidth / slider.heightDiv + "px";
      slider.classArray("divWid").map((div) => div.remove());
      slider.forImages();
      slider.blockStyle();
    }
    window.addEventListener("resize", f, false);
  }
};
slider.display();
