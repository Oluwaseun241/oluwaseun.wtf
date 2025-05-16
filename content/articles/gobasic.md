---
title: "Golang"
date: "2024"
summary: "Logging my exprience picking up golang."
---

## Intro

We all know Golang has been in his prime for about 5yrs and
picking it up is a good choice after a long ride with Python Picking
Golang was not an easy task for me or anyone coming from a
dynamically typed language though I had an ideal basic of C but
was poised with Golang or Rust Pitching myself to go with Golang
and let see how rough the terrain is……

### Basics

I noticed something don't know if it's good but Golang really go down with 0 and 1.
The way the strings are represented in byte (integer)

**For context**

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, World"[1])
}
```

which returns `101` instead of `e` in case of Python

Another thing is about variable declaration with const and var but what caught my attention is assigning a variable which can be done in two ways

```go
var x = 10
or
x := 10
```

### Day One (Hit the ground running....)

Golang error handling is top-notch NGL….. Noticed that the time it
takes to run a go file for the first time is usually much longer than
the repeated rerun and one of my suspicions is that as a compiled
language Golang makes it pattern behavior of C which you have to
compile it into a.out file before you can run a program, this cost
some secs but I’m still not impressed with the execution time
maybe I will find out along the way or it’s my windows machine
that is ditching the speed

### Control Stucture

At least I'm aware of _if, for_ etc from the past but the edge i
discover with Golang is the switch case, oh....I love the switch
the case when I'm working with C one of the flaws in Python **(thou 
all language tries to solve a particular problem but then 
create some flaw)**. The control syntax was a replica of javascript
**`for i := 1; i < 10; i++`** i can use some of my Js knowledge here too 

Writing Golang is perfect and the simplicity is top-notch, and for 
demo purpose I built a fizz-buzz

### Arrays, Slices & Maps

**Arrays** are the list of numbered sequences stored in a single typed 
with a fixed length just like List[] in Python

**Slice** is a little bit complicated... it is a segment of an 
array(indexable and have a flexible length)
Go has a built-in function of slices:
append and copy which both go by their name one works by 
appending to the end of a slice and the other copy and takes
**dst & src** arguments. All entries in src are copied into dst
overwriting it and taking the length into consideration
_(if the length of two slices are not the same the smallest one
will be used)

**Context**
```go
func main() {
    slice1 := []int{1,2,3}
    slice2 := make([]int,2)
    copy(slice2, slice1)
    fmt.Println(slice1, slice2)
}

Output: slice1 = [1,2,3]
            slice2 = [1,2]
```
**Maps** is an unordered collection of key-value pair
_(technically overwhelming i still haven't get the hang of it)_
...perharps this should have me on a firm grip

```go
package main

import "fmt"

func main() {
  x := []int{
    42,96,86,68,
    57,82,63,70,
    37,34,83,27,
    19,97,9,17,
  }

  smallest := x[0]

  for _, value := range x {
    if value < smallest {
      smallest = value
    }
  }
  fmt.Println("The smallest value is",smallest)
}
```