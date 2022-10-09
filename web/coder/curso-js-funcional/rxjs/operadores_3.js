const { Observable } = require('rxjs')

// Operador de criação customizado
function ofWithDelay(delay, ...elements) {
  return Observable.create(subscriber => {
    (elements || []).forEach((el, i) => setTimeout(() => {
      subscriber.next(el) 
      if(elements.length === i + 1)
        return subscriber.complete
      }, delay * (i + 1))
    )
  })
}

ofWithDelay(1000, 'primeiro', 'segundo', 20, true, 'quinto')
  .subscribe(console.log)
