const { of, Observable } = require('rxjs')

// Implementação de um Pipeable Operator capaz de retornar os dados
// da stream que terminam com determinada palavra
function terminadoCom(lastWord) {
  return function (sourceObservable) {
    return new Observable(function subscribe(subscriber) {
      sourceObservable.subscribe({
        next(value) {
          const hasLastWord = (phrase) => {
            const words = phrase.split(' ')
            if (!(words[ words.length - 1 ] === lastWord))
              return

            subscriber.next(phrase)
          }

          if (Array.isArray(value))
            return value.forEach(phrase => hasLastWord(phrase))

          hasLastWord(value)
        },
        error(e) {
          subscriber.error(e)
        },
        complete() {
          subscriber.complete()
        }
      })
    })
  }

}

of([ 'Ana Silva', 'Maria Silva', 'Pedro Rocha' ])
  .pipe(terminadoCom('Silva'))
  .subscribe(console.log)