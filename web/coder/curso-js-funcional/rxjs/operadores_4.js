const { from, Observable } = require('rxjs')

// Pipeable Operator
function first() {
  return function (sourceObservable) {
    return Observable.create(subscriber => {
      sourceObservable.subscribe({
        next(value) {
          subscriber.next(value)
          subscriber.complete()
        }
      })
    })
  }
}

// Pipeable Operator
function empty() {
  return function (sourceObservable) {
    return new Observable(function subscribe(subcriber) {
      sourceObservable.subscribe({
        next(value) {
          subcriber.complete()
        }
      })
    })
  }
}

// Pipeable Operator
function last() {
  return function (sourceObservable) {
    return new Observable(
      function subscribe(subscriber) {
        let last;
        sourceObservable.subscribe({
          next(value) {
            last = value
          },
          complete() {
            if (!last)
              return subscriber.complete()

            subscriber.next(last)
            return subscriber.complete()
          }
        })
      }
    )
  }
}

from([ 1, 2, 3, 4, 5 ])
  .pipe(
    // empty(),
    // first(),
    last()
  )
  .subscribe(console.log)
// Operador de criação customizado