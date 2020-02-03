'use strict';

class Animal{
  constructor(animal){
    this.type = animal;
    this.next = null;
  }
}

class AnimalShelter{
  constructor(initialVal){
    if (initialVal==='dog' || initialVal==='cat') {
      let newNode = new Animal(initialVal);
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head = null;
      this.tail = null;
    }

  }
  peek(){
    return this.head;
  }

  enqueue(animal){
    if(animal === 'dog' || animal === 'cat') {
      let temp = new Animal(animal);
      if(!this.head){
        this.head=temp;
        this.rear = temp;
      } else{
        this.tail.next= temp;
        this.tail = temp;
        temp.next = null;
      }
    }
  }

  dequeue(input){
    let output;

    if (!this.head){
      return null;
    }
    if(input !== 'dog' && input !== 'cat'){
      return null;
    }
    if(this.head.type === input){
      let oldFront = this.head;
      this.head=this.head.next;
      oldFront.next=null;
      return oldFront.type;
    }

    let temp = new Animal('temp');
    this.tail.next = temp;
    this.tail = temp;

    let toBack = this.head;

    while(this.head.type !== input && this.head.type !== temp){
      this.head = this.head.next;
      //removes old head from queue
      toBack.next = null;
      //sets it on the tail of queue
      this.tail.next = toBack;
      this.tail = toBack;
      toBack = this.head;
    }
    output = this.head.type;

    this.head=this.head.next;
    toBack.next = null;
    while(this.head.type !== 'temp'){
      toBack = this.head;
      this.head = this.head.next;
      //remove the old head from the queue
      toBack.next = null;
      this.tail.next = toBack;
      this.tail = toBack;
    }
    this.head = this.head.next;
    return output;
  }
}   

module.exports = {AnimalShelter, Animal};