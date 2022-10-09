const { from, Observable } = require('rxjs')

function createPipeableOperator(operatorFn) {
  return function (source) {
    return new Observable(function subscribe(subscriber) {
      const sub = operatorFn(subscriber)
      source.subscribe(
        {
          next: sub.next,
          error: sub.error || (e => subscriber.error(e)),
          complete: sub.complete || (_ => subscriber.complete())
        }
      )
    })
  }
}

function first() {
  return createPipeableOperator(
    subscriber => ({
      next(value) {
        subscriber.next(value)
        subscriber.complete()
      },
      error(e) {

      }
    })
  )
}

// Pipeable Operator
function empty() {
  return createPipeableOperator(
    subscriber => ({
      next(_) {
        subscriber.complete()
      }
    })
  )
}

// Pipeable Operator
function last() {
  return createPipeableOperator(subscriber => ({
    next(value) {
      last = value
    },
    complete() {
      if (!last)
        return subscriber.complete()

      subscriber.next(last)
      return subscriber.complete()
    }
  }))
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
    empty(),
    // first(),
    // last()
  )
  .subscribe(console.log)
// Operador de criação customizado