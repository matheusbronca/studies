const { Observable, Subject } = require('rxjs')

function getObservable() {
  return new Observable(subscriber => {
    setTimeout(() => {
      console.log("#1 Observer:")
      subscriber.next(Math.random());
      sub.complete();
    }), 1000
  })
}

function getSubject() {
  const sub = new Subject();
  setTimeout(() => {
    console.log('#2 Subject:')
    sub.next(Math.random());
    sub.complete();
  })

  return sub
}

const sub = getSubject();

sub.subscribe(console.log);
sub.subscribe(console.log);

// Observable UNICAST
// Subject MULTICAST