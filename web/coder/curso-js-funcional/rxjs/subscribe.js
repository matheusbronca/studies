const { timer, Subscription } = require('rxjs')

const obs = timer(3000, 500)

const subscribe1 = obs.subscribe(num => console.log(`#1 Gerou o número ${num}`))
const subscribe2 = obs.subscribe(num => console.log(`#2 Gerou o número ${num}`))

// subscribe1.add(subscribe2)
const sub = new Subscription()
sub.add(subscribe1)
sub.add(subscribe2)

setTimeout(() => {
  sub.unsubscribe()
  // subscribe2.unsubscribe()
}, 10000);