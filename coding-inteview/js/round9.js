// Promis Polyfill

const APP_STATE = {
  PENDING: "Pending",
  FULLFILL: "Fullfill",
  REJECT: "Reject",
};

class MyPromise {
  #value = "";
  #state = APP_STATE.PENDING;
  #thenCb = [];
  #catchCb = [];

  constructor(callback) {
    try {
      callback(this.#onSuc, this.#onFail);
    } catch (error) {
      this.#onFail(e);
    }
  }
  #onSuc = (value) => {
    if (this.#state !== APP_STATE.PENDING) return;
    this.#value = value;
    this.#state = APP_STATE.FULLFILL;
  };
  #onFail = () => {
    if (this.#state !== APP_STATE.PENDING) return;

    if (!this.#catchCb.length) {
      throw new Error("Uncaught Promis");
    }
    this.#value = value;
    this.#state = APP_STATE.REJECT;
  };
  #runCb = () => {
    queueMicrotask(() => {
      console.log("valu", this.#value);
      console.log("state", this.#state);
      if (this.#state === APP_STATE.FULLFILL) {
        this.#thenCb.forEach((cb) => {
          cb(this.#value);
        });
        this.#thenCb = [];
      }

      if (this.#state === APP_STATE.REJECT) {
        this.#catchCb.forEach((cb) => {
          cb(this.#value);
        });
        this.#catchCb = [];
      }
    });
  };
  then = (cb, errCb) => {
    this.#thenCb.push(cb);
    if (errCb) {
      this.#catchCb(errCb);
    }
    this.#runCb();
  };
  catch = (cb) => {
    this.#catchCb.push(cb);
    this.#runCb();
  };
}

const pro = new MyPromise(function (resolve, rej) {
  setTimeout(() => {
    resolve("DONE");
  }, 100);
});
// const p = new Promise();

pro.then((data) => {
  console.log("DATAT", data);
});
// console.log(pro);
//
