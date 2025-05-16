---
title: "Reverse proxy; as load balancer"
date: "2024"
summary: "A deep dive into building a reverse proxy load balancer using Golang, exploring concepts of proxies, reverse proxies, and load balancing."
---

## Proxy

Let's start by exploring what **proxy** is; an infra that makes a request on behalf of a client(machine)

**For Context**
when you want to visit **www.google.com**, a proxy can be set up to handle
sending the request on your behalf. As far as **google.com** is concerned the
proxy is the client
_This does not expose the actual client to the server(Anonymous)_,
Its use case is generally for security purposes(blacklisting certain websites)
but also can be used for Logging & Caching is also a thing

![proxy](../dev/proxy.png)

## Reverse Proxy

With **Reverse proxy**, which is the inverse(opposite) of proxy
where the client doesn't know the final destination of the request, this might
be confusing

**For Context**
from the example given above with **google.com** in the case of
reverse proxy the request sent from the client is handled by the reverse proxy
which will then direct the client request to another server(something like redirection)
which is unknown to the client though
And one of its uses case is Load balancing

![reverse proxy](../dev/reverse-proxy.jpg)

## Load Balancer

A load balancer is used to distribute a set of tasks over a set of resources
to make the overall processing more efficient
Load balancing can optimize the response time to avoid overloading nodes while
other nodes are left idle.
There are types of load balancers that I'm not going to dive more into,
the main reason here is **using Golang to build a Reverse proxy as a load balancer**

**Let's explore and take a look at this chunk bit by bit by building a reverse proxy first.**

```go
package main

import (
  "log"
  "net/http"
  "net/http/httputil"
  "net/url"
)

func NewProxy(targetHost string) (*httputil.ReverseProxy, error) {
  url, err := url.Parse(targetHost)
  if err != nil {
    return nil, err
  }
  return httputil.NewSingleHostReverseProxy(url), nil
}

func ProxyRequestHandler(proxy *httputil.ReverseProxy) func(htt.ResponseWriter, *http.Request) {
  return func(w http.ResponseWriter, r *http.Request) {
    proxy.ServeHTTP(w,r)
  }
}

func main()  {
  proxy, err := NewProxy("http://127.0.0.1:5000")
  if err != nil {
    panic(err)
  }

  http.HandleFunc("/", ProxyRequestHandler(proxy))
  log.Fatal(http.ListenAndServe(":8080", nil))
}
```

This block of code is a reverse proxy server that listen on port 8080
and forwards this to `port:5000` 