

// Задача 1

function getPromise(time,status) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(status);
        }, time);
    });
}

const prom = getPromise(2000,'ok');

prom.then((data)=> console.log(data));


// ЗАДАЧА 2

class Prom {
    constructor() {
      this.promise = new Promise((res, rej) => {
        this.res = res;
        this.rej = rej;
      })
    }
    resolve(value) {
    
    return  this.res(value);
    }
    reject(reason) {
    return  this.rej(reason);
    }
  }
  const inst = new Prom();
  inst.promise.then((data) => console.log(data));
  inst.resolve('some text');
  
  const inst2 = new Prom();
  inst2.promise.then((data) => console.log(data), (reason) => console.log(`rejected with reason: ${reason}`));
  inst2.reject('error not found this text');  
// }

// const inst = new Prom();


// class Prom {
//     constructor() {
//         this.promise =new Promise((resolve,reject)=>{
//             resolve('text')
//         })
//     }
//     resolve(data) {
//         return new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 resolve(data)
//             },100)
//         })
//     }

//     reject(error) {
//         return new Promise ((resolve,reject)=>{
//             setTimeout(()=>{
//                 reject(error)
//             },100)
//         })
//     }
// }


