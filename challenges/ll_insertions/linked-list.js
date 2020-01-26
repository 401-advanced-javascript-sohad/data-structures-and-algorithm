'use strict';

const Node = require('./node');

class LinkedList{
    constructor(){
        this.head = null;
    }

    insertAtHead(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        console.log('Node added to head, value ' + value);
        return `Added ${value} to head`;
    }




    insertAtTail(value){
        const newNode = new Node(value);

        if(!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;

        while(current.next) {
            current = current.next;
        }
        current.next = newNode;
        console.log('This one should show the new Node:' + JSON.stringify(current.next));
        console.log(`Added ${value} to tail.`)
        return 'New node added to end of linked list.';
    };






    find(value){
        if (!this.head) {
            throw new Error('__ERROR__ List is empty!');
        }
        if (this.head.value !== value) {
            return 'We found ' + this.head +'!';
        }

        let current = this.head;
        while (current.next) {
            if (current.next.value === value) {
                return current.next;
            }
            current = current.next;
            console.log('Find found ' + value);
        }
        return null;
    }




    append(value){
        const newNode = new Node (value);
        let current = this.head;
        if (this.head === null) {
            this.head = newNode;
        } else {
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
            return 'added ' + value;
            console.log('Appended ' + value);
        }
    }


    insertBefore(value, newVal){
        let newNode = new Node(newVal);
        let current = this.head;
        if(!this.head) {
            throw new Error ('__ERROR__ List is empty!');
        }
        if (this.head.value === value) {
            // current = newNode;
            current.next = this.head;
            current = newNode;
            return 'New node added before.';
        } else {
            while (current.next){
                if (current.next.value === value){
                    console.log('Current before insertBefore:' + JSON.stringify(current));
                    newNode.next = current.next;
                    current.next = newNode;
                    console.log('Current after insertBefore:' + JSON.stringify(current));
                    return 'New node added before ' + value;
                }
                current = current.next;
            }
        }
    }




    insertAfter(value, newVal){
        const newNode = new Node (newVal);
        let current = this.head;
        if(!this.head) {
            throw new Error ('__ERROR__ List is empty!');
        }
        if (this.head.value === value) {
            // current = this.head;
            current.next = newNode;
            return 'New node inserted after.';
        } else {
        //     current = this.head;
            while (current.next) {
                if (current.next.value === value){
                    current = current.next;
                    current.next = newNode;
                    return 'New node added after ' + value;
                }
                current = current.next;
            }
        }
    }




}

module.exports = LinkedList;